import { defineConfig, UserConfig, ConfigEnv } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }: ConfigEnv): UserConfig => {
  if (command === 'serve') {
    return {
      // dev 独有配置
      plugins: [vue()]
    }
  } else {
    return {
      // build 独有配置
    }
  }
})
