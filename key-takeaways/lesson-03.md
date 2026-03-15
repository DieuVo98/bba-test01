# 1. Git
## Undo action
- **Undo commit message**
```bash
 git commit --amend -m ”<message mới>”
 ```

- **Un-stage (Staging → Working Directory)**
Un-stage một file cụ thể: 
```bash
git restore --staged <file>
``

Un-stage tất cả các file: 
```bash
git restore --staged .
```
 *(Lưu ý dấu chấm ở cuối)*
    
- **Un-commit (Repository → Staging)**
```bash
 git reset --soft HEAD~1
```

- **Un-commit (Repository → Working Directory)**
```bash
git reset HEAD~1
```
## Branching
Branching là việc tạo ra một nhánh (**branch**) riêng để phát triển tính năng hoặc sửa lỗi mà không ảnh hưởng đến code chính.

## Kiểm tra trạng thái hiện tại của repository Git
```bash
git status
```
---

# 2. JavaScript
## Câu điều kiện: `if`
**Cú pháp**
```javascript
if (<điều kiện>) {
// code...
}
```

## Vòng lặp: `for`
**Cú pháp**
```javascript
for (<điều kiện khởi tạo>; <điều kiện lặp>; <cập nhật>) {
// code
}
```