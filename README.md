# 🍽️✈️ Food & Travel Blog Website

A full-stack blog website where users can browse, add, edit, and delete blog posts related to food and travel. Built using **React.js** (Frontend), **Express.js** and **SQLite** (Backend), with fully responsive design and RESTful API integration.

---

## 🚀 Features

### ✅ Frontend (React.js)
- Beautiful responsive UI with gradient hero section and post cards
- Post filtering by category (Food, Travel)
- Tag-based search functionality
- Add/Edit Post forms with validation, calendar input, and success popup
- Navigation between Home, Posts, Add/Edit, About, and Contact pages

### ✅ Backend (Node.js + Express.js + SQLite)
- REST API with full CRUD operations
- SQLite database (`blogs.db`) to store blog posts
- JSON-based communication with frontend
- Deployed on Render

---

## 🛠️ Tech Stack

| Layer      | Technology              |
|------------|--------------------------|
| Frontend   | React.js, React Router   |
| Backend    | Node.js, Express.js      |
| Database   | SQLite                   |
| Styling    | CSS, Flexbox             |
| Deployment | Render, vercel                  |

---

## 📁 Folder Structure

```bash
BlogsApp/
├── client/             # React frontend
│   ├── public/
│   ├── src/
│   │   ├── components/  # Reusable components (Navbar, Footer, PostCard)
│   │   ├── pages/       # Pages (Home, Posts, AddEditPost, About, Contact)
│   │   ├── App.js
│   │   └── index.js
│   └── package.json
├── server/             # Express backend
│   ├── blogs.db        # SQLite database file
│   ├── app.js          # Main server file
│   ├── package.json
├── .gitignore
└── README.md

##  Live URLs
| Type                    | URL                                                                                            |
| ----------------------- | ---------------------------------------------------------------------------------------------- |
| 🔗 Backend API          |	https://blogs-backend-smx4.onrender.com/posts |
| 🔗 Frontend (if hosted) | https://blogs-app-vert-delta.vercel.app/                                                                            |

##  API Endpoints
Get All Posts ---- GET /posts/
Get Single Post ---- GET /posts/:id/
Add New Post ---- POST /posts/
Content-Type: application/json

{
  "title": "Blog Title",
  "category": "Food",
  "description": "Blog content...",
  "author": "Author Name",
  "date": "YYYY-MM-DD",
  "tags": "tag1, tag2",
  "image": "https://example.com/image.jpg"
}
Update Post ----- PUT /posts/:id/
Delete Post ---- DELETE /posts/:id/

##  Local Development Setup
1. Clone the repository

git clone https://github.com/your-username/blogs-website.git
cd BlogsApp
2. Backend Setup

cd server
npm install
node app.js
3. Frontend Setup

cd client
npm install
npm start

 ##  Deployment
Backend on Render
Push your backend code to GitHub.

Create a new Render web service.

Use build command:


npm rebuild sqlite3 --build-from-source
Add start command as:


node app.js
Make sure blogs.db is committed or seeded.
