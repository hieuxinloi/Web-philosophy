# Trang web về Lợi ích kinh tế và Quan hệ lợi ích kinh tế ở Việt Nam

Trang web giáo dục về Chương 5 - Mục 5.3: Lợi ích kinh tế và Quan hệ lợi ích kinh tế ở Việt Nam, được xây dựng với Next.js, TypeScript và Tailwind CSS.

## Đặc điểm

- 🎨 **Dark Theme**: Giao diện tối với màu vàng kim làm điểm nhấn
- 📱 **Responsive**: Tương thích với mọi kích thước màn hình
- ⚡ **Hiệu suất cao**: Sử dụng Next.js 16 với App Router
- 🎯 **Tương tác**: Quiz trắc nghiệm và các components tương tác
- 📚 **Nội dung phong phú**: Bao gồm tất cả các phần theo yêu cầu

## Cấu trúc nội dung

1. **Trang chủ**: Giới thiệu và navigation
2. **Phần 1 - Lợi ích kinh tế (5.3.1.1)**
   - A. Khái niệm
   - B. Bản chất và Biểu hiện
   - C. Vai trò của LIKT

3. **Phần 2 - Quan hệ lợi ích kinh tế (5.3.1.2)**
   - A. Khái niệm
   - B. Sự thống nhất và mâu thuẫn
   - C. Một số quan hệ LIKT cơ bản
   - D. Nhân tố ảnh hưởng
   - E. Phương thức thực hiện LIKT

4. **Phần 3 - Vai trò của Nhà nước (5.3.2)**
   - 1. Bảo vệ lợi ích hợp pháp
   - 2. Điều hòa lợi ích KT-XH
   - 3. Kiểm soát quan hệ lợi ích tiêu cực
   - 4. Giải quyết mâu thuẫn

5. **Tổng kết & Tương tác**
   - Bảng tổng hợp
   - Quiz trắc nghiệm
   - Tài liệu tham khảo

## Cài đặt và chạy

```bash
# Cài đặt dependencies
npm install

# Chạy development server
npm run dev

# Build cho production
npm run build

# Chạy production server
npm start
```

Mở [http://localhost:3000](http://localhost:3000) để xem kết quả.

## Công nghệ sử dụng

- **Next.js 16**: Framework React với App Router
- **TypeScript**: Type safety
- **Tailwind CSS 4**: Styling
- **React 19**: UI library

## Cấu trúc thư mục

```
project/
├── app/
│   ├── layout.tsx       # Root layout
│   ├── page.tsx         # Trang chủ
│   └── globals.css      # Global styles và theme
├── components/
│   ├── Header.tsx       # Navigation header
│   ├── Footer.tsx       # Footer
│   ├── Section.tsx      # Section wrapper
│   ├── Card.tsx         # Card component
│   ├── Button.tsx       # Button component
│   ├── Accordion.tsx    # Accordion component
│   ├── HeroSection.tsx  # Trang chủ hero section
│   ├── Phan1_LoiIch.tsx # Phần 1
│   ├── Phan2_QuanHe.tsx # Phần 2
│   ├── Phan3_NhaNuoc.tsx # Phần 3
│   └── TongKet.tsx      # Tổng kết
└── public/              # Static files
```

## Tùy chỉnh

### Màu sắc

Màu sắc được định nghĩa trong `app/globals.css`:
- `--background`: #1a1a1a (nền đen)
- `--foreground`: #ffffff (chữ trắng)
- `--gold`: #ffd700 (vàng kim)

### Font chữ

Font chữ được cấu hình trong `app/layout.tsx`:
- Inter (chính)
- Open Sans (phụ)

## Triển khai lên Vercel

Dự án này đã được cấu hình sẵn để deploy lên Vercel. Có 2 cách để deploy:

### Cách 1: Deploy qua Vercel CLI (Khuyến nghị)

1. **Cài đặt Vercel CLI:**
   ```bash
   npm i -g vercel
   ```

2. **Đăng nhập vào Vercel:**
   ```bash
   vercel login
   ```

3. **Deploy dự án:**
   ```bash
   cd project
   vercel
   ```
   
   Hoặc từ thư mục project:
   ```bash
   vercel
   ```

4. **Deploy lên production:**
   ```bash
   vercel --prod
   ```

### Cách 2: Deploy qua Vercel Dashboard (Git Integration)

1. **Đẩy code lên GitHub/GitLab/Bitbucket:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin <your-repo-url>
   git push -u origin main
   ```

2. **Kết nối với Vercel:**
   - Truy cập [vercel.com](https://vercel.com)
   - Đăng nhập và chọn "Add New Project"
   - Import repository từ GitHub/GitLab/Bitbucket
   - **Quan trọng**: Vì dự án nằm trong thư mục `project`, bạn cần:
     - Chọn "Root Directory" và set thành `project`
     - Hoặc deploy từ thư mục `project` riêng lẻ
   - Vercel sẽ tự động phát hiện Next.js và cấu hình
   - Click "Deploy"

3. **Tự động deploy:**
   - Mỗi lần push code lên main branch, Vercel sẽ tự động deploy

### Lưu ý

- File `vercel.json` đã được tạo sẵn trong thư mục project
- Vercel tự động phát hiện Next.js và cấu hình build settings
- Nếu deploy từ root directory, nhớ set Root Directory trong Vercel Dashboard thành `project`

## License

Dự án giáo dục - Sử dụng cho mục đích học tập và nghiên cứu.