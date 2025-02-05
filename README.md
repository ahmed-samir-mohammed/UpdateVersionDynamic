# 🚀 Versioning Script for Angular Build

This script appends a version query parameter (`?v=<version>`) to **CSS, JS, and i18n JSON files** in an Angular build. This helps prevent caching issues by ensuring the latest files are always loaded.

---

## 📌 Features
- ✅ Automatically appends `?v=<version>` to:
  - CSS files (`.css`)
  - JavaScript files (`.js`)
  - i18n JSON files inside `main.js`
- ✅ Prevents browser caching issues.
- ✅ Simple and lightweight, runs after `ng build`.

---

## 📂 Project Structure
```
your-project/
│-- dist/
│   ├── index.html
│   ├── main.abcdef123456.js
│   ├── assets/
│   │   ├── i18n/
│   │   │   ├── en.json
│   │   │   ├── ar.json
│-- update-version.js
│-- package.json
```

---

## 📖 Usage

### 1️⃣ Install Node.js
Ensure **Node.js** is installed on your system.

### 2️⃣ Add the Script
Create a file **`update-version.js`** in the project root.

### 3️⃣ Set the Build Output Path
Replace `<dist-path>` with the actual path to your Angular build output directory:

```javascript
const distPath = "<dist-path>";  // Replace <dist-path> with your build output path
```

### 4️⃣ Run the Script

#### 🔹 Option 1: Run Manually
After building your Angular project, execute the following command:
```sh
node update-version.js --v=1.2.3
```
This will update **index.html** and **main.js** to include `?v=1.2.3` for all static assets.

#### 🔹 Option 2: Automate in `package.json`
Modify `package.json` to run the script automatically after `ng build`:

```json
"scripts": {
  "build": "ng build --configuration=production && node update-version.js --v=1.2.3"
}
```

Then, simply run:
```sh
npm run build
```

---

## ✅ Example Output
```
✅ index.html Done
✅ main.js Done
🎉 Done! (Version: 1.2.3)
```

---

## 🚀 Why Use This?
✔ **Prevents caching issues** – Ensures users always load the latest assets.   

---

## 📜 License
This script is free to use and modify.

---

🎯 **Now, your Angular assets will load fresh every time, ensuring no cache issues!** 🚀
