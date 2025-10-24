import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',   // 'localhost' | '127.0.0.1' | '0.0.0.0' | 'my.local'
    port: 3000,        // đổi cổng tại đây (mặc định 5173)
    strictPort: true,  // nếu 3000 bận thì báo lỗi, không tự đổi
    open: true,        // tự mở trình duyệt
    // Nếu dùng domain tự đặt + HTTPS, bật phần này:
    // https: {
    //   key: fs.readFileSync('certs/key.pem'),
    //   cert: fs.readFileSync('certs/cert.pem'),
    // },
    // Nếu cần chỉnh HMR khi qua proxy/ngrok:
    // hmr: { host: 'my.local', protocol: 'ws', port: 3000 },
  },
  // Khi chạy `vite preview` (xem bản build):
  preview: {
    host: 'my.local',
    port: 4173,
  },
  // Nếu cần đổi base path khi deploy (khác với host):
  // base: '/subpath/',
})
