# Bagsy 🛍️

A modern e-commerce web application for selling bags and accessories. Built with Node.js, Express, and MongoDB.

## 📋 Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [API Routes](#api-routes)
- [Environment Variables](#environment-variables)
- [Contributing](#contributing)
- [License](#license)

## ✨ Features

- **User Authentication**: Secure user registration and login with JWT tokens
- **Product Management**: Browse and view detailed product information
- **Shopping Cart**: Add products to cart and manage purchases
- **Owner Dashboard**: Admin panel for product management
- **Responsive Design**: Modern UI with Tailwind CSS
- **Image Upload**: Product image handling with Multer
- **Session Management**: Secure session handling with express-session
- **Flash Messages**: User feedback with connect-flash

## 🛠️ Tech Stack

**Backend:**
- Node.js
- Express.js
- MongoDB with Mongoose
- JWT for authentication
- Bcrypt for password hashing
- Multer for file uploads

**Frontend:**
- EJS templating engine
- Tailwind CSS for styling
- Responsive design

**Security & Middleware:**
- Cookie Parser
- Express Session
- Flash messages
- Custom authentication middleware

## 🚀 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd Bagsy
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env` file in the root directory:
   ```env
   EXPRESS_SESSION_SECRET=your_session_secret_here
   JWT_SECRET=your_jwt_secret_here
   MONGODB_URI=mongodb://localhost:27017/bagsy
   ```

4. **Start the application**
   ```bash
   npm start
   ```

5. **Open your browser**
   Navigate to `http://localhost:3000`

## 💻 Usage

### For Customers:
1. **Register/Login**: Create an account or login to existing one
2. **Browse Products**: View available bags and accessories
3. **Add to Cart**: Select products and add them to your shopping cart
4. **Checkout**: Complete your purchase

### For Owners/Admins:
1. **Admin Access**: Login through the owner portal
2. **Product Management**: Add, edit, or remove products
3. **Inventory Control**: Manage stock and pricing

## 📁 Project Structure

```
Bagsy/
├── app.js                 # Main application file
├── package.json           # Dependencies and scripts
├── config/
│   ├── development.json   # Development configuration
│   ├── keys.js           # API keys and secrets
│   ├── mongoose-connection.js  # Database connection
│   └── multer-config.js   # File upload configuration
├── controllers/
│   └── authController.js  # Authentication logic
├── middlewares/
│   └── isLoggedIn.js     # Authentication middleware
├── models/
│   ├── owner-model.js    # Owner/Admin model
│   ├── product-model.js  # Product model
│   └── user-model.js     # User model
├── routes/
│   ├── index.js          # Main routes
│   ├── ownerRouter.js    # Owner/Admin routes
│   ├── productsRouter.js # Product routes
│   └── userRouter.js     # User routes
├── utils/
│   └── genrateToken.js   # JWT token generation
├── views/                # EJS templates
│   ├── admin.ejs
│   ├── cart.ejs
│   ├── createproducts.ejs
│   ├── index.ejs
│   ├── owner-login.ejs
│   ├── shop.ejs
│   └── partials/
└── public/              # Static assets
    ├── images/          # Product images
    ├── javascripts/     # Client-side JS
    └── stylesheets/     # CSS files
```

## 🛣️ API Routes

### User Routes (`/users`)
- `POST /register` - User registration
- `POST /login` - User login
- `GET /logout` - User logout

### Owner Routes (`/owners`)
- `GET /admin` - Admin dashboard
- `POST /create` - Create owner account
- `POST /login` - Owner login

### Product Routes (`/products`)
- `POST /create` - Create new product (Admin only)
- `GET /` - Get all products

### Main Routes (`/`)
- `GET /` - Home page
- `GET /shop` - Shop page (Protected)
- `GET /cart` - Shopping cart (Protected)
- `GET /addtocart/:productid` - Add product to cart (Protected)

## 🔒 Environment Variables

Create a `.env` file with the following variables:

```env
# Express Session
EXPRESS_SESSION_SECRET=your_super_secret_session_key

# JWT
JWT_SECRET=your_jwt_secret_key

# MongoDB
MONGODB_URI=mongodb://localhost:27017/bagsy

# Server
PORT=3000
```

## 📦 Dependencies

### Core Dependencies
- **express**: Web framework for Node.js
- **mongoose**: MongoDB object modeling
- **bcrypt**: Password hashing
- **jsonwebtoken**: JWT implementation
- **multer**: File upload middleware
- **express-session**: Session management
- **cookie-parser**: Cookie parsing middleware
- **connect-flash**: Flash message middleware
- **dotenv**: Environment variable management

## 🔧 Development

1. **Start development server**
   ```bash
   npm run dev
   ```

2. **Database setup**
   Make sure MongoDB is running on your local machine or update the connection string in the environment variables.

3. **Adding new features**
   - Models go in `/models`
   - Routes go in `/routes`
   - Views go in `/views`
   - Static assets go in `/public`

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the ISC License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

- **Nikhil** - *Initial work*

## 🙏 Acknowledgments

- Thanks to all contributors who helped build this project
- Built with love for the Node.js and Express community

---

**Happy Shopping! 🛍️**
