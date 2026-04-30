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
    homeImage: "/urban-snacks-1.png",
    category: "fullstack",
    title: "A modern, premium platform for authentic Bangladeshi snacks featuring a full-featured admin dashboard and dual payment gateways.",
    description: "Urban Snacks is a modern, premium platform for authentic Bangladeshi snacks. Built for visual excellence, buttery-smooth interactions, and a complete shopping experience — from discovery to doorstep delivery. It features a full-featured admin dashboard with real-time analytics, inventory management, and order processing.",
    techStack: [
      "Next.js 16", "Tailwind CSS 4", "Shadcn/UI", "TypeScript 5", "Better Auth", 
      "Zustand", "TanStack Query", "Framer Motion", "React Hook Form", "Zod", 
      "Recharts", "Stripe", "SSLCommerz"
    ],
    images: [
      { src: "/urban-snacks-1.png", alt: "Home Page" },
      { src: "/urban-snacks-2.png", alt: "Admin Dashboard" },
      { src: "/urban-snacks-3.png", alt: "Shopping Cart" },
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
      livePreview: "https://www.facebook.com/Urbansnacks.store",
      githubClient: "https://github.com/sayed725/urban_snacks_client",
      githubServer: "https://github.com/sayed725/urban_snacks_server",
      readme: "#"
    }
  },
  {
    id: 2,
    name: "Brainy",
    homeImage: "/brainy-1.png",
    category: "fullstack",
    title: "A modern, full-featured online tutoring marketplace and skill sharing platform built for visual excellence and role-based security.",
    description: "Brainy is a comprehensive online tutoring marketplace designed to connect students with expert tutors. It features a robust role-based architecture with dedicated dashboards for Students, Tutors, and Administrators. The platform emphasizes visual excellence, snappy interactions, and secure data handling using modern web technologies.",
    techStack: [
      "Next.js 16", "Tailwind CSS 4", "Shadcn/UI", "TypeScript 5", "Better Auth", 
      "Framer Motion", "TanStack Table", "Recharts", "Zod", "React Hook Form", "Lottie"
    ],
    images: [
      { src: "/brainy-1.png", alt: "Home Page" },
      { src: "/brainy-2.png", alt: "Tutor Marketplace" },
      { src: "/brainy-3.png", alt: "Admin Dashboard" },
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
      githubClient: "https://github.com/sayed725/brainy_client",
      githubServer: "https://github.com/sayed725/brainy_server",
      readme: "#"
    }
  },
  {
    id: 3,
    name: "Care Matrix (Team Project)",
    homeImage: "/CareMatrix Home.png",
    category: "fullstack",
    title: "A multi-role complete hospital management system for doctors, pharmacists, receptionist, administrators and patients.",
    description: "Care Matrix Backend powers the Care Matrix hospital management system, a robust platform designed to digitize and streamline hospital operations, enhance patient care, and improve operational efficiency. This backend provides secure APIs for managing medical records, real-time communication, billing, inventory, and more, ensuring seamless coordination among medical professionals, administrators, receptionists, pharmacists, and patients.",
    techStack: [
      "React", "Redux Toolkit", "React Router", "Tailwind CSS", "ShadCN Ui", 
      "Stripe", "Axios", "Tanstack Query", "Toastify", "Sooner", "JWT", 
      "FireBase", "Node.Js", "Express.Js", "MongoDB"
    ],
    images: [
      { src: "/careMatrix available bed.png", alt: "Available Beds" },
      { src: "/careMtrix About us.png", alt: "About Us" },
      { src: "/careMtrix appointment bokking.png", alt: "Appointment Booking" },
      { src: "/careMtrix doctor overview.png", alt: "Doctor Overview" },
      { src: "/careMatrix  revenue.png", alt: "Revenue Dashboard" },
      { src: "/CareMatrix add bed.png", alt: "Add Bed" },
      { src: "/careMatrix buy medicine.png", alt: "Buy Medicine" },
      { src: "/carematrix recept Overview.png", alt: "Receptionist Overview" },
      { src: "/careMtrix payment record.png", alt: "Payment Record" },
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
      livePreview: "#",
      githubClient: "#",
      githubServer: "#",
      readme: "#"
    },
  },
  {
    id: 4,
    name: "PostPad",
    homeImage: "/Post-pad Home-Dark.png",
    category: "fullstack",
    title:
      "A forum-building website enabling users to post, comment, vote, and share content in real-time.",
    description:
      "This project is a fully responsive and interactive forum built using the MERN Stack (MongoDB, Express.js, React.js, Node.js). The platform allows users to post, comment, vote, and share content in real-time. Admins can manage users, announcements, and reported activities. The purpose is to create a scalable web application focusing on user experience, performance, and security.",
    techStack: [
      "React",
      "Tailwind CSS",
      "Daisy Ui",
      "React Hook Form",
      "Stripe",
      "Tanstack Query",
      "FireBase",
      "SweetAlert",
      "Toastify",
      "JWT",
      "Node.Js",
      "Express.Js",
      "MongoDB",
    ],
    images: [
      { src: "/Postpad-Home.png", alt: "Home Page" },
      { src: "/postPad-post-details.png", alt: "Post Details" },
      { src: "/PostPad-admin-home.png", alt: "Admin Dashboard" },
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
      github: "https://github.com/sayed725/PostPad-Client",
      readme: "#"
    },
  },
  {
    id: 5,
    name: "BiteBank",
    homeImage: "/bitebank-1.jpeg",
    category: "fullstack",
    title:
      "A Food Sharing Website that allows users to add, get, update and delete food operation on several places.",
    description:
      "BiteBank is a user-friendly food sharing platform built with the MERN Stack (MongoDB, Express.js, React.js, Node.js). It supports CRUD operations (add, get, update, delete) for food items, allowing users to manage and request available foods. Features include a banner with top food slides, detailed food pages with request functionality, search by food title, sort and layout toggle options, and user dashboards for managing added and requested foods.",
    techStack: [
      "React",
      "Tailwind CSS",
      "Daisy Ui",
      "React Silk",
      "Tanstack Query",
      "FireBase",
      "SweetAlert",
      "Toastify",
      "JWT",
      "Node.Js",
      "Express.Js",
      "MongoDB",
    ],
    images: [
      { src: "/Bite-Bank-availablefood.png", alt: "Available Food" },
      { src: "/Bite-bank-managefood.png", alt: "Manage Food" },
      { src: "/Bite-Bnak-fooddetails.png", alt: "Food Details" },
      { src: "/Bite-bank-addfood.png", alt: "Add Food" },
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
  },
  {
    id: 6,
    name: "Movielify",
    homeImage: "/Movielify Home.png",
    category: "fullstack",
    title:
      "A user-friendly website for exploring movies, viewing movie details, adding movies and deleting movies while managing user favorites.",
    description:
      "Movielify is a user-friendly movie portal built with the MERN Stack (MongoDB, Express.js, React.js, Node.js). It simplifies exploring movies, viewing details, adding movies, and managing user favorites. Features include a banner with top movie slides, detailed movie pages with favorite functionality, and a user dashboard for viewing favorite movies, all designed for a seamless user experience.",
    techStack: [
      "React",
      "Tailwind CSS",
      "Daisy Ui",
      "FireBase",
      "Swiper.js",
      "React Hook Form",
      "React Star Rating",
      "SweetAlert",
      "Node.Js",
      "Express.Js",
      "MongoDB",
    ],
    images: [
      { src: "/Movielify Home.png", alt: "Home Page" },
      { src: "/Movielify-moviedetails.png", alt: "Movie Details" },
      { src: "/Movielify-addmovies.png", alt: "Add Movies" },
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
      livePreview: "#",
      github: "#",
      readme: "#"
    },
  },
  {
    id: 7,
    name: "Green Edventures",
    homeImage: "/green-home.png",
    category: "frontend",
    title:
      "A Travel Booking Website that provides information on various eco-adventure options, to browse and learn more about each experience.",
    description:
      "Green Edventures is a React-based platform for eco-friendly travel, enabling users to explore adventures like Forest and Mangrove Forest Expeditions. It provides detailed information on eco-adventure options, allowing users to browse, learn about tours, connect with experts, and manage their profiles. The application focuses on delivering a seamless and informative user experience.",
    techStack: [
      "React",
      "Tailwind CSS",
      "Daisy Ui",
      "FireBase",
      "SweetAlert",
      "Toastify",
      "Swiper.js",
    ],
    images: [
      { src: "/green-home.png", alt: "Home Page" },
      { src: "/greeen-destination.png", alt: "Destination" },
      { src: "/green discover.png", alt: "Discover" },
      { src: "/green-explore.png", alt: "Explore" },
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
      livePreview: "https://green-edventures.web.app/",
      github: "https://github.com/sayed725/Green-Edventures",
      readme: "#"
    },
  }
];
