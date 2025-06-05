'use client'

import { useState, useEffect } from "react";
import Image from 'next/image';


export const projects = [
  {
    title: "Food Delivery App",
    desc: "Experience the future of food delivery with cutting-edge UI & UX design.",
    link: "https://www.figma.com/proto/brHV730R3BGB87A1H2qq7i/Untitled?node-id=92%3A2514&scaling=scale-down&page-id=0%3A1&starting-point-node-id=92%3A2514&show-proto-sidebar=1",
    img: "/fooddeliveryapp.png",
    imgPosition: 'center top',
  },
  {
    title: "Food Delivery Website",
    desc: "Beautiful UI focused on usability and aesthetics.",
    link: "https://www.figma.com/proto/23BU5hY131jrvsWevT6vJG/Untitled?node-id=46-3492&t=R8PqsoGuHJnFqQm5-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=11%3A26&show-proto-sidebar=1",
    img: "/fooddeliverywebsite.png",
    imgPosition: 'center top',
  },
  {
    title: "Watch website Design",
    desc: "Innovative Apple iWatch landing page design.",
    link: "https://www.figma.com/proto/xOa7SpyqHmu3CRAnzvdhqp/watch?node-id=1-6&t=1qwVwwCZ3KpNRbwT-0&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1",
    img: "/watch.png"
  },
  {
    title: "Login Page Design",
    desc: "User-friendly signup/login screens design.",
    link: "https://www.figma.com/proto/cgJuC5pGJ59kaIqSTLUpTT/login?node-id=102-29&t=D4QFYh3louhmj4R3-0&scaling=min-zoom&content-scaling=fixed&page-id=1%3A18",
    img: "/login.png"
  },
  {
    title: "HRMS Website",
    desc: "Employee management system UI/UX design.",
    link: "https://www.figma.com/proto/kuNvtJ8CL0G0TrgZiUPc7g/Untitled?type=design&node-id=56-7828&t=qOGr1vFeFef6w5oN-0&scaling=contain&page-id=1%3A414&starting-point-node-id=56%3A7828",
    img: "/HRMS.png"
  },
  {
    title: "Radboards App",
    desc: "All-in-one electric transport rental and ecommerce app design.",
    link: "https://www.figma.com/proto/VvJxx0JLMMzqKDhgIakze0/RADBOARDS-APP?node-id=113-4982&node-type=frame&t=ILIJijGluYSRqetN-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=113%3A4982&show-proto-sidebar=1",
    img: "/radboards.png"
  },
];


export const testimonials = [
  {
    name: "Kiran Makam",
    company: "Radboards Pvt Ltd.",
    feedback: "Vamshi&rsquo;ss UI/UX designs elevated our app's usability and visual appeal significantly.",
    avatar: "/" // Replace with actual avatar path
  },
  {
    name: "Akiesh",
    company: "Radboards Pvt Ltd.",
    feedback: "Creative and user-friendly designs delivered on time with great communication.",
    avatar: "/"
  },
  
];


export const socialLinks = [
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/duvamshi",
    icon: (
      <svg
        height="24"
        width="24"
        viewBox="0 0 24 24"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        className="transition duration-300 hover:text-[#0077B5] hover:scale-110"
      >
        <path d="M4.98 3.5C4.98 4.6 4.1 5.5 3 5.5S1 4.6 1 3.5 1.88 1.5 3 1.5s1.98.9 1.98 2zM2 8h4v12H2zM8 8h3v1.7C11.3 8.6 13 8 14.5 8c3.04 0 4.5 2.1 4.5 5.2V20h-4v-6c0-1.6-.6-2.5-1.7-2.5S11 12.4 11 14v6H8z" />
      </svg>
    )
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/vamshidu/",
    icon: (
      <svg
        height="24"
        width="24"
        viewBox="0 0 24 24"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        className="transition duration-300 hover:text-pink-500 hover:scale-110"
      >
        <path d="M7.75 2h8.5A5.75 5.75 0 0122 7.75v8.5A5.75 5.75 0 0116.25 22h-8.5A5.75 5.75 0 012 16.25v-8.5A5.75 5.75 0 017.75 2zm0 2A3.75 3.75 0 004 7.75v8.5A3.75 3.75 0 007.75 20h8.5a3.75 3.75 0 003.75-3.75v-8.5A3.75 3.75 0 0016.25 4h-8.5zm8.5 1.5a1 1 0 110 2 1 1 0 010-2zM12 7a5 5 0 110 10 5 5 0 010-10zm0 2a3 3 0 100 6 3 3 0 000-6z" />
      </svg>
    )
  },
  {
    name: "WhatsApp",
    url: "https://wa.me/917760706020",
    icon: (
      <svg
        height="24"
        width="24"
        viewBox="0 0 24 24"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        className="transition duration-300 hover:text-green-500 hover:scale-110"
      >
        <path d="M16.98 13.22c-.29-.14-1.7-.84-1.96-.94-.26-.11-.44-.14-.63.14-.2.29-.77.94-.95 1.14-.17.2-.34.22-.63.07-.29-.15-1.22-.45-2.33-1.44-.86-.77-1.44-1.72-1.61-2.01-.17-.29-.02-.45.13-.59.14-.14.29-.34.44-.51.14-.17.19-.29.29-.48.1-.2.05-.36-.02-.51-.07-.15-.63-1.52-.86-2.08-.23-.55-.46-.48-.63-.49-.16-.01-.35-.01-.54-.01s-.5.07-.76.36c-.26.29-1 1-.98 2.44.02 1.44 1.02 2.84 1.16 3.04.14.2 2.01 3.06 4.87 4.29.68.29 1.21.46 1.63.59.68.21 1.3.18 1.79.11.55-.08 1.7-.69 1.94-1.35.24-.66.24-1.22.17-1.35-.07-.14-.26-.22-.54-.36zM12 2C6.48 2 2 6.48 2 12a9.91 9.91 0 002.82 7.05L2 22l2.96-.75A9.91 9.91 0 0012 22c5.52 0 10-4.48 10-10S17.52 2 12 2z" />
      </svg>
    )
  },
];



export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [mounted, setMounted] = useState(false); 

  
  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'projects', 'about', 'contact', 'testimonials'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setActiveSection(id);
    }
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const handleTilt = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * 8;
    const rotateY = ((x - centerX) / centerX) * 8;
    card.style.transform = `perspective(600px) rotateX(${-rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
  };

  const resetTilt = (e) => {
    e.currentTarget.style.transform = "perspective(600px) rotateX(0deg) rotateY(0deg) scale(1)";
  };

  
  if (!mounted) return null;
  return (
    <div className={darkMode ? 'min-h-screen bg-gray-900 text-gray-100' : 'min-h-screen bg-gray-100 text-gray-900'}>

      {/* Header */}
      <header
  style={{
    position: 'fixed',
    top: '20px',
    left: '132px',
    width: '1200px',
    borderRadius: '20px',
    zIndex: 50,
    backdropFilter: 'blur(12px)',
    backgroundColor: darkMode ? 'rgba(45, 55, 72, 0.85)' : 'rgba(255, 255, 255, 0.8)',
    boxShadow: darkMode
      ? '0 4px 12px rgba(0,0,0,0.6)'
      : '0 4px 12px rgba(0,0,0,0.1)',
    border: darkMode ? '1px solid rgba(255,255,255,0.1)' : '1px solid rgba(0,0,0,0.05)',
  }}
>
  <div className="container mx-auto px-6 py-4 flex justify-between items-center">
    <div 
      className="text-2xl font-extrabold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-teal-400 cursor-pointer"
      onClick={() => handleScrollTo('home')}
    >
      D U VAMSHI
    </div>

    <nav className="hidden md:flex gap-8 relative">
      {['home', 'projects', 'about', 'testimonials', 'contact'].map((section) => (
        <div
          key={section}
          className={`relative cursor-pointer uppercase text-sm font-semibold tracking-wider transition-all duration-300 
            ${activeSection === section 
              ? (darkMode ? 'text-blue-400' : 'text-blue-600') 
              : (darkMode ? 'text-gray-300' : 'text-gray-600')}
            hover:text-blue-500`}
          onClick={() => handleScrollTo(section)}
        >
          {section}
          {activeSection === section && (
            <span className={`absolute -bottom-1 left-0 w-full h-[2px] rounded-full 
              ${darkMode ? 'bg-blue-400' : 'bg-blue-600'} transition-all duration-300`} />
          )}
        </div>
      ))}
    </nav>

    <button
      onClick={toggleDarkMode}
      className={`px-4 py-2 rounded-full text-sm font-medium shadow-md transition-all duration-300 
        ${darkMode 
          ? 'bg-gray-700 text-gray-100 hover:bg-gray-600' 
          : 'bg-gray-200 text-gray-800 hover:bg-gray-300'}`}
    >
      {darkMode ? 'Light Mode' : 'Dark Mode'}
    </button>
  </div>
</header>


      {/* Hero Section */}
      <section 
  id="home" 
  className={`min-h-screen flex flex-col justify-center items-center text-center px-6 pt-16 relative overflow-hidden ${
    darkMode 
      ? 'bg-gradient-to-br from-gray-900 via-blue-950 to-black' 
      : 'bg-gradient-to-br from-blue-100 via-white to-black-200'
  }`}
>
  {/* Animated Floating Circles */}
  <div className="absolute inset-0 overflow-hidden z-0">
    {[...Array(25)].map((_, i) => {
      const size = Math.random() * 80 + 40
      return (
        <div 
          key={i}
          className={`absolute rounded-full filter blur-2xl opacity-40 ${darkMode ? 'bg-blue-800' : 'bg-blue-300'}`}
          style={{
            width: `${size}px`,
            height: `${size}px`,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animation: `float ${Math.random() * 4 + 6}s infinite ease-in-out`,
            animationDelay: `${Math.random() * 6}s`
          }}
        />
      )
    })}
  </div>

  <div className="relative z-10 max-w-4xl">
    <h1 className={`text-5xl md:text-7xl font-black mb-4 bg-gradient-to-r from-blue-500 via-black-200 to-blue-500 bg-clip-text text-transparent animate-pulseGlow`}>
      D U VAMSHI
    </h1>
    <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-gray-100 dark:text-blue-200">
      UI/UX Designer & Developer
    </h2>
    <p className="max-w-2xl mx-auto text-lg md:text-xl mb-12 text-gray-300 dark:text-gray-400">
      Creating secure, interactive, and user-friendly digital experiences that delight users and drive business results.
    </p>

    {/* Marquee */}
    <div className={`w-full overflow-hidden py-3 border-y-2 ${darkMode ? 'border-blue-400' : 'border-blue-500'} my-8`}>
      <div className="inline-block whitespace-nowrap animate-marquee">
        {['SECURE', 'INTERACTIVE', 'USER FRIENDLY', 'RESPONSIVE', 'ACCESSIBLE', 'INNOVATIVE'].map((word, i) => (
          <span key={i} className={`mx-8 text-xl font-bold ${darkMode ? 'text-blue-300' : 'text-blue-500'}`}>
            {word}
          </span>
        ))}
      </div>
    </div>

    {/* Buttons */}
    <div className="w-full flex justify-center gap-4 flex-wrap mt-12">
      <button 
        onClick={() => handleScrollTo('projects')}
        className={`px-8 py-3 rounded-full font-bold transition-all duration-300 ease-in-out
          hover:scale-105 hover:shadow-lg
          ${darkMode 
            ? 'bg-gradient-to-r from-blue-700 to-teal-500 text-white hover:from-blue-600 hover:to-teal-400' 
            : 'bg-gradient-to-r from-blue-500 to-teal-400 text-white hover:from-blue-600 hover:to-teal-500'}`}
      >
        View My Work
      </button>

      <button 
        onClick={() => handleScrollTo('contact')}
        className={`px-8 py-3 rounded-full font-bold transition-all duration-300 ease-in-out border-2
          hover:scale-105 hover:shadow-lg
          ${darkMode 
            ? 'border-blue-400 text-blue-300 hover:bg-blue-900/50 hover:text-white' 
            : 'border-blue-500 text-blue-600 hover:bg-blue-600 hover:text-white'}`}
      >
        Contact Me
      </button>
    </div>
  </div>
</section>


      {/* Projects Section */}
      <section 
        id="projects" 
        className={`py-20 px-6 ${darkMode ? ' bg-gray-900 text-gray-100' : 'bg-gray-100'}`}
      >
        <div className="container mx-auto">
          <h2 className={`text-4xl font-bold mb-4 text-center ${darkMode ? 'text-blue-300' : 'text-blue-600'}`}>
            My Projects
          </h2>
          <p className="text-xl text-center max-w-3xl mx-auto mb-16">
            Here are some of my recent UI/UX design projects. Click on any project to view the Figma prototype.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <a
                key={index}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                onMouseMove={handleTilt}
                onMouseLeave={resetTilt}
                className={`rounded-xl overflow-hidden ${darkMode ? 'bg-gray-700' : 'bg-white'} shadow-lg transition-all duration-300 hover:shadow-xl`}
                style={{ transformStyle: 'preserve-3d' }}
              >
                <div className="h-48 overflow-hidden relative">
                  <Image 
                    src={project.img} 
                    alt={project.title} 
                    fill
                    className={`object-cover object-top-left transition-transform duration-500 hover:scale-110 ${project.imgPosition ? 'object-' + project.imgPosition.replace(' ', '-') : ''}`}
                  />
                </div>
                <div className="p-6">
                  <h3 className={`text-xl font-bold mb-2 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                    {project.title}
                  </h3>
                  <p className={`mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    {project.desc}
                  </p>
                  <div className={`inline-flex items-center ${darkMode ? 'text-blue-300' : 'text-blue-500'} font-medium`}>
                    View Prototype
                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                    </svg>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section 
        id="about" 
        className={`py-20 px-6 ${darkMode ? 'bg-gray-900' : 'bg-white'}`}
      >
        <div className="container mx-auto max-w-4xl">
          <h2 className={`text-4xl font-bold mb-12 text-center ${darkMode ? 'text-blue-300' : 'text-blue-600'}`}>
            About Me
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className={`text-2xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                Who I Am
              </h3>
              <p className={`text-lg mb-6 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                I&apos;m a passionate UI/UX designer with expertise in creating intuitive and beautiful digital experiences. With a background in both design and development, I bridge the gap between aesthetics and functionality.
              </p>
              <p className={`text-lg ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                My approach combines user-centered design principles with modern aesthetics to create products that are not only visually appealing but also highly usable and accessible.
              </p>
            </div>
            
            <div>
              <h3 className={`text-2xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                Skills & Languages
              </h3>
              
              <div className="mb-6">
                <h4 className={`text-lg font-semibold mb-2 ${darkMode ? 'text-blue-300' : 'text-blue-500'}`}>
                  Design Skills
                </h4>
                <div className="flex flex-wrap gap-2">
                  {['UI/UX Design', 'Wireframing', 'Prototyping', 'User Research', 'Interaction Design', 'Figma', 'Adobe XD'].map((skill, i) => (
                    <span 
                      key={i} 
                      className={`px-3 py-1 rounded-full text-sm ${darkMode ? 'bg-gray-700 text-blue-300' : 'bg-blue-100 text-blue-600'}`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              
              <div>
                <h4 className={`text-lg font-semibold mb-2 ${darkMode ? 'text-blue-300' : 'text-blue-500'}`}>
                  Languages
                </h4>
                <div className="flex flex-wrap gap-2">
                  {['English', 'Kannada', 'Telugu', 'Hindi'].map((lang, i) => (
                    <span 
                      key={i} 
                      className={`px-3 py-1 rounded-full text-sm ${darkMode ? 'bg-gray-700 text-blue-300' : 'bg-blue-100 text-blue-600'}`}
                    >
                      {lang}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section 
  id="testimonials" 
  className={`py-24 px-6 ${darkMode ? 'bg-gray-800' : 'bg-gray-100'} relative`}
>
  <div className="container mx-auto">
    <h2 className={`text-4xl font-bold mb-4 text-center ${darkMode ? 'text-blue-300' : 'text-blue-600'}`}>
      Client Testimonials
    </h2>
    <p className="text-xl text-center max-w-2xl mx-auto mb-16 text-gray-400">
      Here&apos;s what some of my clients have to say about working with me.
    </p>

    <div className="flex flex-col items-center gap-12 md:flex-row md:justify-center">
      {testimonials.map((testimonial, index) => (
        <div 
          key={index}
          className={`relative rounded-2xl p-8 w-full max-w-md shadow-2xl transition-transform duration-300 hover:scale-105 
            ${darkMode ? 'bg-gray-700 border border-blue-400/10' : 'bg-white border border-blue-100'}`}
        >
          <div className="absolute top-4 left-4 text-blue-400 text-4xl">“</div>
          
          <div className="flex items-center mb-6 mt-6">
            <div className="w-14 h-14 rounded-full overflow-hidden mr-4 relative border-2 border-blue-400">
              <Image 
                src={testimonial.avatar} 
                alt={testimonial.name} 
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h4 className={`font-bold text-lg ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                {testimonial.name}
              </h4>
              <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                {testimonial.company}
              </p>
            </div>
          </div>
          
          <p className={`italic ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            {testimonial.feedback}
          </p>

          {/* Optional: Add stars */}
          <div className="mt-4 flex gap-1">
            {Array(5).fill().map((_, i) => (
              <svg
                key={i}
                xmlns="http://www.w3.org/2000/svg"
                fill="#facc15"
                viewBox="0 0 24 24"
                className="w-5 h-5"
              >
                <path d="M12 .587l3.668 7.571 8.332 1.151-6.064 5.841 1.464 8.301L12 18.896l-7.4 4.555 1.464-8.301L0 9.309l8.332-1.151z" />
              </svg>
            ))}
          </div>
        </div>
      ))}
    </div>
  </div>
</section>


      {/* Contact Section */}
      <section 
        id="contact" 
        className={`py-20 px-6 ${darkMode ? 'bg-gray-900' : 'bg-white'}`}
      >
        <div className="container mx-auto max-w-4xl">
          <h2 className={`text-4xl font-bold mb-4 text-center ${darkMode ? 'text-blue-300' : 'text-blue-600'}`}>
            Let&apos;s Work Together
          </h2>
          <p className="text-xl text-center max-w-2xl mx-auto mb-16">
            Have a project in mind? I&apos;d love to hear about it. Get in touch and let&apos;s create something amazing.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className={`text-2xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                Contact Info
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className={`p-3 rounded-lg mr-4 ${darkMode ? 'bg-gray-800 text-blue-300' : 'bg-blue-100 text-blue-600'}`}>
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className={`font-semibold mb-1 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      Email
                    </h4>
                    <a 
                      href="mailto:vamshi@example.com" 
                      className={`${darkMode ? 'text-blue-300 hover:text-blue-200' : 'text-blue-600 hover:text-blue-500'}`}
                    >
                      vamshidu10@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className={`p-3 rounded-lg mr-4 ${darkMode ? 'bg-gray-800 text-blue-300' : 'bg-blue-100 text-blue-600'}`}>
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className={`font-semibold mb-1 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      Phone
                    </h4>
                    <a 
                      href="tel:+1234567890" 
                      className={`${darkMode ? 'text-blue-300 hover:text-blue-200' : 'text-blue-600 hover:text-blue-500'}`}
                    >
                      +91 7760706020
                    </a>
                  </div>
                </div>
              </div>
              
              <h3 className={`text-2xl font-bold mt-12 mb-6 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                Social Media
              </h3>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 rounded-full ${darkMode ? 'bg-gray-800 hover:bg-gray-700 text-blue-300' : 'bg-blue-100 hover:bg-blue-200 text-blue-600'} transition-colors`}
                    aria-label={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
            
            <div>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className={`block mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className={`w-full px-4 py-3 rounded-lg ${darkMode ? 'bg-gray-800 border-gray-700 text-white' : 'bg-white border-gray-300'} border focus:outline-none focus:ring-2 focus:ring-blue-500`}
                    placeholder="Enter your name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className={`block mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className={`w-full px-4 py-3 rounded-lg ${darkMode ? 'bg-gray-800 border-gray-700 text-white' : 'bg-white border-gray-300'} border focus:outline-none focus:ring-2 focus:ring-blue-500`}
                    placeholder="Enter your email"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className={`block mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    rows="5"
                    className={`w-full px-4 py-3 rounded-lg ${darkMode ? 'bg-gray-800 border-gray-700 text-white' : 'bg-white border-gray-300'} border focus:outline-none focus:ring-2 focus:ring-blue-500`}
                    placeholder="Enter your message"
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className={`w-full py-3 px-6 rounded-lg font-bold ${darkMode ? 'bg-blue-600 hover:bg-blue-500 text-white' : 'bg-blue-500 hover:bg-blue-600 text-white'} transition-colors shadow-lg hover:shadow-xl`}
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`py-8 px-6 ${darkMode ? 'bg-gray-800 text-gray-400' : 'bg-gray-100 text-gray-600'}`}>
        <div className="container mx-auto text-center">
          <p className="mb-4">
             {new Date().getFullYear()} D U VAMSHI. All rights reserved.
          </p>
          <p>
            Designed and built with ❤️ 
          </p>
        </div>
      </footer>

      {/* Global Styles */}
      <style jsx global>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 20s linear infinite;
          display: inline-block;
          white-space: nowrap;
        }
      `}</style>
    </div>
  );
}
