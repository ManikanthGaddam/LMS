MERN Stack LMS (Learning Management System)
Table of Contents

Project Overview

Features

Technologies Used

Project Structure

Installation & Setup

Environment Variables

Usage

Screenshots

API Endpoints

Future Enhancements

License

Project Overview

This project is a Learning Management System (LMS) built using the MERN stack (MongoDB, Express.js, React.js, Node.js). It allows educators to create, manage, and sell online courses while providing students a platform to enroll in courses, track progress, and watch video lectures.

The platform supports features like course ratings, lecture previews, payment integration, and a student dashboard to monitor progress.

Features
Educator Features

Create and manage courses with chapters and lectures

Upload course thumbnails and videos via Cloudinary

Set certain lectures as free previews

Track student enrollment and earnings

View dashboard analytics including total courses, students, and earnings

Student Features

Browse and search courses

Enroll in courses using payment gateways (Stripe)

Watch video lectures through YouTube integration

Track course progress and mark lectures as completed

Rate courses

View all enrolled courses and progress

Admin / Misc Features

User authentication and role management via Clerk

Real-time data updates using REST APIs

Responsive UI built with React + TailwindCSS + ShadCN UI components

Technologies Used
Backend

Node.js, Express.js

MongoDB & Mongoose ORM

Clerk (Authentication & user management)

Stripe (Payment integration)

Cloudinary (Media storage for course thumbnails & videos)

Frontend

React.js, React Router

TailwindCSS for styling

ShadCN UI components

Axios for API requests

YouTube React Player (react-youtube)

Others

humanize-duration (display lecture durations)

Toast notifications (react-toastify)

JWT Authentication & protected routes

Project Structure
/backend
  ├─ models/          # MongoDB Schemas (User, Course, Purchase)
  ├─ controllers/     # Route controllers (course, user, educator)
  ├─ routes/          # API routes
  ├─ configs/         # Cloudinary, database config, environment
  └─ server.js        # Express server entry

/frontend
  ├─ src/
  │  ├─ assets/       # Images, icons
  │  ├─ components/   # Reusable UI components
  │  ├─ context/      # React context for global state
  │  ├─ pages/        # All pages (Home, CourseDetails, Player)
  │  └─ App.js        # React router setup

Installation & Setup
Clone Repository
git clone https://github.com/<your-username>/<repo-name>.git
cd <repo-name>

Backend Setup
cd backend
npm install
npm run server

Frontend Setup
cd frontend
npm install
npm start

Environment Variables

Create a .env file in the backend folder with:

MONGO_URI=<Your MongoDB URI>
CLOUDINARY_CLOUD_NAME=<Your Cloudinary Cloud Name>
CLOUDINARY_API_KEY=<Your Cloudinary API Key>
CLOUDINARY_API_SECRET=<Your Cloudinary Secret>
CLERK_SECRET_KEY=<Clerk Secret Key>
STRIPE_SECRET_KEY=<Stripe Secret Key>

Usage

Open http://localhost:3000 in your browser

Students can browse courses, enroll, and watch lectures

Educators can log in and create courses, upload lectures, and view dashboards


API Endpoints (Partial)
Courses

GET /api/course/:id → Fetch course details

POST /api/educator/add-course → Add new course

GET /api/educator/courses → Fetch all educator courses

Users / Enrollments

POST /api/user/purchase → Enroll in a course

POST /api/user/get-course-progress → Get progress for a course

POST /api/user/update-course-progress → Mark lecture as completed

POST /api/user/add-rating → Add a course rating

 # Future Enhancements

Real-time chat between students and educators

Video streaming directly instead of embedding YouTube

More detailed analytics for educators


License

MIT License © [manikanth]

