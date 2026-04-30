export interface ProjectImage {
  src: string;
  alt: string;
}

export interface Project {
  id: number;
  name: string;
  homeImage: string;
  title: string;
  description: string;
  techStack: string[];
  images: ProjectImage[];
  category: "fullstack" | "frontend";
  links?: {
    livePreview?: string;
    github?: string;
    githubClient?: string;
    githubServer?: string;
    readme?: string;
  };
  keyFeatures?: string[];
  challenges?: string[];
  improvementsNeeded?: string[];
  myContributions?: string[];
}

export const projects: Project[] = [
  {
    id: 1,
    name: "Urban Snacks",
    homeImage: "/urban_snacks/urban_snacks_home.jpg",
    category: "fullstack",
    title: "A modern, premium platform for authentic Bangladeshi snacks featuring a full-featured admin dashboard and dual payment gateways.",
    description: "Urban Snacks is a modern, premium platform for authentic Bangladeshi snacks. Built for visual excellence, buttery-smooth interactions, and a complete shopping experience — from discovery to doorstep delivery. It features a full-featured admin dashboard with real-time analytics, inventory management, and order processing.",
    techStack: [
      "Next.js 16", "Tailwind CSS 4", "Shadcn/UI", "TypeScript 5", "Better Auth",
      "Zustand", "TanStack Query", "Framer Motion", "React Hook Form", "Zod",
      "Recharts", "Stripe", "SSLCommerz"
    ],
    images: [
      { src: "/urban_snacks/urban_snacks_home.jpg", alt: "Home Page" },
      { src: "/urban_snacks/urban_snacks_home_dark.jpg", alt: "Dark Mode Home" },
      { src: "/urban_snacks/urban_snacks_products_page.jpg", alt: "Products Page" },
      { src: "/urban_snacks/urban_snacks_admin_dahbaord.jpg", alt: "Admin Dashboard" },
      { src: "/urban_snacks/urban_snacks_order_management.jpg", alt: "Order Management" },
      { src: "/urban_snacks/urban_snacks_manage_items.jpg", alt: "Manage Items" },
      { src: "/urban_snacks/urban_snacks_checkout_page.jpg", alt: "Checkout Page" },
      { src: "/urban_snacks/urban_snacks_my_orders.jpg", alt: "My Orders" },
      { src: "/urban_snacks/urban_snacks_reviews.jpg", alt: "Reviews" },
      { src: "/urban_snacks/urban_snacks_how_order.jpg", alt: "How to Order" },
      { src: "/urban_snacks/urban_sancks_trending_snacks.jpg", alt: "Trending Snacks" },
    ],
    keyFeatures: [
      "Dynamic Hero Slider: Admin-managed banners with category-linked CTAs, auto-play, and smooth crossfade transitions using Embla Carousel.",
      "Comprehensive Shopping Experience: Smart Cart with Zustand, multi-step checkout, and Coupon System with real-time discount validation.",
      "Triple Payment Options: Seamlessly integrated Cash on Delivery, Stripe (international cards), and SSLCommerz (bKash, Nagad, local banks).",
      "Robust Admin Dashboard: Real-time analytics and 30-day performance charts using Recharts for total revenue, orders, users, and items.",
      "Advanced Inventory Management: Full CRUD for snack products with Next.js Image optimization, multi-image upload via ImgBB API, and category assignment.",
      "Complete Order Pipeline: Advance orders through Processing, Shipped, and Delivered statuses with integrated client-side PDF invoice generation.",
      "Premium Visual Design: Built with Tailwind CSS 4, Shadcn/UI, and Framer Motion for micro-interactions, page transitions, and full dark-mode support."
    ],
    challenges: [
      "Secure Server-First Data Fetching: Architecting service layer to execute on the server and forward session cookies via `next/headers` to prevent client-side token exposure.",
      "Dynamic Delivery Calculation: Implementing complex shipping algorithms based on destination city with additional weight-based surcharges for heavy items.",
      "Dual Payment Gateway Synchronization: Managing reliable state transitions and webhook callbacks between Stripe and SSLCommerz checkouts."
    ],
    improvementsNeeded: [
      "Implement multi-language support (English/Bengali) for a broader local audience.",
      "Add user wishlists for saving favorite snack items for future purchases.",
      "Integrate an AI-powered snack recommendation engine based on user taste profiles."
    ],
    links: {
      livePreview: "https://urban-snacks-client.vercel.app",
      githubClient: "https://github.com/sayed725/urban_snacks_client",
      githubServer: "https://github.com/sayed725/urban_snacks_server",
      readme: "https://github.com/sayed725/urban_snacks_client/blob/main/README.md"
    }
  },
  {
    id: 2,
    name: "Brainy",
    homeImage: "/brainy/brainy_home.jpg",
    category: "fullstack",
    title: "A modern, full-featured online tutoring marketplace and skill sharing platform built for visual excellence and role-based security.",
    description: "Brainy is a comprehensive online tutoring marketplace designed to connect students with expert tutors. It features a robust role-based architecture with dedicated dashboards for Students, Tutors, and Administrators. The platform emphasizes visual excellence, snappy interactions, and secure data handling using modern web technologies.",
    techStack: [
      "Next.js 16", "Tailwind CSS 4", "Shadcn/UI", "TypeScript 5", "Better Auth",
      "Framer Motion", "TanStack Table", "Recharts", "Zod", "React Hook Form", "Lottie"
    ],
    images: [
      { src: "/brainy/brainy_home.jpg", alt: "Home Page" },
      { src: "/brainy/brainy_home_dark.jpg", alt: "Dark Mode Home" },
      { src: "/brainy/brainy_all_tutor.jpg", alt: "Tutor Marketplace" },
      { src: "/brainy/brainy_tutor_card.jpg", alt: "Tutor Card" },
      { src: "/brainy/brainy_edit_tutor_profile.jpg", alt: "Edit Tutor Profile" },
      { src: "/brainy/brainy_home_become_A_tutor.jpg", alt: "Become a Tutor" },
      { src: "/brainy/brainy_admin_dashbaord.jpg", alt: "Admin Dashboard" },
      { src: "/brainy/brainy_manage_users.jpg", alt: "Manage Users" },
      { src: "/brainy/brainy_manage_booking.jpg", alt: "Manage Bookings" },
      { src: "/brainy/brainy_user_bookings.jpg", alt: "User Bookings" },
      { src: "/brainy/brainy_add_bookings.jpg", alt: "Add Bookings" },
    ],
    keyFeatures: [
      "Modular Component Design: Leveraging Next.js 16 App Router with Parallel Routes for sophisticated role-based dashboard rendering.",
      "Dynamic Tutor Marketplace: Advanced filtering by subject categories and verified tutor discovery with detailed profile views.",
      "Comprehensive Booking System: Date- and time-slot-based session booking with real-time availability tracking and form validation.",
      "Role-Based Dashboards: Custom-tailored workspaces for Students (bookings), Tutors (analytics & earnings), and Admins (platform oversight).",
      "Analytics & Visualizations: Real-time revenue tracking and performance metrics for tutors using Recharts-driven visualizations.",
      "Administrative Console: Global management of users, tutors, categories, and platform-wide booking auditing.",
      "Strict Security Architecture: Session-based authentication with Better Auth and server-side cookie forwarding to prevent client-side token exposure."
    ],
    challenges: [
      "Architecting Parallel Routes: Implementing a clean and scalable dashboard structure that dynamically switches based on user role.",
      "Secure API Integration: Encapsulating API calls in a server-side service layer with native fetch and secure cookie propagation.",
      "Complex State Management: Coordinating booking workflows and real-time status updates across different user tiers."
    ],
    improvementsNeeded: [
      "Integrate a real-time messaging system for direct student-tutor communication.",
      "Implement an AI-powered tutor matching system based on student learning goals.",
      "Add support for group sessions and interactive whiteboard integration."
    ],
    links: {
      livePreview: "https://brainy-opal.vercel.app",
      githubClient: "https://github.com/sayed725/brainy_client",
      githubServer: "https://github.com/sayed725/brainy_server",
      readme: "https://github.com/sayed725/brainy_client/blob/main/README.md"
    }
  },
  {
    id: 3,
    name: "Care Matrix (Team Project)",
    homeImage: "/care_matrix/CareMatrix Home.jpg",
    category: "fullstack",
    title: "A multi-role complete hospital management system for doctors, pharmacists, receptionist, administrators and patients.",
    description: "Care Matrix Backend powers the Care Matrix hospital management system, a robust platform designed to digitize and streamline hospital operations, enhance patient care, and improve operational efficiency. This backend provides secure APIs for managing medical records, real-time communication, billing, inventory, and more, ensuring seamless coordination among medical professionals, administrators, receptionists, pharmacists, and patients.",
    techStack: [
      "React", "Redux Toolkit", "React Router", "Tailwind CSS", "ShadCN Ui",
      "Stripe", "Axios", "Tanstack Query", "Toastify", "Sooner", "JWT",
      "FireBase", "Node.Js", "Express.Js", "MongoDB"
    ],
    images: [
      { src: "/care_matrix/CareMatrix Home.jpg", alt: "Home Page" },
      { src: "/care_matrix/careMtrix About us.jpg", alt: "About Us" },
      { src: "/care_matrix/careMatrix available bed.jpg", alt: "Available Beds" },
      { src: "/care_matrix/CareMatrix add bed.jpg", alt: "Add Bed" },
      { src: "/care_matrix/careMtrix appointment bokking.jpg", alt: "Appointment Booking" },
      { src: "/care_matrix/carematrix recept Overview.jpg", alt: "Receptionist Overview" },
      { src: "/care_matrix/careMtrix doctor overview.jpg", alt: "Doctor Overview" },
      { src: "/care_matrix/careMatrix buy medicine.jpg", alt: "Buy Medicine" },
      { src: "/care_matrix/careMtrix payment record.jpg", alt: "Payment Record" },
      { src: "/care_matrix/careMatrix  revenue.jpg", alt: "Revenue Dashboard" },
    ],
    keyFeatures: [
      "Medical Records Management: Securely stores and retrieves patient data, prescriptions, and medical history.",
      "Real-Time Chat: Manages real-time communication between users (patients, doctors, pharmacists) with message storage and retrieval.",
      "Billing & Payment Processing: Integrates with Stripe to handle online payments and updates billing statuses.",
      "Real-Time Bed Availability: Tracks and updates hospital bed occupancy in real-time for efficient allocation.",
      "Pharmacy & Inventory Management: Manages medicine stock, tracks inventory levels, and sends restocking alerts.",
      "Emergency Services Coordination: Handles emergency contact retrieval, ambulance booking, and urgent care scheduling.",
      "Doctors Management: Provides endpoints for managing doctors’ schedules and availability.",
      "Patient Health Rewards System: Tracks patient activities (check-ups, medication adherence) and manages rewards.",
      "Medicine Cart & Checkout: Manages cart operations, calculates costs, and processes medicine purchases.",
      "Purchase History Tracking: Stores and retrieves purchase history for patients, including invoice generation."
    ],
    myContributions: [
      "Logo: Created a beautiful logo and favicon for CareMatrix",
      "About Us: Designed a Beautiful About Us section on Home Page",
      "More About Us: Designed 2 beautiful section on clicking more about us button.",
      "Our Hight Quality Service: Design a Beautiful our service section with a simple looking hover effect.",
      "Blog & News: Designed a beautiful blog section showcasing dynamic blog data clicking read more you can read more about blog.",
      "Blog Details Page: In this section users can see the details of specific blogs he clicks.",
      "Our Available Beds: This section offers a user-friendly interface to book hospital rooms, displaying five room types with images, tariffs, and booking buttons, using Redux for data management.A pop-up form collects patient details, ensuring transparent pricing and a simplified booking process.",
      "Receptionist Dashboard: It provides hospital receptionists with a comprehensive overview of appointments and bed bookings, featuring summary cards, pie charts, and detailed tables for key metrics, updated in real-time via API. Its clean, grid-based layout with a gray background ensures clarity and efficient management of hospital operations.",
      "Manage Beds (Receptionist Dashboard): This section of the Receptionist Dashboard offers a clear interface to view and manage hospital bed listings, displaying images, titles, prices, and availability in a tabular format. It includes toggle switches for activating/deactivating beds, an action menu for edits or deletions, and an “Add New Bed” button for quick system updates.",
      "Manage Bed Booking Requests(Receptionist Dashboard): This section allows administrators to review bed booking details, including bed type, price, patient info, and status, with visual pending indicators. The “Actions” menu enables quick acceptance or deletion, with timestamps aiding real-time workflow management.",
      "Manage My Bed Booking Requests (Patient Dashboard):This section enables patients to view bed type, price, details, admission date, and status, with a yellow dot for pending requests. The 'Action' column offers a delete option, with timestamps (e.g., 'an hour ago') for efficient request tracking.",
      "Billing & Payments (Administration Dashboard): The Billing & Payments section offers admins a searchable table to manage payment records with customer details, doctor info, amount, payment status, transaction ID, and appointment details for efficient management.",
      "Manage Blogs(Administration Dashboard): This Section Allows Admin to view his added blog & news information, Admin can add , delete or update blogs and by clicking add blogs button admin can add new blogs to the Blog & News Section",
      "My Billing History (Doctor Dashboard):The My Billing History section of the Doctor Dashboard provides a searchable table with customer details, total amount, payment status, transaction ID, payment date, appointment details, and an Actions column for efficient billing management."
    ],
    challenges: [
      "Managing AI-based image generation for dynamic content visualization.",
      "Implementing a responsive sidebar with toggle functionality for mobile and tablet views.",
      "Efficiently managing data for organizers and participants while ensuring smooth navigation.",
      "Designing a user-friendly UI that suits both organizers and participants."
    ],
    improvementsNeeded: [
      "Smart Wait-Time Prediction System: Integrate machine learning to improve accuracy by analyzing historical data and patterns.",
      "Chat-Activated Dashboard: Add end-to-end encryption and file-sharing limits for doctor-pharmacist-patient communications.",
      "Billing & Payment System: Implement multi-payment gateway support (e.g., PayPal, local options) for regions.",
      "Emergency Services Coordination: Introduce AI-driven triage prioritization and integration with external emergency APIs.",
      "Patient Health Gamification & Rewards System: Expand rewards with personalized challenges and wearable device integration."
    ],
    links: {
      livePreview: "https://care-matrix.vercel.app",
      githubClient: "https://github.com/ssmahim01/Care-Matrix-With-Dev-Sync",
      githubServer: "https://github.com/ssmahim01/Care-Matrix-With-Dev-Sync",
      readme: "https://github.com/ssmahim01/Care-Matrix-With-Dev-Sync/blob/main/README.md"
    },
  },
  {
    id: 4,
    name: "PostPad",
    homeImage: "/post_pad/post_pad_home.jpg",
    category: "fullstack",
    title: "A forum-building website enabling users to post, comment, vote, and share content in real-time.",
    description: "This project is a fully responsive and interactive forum built using the MERN Stack (MongoDB, Express.js, React.js, Node.js). The platform allows users to post, comment, vote, and share content in real-time. Admins can manage users, announcements, and reported activities. The purpose is to create a scalable web application focusing on user experience, performance, and security.",
    techStack: [
      "React", "Tailwind CSS", "Daisy Ui", "React Hook Form", "Stripe", "Tanstack Query",
      "FireBase", "SweetAlert", "Toastify", "JWT", "Node.Js", "Express.Js", "MongoDB"
    ],
    images: [
      { src: "/post_pad/post_pad_home.jpg", alt: "Home Page" },
      { src: "/post_pad/post_pad_dark_home.jpg", alt: "Dark Mode Home" },
      { src: "/post_pad/post_pad_user_profile.jpg", alt: "User Profile" },
      { src: "/post_pad/post_pad_admin_home.jpg", alt: "Admin Dashboard" },
      { src: "/post_pad/post_pad_manage_posts.jpg", alt: "Manage Posts" },
      { src: "/post_pad/post_pad_manage_users.jpg", alt: "Manage Users" },
    ],
    keyFeatures: [
      "Homepage: Displays posts from newest to oldest with search functionality based on post tags.",
      "Popularity Sorting: Sort posts by popularity based on Upvote-Downvote difference.",
      "Pagination: Implemented with 5 posts per page for better performance.",
      "Announcement & Advertisement: Live notification count for announcements and dedicated ad sections.",
      "Post Details: View title, author, tags, and comments with Upvote/Downvote/Share functionality.",
      "Membership Page: Stripe integration for membership purchases to post more than 5 posts.",
      "Authentication: Social and Email/Password login using Firebase.",
      "User Dashboard: My Profile, Add Post, and Manage Posts functionality.",
      "Admin Dashboard: Site stats with pie charts, tag management, and user management.",
      "Reported Comments: Admin capability to manage reported comments and ban users."
    ],
    challenges: [
      "Admin profile page with stats and a pie chart.",
      "JWT for secure login and role-based access.",
      "Firebase and MongoDB credentials secured with environment variables.",
      "Tanstack Query for efficient data fetching.",
      "Pagination in all tables and posts."
    ],
    improvementsNeeded: [
      "Improve detail page UI for a more interactive experience.",
      "Add multi-language support for a more diverse user base.",
      "Optimize loading times for data-heavy sections of the app."
    ],
    links: {
      livePreview: "https://post-pad.web.app/",
      githubClient: "https://github.com/sayed725/PostPad-Client",
      githubServer: "https://github.com/sayed725/PostPad-Server",
      readme: "https://github.com/sayed725/PostPad-Client/blob/main/README.md"
    },
  },
  {
    id: 5,
    name: "BiteBank",
    homeImage: "/bite_bank/Bite-Bnak-Home.jpg",
    category: "fullstack",
    title: "A Food Sharing Website that allows users to add, get, update and delete food operation on several places.",
    description: "BiteBank is a user-friendly food sharing platform built with the MERN Stack (MongoDB, Express.js, React.js, Node.js). It supports CRUD operations (add, get, update, delete) for food items, allowing users to manage and request available foods. Features include a banner with top food slides, detailed food pages with request functionality, search by food title, sort and layout toggle options, and user dashboards for managing added and requested foods.",
    techStack: [
      "React", "Tailwind CSS", "Daisy Ui", "React Silk", "Tanstack Query",
      "FireBase", "SweetAlert", "Toastify", "JWT", "Node.Js", "Express.Js", "MongoDB"
    ],
    images: [
      { src: "/bite_bank/Bite-Bnak-Home.jpg", alt: "Home Page" },
      { src: "/bite_bank/Bite-Bank-availablefood.jpg", alt: "Available Food" },
      { src: "/bite_bank/Bite-Bnak-fooddetails.jpg", alt: "Food Details" },
      { src: "/bite_bank/Bite-bank-addfood.jpg", alt: "Add Food" },
      { src: "/bite_bank/Bite-bank-managefood.jpg", alt: "Manage Food" },
    ],
    keyFeatures: [
      "Beautiful slides showcasing top foods on the banner.",
      "Add food functionality in the add food section.",
      "Food detail page accessible via View Details button for logged-in users.",
      "Request button on food details section to request food preparation.",
      "Manage my food section for users to view, edit, and delete their added foods.",
      "Search functionality on available food page by food title.",
      "Sort and layout toggle buttons in available food section.",
    ],
    improvementsNeeded: [
      "Improve detail page UI for a more interactive experience.",
      "Add multi-language support for a more diverse user base.",
      "Optimize loading times for data-heavy sections of the app.",
    ],
    links: {
      livePreview: "https://a-11-bite-bank.web.app",
      githubClient: "https://github.com/sayed725/BiteBank-Client",
      githubServer: "https://github.com/sayed725/BiteBank-Server",
      readme: "https://github.com/sayed725/BiteBank-Client/blob/main/README.md"
    },
  },
  {
    id: 6,
    name: "Movielify",
    homeImage: "/movielify/Movielify Home.jpg",
    category: "fullstack",
    title: "A user-friendly website for exploring movies, viewing movie details, adding movies and deleting movies while managing user favorites.",
    description: "Movielify is a user-friendly movie portal built with the MERN Stack (MongoDB, Express.js, React.js, Node.js). It simplifies exploring movies, viewing details, adding movies, and managing user favorites. Features include a banner with top movie slides, detailed movie pages with favorite functionality, and a user dashboard for viewing favorite movies, all designed for a seamless user experience.",
    techStack: [
      "React", "Tailwind CSS", "Daisy Ui", "FireBase", "Swiper.js", "React Hook Form",
      "React Star Rating", "SweetAlert", "Node.Js", "Express.Js", "MongoDB"
    ],
    images: [
      { src: "/movielify/Movielify Home.jpg", alt: "Home Page" },
      { src: "/movielify/Movielify-moviedetails.jpg", alt: "Movie Details" },
      { src: "/movielify/Movielify-addmovies.jpg", alt: "Add Movies" },
      { src: "/movielify/Movielify all movie cards.jpg", alt: "Movie Cards" },
    ],
    keyFeatures: [
      "Beautiful slides showcasing top movies on the banner.",
      "Explore Details button navigates logged-in users to the movie detail page for more information.",
      "Add to Favorite and Remove buttons on movie details section to manage favorite movies.",
      "Add Movie section for users to input their favorite movie details.",
      "My Favorite section to view all movies marked as favorites by the user.",
    ],
    improvementsNeeded: [
      "Improve detail page UI for a more interactive experience.",
      "Add multi-language support for a more diverse user base.",
      "Optimize loading times for data-heavy sections of the app.",
    ],
    links: {
      livePreview: "https://assignment-10-b0e3a.web.app",
      githubClient: "https://github.com/sayed725/MovieLify-client",
      githubServer: "https://github.com/sayed725/MovieLify-Server",
      readme: "https://github.com/sayed725/MovieLify-client/blob/main/README.md"
    },
  },
  {
    id: 7,
    name: "Green Edventures",
    homeImage: "/green/green-home.jpg",
    category: "frontend",
    title: "A Travel Booking Website that provides information on various eco-adventure options, to browse and learn more about each experience.",
    description: "Green Edventures is a React-based platform for eco-friendly travel, enabling users to explore adventures like Forest and Mangrove Forest Expeditions. It provides detailed information on eco-adventure options, allowing users to browse, learn about tours, connect with experts, and manage their profiles. The application focuses on delivering a seamless and informative user experience.",
    techStack: [
      "React", "Tailwind CSS", "Daisy Ui", "FireBase", "SweetAlert", "Toastify", "Swiper.js"
    ],
    images: [
      { src: "/green/green-home.jpg", alt: "Home Page" },
      { src: "/green/green-explore.jpg", alt: "Explore" },
      { src: "/green/greeen-destination.jpg", alt: "Destination" },
      { src: "/green/green discover.jpg", alt: "Discover" },
    ],
    keyFeatures: [
      "Beautiful slides showcasing eco-adventures on the banner.",
      "Explore Now button navigates logged-in users to the Adventure Detail page for tour details.",
      "Talk with Expert button on tour details section for connecting via Google Meet or phone.",
      "My Profile section for users to view and update their information.",
      "Forget Password option on login section to reset user passwords.",
    ],
    improvementsNeeded: [
      "Improve detail page UI for a more interactive experience.",
      "Add multi-language support for a more diverse user base.",
      "Optimize loading times for data-heavy sections of the app.",
    ],
    links: {
      livePreview: "https://assingment-10-5294b.web.app",
      githubClient: "https://github.com/sayed725/GREEN-EDVENTURES",
      readme: "https://github.com/sayed725/GREEN-EDVENTURES/blob/main/README.md"

    },
  }
];
