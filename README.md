**Product Catalog Viewer**

A full-stack product catalog application built with React, Spring Boot, and SQL Server. Users can view a list of products, see detailed info, and add new products via a clean, user-friendly interface.

**Tech Stack**

1. Frontend: React (Vite)
2. Backend: Spring Boot (Java) + Hibernate
3. Database: SQL Server (via Docker)
4. Containerization: Docker & Docker Compose

**Prerequisites**
To run this project on your machine, install:
1. Docker Desktop
2. Git (optional, to clone the repo)

**How to run the APP**


Step 1: Clone the Repository
git clone https://github.com/KrishaKPatel/Product_Catalog.git

Step 2: Build and Start All Services
docker-compose up --build

**API Endpoints**
1. Get all the product details - get(/products/findall)
2. Add the product - post(/products/save)
3. find the product - get(/products/find/{id})
4. brand-summary-get(/products/brand-summary)

**Testing**
1. Backend testing
cd productcatalog
./mvnw test
   
2. Frontend Testing 
cd frontend
npm install
npm run test
