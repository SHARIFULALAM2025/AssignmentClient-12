
### Project Name:Care.xyz

📌 Project Description
Care.xyz is a trusted caregiving web application that helps users find and book reliable care services for children, elderly, and sick family members. The platform allows users to easily hire caretakers based on their preferred time duration and location.
The main goal of Care.xyz is to make caregiving easy, secure, and accessible for everyone.


Key Features
·       Responsive Design: Mobile, tablet, and desktop supported
·       User Authentication: Email & Password, Google Social Login
·       Dynamic Booking: Duration, Location (Division, District, City, Area), Address input
·       Total Cost Calculation: Automatically calculate based on duration × service charge
·       Booking Status: Pending / Confirmed / Completed
·       My Booking Page: Users can track their bookings and status
·       Services Overview: Baby Care, Elderly Service, Sick People Service
·       Service Detail Pages: Individual page for each service with details and Book Service button

🛠️ Technologies Used
### Frontend

Next.js 16 (App Router)

React 19

Tailwind CSS

DaisyUI

Swiper.js

React Icons

React Hook Form

### Backend & Services

NextAuth.js (Authentication)

MongoDB

React Query (TanStack Query)

Nodemailer (Email notifications)

bcryptjs (Password hashing)

📦 Dependencies Used
next
react
react-dom
next-auth
mongodb
@tanstack/react-query
react-hook-form
bcryptjs
nodemailer
sweetalert2
swiper
react-icons
react-spinners
daisyui
tailwindcss
🧑‍💻 How to Run the Project Locally
### Clone the Repository


https://github.com/SHARIFULALAM2025/AssignmentClient-12.git


### Install Dependencies

npm install

### Environment Variables Setup

Create a .env.local file in the root directory:
example:
NEXTAUTH_SECRET=your_secret
NEXTAUTH_URL=http://localhost:3000

MONGODB_URI=your_mongodb_connection_string

GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret

EMAIL_USER=your_email
EMAIL_PASS=your_email_password
### Run Development Server
npm run dev
### Build for Production
npm run build
npm start
### project live link: https://old-care.vercel.app