# SkillSphere – Online Learning Platform

SkillSphere is a modern, professional-grade online learning platform built with Next.js. It allows users to explore a variety of skill-based courses, watch lessons, and manage their learning profiles. The application features a premium UI/UX design inspired by leading educational platforms.

## 🚀 Purpose
The goal of SkillSphere is to provide a seamless and interactive learning experience for students, offering high-quality courses with a focus on responsiveness, performance, and security.

## 🔗 Live URL
https://skill-sphere-nine-lovat.vercel.app/register

## ✨ Key Features
- **Modern UI/UX**: A visually stunning, responsive design using Tailwind CSS and DaisyUI.
- **Course Catalog**: Browse at least 6 diverse courses with categories like Development, Design, and Marketing.
- **Search & Filter**: Search courses by title and filter by categories on the All Courses page.
- **Protected Routes**: Course details and user profiles are secured and only accessible to logged-in users.
- **Authentication**: Secure login and registration using **BetterAuth**, including Google Social Login.
- **User Profiles**: View and update your profile information (name and photo URL).
- **Smooth Animations**: Interactive experience powered by **Framer Motion**.
- **Toast Notifications**: Real-time feedback for actions like login, registration, and profile updates.
- **Responsive Design**: Optimized for Mobile, Tablet, and Desktop devices.

## 🛠️ Technology Stack
- **Framework**: Next.js (App Router)
- **Styling**: Tailwind CSS, DaisyUI
- **Authentication**: BetterAuth
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Database**: SQLite (via Better-SQLite3)
- **State/Feedback**: React Hot Toast

## 📦 NPM Packages Used
- `better-auth`
- `better-sqlite3`
- `framer-motion`
- `lucide-react`
- `react-hot-toast`
- `clsx`
- `tailwind-merge`

## ⚙️ Environment Variables
Create a `.env.local` file in the root directory and add the following:
```env
BETTER_AUTH_SECRET=your_secret_here
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
BETTER_AUTH_URL=http://localhost:3000
```

## 📂 Project Structure
- `src/app`: Application routes and pages.
- `src/components`: Reusable UI components (layout, home, etc.).
- `src/lib`: Configuration files (auth, database, constants).
- `src/lib/courses.js`: JSON data for courses.
