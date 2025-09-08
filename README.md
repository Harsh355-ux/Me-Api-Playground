# Profile Management App (MERN)

A simple MERN (MongoDB, Express, React, Node.js) project to manage user profiles with **skills, projects, and work experience**.  
Supports Create, Read, Update, Delete (CRUD) operations.  

---

## 🏗 Architecture

### Local Development
- **Frontend (React + Vite)** → runs at `http://localhost:5173`
- **Backend (Node.js + Express)** → runs at `http://localhost:5000`
- **Database** → MongoDB Atlas (cloud) or MongoDB Compass (local)


### Production (Render Deployment)
- **Frontend** hosted on **render** (build output `/dist`)
- **Backend** hosted on **Render** (Node.js web service)
- **Database** → MongoDB Atlas (always online, free tier cluster)
- 
---

## ⚙️ Setup

### 1. Clone repo
```bash
git clone https://github.com/yourusername/profile-app.git
cd profile-app
//**backend setup**//
cd backend
npm install
//create a .env file
PORT=5000
MONGO_URI=mongodb+srv://harshdixitbtechcs:<db_password>@cluster0.bl7e7vq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
npm run dev
// **frontend setup**//
cd frontend
npm install
npm run dev
//**schema profile**//
{
  "name": "Harsh Dixit",
  "email": "harsh@example.com",
  "skills": ["React", "Node.js", "MongoDB"],
  "projects": ["Fake News Detector", "Library Management System"],
  "workExperience": ["Software Intern at ABC", "Freelancer at XYZ"]
}
Open Postman → Import → Paste this JSON:
{
  "info": { "name": "Profile API Collection" },
  "item": [
    {
      "name": "Create Profile",
      "request": { "method": "POST", "url": "http://localhost:5000/api/profile" }
    },
    {
      "name": "Get Profile",
      "request": { "method": "GET", "url": "http://localhost:5000/api/profile" }
    },
    {
      "name": "Update Profile",
      "request": { "method": "PUT", "url": "http://localhost:5000/api/profile/:id" }
    },
    {
      "name": "Delete Profile",
      "request": { "method": "DELETE", "url": "http://localhost:5000/api/profile/:id" }
    }
  ]
}

// **Known Limitations** //

Only latest profile is fetched (findOne().sort({_id:-1})).

No authentication (anyone can CRUD data).

No file/image uploads (only text fields).

Limited validation (basic array conversion only).

Free-tier Render may sleep after inactivity (first request takes time).

// **Future Improvements** //

Add authentication (JWT or OAuth).

Support multiple users/profiles.

Add image/file upload (Cloudinary/S3).

Improve validation & error handling.

Add pagination & search.

// **My Resume** //
https://drive.google.com/file/d/18Pw7V5R8i7jypR-EuEPqFvzFPK9HaPXu/view?usp=drivesdk





