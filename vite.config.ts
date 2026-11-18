import { defineConfig, loadEnv } from 'vite';
import laravel from 'laravel-vite-plugin';
import { bunny } from 'laravel-vite-plugin/fonts';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, process.cwd(), '');
    const serverHost = env.VITE_SERVER_HOST || process.env.VITE_SERVER_HOST;
    const hmrHost = env.VITE_HMR_HOST || process.env.VITE_HMR_HOST;

    return {
        plugins: [
            laravel({
                input: ['resources/css/app.css', 'resources/js/app.tsx'],
                refresh: true,
                fonts: [bunny('Instrument Sans', { weights: [400, 500, 600, 700] })],
            }),
            tailwindcss(),
        ],
        server: {
            host: serverHost || undefined,
            cors: { origin: true },
            hmr: hmrHost ? { host: hmrHost, protocol: 'ws' } : undefined,
            watch: {
                ignored: ['**/storage/framework/views/**'],
            },
        },
    };
});
