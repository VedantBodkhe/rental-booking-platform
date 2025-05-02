
---

```markdown
<h1 align="center">🌍 Wanderlust</h1>

<p align="center">
  ✈️ A beautiful travel listing web application built using <strong>Node.js</strong>, <strong>Express.js</strong>, <strong>MongoDB</strong>, and <strong>EJS</strong>.
  <br />
  <em>A place to explore, list, and discover dream destinations.</em>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Node.js-Express-green?style=flat-square&logo=node.js" />
  <img src="https://img.shields.io/badge/MongoDB-Mongoose-brightgreen?style=flat-square&logo=mongodb" />
  <img src="https://img.shields.io/badge/View%20Engine-EJS-yellow?style=flat-square" />
  <img src="https://img.shields.io/badge/Made%20With-Love-red?style=flat-square" />
</p>

---

## ✨ Features

- 🗺️ Browse all travel destination listings
- 📦 MongoDB integration with Mongoose
- 🧱 MVC architecture for clean code structure
- 🖼️ EJS templating for dynamic views
- 🔄 RESTful routing using `method-override`
- 🎨 Static asset handling (CSS, images)

---

## 🧱 Tech Stack

| Layer      | Technology         |
|------------|--------------------|
| Backend    | Node.js, Express.js |
| Database   | MongoDB (via Mongoose) |
| Templating | EJS |
| Utilities  | method-override, dotenv, path |

---

## 📁 Folder Structure

```

wanderlust/
│
├── model/
│   └── listing.js         # Mongoose schema
│
├── views/
│   └── listing/
│       └── index.ejs      # EJS template
│
├── public/                # Static assets
│
├── app.js                 # Main application file
├── package.json

````

---

## ⚙️ Getting Started

### 🔧 Prerequisites

- ✅ Node.js installed
- ✅ MongoDB installed & running locally

### 🛠️ Installation

```bash
git clone https://github.com/your-username/wanderlust.git
cd wanderlust
npm install
````

### 🚀 Run MongoDB

Make sure MongoDB is running:

```bash
mongod
```

### ▶️ Start the App

```bash
node app.js
```

Visit:

```
http://localhost:2210
```

---

## 🔗 Routes Overview

| Route       | Method | Description              |
| ----------- | ------ | ------------------------ |
| `/`         | GET    | Home test route          |
| `/listings` | GET    | View all travel listings |

---

## 🧪 Screenshots

> *You can add screenshots of the UI here for visual reference.*

---

## 🧰 Troubleshooting

* 💡 Ensure MongoDB is installed and running
* 💡 Check the MongoDB URL in `app.js`
* 💡 Make sure the `views/` and `public/` folders exist

---

## 📜 License

This project is open-source and available for learning and educational use.
Feel free to modify and build upon it!

---

<p align="center">
  ❤️ Made with love by <strong>Vedant</strong>
</p>
```
