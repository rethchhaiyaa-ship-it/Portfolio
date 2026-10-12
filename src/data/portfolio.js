// Content for the site. Replace the placeholder values marked TODO
// with your real details before publishing.

export const profile = {
  name: 'Reth Chhaiya', // TODO
  location: 'Phnom Penh, Cambodia',
  photo: 'profile_2.png', // TODO — '/profile.jpg' (place the file in public/), or null to hide
  email: 'rethchhaiyaa@gmail.com', // TODO
  github: 'https://github.com/rethchhaiyaa-ship-it', // TODO
  linkedin: null, // TODO — set a URL or leave null
  intro:
    'I am based in Phnom Penh, Cambodia. I am drawn to frontend work because it is the part of software people actually touch, but I enjoy the full range — building APIs, designing data models, and understanding what happens below the browser.',
  about: [
    'I started programming because I wanted to understand how the things I used every day actually worked. That curiosity is still what drives me. I like taking a problem, breaking it down, and building something that works well enough to be useful.',
    'Most of what I have built so far has been for practice and for coursework — management systems, a trip planner, a packet sniffer. None of it is enormous, but each one taught me something I could not have read about.',
    'I am still early in my career, and I say that plainly because it is true. What I have is a habit of finishing things, a growing comfort with the tools below, and the willingness to keep learning in public.',
  ],
}

export const projects = [
  {
    title: 'Glasses Management System',
    description:
      'A web application for managing eyewear products, inventory, and customer orders. Built as a full-stack exercise with a React interface backed by a Spring Boot REST API and MySQL.',
    tech: ['React', 'Tailwind CSS', 'Spring Boot', 'MySQL'],
    repo: 'https://github.com/Glassses-Management/Glasses-Management-Frontend.git', // TODO — GitHub URL
    demo: null, // TODO — live demo URL
    image: 'glasses.png', // TODO — path to a screenshot, e.g. '/projects/glasses.png'
  },
  {
    title: 'Tourism and Trip Planning Website',
    description:
      'A front-end project for browsing destinations and planning an itinerary, with saved trips and destination detail pages.',
    tech: ['React', 'Tailwind CSS'],
    repo: 'https://github.com/NalenSrin123/tour-trip-front-sun-2.git', // TODO — GitHub URL
    demo: null, // TODO — live demo URL
    image: 'tour-trip.png', // TODO — path to a screenshot
  },
  {
    title: 'C++ Cafe Management System',
    description:
      'A console application modelling menu items, orders, and billing in C++, using object-oriented design to keep the domain logic separate from the interface.',
    tech: ['C++', 'OOP'],
    repo: 'https://github.com/rethchhaiyaa-ship-it/CafeSystem.git', // TODO — GitHub URL
    demo: null,
    image: null,
  },
  {
    title: 'E-commerce',
    description:
      'An E-commerce system about food using Reactjs + Tailwind. Order, payment, using static data.',
    tech: ['React', 'Tailwind CSS', 'JavaScript'],
    repo: 'https://github.com/rethchhaiyaa-ship-it/Ecommerce-.git', // TODO — GitHub URL
    demo: 'https://react-e-comerce-final-project-khaki.vercel.app/',
    image: 'foodi.png',
  },
]

export const skillGroups = [
  {
    title: 'Frontend',
    items: ['HTML', 'CSS', 'JavaScript', 'React', 'Tailwind CSS'],
  },
  {
    title: 'Backend',
    items: ['Java', 'Spring Boot', 'REST APIs', 'MySQL'],
  },
  {
    title: 'Programming',
    items: ['C++', 'Object-oriented programming', 'Networking fundamentals'],
  },
  {
    title: 'Tools',
    items: ['Git', 'GitHub', 'VS Code', 'Postman'],
  },
]

export const navLinks = [
  { label: 'About', id: 'about' },
  { label: 'Projects', id: 'projects' },
  { label: 'Skills', id: 'skills' },
  { label: 'Contact', id: 'contact' },
]