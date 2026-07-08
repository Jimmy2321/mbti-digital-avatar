import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/mbti-digital-avatar/', // GitHub Pages 需要相对路径
  server: {
    host: '0.0.0.0', // 监听所有网络接口，允许外部访问
    port: 5173,      // 指定端口
    strictPort: false, // 如果端口被占用，自动尝试下一个端口
  },
})
