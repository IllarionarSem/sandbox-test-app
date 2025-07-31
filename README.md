# 🧪 Sandbox Test Automation Project

A complete full-stack web application built for practicing test automation and CI/CD. It includes a React frontend, a Node.js/Express backend, and a MongoDB database — all containerized with Docker.

---

## 📦 Tech Stack

- **Frontend** – React + React Router + i18next
- **Backend** – Node.js + Express
- **Database** – MongoDB
- **i18n** – Localization with `en` and `ru` support
- **Docker** – Containerized using `docker-compose`
- **Automation-ready** – Designed for UI/API/DB test coverage

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/your-repo.git
cd your-repo

## Run with docker

docker compose up --build
The application will be available at:

Frontend: http://localhost:3000

Backend API: http://localhost:5000/api/records

MongoDB: mongodb://localhost:27017

## ⚙️ Configuration

Create a `.env` file in the `backend/` directory based on `.env.example`:

```bash
cp backend/.env.example backend/.env
