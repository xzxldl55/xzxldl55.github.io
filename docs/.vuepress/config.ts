import { defineConfig } from 'vuepress/config';

export default defineConfig({
    title: '高产似母🐷的博客',
    description: '啊～ 我要高产似母猪🐷',
    configureWebpack: {
        resolve: {

        }
    },
    markdown: {
        lineNumbers: true
    },
    plugins: {
        '@vuepress/pwa': {
            serviceWorker: true
        }
    }
});