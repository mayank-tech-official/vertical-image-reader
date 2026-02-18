# 📖✨ Vertical Image Reader
>A **simple, fast, mobile-friendly vertical image reader** for manga, comics, and book chapters.Built using pure **HTML + CSS + JavaScript** — no frameworks needed.

### 🚀 Features

* **📜 Smooth vertical scrolling**

* **🧩 Zero gap between images**

* **📱 Mobile + Desktop friendly**

* **🔢 Auto loads pages (001.webp → N)**

* **📊 Floating page counter**

* **📂 Reusable for unlimited chapters**

* **⚡ Lightweight — single file reader**

* **🌐 Works offline & on GitHub Pages**

### 📂 Project Structure

Organize your files like this:
```txt
project/
│
├── reader.html
│
├── Chapter59/
│   ├── 001.webp
│   ├── 002.webp
│   ├── 003.webp
│   └── ...
│
├── Chapter60/
│   ├── 001.webp
│   ├── 002.webp
│   └── ...
```

## 🖼 Image Naming Rule (IMPORTANT)

Images **must** be in 3-digit format:

✅ Correct

```txt
001.webp
002.webp
010.webp
105.webp
```
❌ Wrong

```txt
1.webp
2.webp
10.webp
```

## ⚙️ How To Use

### 1️⃣ Add your chapter folder

#### Example:
```txt
Chapter59/
   001.webp
   002.webp
```
## 2️⃣ Open `vertical-image-reader.html`
#### Inside the script, edit ONLY these two lines:
```java
const CHAPTER = null // Enter Your Folder Name;
const TOTAL_PAGES = null // Enter Your No Of Pages;
```

## 3️⃣ Change for another chapter

#### Example:
```javascript
const CHAPTER = "Chapter60";
const TOTAL_PAGES = 85;
```
#### Save → Run✅

## 💡 Tips

* 🟢 Use **WEBP images** for faster loading

* 🟢 Keep folder names simple (no spaces)

* 🟢 Works for **manga, comics, books, notes, PDFs converted to images**

* 🟢 Can host **unlimited chapters**

## 🛠 Tech Used

* **HTML5**

* **CSS3**

* **Vanilla JavaScript**

>No dependencies. No build tools. Just open and read.

## 📜 License

**Free to use, modify, and share** for learning or personal projects.

## ❗ Important

*  I cannot provide any images in this repository.
*  The viewer is designed to **fetch images automatically**.  
*  Please use your own image source or URLs.

## ❤️ Author

Made with passion for simple reading projects.If you like it, ⭐ star the repo!
