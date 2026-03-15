# JavaScript (Advanced)

## 1. Object & Array

### Object
Object dùng để lưu trữ dữ liệu dạng **key - value**.

```javascript
const user = {
  name: "John",
  age: 25,
  isActive: true
};

console.log(user.name);
console.log(user["age"]);
```

Thêm hoặc cập nhật giá trị:

```javascript
user.city = "HCM";
user.age = 26;
```

### Array
Array là danh sách các phần tử.

```javascript
const fruits = ["apple", "banana", "orange"];

console.log(fruits[0]); // apple
```

Một số thao tác phổ biến:

```javascript
fruits.push("mango"); // thêm phần tử
fruits.pop(); // xóa phần tử cuối
```

---

## 2. Function

Function là khối code được định nghĩa để thực hiện một nhiệm vụ và có thể gọi lại nhiều lần.

```javascript
function greet(name) {
  console.log("Hello " + name);
}

greet("John");
```

Function có return:

```javascript
function sum(a, b) {
  return a + b;
}

const result = sum(2, 3);
console.log(result);
```

---

## 3. Phạm vi của biến (Scope)

Scope là phạm vi mà biến có thể được truy cập.

### Global scope

```javascript
let name = "John";

function showName() {
  console.log(name);
}
```

### Local scope

```javascript
function test() {
  let age = 25;
  console.log(age);
}
```

Biến `age` chỉ sử dụng được **bên trong function**.

---

## 4. break & continue

### break
Dùng để **thoát khỏi vòng lặp**.

```javascript
for (let i = 0; i < 10; i++) {
  if (i === 5) {
    break;
  }
  console.log(i);
}
```

### continue
Dùng để **bỏ qua lần lặp hiện tại**.

```javascript
for (let i = 0; i < 5; i++) {
  if (i === 2) {
    continue;
  }
  console.log(i);
}
```

---

## 5. Vòng lặp nâng cao

### for...in Loop

`for...in` dùng để lặp qua **các key (thuộc tính) của object**.

```javascript
const user = {
  name: "John",
  age: 25,
  city: "HCM"
};

for (let key in user) {
  console.log(key);        // name, age, city
  console.log(user[key]);  // John, 25, HCM
}
```

---

### forEach Method

`forEach()` là method của **array**, dùng để lặp qua từng phần tử trong mảng.

```javascript
const fruits = ["apple", "banana", "orange"];

fruits.forEach(function(fruit) {
  console.log(fruit);
});
```

Có thể viết ngắn gọn hơn:

```javascript
fruits.forEach((fruit) => {
  console.log(fruit);
});
```

# 6. Câu điều kiện nâng cao

### if...else...if

Dùng để **kiểm tra nhiều điều kiện theo thứ tự**.

```javascript
let score = 85;

if (score >= 90) {
  console.log("Xuất sắc");
} else if (score >= 80) {
  console.log("Giỏi");
} else if (score >= 70) {
  console.log("Khá");
} else if (score >= 60) {
  console.log("Trung bình");
} else {
  console.log("Yếu");
}
```

Chương trình sẽ kiểm tra các điều kiện **từ trên xuống dưới** và thực thi khối code của điều kiện đầu tiên đúng.

---

### Ternary operator (toán tử điều kiện)

Là cách viết **ngắn gọn cho `if...else` đơn giản**.

```javascript
let age = 18;

let result = age >= 18 ? "Adult" : "Minor";
console.log(result);
```

Tương đương với:

```javascript
if (age >= 18) {
  console.log("Adult");
} else {
  console.log("Minor");
}
```