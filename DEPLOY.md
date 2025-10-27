# Hướng dẫn deploy Lovenote

## 1. Deploy Frontend lên Vercel

### Bước 1: Đăng nhập hoặc đăng ký tài khoản Vercel
- Truy cập https://vercel.com/
- Đăng nhập bằng GitHub và cấp quyền truy cập repo `lovenote`

### Bước 2: Tạo project mới
- Chọn **Add New Project**
- Chọn repo `lovenote` và nhấn **Import**
- Chọn thư mục `frontend` làm root directory (Project Root: `frontend`)
- Thiết lập biến môi trường (Environment Variables):
  - `NEXT_PUBLIC_SERVER_DOMAIN=https://<your-backend-domain>`
- Nhấn **Deploy**

### Bước 3: Cấu hình domain (nếu có)
- Thêm domain riêng nếu muốn (ví dụ: nam-linh.lovenote.com)

---

## 2. Deploy Backend lên Render

### Bước 1: Đăng nhập hoặc đăng ký tài khoản Render
- Truy cập https://render.com/
- Đăng nhập bằng GitHub và cấp quyền truy cập repo `lovenote`

### Bước 2: Tạo dịch vụ Web Service mới
- Chọn **New Web Service**
- Kết nối với repo `lovenote`
- Chọn thư mục root là `backend`
- Thiết lập build & start command:
  - Build Command: `yarn` hoặc `npm install`
  - Start Command: `node server.js`
- Thiết lập biến môi trường (Environment Variables):
  - `MONGO_URI=<chuỗi kết nối MongoDB>`
  - `PORT=8081` (hoặc port Render cung cấp)
- Nhấn **Create Web Service**

### Bước 3: Lấy domain backend
- Sau khi deploy xong, Render sẽ cung cấp một domain dạng `https://<your-backend>.onrender.com`
- Sử dụng domain này cho biến `NEXT_PUBLIC_SERVER_DOMAIN` ở frontend

---

## 3. Lưu ý
- Không commit file `.env` lên git.
- Nếu muốn mỗi cặp đôi có subdomain riêng, cấu hình domain trên Vercel.
- Đảm bảo backend cho phép CORS từ domain frontend.

---

Nếu gặp lỗi, kiểm tra lại biến môi trường và log trên Vercel/Render.
