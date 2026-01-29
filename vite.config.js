import { defineConfig } from 'vite'
import { resolve } from 'path'
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';

export default defineConfig({
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                gallery: resolve(__dirname, 'gallery.html'),
                work: resolve(__dirname, 'work.html')
            },
        },
    },
    plugins: [
        ViteImageOptimizer({
            webp: {
                quality: 70
            },
            jpeg: {
                quality: 75
            },
            jpg: {
                quality: 75
            }
        })
    ]
})
