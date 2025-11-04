# Hướng dẫn thêm ảnh cho dẫn chứng và ví dụ

## Các ảnh cần thiết

Để hiển thị đầy đủ ảnh minh họa cho phần "Lợi ích kinh tế", bạn cần thêm 3 ảnh sau vào thư mục này:

### 1. `doanh-nghiep.jpg`
- **Mô tả**: Ảnh về doanh nghiệp công nghệ Việt Nam (Vingroup, FPT, Thaco)
- **Nội dung**: Có thể là ảnh về:
  - Tòa nhà văn phòng công ty công nghệ
  - Nhà máy sản xuất ô tô điện
  - Phát triển AI/CNTT
  - Hội nghị công nghệ
- **Kích thước đề xuất**: 800x600px hoặc lớn hơn
- **Gợi ý tìm kiếm**: 
  - Unsplash: "vietnam technology company", "modern office building", "electric car manufacturing"
  - Google Images: "Vingroup", "FPT", "công ty công nghệ Việt Nam"

### 2. `lao-dong-cong-nghe.jpg`
- **Mô tả**: Ảnh về nhân viên công ty công nghệ làm việc
- **Nội dung**: Có thể là ảnh về:
  - Nhân viên làm việc tại văn phòng hiện đại
  - Làm việc nhóm
  - Lập trình viên đang code
  - Môi trường làm việc sáng tạo
- **Kích thước đề xuất**: 800x600px hoặc lớn hơn
- **Gợi ý tìm kiếm**:
  - Unsplash: "tech team working", "modern office", "software developers"
  - Pexels: "business team", "office workers", "technology workplace"

### 3. `loi-ich-khac.jpg`
- **Mô tả**: Ảnh về các hoạt động văn hóa, giáo dục, từ thiện
- **Nội dung**: Có thể là ảnh về:
  - Học tập, đọc sách
  - Tham gia hoạt động từ thiện
  - Tham gia hoạt động cộng đồng
  - Phát triển bản thân
- **Kích thước đề xuất**: 800x600px hoặc lớn hơn
- **Gợi ý tìm kiếm**:
  - Unsplash: "education", "learning", "charity", "community service"
  - Pexels: "study", "volunteering", "social activities"

## Cách thêm ảnh

### Cách 1: Sử dụng ảnh từ Unsplash (Khuyến nghị)

1. Truy cập [Unsplash.com](https://unsplash.com)
2. Tìm kiếm ảnh phù hợp với từ khóa gợi ý ở trên
3. Tải ảnh về máy (chọn kích thước phù hợp)
4. Đổi tên file theo tên đã chỉ định ở trên
5. Copy vào thư mục `project/public/images/`

### Cách 2: Sử dụng ảnh từ Pexels

1. Truy cập [Pexels.com](https://pexels.com)
2. Tìm kiếm và tải ảnh miễn phí
3. Đổi tên và copy vào thư mục `project/public/images/`

### Cách 3: Sử dụng ảnh của bạn

1. Chụp hoặc tìm ảnh phù hợp trong thư viện của bạn
2. Chỉnh sửa kích thước nếu cần (khuyến nghị: 800x600px)
3. Copy vào thư mục `project/public/images/`

## Lưu ý về bản quyền

- **Unsplash**: Tất cả ảnh miễn phí, không cần ghi nguồn (nhưng nên ghi nếu có thể)
- **Pexels**: Tất cả ảnh miễn phí, không cần ghi nguồn
- Nếu sử dụng ảnh từ nguồn khác, đảm bảo có quyền sử dụng hoặc ghi rõ nguồn

## Sử dụng Unsplash URL trực tiếp (Tùy chọn)

Nếu không muốn tải ảnh về, bạn có thể sử dụng URL trực tiếp từ Unsplash. 
Mở file `Phan1_LoiIch.tsx` và uncomment (bỏ dấu `/* */`) các dòng Unsplash, 
đồng thời comment các dòng sử dụng ảnh local.

Ví dụ:
```tsx
{/* Comment dòng này */}
<ExampleImage
  src="/images/doanh-nghiep.jpg"
  ...
/>

{/* Uncomment dòng này */}
<ExampleImage
  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80"
  alt="Doanh nghiệp công nghệ"
  caption="Đầu tư và đổi mới công nghệ"
/>
```

