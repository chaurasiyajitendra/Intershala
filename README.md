# 🎯 Intern Dashboard Project

A simple **Intern Fundraising Dashboard** project built with **React (Vite) + TailwindCSS (Frontend)** and **Node.js + Express (Backend)**.  
It allows interns to **view their details, referral code, total donations**, and **check leaderboard** using dummy data.

---

## 📌 Features

### **Frontend**
- Dummy **Login Page** (no authentication required)
- **Dashboard Page** showing:
  - Intern Name
  - Referral Code
  - Total Donations Raised
  - Rewards / Unlockables Section (static)
- **Leaderboard Page** showing top contributors
- Clean, responsive **TailwindCSS UI**

### **Backend**
- Simple **REST API** using **Express**
- Returns **dummy JSON data** for:
  - User info
  - Leaderboard
- **CORS enabled** for local frontend testing

---

## ⚙️ Tech Stack

- **Frontend:** React (Vite), TailwindCSS, Axios, React Router
- **Backend:** Node.js, Express.js, CORS
- **Data Storage:** Static JSON file (mock data)

## 🚀 Setup & Installation

### **1️⃣ Clone Repository**
- git clone https://github.com/yourusername/intern-dashboard.git
- cd intern-dashboard

## **2️⃣ Backend Setup**

- cd backend
- npm install
- node app.js
- Server will start at http://localhost:3000

## **3️⃣ Frontend Setup**
-  cd frontend
- npm install
- npm run dev
- Frontend will start at http://localhost:5173
