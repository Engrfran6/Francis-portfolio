import PasswordGenerator from '../assets/portfolio1.jpg';
import ToDoList from '../assets/portfolio2.jpg';
import IMG3 from '../assets/portfolio3.jpg';
import NextJsBlog from '../assets/portfolio4.jpg';
import BankDashboard from '../assets/bankdashboard.png';
import WeatherApp from '../assets/bankdashboard.png';
import Ecommerce from '../assets/portfolio6.jpg';

export const projectList = [
  {
    image: BankDashboard,
    tech: 'NextJs, JavaScript',
    title: 'Modern Bank Dashboard',
    description:
      "This Modern Bank Dashboard showcases a clean and responsive user interface designed for financial institutions. Built using Next.js for seamless server-side rendering and client-side transitions, and powered by JavaScript for interactive features. This project highlights efficiency in managing financial data, secure authentication processes, and real-time transaction tracking. The dashboard's design focuses on user experience and accessibility, ensuring smooth navigation across multiple devices. ",
    route: '/portfolio/project-1',
  },
  {
    image: PasswordGenerator,
    tech: 'HTML, CSS, JavaScript',
    title: 'Random Password Generator',
    description:
      'The Random Password Generator is a simple yet powerful tool designed to generate secure and complex passwords with just a click. Built using HTML, CSS, and JavaScript, this project focuses on both functionality and user experience. The intuitive interface allows users to customize password length and include various character sets such as numbers, symbols, and letters. This tool ensures password strength, enhancing online security and privacy across multiple platforms.',
    route: '/portfolio/project-1',
  },

  {
    image: NextJsBlog,
    tech: 'NextJs, Redux, Tailwind CSS',
    title: 'Portfolio Website',
    description:
      'This Portfolio Website is a dynamic and visually appealing personal site built using React and styled with Tailwind CSS. The project focuses on showcasing professional work, skills, and achievements in an elegant, responsive design. Utilizing React for seamless navigation and component-based architecture, and Tailwind CSS for efficient, modern styling, this portfolio demonstrates a deep understanding of both web development and design principles. The clean layout ensures optimal performance across devices, enhancing the user experience while leaving a lasting impression.',
    readingTime: '3 min read',
    route: '/portfolio/project-1',
  },
  {
    image: Ecommerce,
    tech: 'NextJs, Redux, JavaScript',
    title: 'E-commerce Website',
    description:
      'This E-commerce Website provides a robust platform for online shopping, developed with Next.js for optimized performance and SEO, Redux for efficient state management, and JavaScript for interactivity. The site includes features such as product browsing, shopping cart management, and a smooth checkout process, all within a fast, responsive, and user-friendly interface. Built to scale, this platform seamlessly handles dynamic data and user interactions, ensuring an engaging shopping experience for customers.',
    readingTime: '5 min read',
    route: '/portfolio/project-1',
  },
  {
    image: WeatherApp,
    tech: 'HTML, CSS, JavaScript',
    title: 'Weather App',
    description: 'Lorem ipsum dolor sit amet, co',
    route: '/portfolio/project-1',
  },
  {
    image: ToDoList,
    tech: 'React, Redux, CSS',
    title: 'To-Do List App',
    description: 'Lorem ipsum dolor sit amet, cons',
    readingTime: '2 min read',
    route: '/portfolio/project-1',
  },

  {
    image: NextJsBlog,
    tech: 'Node.js, Express.js, MongoDB',
    title: 'Blog Platform',
    description: 'Lorem ipsum dolor sit amet, ',
    readingTime: '4 min read',
    route: '/portfolio/project-1',
  },
];
