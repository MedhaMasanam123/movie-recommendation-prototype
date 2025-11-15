🎬 Movie Recommendation App

A simple full-stack movie recommendation prototype built using React (Vite), Tailwind CSS, Node.js, Express, and a local JSON dataset.

🚀 Features

* 🎞️ Display movies from a JSON dataset
* 🎯 Filter movies by genre
* ⚡ Fast development with Vite
* 🎨 Styled using Tailwind CSS
* 🛠️ Backend REST API using Node.js + Express
* 🔄 Fetch movies from `http://localhost:3000/api/movies`
* 🌐 CORS enabled for frontend–backend communication

📁 Folder Structure

movie-recomm/
│
├── server/
│   └── index.js           # Express backend server
│
├── src/
│   ├── components/
│   │   ├── GenreSelector.jsx
│   │   └── MovieList.jsx
│   ├── data/
│   │   └── movies.json
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── public/
│── package.json
│── vite.config.js
│── README.md

🖥️ Frontend Setup (Vite + React)

1️⃣ Install dependencies

npm install

2️⃣ Run the frontend development server

npm run dev

Frontend will run at →
👉 **[http://localhost:5173](http://localhost:5173)**



🛠️ Backend Setup (Node + Express)

1️⃣ Move to the server folder

cd server

2️⃣ Install backend dependencies

npm install express cors

3️⃣ Run the server

node index.js

Backend will run at →
👉 **[http://localhost:3000](http://localhost:3000)**


🔌 API Endpoint

**GET /api/movies**

Returns all movies from `src/data/movies.json`.


🌟 Screenshots

🖼️ Home Page


## 📦 Technologies Used

* React (Vite)
* Tailwind CSS
* Node.js
* Express
* CORS
* JSON dataset


## ⚙️ Requirements

* Node.js 18+
* npm 8+

---

## 📝 How to Run the Full Project

### Start Backend

cd server
node index.js

### Start Frontend (in another terminal)

npm run dev

🧑‍💻 Developer

Medha Masanam
GitHub: [https://github.com/MedhaMasanam123](https://github.com/MedhaMasanam123)

⭐ Support

If you liked this project, please give it a **⭐ on GitHub**!
