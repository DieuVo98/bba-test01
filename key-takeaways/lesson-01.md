## 1. Cài đặt VSCode, kết nối GitHub
- VS Code là công cụ để viết code
- Kết nối với GitHub: push code từ git local computer lên GitHub online thông qua xác thực SSH keys

## 2. Tìm hiểu Playwright và so sánh với các công cụ khác
- Playwright là công cụ automation testing cho web
- Hỗ trợ nhiều browser: Chronium, Firefox, WebKit
- Có thể viết test bằng JavaScript, TypeScript, Python, Java, .NET
- So với các công cụ khác:
    - Selenium: phổ biến nhưng cấu hình phức tạp
    - Cypress: dễ dùng nhưng hỗ trợ browser hạn chế hơn
    - Playwright: chạy nhanh, ổn định và hỗ trợ multi-browser tốt
    
## 3. Cài đặt Playwright và chạy test Playwright đầu tiên
- Khởi tạo project Playwright bằng lệnh:
```bash
npm init playwright@latest
```

## 4. Đưa code lên GitHub
- Khởi tạo repository local:
```bash
git init
```

- Tạo repository trên GitHub và liên kết với repo local:
```bash
git remote add origin <url>
```

- Thêm file vào staging:
```bash
git add .
```

- Commit file:
```bash
git commit -m "message"
```

- Push code lên GitHub:
```bash
git push origin main
```