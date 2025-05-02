Here's a clean, attractive, and beginner-friendly `README.md` file tailored for your Express-MongoDB project ("Wanderlust" app):

---

# 🌍 Wanderlust

A simple travel listing web app built using **Node.js**, **Express**, **MongoDB**, and **EJS** templating engine. This project demonstrates how to set up a basic CRUD app using MVC architecture and MongoDB for backend storage.

---

## 🚀 Features

* View all travel listings
* Organized project structure using MVC pattern
* EJS template rendering
* MongoDB integration using Mongoose
* RESTful routes with `method-override` for PUT/DELETE support

---

## 🧱 Tech Stack

* **Backend:** Node.js, Express.js
* **Database:** MongoDB (via Mongoose)
* **Templating Engine:** EJS
* **Others:** method-override, dotenv, path

---

## 📁 Project Structure

```
wanderlust/
│
├── model/
│   └── listing.js         # Mongoose schema for listings
│
├── views/
│   └── listing/
│       └── index.ejs      # View for displaying listings
│
├── public/                # Static files (CSS, images)
│
├── app.js                 # Main server file
├── package.json
```

---

## ⚙️ Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/wanderlust.git
cd wanderlust
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Start MongoDB

Make sure MongoDB is running locally on your machine.

```bash
mongod
```

### 4. Run the App

```bash
node app.js
```

App will be running at:

```
http://localhost:2210
```

---

## 🧪 Available Routes

| Route       | Method | Description            |
| ----------- | ------ | ---------------------- |
| `/`         | GET    | Home page (test route) |
| `/listings` | GET    | Display all listings   |

---

## ❗ Troubleshooting

* Make sure MongoDB is installed and running.
* Ensure your MongoDB URL in `app.js` is correct.
* Check that the `views/` and `public/` directories exist.

---

## 📸 Sample Screenshot (Optional)

*You can include a screenshot here of your listing page.*

---

## 📃 License

This project is for educational/demo purposes. Feel free to use it and build upon it!

