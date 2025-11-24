# ProductHub - Next.js & Express.js E-Commerce App

## Project Description
ProductHub is a simple e-commerce web application built using **Next.js (App Router)** for the frontend and **Express.js** for the backend. It features public and protected pages with Firebase authentication (Email & Google Login). Users can browse products, view product details, and, if logged in, add or manage products.  

The app focuses on:
- Polished UI & responsive layout  
- Clear component structure (Hero/Banner, Features, Testimonials, Product Cards)  
- Integration between frontend and backend APIs  
- Protected pages with authentication  

---

## Setup & Installation

### Backend
1. Open a terminal and navigate to the `backend` folder.  
2. Install dependencies:
```bash
npm install
Start the server:

bash
Copy code
node index.js
Backend will run at https://product-hub-two.vercel.app.
Available routes:

GET /products → all products

GET /products/:id → product details by ID

DELETE /products/:id → delete product (protected action in frontend)

Frontend
Open another terminal and navigate to the frontend folder.

Install dependencies:

bash
Copy code
npm install
Start the development server:

bash
Copy code
npm run dev
Open browser at http://localhost:3000.

Routes Summary
Public Routes
Route	Description
/	Homepage (Hero Banner, Features, Testimonials, Featured Products)
/products	Product list with search & category filter (UI)
/products/[id]	Product details page with image, description, price, priority, back button
/login	Login page (Firebase Authentication)
/register	Registration page (Firebase Authentication)
Features

Homepage Sections:

Navbar – logo, routes (Home, Products), login/register, sticky & responsive

Hero / Banner – headline, subtitle, CTA

Features – multiple cards with title, description, extra info

Testimonials – customer reviews

Product Grid – featured products (6 cards max)

Footer – links, social icons

Product Pages:

List all products with search & filter

Product details page: large image, full description, meta info, back button

Authentication:

Firebase Auth (Email & Google Login)

Navbar dynamically shows user info when logged in

Protected pages redirect to login if user is not authenticated

Product Management (Protected):

Add Product form with live confirmation message

Manage Products table with View & Delete actions

Technologies Used

Frontend: Next.js (App Router), React, TailwindCSS, DaisyUI

Backend: Node.js, Express.js

Authentication: Firebase (Email & Google)

Data Storage: JSON file (for demo)

Notes