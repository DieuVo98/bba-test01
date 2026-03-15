- **Git** là hệ thống quản lý phiên bản (Version Control System) giúp theo dõi thay đổi của code và làm việc nhóm hiệu quả.
- Quy trình làm việc cơ bản của Git:
  - Working Directory → Staging → Repository
- Một số lệnh Git cơ bản:
  - Khởi tạo repository:
    ```bash
    git init
    ```
  - Kiểm tra trạng thái repository:
    ```bash
    git status
    ```
  - Thêm file vào staging:
    ```bash
    git add .
    ```
  - Commit thay đổi:
    ```bash
    git commit -m "message"
    ```
  - Đưa code lên GitHub:
    ```bash
    git push
    ```

---

## 2. JavaScript Basic

- **JavaScript** là ngôn ngữ lập trình được sử dụng phổ biến để phát triển web và viết automation test.

### Chương trình đầu tiên: Hello World
```javascript
console.log("Hello World");
```

Chạy file
```bash
node <tên file>
```

### Comment trong code

Comment dùng để ghi chú hoặc giải thích code, giúp code dễ hiểu hơn.

**Comment 1 dòng:**
```javascript
// Đây là comment 1 dòng
console.log("Hello World");
```

**Comment nhiều dòng:**
```javascript
/*
Đây là comment
nhiều dòng
*/
console.log("Hello World");
```

### Một số khái niệm cơ bản

- **Variable (biến)**: dùng để lưu trữ dữ liệu.

**Khai báo biến:**
```javascript
let name = "John";
const age = 25;
```

### Kiểu dữ liệu (Data types)

Một số kiểu dữ liệu cơ bản trong JavaScript:
- **number**: số  
- **boolean**: đúng / sai (`true`, `false`)  
- **string**: chuỗi ký tự

Ví dụ:
```javascript
let age = 25;        // number
let isActive = true; // boolean
let name = "John";   // string
```
### typeof

`typeof` dùng để kiểm tra **kiểu dữ liệu của một biến**.

```javascript
let age = 25;
let name = "John";
let isActive = true;

console.log(typeof age);      // number
console.log(typeof name);     // string
console.log(typeof isActive); // boolean
```

### Sự khác nhau giữa `let` và `const`

- **let**: có thể thay đổi giá trị.
```javascript
let age = 20;
age = 25;
```

- **const**: không thể gán lại giá trị sau khi khai báo.
```javascript
const age = 20;
// age = 25 → lỗi
```

### Các toán tử (Operators)

**1. Toán tử so sánh**
```javascript
let a = 10;
let b = 5;

console.log(a > b);  // lớn hơn
console.log(a < b);  // nhỏ hơn
console.log(a == b); // bằng
console.log(a != b); // khác
```

**2. Toán tử logic**
```javascript
let a = true;
let b = false;

console.log(a && b); // AND
console.log(a || b); // OR

```
**3. Toán tử một ngôi**
Toán tử một ngôi là toán tử chỉ tác động lên một toán hạng

### Prefix

- `++x`: tăng giá trị trước, sau đó mới sử dụng giá trị.
- `--x`: giảm giá trị trước, sau đó mới sử dụng giá trị.

### Postfix

- `x++`: trả về giá trị hiện tại trước, sau đó mới tăng.
- `x--`: trả về giá trị hiện tại trước, sau đó mới giảm.

💡**4. Toán tử toán học**
```javascript
let a = 10;
let b = 5;

console.log(a + b); // cộng
console.log(a - b); // trừ
console.log(a * b); // nhân
console.log(a / b); // chia
console.log(a % b); // chia dư
```