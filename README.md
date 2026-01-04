# 📘 ScriBBler – Blogging Website (Frontend Project)

ScriBBler is a simple blogging website built using **HTML, CSS, and JavaScript**.
This project focuses on clean UI design, modal-based interactions, and page navigation without using any external frameworks.

---

## 🚀 Features

### 🏠 Home Page

* Website title **ScriBBler** with tagline *Explore, Imagine, Create*
* **Sign Up** and **Sign In** buttons in the header
* Centered buttons:

  * **All Posts** → navigates to Posts List page
  * **Create Post** → opens a modal
* Background image fixed and responsive

---

### 🔐 Authentication Modals

* **Sign Up Modal**

  * Name, Username, Password, Confirm Password
  * Mandatory fields with browser validation
* **Sign In Modal**

  * Username and Password
  * Link to switch to Sign Up modal
* Modals:

  * Open without page reload
  * Close using ❌ icon
  * Properly centered and responsive

---

### 📝 Create Post Modal

* Fixed-size modal (acts like a webpage)
* Title input
* Resizable content textarea (resizes inside modal only)
* Scrollbar appears if content overflows
* Centered **Create** button

---

### 📄 Posts List Page

* Displays posts as **cards**
* Exactly **two posts per row** (responsive)
* Hover effect with box shadow
* Shows:

  * Author name
  * Post title
  * **Only first 3 lines** of post content
* Icons:

  * 🗑️ Delete post (with confirmation modal)
  * ⋯ View full post

---

### 📖 Post Page

* Displays full post content
* Author name (left)
* Edit / Save functionality
* Like button with dynamic counter
* Comment section:

  * Add comments
  * New comments appear at the top

---

## 📁 Project Structure

```
ScriBBler/
│
├── index.html
├── html/
│   ├── postslist.html
│   └── post.html
│
├── styles/
│   ├── common.css
│   ├── index.css
│   ├── postslist.css
│   └── post.css
│
├── scripts/
│   ├── common.js
│   ├── index.js
│   ├── postslist.js
│   └── post.js
│
├── images/
│   └── background.jpg
│
└── README.md
```

---

## 🛠️ Technologies Used

* **HTML5** – Structure
* **CSS3** – Styling & layout
* **JavaScript (Vanilla)** – Interactivity
* **Font Awesome** – Icons
* **Google Fonts** – Typography

---

## ✅ Key Technical Highlights

* Strict separation of HTML, CSS, and JavaScript
* Reusable header across pages
* Modal handling using class toggling (`show`)
* No page reloads for modals
* Prevented default form submission behavior
* DOM-safe event handling using `DOMContentLoaded`
* Responsive design without frameworks

---

## ▶️ How to Run the Project

1. Clone or download the repository
2. Open `index.html` in a browser
3. Navigate using buttons and modals

> No server or build step required

---

## 📌 Notes

* This project is frontend-only
* No backend or database is used
* Posts are static and handled on the client side
* Designed according to assignment specifications

---

## 👤 Author

Developed by **Ayush Kumar** as part of a frontend web development assignment using pure HTML, CSS, and JavaScript.

---
