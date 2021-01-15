import type { UserConfig } from 'vite'
import PurgeIcons from 'vite-plugin-purge-icons'
import { resolve } from 'path'
import vue from '@vitejs/plugin-vue'
import vueJSx from '@vitejs/plugin-vue-jsx'
const pathResolve = (dir: string) => resolve(__dirname, '.', dir)

const viteConfig: UserConfig = {
    // the key **must start and end with a slash**
    alias: {
        '/@': pathResolve('./src')
    },
    // proxy: {
    //     // string shorthand
    //     '/foo': 'http://localhost:4567/foo'
    //     // with options
    //     // '/api': {
    //     //     target: 'http://jsonplaceholder.typicode.com',
    //     //     changeOrigin: true,
    //     //     rewrite: (path) => path.replace(/^\/api/, '')
    //     // }
    // },
    // The package will be recompiled using rollup, and the new package compiled into the esm module specification will be put into node_modules/.vite_opt_cache
    // fix the problem when import ant-design icons don't works
    css: {
        preprocessorOptions: {
            less: {
                // modifyVars: {
                //   // reference:  Avoid repeated references
                //   hack: `true; @import (reference) "${resolve('src/design/config.less')}";`,
                //   ...modifyVars,
                // },
                javascriptEnabled: true
            }
        }
    },
    optimizeDeps: {
        include: ['@ant-design/icons-vue', 'ant-design-vue/es/locale/zh_CN', 'ant-design-vue/es/locale/en_US']
    },
    plugins: [vue(), vueJSx(), PurgeIcons()]
}

export default viteConfig
