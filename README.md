# Dern-Support System

Dern-Support is a web-based platform designed to manage repair requests, track job assignments, and provide an efficient solution for both customers and technicians. The system allows customers to submit repair requests, track their status, and get notified about progress. For admins, it facilitates managing requests, assigning technicians, and monitoring system activity.

## Features

### Customer Features:
- **User Registration & Login:** Secure user authentication with email verification.
- **Repair Request Submission:** Customers can submit repair requests with detailed device information and issues.
- **Repair Status Tracking:** Customers can track the status of their repair requests in real-time (Pending, In Progress, Completed).
- **Job Scheduling:** Customers can schedule repair appointments based on available time slots.

### Admin Features:
- **Manage Requests:** Admins can view, approve, or reject repair requests.
- **Job Assignment:** Admins assign technicians to repair jobs based on availability.
- **Technician Notification:** Technicians are automatically notified of their assignments.

### General Features:
- **Real-Time Updates:** Use of AJAX to update users and technicians without page reloads.
- **Pagination:** Efficient display of repair requests for easy navigation, even with large datasets.
- **Image Optimization:** The system compresses and resizes uploaded images to save storage.

## Tech Stack

- **Frontend:** React.js, Tailwind
- **Backend:** Laravel
- **Database:** MySQL
- **Authentication:** Laravel’s built-in authentication system
- **Image Processing:** Intervention Image (for image optimization)

## Installation

To get a local copy of the project up and running, follow these steps:

### Prerequisites
- **PHP** (version 7.4 or higher)
- **Composer**
- **Node.js** (version 14 or higher)
- **MySQL** (for the database)

### Setup Instructions

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Hussein-luigi/Dern-Support.git
   cd Dern-Support

2. **Install backend dependencies:** 
   ```bash
   composer install
3. **Run database migrations:**
   ```bash
   php artisan migrate
4. **Install frontend dependencies:**
   ```bash
   npm install
5. **Start the Laravel server:**
   ```bash
   php artisan serve
6. **Run frontend development server:**
   ```bash
   npm run dev
