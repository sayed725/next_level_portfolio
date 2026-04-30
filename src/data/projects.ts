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
  };
  keyFeatures?: string[];
  challenges?: string[];
  improvementsNeeded?: string[];
}

export const projects: Project[] = [
  {
    id: 1,
    name: "Care Matrix (Team Project)",
    homeImage: "/CareMatrix Home.png",
    category: "fullstack",
    title:
      "A multi-role complete hospital management system for doctors, pharmacists, receptionist, administrators and patients.",
    description:
      "Care Matrix is a full-featured hospital management platform designed to streamline appointments, enhance internal communication, optimize pharmacy operations, and centralize admin controls for patients, doctors, pharmacists, receptionists and administrators. Care Matrix is a robust, role-based hospital management system developed by a 6-member team to revolutionize healthcare service delivery. As the team leader, I spearheaded the project's architecture, task delegation, team collaboration, and contributed significantly to the frontend, backend, and dashboard development.",
    techStack: [
      "React",
      "Redux Toolkit",
      "React Router",
      "Tailwind CSS",
      "ShadCN Ui",
      "Stripe",
      "Axios",
      "Tanstack Query",
      "Toastify",
      "Sooner",
      "JWT",
      "FireBase",
      "Node.Js",
      "Express.Js",
      "MongoDB",
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
    challenges: [
      "Implementing real-time chat without Socket.io using polling and TanStack Query.",
      "Managing complex role-based access across 5 different user types.",
      "Designing a scalable patient rewards system with points and redemption logic.",
      "Coordinating a 6-member team with task delegation and code reviews.",
    ],
    improvementsNeeded: [
      "Add WebSocket-based real-time notifications.",
      "Implement multi-language support for diverse users.",
      "Add comprehensive analytics dashboard with advanced charts.",
    ],
  },
  {
    id: 2,
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
    links: {
      livePreview: "https://post-pad.web.app/",
      github: "https://github.com/sayed725/PostPad-Client",
    },
    challenges: [
      "Admin profile page with stats and a pie chart.",
      "JWT for secure login and role-based access.",
      "Firebase and MongoDB credentials secured with environment variables.",
      "Tanstack Query for efficient data fetching.",
      "Pagination in all tables and posts.",
    ],
    improvementsNeeded: [
      "Improve detail page UI for a more interactive experience.",
      "Add multi-language support for a more diverse user base.",
      "Optimize loading times for data-heavy sections of the app.",
    ],
  },
  {
    id: 3,
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
    id: 4,
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
      "Explore Details button navigates to the movie detail page.",
      "Add to Favorite and Remove buttons on movie details section.",
      "Add Movie section for users to input their favorite movie details.",
      "My Favorite section to view all movies marked as favorites.",
    ],
    improvementsNeeded: [
      "Improve detail page UI for a more interactive experience.",
      "Add multi-language support for a more diverse user base.",
      "Optimize loading times for data-heavy sections of the app.",
    ],
  },
  {
    id: 5,
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
      "Explore Now button navigates to the Adventure Detail page.",
      "Talk with Expert button for connecting via Google Meet or phone.",
      "My Profile section for users to view and update their information.",
      "Forget Password option on login section to reset user passwords.",
    ],
    improvementsNeeded: [
      "Improve detail page UI for a more interactive experience.",
      "Add multi-language support for a more diverse user base.",
      "Optimize loading times for data-heavy sections of the app.",
    ],
  },
  {
    id: 6,
    name: "Gadget Heaven",
    homeImage: "/Gadjet Heaven Home.png",
    category: "frontend",
    title:
      "An e-commerce website showcasing tech products where users can view details and add to cart or wishlist.",
    description:
      "The platform is shopping of accessories. From smart devices to the coolest accessories are available. The platform is the responsive website. In here, users can browse products also browse by categories. They can view details of the product and would like to add to cart or watch list.",
    techStack: ["React", "Tailwind CSS", "Daisy Ui", "Toastify"],
    images: [{ src: "/Gadjet Heaven Home.png", alt: "Home Page" }],
    keyFeatures: [
      "Category buttons in home sidebar to filter products by type.",
      "Shop now button navigates to the dashboard section.",
      "Sort by Price button in Cart tab for descending order sorting.",
      "Purchase button with congratulation modal and cart reset.",
    ],
    improvementsNeeded: [
      "Improve detail page UI for a more interactive experience.",
      "Add multi-language support for a more diverse user base.",
      "Optimize loading times for data-heavy sections of the app.",
      "Add a search bar to find desired products.",
    ],
  },
];
