import PasswordGenerator from '../assets/portfolio1.jpg';
import ToDoList from '../assets/portfolio2.jpg';
import NextJsBlog from '../assets/portfolio4.jpg';
import BankDashboard from '../assets/bankdashboard.png';
import WeatherApp from '../assets/bankdashboard.png';
import Ecommerce from '../assets/portfolio6.jpg';

export const navItems = [
  {name: 'About', link: '#about'},
  {name: 'Projects', link: '#projects'},
  {name: 'Testimonials', link: '#testimonials'},
  {name: 'Contact', link: '#contact'},
];

export const gridItems = [
  {
    id: 1,
    title: 'I prioritize client collaboration, fostering open communication ',
    description: '',
    className: 'lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]',
    imgClassName: 'w-full h-full',
    titleClassName: 'justify-end',
    img: '/b1.svg',
    spareImg: '',
  },

  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: '',
    className: 'lg:col-span-2 md:col-span-3 md:row-span-2',
    imgClassName: '',
    titleClassName: 'justify-start',
    img: '',
    spareImg: '',
  },

  {
    id: 3,
    title: 'My tech stack',
    description: 'I constantly try to improve',
    className: 'lg:col-span-2 md:col-span-3 md:row-span-2',
    imgClassName: '',
    titleClassName: 'justify-center',
    img: '',
    spareImg: '',
  },

  {
    id: 4,
    title: 'Tech enthusiast with a passion for development.',
    description: '',
    className: 'lg:col-span-2 md:col-span-3 md:row-span-1',
    imgClassName: '',
    titleClassName: 'justify-start',
    img: '/grid.svg',
    spareImg: '/b4.svg',
  },

  {
    id: 5,
    title: 'Currently building a JS Animation library',
    description: 'The Inside Scoop',
    className: 'md:col-span-3 md:row-span-2',
    imgClassName: 'absolute right-0 bottom-0 md:w-96 w-60',
    titleClassName: 'justify-center md:justify-start lg:justify-center',
    img: '/b5.svg',
    spareImg: '/grid.svg',
  },

  {
    id: 6,
    title: 'Do you want to start a project together?',
    description: '',
    className: 'lg:col-span-2 md:col-span-3 md:row-span-1',
    imgClassName: '',
    titleClassName: 'justify-center md:max-w-full max-w-60 text-center',
    img: '',
    spareImg: '',
  },
];

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

export const projects = [
  {
    id: 1,
    title: '3D Solar System Planets to Explore',
    des: 'Explore the wonders of our solar system with this captivating 3D simulation of the planets using Three.js.',
    img: '/p1.svg',
    iconLists: ['/re.svg', '/tail.svg', '/ts.svg', '/three.svg', '/fm.svg'],
    link: '/ui.earth.com',
  },
  {
    id: 2,
    title: 'Yoom - Video Conferencing App',
    des: 'Simplify your video conferencing experience with Yoom. Seamlessly connect with colleagues and friends.',
    img: '/p2.svg',
    iconLists: ['/next.svg', '/tail.svg', '/ts.svg', '/stream.svg', '/c.svg'],
    link: '/ui.yoom.com',
  },
  {
    id: 3,
    title: 'AI Image SaaS - Canva Application',
    des: 'A REAL Software-as-a-Service app with AI features and a payments and credits system using the latest tech stack.',
    img: '/p3.svg',
    iconLists: ['/re.svg', '/tail.svg', '/ts.svg', '/three.svg', '/c.svg'],
    link: '/ui.aiimg.com',
  },
  {
    id: 4,
    title: 'Animated Apple Iphone 3D Website',
    des: 'Recreated the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects..',
    img: '/p4.svg',
    iconLists: ['/next.svg', '/tail.svg', '/ts.svg', '/three.svg', '/gsap.svg'],
    link: '/ui.apple.com',
  },
];

export const testimonials = [
  {
    quote:
      "Collaborating with Francis was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Francis's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Francis is the ideal partner.",
    name: 'Michael Johnson',
    title: 'Director of AlphaStream Technologies',
  },
  {
    quote:
      "Collaborating with Francis was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Francis's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Francis is the ideal partner.",
    name: 'Michael Johnson',
    title: 'Director of AlphaStream Technologies',
  },
  {
    quote:
      "Collaborating with Francis was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Francis's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Francis is the ideal partner.",
    name: 'Michael Johnson',
    title: 'Director of AlphaStream Technologies',
  },
  {
    quote:
      "Collaborating with Francis was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Francis's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Francis is the ideal partner.",
    name: 'Michael Johnson',
    title: 'Director of AlphaStream Technologies',
  },
  {
    quote:
      "Collaborating with Francis was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Francis's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Francis is the ideal partner.",
    name: 'Michael Johnson',
    title: 'Director of AlphaStream Technologies',
  },
];

export const companies = [
  {
    id: 1,
    name: 'cloudinary',
    img: '/cloud.svg',
    nameImg: '/cloudName.svg',
  },
  {
    id: 2,
    name: 'appwrite',
    img: '/app.svg',
    nameImg: '/appName.svg',
  },
  {
    id: 3,
    name: 'HOSTINGER',
    img: '/host.svg',
    nameImg: '/hostName.svg',
  },
  {
    id: 4,
    name: 'stream',
    img: '/s.svg',
    nameImg: '/streamName.svg',
  },
  {
    id: 5,
    name: 'docker.',
    img: '/dock.svg',
    nameImg: '/dockerName.svg',
  },
];

export const workExperience = [
  {
    id: 1,
    title: 'BuyIt - Deulo Software Lab ( DSL )',
    desc: 'Currently developing BuyIt, a web platform that facilitates order placement, processes purchases on behalf of users, and ensures delivery to any location.',
    className: 'md:col-span-2', // change to md:col-span-2
    thumbnail: '/exp2.svg',
  },
  {
    id: 2,
    title: 'Frontend Engineer Intern',
    desc: 'Assisted in the development of a web-based platform using React.js for MegaBoss, enhancing interactivity.',
    className: 'md:col-span-2',
    thumbnail: '/exp1.svg',
  },

  {
    id: 3,
    title: 'Freelance App Dev Project',
    desc: 'Led the dev of a mobile app for a client, from initial concept to deployment on app stores.',
    className: 'md:col-span-2', // change to md:col-span-2
    thumbnail: '/exp3.svg',
  },
  {
    id: 4,
    title: 'Lead Frontend Developer',
    desc: 'Developed and maintained user-facing features using modern frontend technologies.',
    className: 'md:col-span-2',
    thumbnail: '/exp4.svg',
  },
];

export const socialMedia = [
  {
    id: 1,
    img: '/git.svg',
    link: 'https://github.com/Engrfran6/deulo',
  },
  {
    id: 2,
    img: '/twit.svg',
    link: 'https://x.com/deulo',
  },
  {
    id: 3,
    img: '/link.svg',
    link: 'https://linkedin.com/in/deulo',
  },
];

// aboutMe.js

export const aboutMe = {
  about: {
    paragragh1: `
    Francis U. Okpoluaefe is a self-taught Fullstack Software Engineer with a strong focus on frontend development. He brings an end-to-end approach to product building, drawing from his background in Electrical/Electronics & Computer Engineering from Delta State University and hands-on experience in both UI/UX Design and backend development. His journey as a developer has spanned over 4 years, during which he earned a professional certificate in Front-End Development from Meta and Front-End Developer (React) certificate from HackerRank,...`,
    paragragh2: `
    Based in Porthacourt, NG, his work is recognized for its meticulous attention to
    detail and visual appeal, seamlessly integrating user-friendly interfaces with
    well-crafted business logic. Francis&apos;s dedication to crafting responsive web
    experiences is evident in his use of Tailwind CSS to create sleek, user-centric
    designs that prioritize satisfaction and engagement.
    `,
    paragragh3: `
    He stays up-to-date with the latest trends and tools in web technology, ensuring
    that every project is not only responsive and scalable but also aligned with
    industry best practices. His proficiency with GitFlow facilitates seamless version
    control, enhancing collaboration with other developers.
    `,
    paragragh4: `
    Francis thrives in team environments, where he can contribute to and learn from
    fellow developers, continuously expanding his skill set. His goal is to contribute
    to innovative projects that challenge him and allow him to grow as a developer,
    building web experiences that are both functional and delightful to use.
    `,
    paragragh5: '',
  },

  mySkill: {list1: ''},

  communities: '',
  journey: '',

  hobbies: `
   Although not deeply into music, Francis enjoys it, with Jon Bellion's songs being
    among his favorites. A creative at heart, he loves traveling, exploring, and appreciating
    art. When he's not immersed in writing code, designing, building, or learning
    something new, you'll likely find him playing video games (FIFA, PES, Mortal Kombat),
    swimming, playing a game of snooker, catching up with family, friends, and acquaintances,
    or simply enjoying some downtime with good food and rest.
  `,
};
