# Food Ordering Full Stack Application

This repository contains a comprehensive food ordering application built using **React Vite**, **Express**, and **MongoDB**. The application allows customers to browse a menu, place orders, and make payments online through an integrated Stripe payment gateway. Additionally, there is a separate admin backend for managing the menu, orders, and customer information.

## Table of Contents
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Usage](#usage)
- [Screenshots](#screenshots)
  - [Home Page](#home-page)
  - [Cart Page](#cart-page)
  - [Checkout Page](#checkout-page)
  - [Payment Gateway](#payment-gateway)
  - [Orders Page](#orders-page)
  - [Admin Panel](#admin-panel)


## Features

- **Menu Browsing:** Customers can view and select items from the menu.
- **Cart Management:** Add or remove items from the cart and view the total price dynamically.
- **Checkout Process:** Secure checkout process where customers enter their details and proceed to payment.
- **Payment Gateway:** Integration with Stripe for handling payments.
- **Order Tracking:** Customers can view their past and ongoing orders with real-time status updates.
- **Admin Panel:** Separate backend for managing menu items, viewing and updating order statuses.

## Tech Stack

- **Frontend:**
  - React Vite
  - CSS
  - React Router (for navigation)
  - Axios (for API calls)

- **Backend:**
  - Express.js
  - MongoDB (for database)
  - Mongoose (for ORM)
  - Stripe (for payment integration)

- **Admin Backend:**
  - Express.js (Separate API)
  - MongoDB

## Installation

### Prerequisites
- Node.js (v14 or above)
- MongoDB
- Stripe account for payment gateway

### Setup

1. **Clone the repository:**
    ```bash
    git clone https://github.com/k-ranasinghe/Food-Ordering-Application.git
    cd Food-Ordering-Application
    ```

2. **Install dependencies for both frontend and backend:**
    ```bash
    # Install backend dependencies
    cd backend
    npm install

    # Install admin backend dependencies
    cd ../admin
    npm install
    
    # Install frontend dependencies
    cd ../frontend
    npm install
    ```

3. **Setup environment variables:**

    Create a `.env` file in the root directory of the backend folder with the following variables:

    ```plaintext
    MONGO_URI=<Your MongoDB URI>
    STRIPE_SECRET_KEY=<Your Stripe Secret Key>
    ```

4. **Start the application:**

    ```bash
    # Start frontend server
    cd ../frontend
    npm run dev

    # Start backend server
    cd ../backend
    npm run server

    # Start admin backend server
    cd ../admin
    npm run dev
    ```

    The application should now be running on `http://localhost:3000` for the frontend, `http://localhost:5000` for the backend, and `http://localhost:5001` for the admin backend.

## Usage

- **Frontend:**
  - Visit the home page to browse the menu.
  - Add or remove items from the cart.
  - Proceed to checkout and complete the payment using Stripe.

- **Backend:**
  - Use the provided API endpoints to manage data.
  - Admin users can access the admin panel to manage the menu and orders.

## Screenshots

### Home Page
Customers can view the menu on the home page. By pressing the add/remove buttons, they can add or remove items from the cart. The cart can be viewed by pressing the cart icon on the top right of the screen.

![Home Page](https://github.com/user-attachments/assets/ebb2c60b-0765-4de2-9b15-578a073348f7)

![image](https://github.com/user-attachments/assets/0cf344f3-e904-48ec-beb3-bac2f9ecc778)

![image](https://github.com/user-attachments/assets/13cebe42-6481-424d-9b26-7440d4343879)

### Cart Page
Once satisfied with the order, customers can proceed to checkout.

![Cart Page](https://github.com/user-attachments/assets/83c4b21a-8212-404e-835f-fd1390f24e44)

### Checkout Page
Customers need to enter their details on this page before proceeding to the payment gateway.

![Checkout Page](https://github.com/user-attachments/assets/a242f9db-7aa0-4945-8bbe-1ad640aad302)

### Payment Gateway
Stripe is used as the payment gateway. Once the payment is completed, the user will be redirected to the orders page.

![Payment Gateway](https://github.com/user-attachments/assets/f16c381d-f0da-4259-b2c5-8f6e40777571)

### Orders Page
Here, customers can view their past and ongoing orders. The status of the order is updated by the admin team of the application.

![Orders Page](https://github.com/user-attachments/assets/5e008005-63f2-490d-8363-dfe6258ca5b5)

### Admin Panel
The admin panel consists of three sections: Add Items, List Items, and Orders. Admins can manage the menu and update order statuses from here.

#### Add Items
Add new items to the menu.

![Add Items](https://github.com/user-attachments/assets/c99b8f7c-57bf-4d9d-93f5-33cdbc7c9549)

#### List Items
View existing menu items. An item can be removed by pressing the X on the right of each item.

![List Items](https://github.com/user-attachments/assets/b9c289d9-d7d7-4fcf-94c4-c5a267a37602)

#### Orders
View all previous orders along with user details. The status of the orders can be updated from this section.

![Orders](https://github.com/user-attachments/assets/c9cab720-e8b3-457f-8712-99d05a29217e)

