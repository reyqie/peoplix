FROM node:22-alpine AS assets
WORKDIR /app
COPY package*.json .npmrc ./
RUN npm ci
COPY resources ./resources
COPY public ./public
COPY vite.config.ts tsconfig.json ./
RUN npm run build

FROM composer:2 AS vendor
WORKDIR /app
COPY composer.json composer.lock ./
RUN composer install --no-dev --no-scripts --no-interaction --no-progress --prefer-dist
COPY app ./app
COPY database ./database
RUN composer dump-autoload --optimize --no-scripts

FROM php:8.3-fpm-alpine
RUN apk add --no-cache nginx supervisor icu-dev libzip-dev oniguruma-dev \
    && docker-php-ext-install pdo_mysql intl zip bcmath opcache

WORKDIR /var/www
COPY --from=vendor /app/vendor ./vendor
COPY . .
COPY --from=assets /app/public/build ./public/build

RUN mkdir -p storage/framework/sessions storage/framework/views storage/framework/cache storage/logs storage/app/public \
    && chown -R www-data:www-data storage bootstrap/cache

COPY docker/nginx.conf /etc/nginx/http.d/default.conf
COPY docker/supervisord.conf /etc/supervisor/conf.d/supervisord.conf
COPY docker/entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh

EXPOSE 80
ENTRYPOINT ["/entrypoint.sh"]
CMD ["/usr/bin/supervisord", "-c", "/etc/supervisor/conf.d/supervisord.conf"]
