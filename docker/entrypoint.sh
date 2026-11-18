#!/bin/sh
set -e

php artisan package:discover --ansi
php artisan migrate --force || true
php artisan storage:link 2>/dev/null || true
php artisan config:cache

exec "$@"
