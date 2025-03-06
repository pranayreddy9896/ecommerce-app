# MERN Stack eCommerce Website

## Overview
This project is a full-stack eCommerce website built using the MERN stack (MongoDB, Express.js, React.js, Node.js). It allows users to browse products, filter and sort them, add items to the cart, and place orders using either Cash on Delivery (COD) or online payment methods like Stripe and Razorpay. The website also features an admin dashboard for managing products and orders.

## Features
### User Features:
- Browse and explore products
- Filter and sort products
- Select product variants (e.g., size) before adding them to the cart
- Add products to the shopping cart
- Place orders by providing a delivery address
- Choose a payment method (Cash on Delivery or Online Payment via Stripe/Razorpay)
- Order history and user authentication

### Admin Features:
- Admin dashboard for managing products and orders
- Upload new products
- Delete existing products
- View all products in the store

## Technologies Used
- **Frontend:** React.js
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **Payment Integration:** Stripe, Razorpay
- **Hosting & Deployment:** Vercel

## Installation & Setup
### Prerequisites:
Make sure you have the following installed on your system:
- Node.js
- MongoDB
- Git

### Clone the Repository:
```sh
git clone https://github.com/your-username/your-repo.git
cd your-repo
```

### Backend Setup:
1. Navigate to the backend folder:
   ```sh
   cd backend
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Create a `.env` file and add the required environment variables:
   ```sh
   MONGO_URI=your_mongodb_connection_string
   STRIPE_SECRET_KEY=your_stripe_secret_key
   RAZORPAY_KEY_ID=your_razorpay_key_id
   RAZORPAY_KEY_SECRET=your_razorpay_key_secret
   ```
4. Start the backend server:
   ```sh
   npm start
   ```

### Frontend Setup:
1. Navigate to the frontend folder:
   ```sh
   cd frontend
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the development server:
   ```sh
   npm start
   ```

### Deployment
- The frontend is deployed using **Vercel**
- The backend can be deployed using **Vercel** or **any cloud service** that supports Node.js

## Contributing
You can fix the repository and contribute by submitting pull requests.

## License
This open-source project is available under the [MIT License](LICENSE).

