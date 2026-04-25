# Zerodha Clone

A full-stack web application designed to replicate the core features of the popular stock trading platform, Zerodha. This project features a landing page, an interactive trading dashboard, and a robust backend API.

## Project Structure

This project is divided into three main components:

- **Frontend**: The main landing page and marketing site designed to be publicly accessible.
- **Dashboard**: The interactive trading interface for authenticated users to view charts, holdings, and portfolio details.
- **Backend**: The API server handling authentication, user data, and the primary business logic.

## Technologies Used

### Frontend & Dashboard
- **React.js**: For building interactive user interfaces.
- **React Router DOM**: For seamless routing.
- **Axios**: For making HTTP requests to the backend.
- **Material UI (MUI)**: For creating clean, responsive design components (used heavily in the dashboard).
- **Chart.js (react-chartjs-2)**: For data visualization, specifically used to render dynamic stock charts in the dashboard.
- **React Toastify**: For delivering push notifications and alerts on the client web pages.

### Backend
- **Node.js & Express.js**: For creating a robust, fast, and scalable REST API.
- **MongoDB & Mongoose**: As the primary NoSQL database for securely storing all relational data such as user accounts, portfolios, and historical trends.
- **Passport.js**: Integrated for user authentication processing.
- **JSON Web Tokens (JWT)**: Used for managing secure, stateless sessions between the frontend/dashboard and the backend services.
- **Bcrypt / Bcryptjs**: Responsible for cryptographically hashing user passwords to maintain security within the database.

## Features overview

- **User Authentication:** Secure registration and login flows.
- **Dynamic Charting:** Interactive visualizations created with Chart.js to track information dynamically.
- **Material Design:** Clean, responsive, and robust user interface powered by Material UI components.
- **Modular Architecture:** Clean separation of concerns with distinct frontend, dashboard, and backend services.

## Author
Sayantan
