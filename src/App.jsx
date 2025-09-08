import React, { useState, useEffect } from 'react';

// --- ICONS (using inline SVGs for simplicity and performance) ---
const SunIcon = ({ className }) => (
  <svg xmlns="http://www.w.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
  </svg>
);
const MoonIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
  </svg>
);
const MailIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
  </svg>
);
const LinkedinIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle>
  </svg>
);
const GithubIcon = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
    </svg>
);
const LinkIcon = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.72"></path>
        <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.72-1.72"></path>
    </svg>
);
const ArrowUpIcon = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <line x1="12" y1="19" x2="12" y2="5"></line><polyline points="5 12 12 5 19 12"></polyline>
    </svg>
);
const EyeIcon = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
        <circle cx="12" cy="12" r="3"></circle>
    </svg>
);
const GraduationCapIcon = ({className}) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path><path d="M6 12v5c0 1.1.9 2 2 2h8a2 2 0 002-2v-5"></path>
    </svg>
);
const ChevronDownIcon = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <polyline points="6 9 12 15 18 9"></polyline>
    </svg>
);
const RightArrowIcon = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className={className}>
        <path d="M8 5v14l11-7z"></path>
    </svg>
);


// --- Company and Tech Logos ---
const TcsLogo = () => <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdUIhQCTegyuo6ZuTmrG8m2Qt73AXaVN9z2w&s" alt="TCS Logo" className="w-6 h-6 object-contain"/>;
const ScuLogo = () => <img src="https://upload.wikimedia.org/wikipedia/en/thumb/a/ad/Santa_Clara_U_Seal.svg/1200px-Santa_Clara_U_Seal.svg.png" alt="SCU Logo" className="w-8 h-8 object-contain"/>;
const LntLogo = () => <img src="https://www.nbmcw.com/images/news/Larsen-Toubro.webp" alt="L&T Logo" className="w-6 h-6 object-contain"/>;

const techLogos = {
    Java: "https://www.vectorlogo.zone/logos/java/java-icon.svg",
    Golang: "https://www.vectorlogo.zone/logos/golang/golang-icon.svg",
    Python: "https://www.vectorlogo.zone/logos/python/python-icon.svg",
    JavaScript: "https://www.vectorlogo.zone/logos/javascript/javascript-icon.svg",
    "C/C++": "https://i.redd.it/31b2ii8hchi31.jpg",
    "C++": "https://i.redd.it/31b2ii8hchi31.jpg",
    SQL: "https://www.vectorlogo.zone/logos/mysql/mysql-icon.svg",
    "Spring Boot": "https://www.vectorlogo.zone/logos/springio/springio-icon.svg",
    "REST APIs": "https://www.vectorlogo.zone/logos/swagger/swagger-icon.svg",
    Microservices: "https://img.icons8.com/ios-filled/50/000000/microservices.png",
    "Amazon EKS": "https://www.vectorlogo.zone/logos/amazon_eks/amazon_eks-icon.svg",
    Scala: "https://www.vectorlogo.zone/logos/scala-lang/scala-lang-icon.svg",
    Hibernate: "https://www.vectorlogo.zone/logos/hibernate/hibernate-icon.svg",
    Kafka: "https://www.vectorlogo.zone/logos/apache_kafka/apache_kafka-icon.svg",
    RabbitMQ: "https://www.vectorlogo.zone/logos/rabbitmq/rabbitmq-icon.svg",
    Flask: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/flask-logo-icon.png",
    Spark: "https://www.vectorlogo.zone/logos/apache_spark/apache_spark-icon.svg",
    MySQL: "https://www.vectorlogo.zone/logos/mysql/mysql-icon.svg",
    MongoDB: "https://www.vectorlogo.zone/logos/mongodb/mongodb-icon.svg",
    PostgreSQL: "https://www.vectorlogo.zone/logos/postgresql/postgresql-icon.svg",
    Redis: "https://www.vectorlogo.zone/logos/redis/redis-icon.svg",
    MariaDB: "https://www.vectorlogo.zone/logos/mariadb/mariadb-icon.svg",
    Docker: "https://www.vectorlogo.zone/logos/docker/docker-icon.svg",
    Kubernetes: "https://www.vectorlogo.zone/logos/kubernetes/kubernetes-icon.svg",
    Git: "https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg",
    Jenkins: "https://www.vectorlogo.zone/logos/jenkins/jenkins-icon.svg",
    JIRA: "https://www.vectorlogo.zone/logos/atlassian_jira/atlassian_jira-icon.svg",
    AWS: "https://www.vectorlogo.zone/logos/amazon_aws/amazon_aws-icon.svg",
    Postman: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg",
    Multithreading: "https://img.icons8.com/ios/50/000000/multithreading.png",
    OS: "https://www.vectorlogo.zone/logos/linux/linux-icon.svg",
    Servlets: "https://img.icons8.com/ios-filled/50/java-bean-enterprise.png",
    DFS: "https://img.icons8.com/ios/50/graph.png",
};


// --- Main App Component ---
export default function App() {
  const [theme, setTheme] = useState('dark');
  const [isVisible, setIsVisible] = useState(false);

  // --- Theme Toggle Effect ---
  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };
  
  // --- Scroll-to-Top Button Visibility ---
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  // --- Data from Resume ---
  const portfolioData = {
    name: "Chaitanya Kothapalli",
    title: "Building Scalable & Resilient Systems",
    email: "ckchaithu1234@gmail.com",
    linkedin: "https://www.linkedin.com/in/ckb123",
    github: "https://github.com/ChaitanyaKothapalli9",
    resumeUrl: "https://drive.google.com/file/d/1IKsBCOBq-cCSbWoVfde7yEg-3eNcobnY/view?usp=sharing",
    about: "I'm a Software Engineer who thrives on architecting and constructing high-performance backend services and distributed systems. With a Master's in Computer Science and hands-on experience with technologies like Java, Spring Boot, Go, Python, Kafka, RabbitMQ, Docker, Kubernetes and AWS, I transform complex challenges into robust, scalable software solutions. My passion lies in the complete development lifecycle, from initial design to final deployment.",
    experience: [
      { 
        role: "Backend Engineer", 
        company: "Frugal Innovation Hub, Santa Clara University", 
        date: "Jan 2025 - Present", 
        points: [
            "Building a real-time sports event streaming pipeline using Apache Kafka and Spring Boot to distribute live match updates across dashboards, notifications, engineered for scalability to support 9,000+ concurrent viewers.",
            "Implemented a consumer gateway for CDC-driven Kafka streams to enforce authentication, schema validation, and traffic control. This reduced faulty connections by 40% and improved data reliability during peak loads.",
            "Developing backend services for a Library Management System using Spring Boot, Spring Data JPA, and REST APIs to manage users, book lending, and inventory with role-based access control and MySQL integration."
        ],
        tech: ["Java", "Spring Boot", "Kafka", "Gateway", "REST APIs", "MySQL", "Hibernate"],
        logo: <ScuLogo /> 
      },
      { 
        role: "Software Engineer-Backend", 
        company: "Tata Consultancy Services", 
        date: "Aug 2021 - Sep 2022", 
        points: [
            "Developed and deployed Java based microservices using Spring Boot for managing Active Directory groups in a Docker containerized environment Amazon Elastic Kubernetes Service, achieving a successful implementation with a 95 percent reduction in manual group management efforts.",
            "Reduced cost by 10 percent by optimizing code for 22 active directory groups under External Account Maintenance and Bill Pay having 4 lakh users for United Services Automobile Association.",
            "Developed a full-stack dashboard using React, Java, Python, RestfulAPIs to centralize monitoring and governance of 215+ big data apps, automating data quality checks, compliance validation, and audit logging.",
            "Engineered high utility microservices based application, catering to over 3500 stakeholders, by utilizing Spring Boot and MariaDB and ensuring seamless continuous deployment by implementing reliable DevOps Pipelines.",
            "Optimized SQL queries and implemented Redis in-memory caching, improving data processing speed by 33% and accelerating ML model training and dashboard performance."
        ],
        tech: ["Java", "Spring Boot", "REST APIs", "Microservices", "Docker", "Amazon EKS", "Python", "MariaDB", "Redis"],
        logo: <TcsLogo /> 
      },
      { 
        role: "Software Engineer-Data Intern", 
        company: "Larsen and Toubro Technology Services", 
        date: "June 2021 - Aug 2021", 
        points: [
            "Built scalable ETL pipelines in PySpark and Scala on Kubernetes to harmonize data from financial institutions, regulators, and market providers, improving data quality and delivery efficiency by 69%.",
            "Improved query performance and transaction time by 2.5x through SQL caching and indexing techniques."
        ],
        tech: ["Java", "Kafka", "Scala", "SQL", "Spark", "Python", "Kubernetes"],
        logo: <LntLogo /> 
      }
    ],
    education: [
        { university: "Santa Clara University", degree: "Masters in Computer Science and Engineering, CGPA: 3.6", date: "Jan 2023 - Dec 2024", courses: "Courses: Design and Analysis: Algorithms, Computer Networks, Operating Systems, CA, Database Systems, Distributed Systems", logo: <ScuLogo/> },
        { university: "BV Raju Institute of Technology", degree: "Bachelors in Computer Science and Engineering, CGPA: 3.5", date: "Jun 2017 - Jul 2021", courses: "Courses: Object Oriented Analysis and Design, Socket Programming, Cloud Computing, Compiler Design, Machine Learning, Web Tech", logo: <GraduationCapIcon className="w-8 h-8 text-cyan-500" /> }
    ],
    projects: [
      { title: "Bronco Career Alerts", description: "Architected a distributed Pub-Sub system for real-time job alerts using RabbitMQ, Docker, and Kubernetes. Engineered the system to ensure high availability and fault tolerance through replication and mutual exclusion.", tags: ["Java", "Python", "RabbitMQ", "Docker", "Kubernetes"], link: "https://github.com/ChaitanyaKothapalli9/BRONCO-CAREER-ALERTS--DISTRIBUTED-SYSTEMS" },
      { title: "House Leasing Application", description: "Built a full-stack house leasing platform with a secure Spring Boot backend, MongoDB database, and AWS S3 for file storage. Engineered a containerized deployment using Docker for scalability and portability.", tags: ["Spring Boot", "MongoDB", "AWS", "Docker", "REST APIs"], link: "https://github.com/ChaitanyaKothapalli9/House-Leasing-Application" },
      { title: "Recursive DNS Resolver", description: "Constructed a high-performance DNS resolver in Golang from the ground up. Implemented a custom caching mechanism with TTL to minimize latency and optimize network requests for various record types.", tags: ["Golang", "DNS", "Caching", "Web Protocols"], link: "https://github.com/ChaitanyaKothapalli9/DNS-RESOLVER" },
      { title: "CI/CD on AWS EKS", description: "Designed and implemented a complete, scalable CI/CD pipeline on AWS. Built the infrastructure using CodeCommit, CodePipeline, and ECR to automate the deployment of containerized workloads on EKS Fargate.", tags: ["AWS", "CI/CD", "Docker", "Kubernetes"], link: "https://github.com/ChaitanyaKothapalli9/CI-CD-pipeline-with-AWS-CodePipeline-EKS-Fargate-and-ALB" },
      { title: "Disk Scheduling Simulator", description: "A comprehensive simulation of OS concepts including disk scheduling (FCFS, SSF, Elevator), page replacement algorithms (FIFO, LRU), and multithreading for producer-consumer synchronization over 150 concurrent processes.", tags: ["C++", "Java", "Multithreading", "OS"], link: "#" },
      { title: "RESTful Link Shortener", description: "Developed a Golang-based RESTful link management system with user-specific link handling and ownership validation. Integrated HATEOAS for dynamic link generation, improving API navigability.", tags: ["Golang", "REST APIs", "Postman"], link: "https://github.com/ChaitanyaKothapalli9/RESTFUL-URL-SHORTENER" },
      { title: "Web Crawler & Image Finder", description: "A Java-based web crawler using JSoup and Servlets to extract images to a user-defined depth. Enhanced performance through advanced multithreading with CompletableFuture and ExecutorService.", tags: ["Java", "Multithreading", "Servlets", "DFS"], link: "#" }
    ],
    skills: {
      "Languages": ["Java", "Golang", "Python", "JavaScript", "C++", "SQL"],
      "Frameworks & Libraries": ["Spring Boot", "Hibernate", "Kafka", "RabbitMQ", "Flask", "Spark"],
      "Databases & Caching": ["MySQL", "MongoDB", "PostgreSQL", "Redis", "MariaDB"],
      "DevOps & Cloud": ["Docker", "Kubernetes", "Git", "Jenkins", "JIRA", "AWS", "Postman"]
    }
  };

  // --- Smooth Scroll Handler ---
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="bg-white dark:bg-black text-gray-800 dark:text-gray-200 font-sans transition-colors duration-500">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-white/70 dark:bg-black/70 backdrop-blur-lg z-50 shadow-sm transition-all duration-300">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500 cursor-pointer" onClick={() => scrollToSection('hero')}>
            {portfolioData.name}
          </h1>
          <nav className="hidden md:flex items-center space-x-8 text-sm font-medium text-gray-600 dark:text-gray-300">
            <button onClick={() => scrollToSection('about')} className="hover:text-cyan-400 transition-colors duration-300">About</button>
            <button onClick={() => scrollToSection('experience')} className="hover:text-cyan-400 transition-colors duration-300">Experience</button>
            <button onClick={() => scrollToSection('education')} className="hover:text-cyan-400 transition-colors duration-300">Education</button>
            <button onClick={() => scrollToSection('projects')} className="hover:text-cyan-400 transition-colors duration-300">Projects</button>
            <button onClick={() => scrollToSection('skills')} className="hover:text-cyan-400 transition-colors duration-300">Skills</button>
          </nav>
          <div className="flex items-center gap-4">
            <a href={portfolioData.resumeUrl} target="_blank" rel="noopener noreferrer" className="hidden md:inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-cyan-600 bg-cyan-100/50 dark:bg-cyan-900/50 dark:text-cyan-300 rounded-lg hover:bg-cyan-100 dark:hover:bg-cyan-900 transition-all duration-300">
              <EyeIcon className="w-4 h-4" />
              Resume
            </a>
            <button onClick={toggleTheme} className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors duration-300">
              {theme === 'dark' ? <SunIcon className="w-6 h-6 text-yellow-400" /> : <MoonIcon className="w-6 h-6 text-gray-800" />}
            </button>
          </div>
        </div>
      </header>
      
      <main className="container mx-auto px-6 pt-24">
        {/* Hero Section */}
        <section id="hero" className="relative min-h-screen flex flex-col justify-center items-center text-center -mt-16">
            <div className="relative">
                <div className="absolute -top-20 -left-20 w-72 h-72 bg-cyan-400 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-blob dark:opacity-30"></div>
                <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-blob animation-delay-2000 dark:opacity-30"></div>
                <div className="absolute -bottom-20 left-20 w-72 h-72 bg-teal-400 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-blob animation-delay-4000 dark:opacity-30"></div>
                
                <div className="relative animate-fade-in-up">
                    <h2 className="text-5xl md:text-7xl font-extrabold mb-4 tracking-tight">
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
                            {portfolioData.name}
                        </span>
                    </h2>
                    <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-8 max-w-3xl mx-auto">{portfolioData.title}</p>
                    <div className="flex flex-wrap justify-center items-center gap-4">
                        <a href={`mailto:${portfolioData.email}`} className="px-6 py-3 font-semibold text-white bg-cyan-600 rounded-lg shadow-lg hover:bg-cyan-700 transition-all duration-300 transform hover:scale-105">
                            Get in Touch
                        </a>
                        <a href={portfolioData.resumeUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 font-semibold text-cyan-500 dark:text-cyan-300 bg-white dark:bg-gray-900 border border-cyan-500 rounded-lg shadow-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-300 transform hover:scale-105">
                            <EyeIcon className="w-5 h-5" />
                            View Resume
                        </a>
                    </div>
                     <div className="flex justify-center items-center space-x-4 mt-8">
                        <a href={portfolioData.linkedin} target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-gray-200 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-cyan-500 hover:text-white dark:hover:bg-cyan-500 transition-all duration-300 transform hover:scale-110">
                            <LinkedinIcon className="w-6 h-6" />
                        </a>
                        <a href={portfolioData.github} target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-gray-200 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-600 hover:text-white dark:hover:bg-gray-500 transition-all duration-300 transform hover:scale-110">
                            <GithubIcon className="w-6 h-6" />
                        </a>
                    </div>
                </div>
            </div>
             <button
                onClick={() => scrollToSection('about')}
                className="absolute bottom-4 left-1/2 -translate-x-1/2 text-gray-500 dark:text-gray-400 animate-bounce"
                aria-label="Scroll down"
            >
                <ChevronDownIcon className="w-8 h-8" />
            </button>
        </section>

        {/* About Section */}
        <section id="about" className="py-24">
            <div className="grid md:grid-cols-5 gap-16 items-center">
                <div className="md:col-span-2 flex justify-center animate-fade-in">
                    <div className="relative w-72 h-72">
                        <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full transform -rotate-12 transition-transform duration-500 hover:rotate-0 hover:scale-105 shadow-2xl"></div>
                        <div className="absolute inset-2 bg-white dark:bg-black rounded-full flex items-center justify-center overflow-hidden">
                           <img src={`${import.meta.env.BASE_URL}headshot.jpg`} alt="Chaitanya Kothapalli" className="w-full h-full object-cover" />
                        </div>
                    </div>
                </div>
                <div className="md:col-span-3 animate-fade-in-delay">
                    <h3 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">About Me</h3>
                    <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed space-y-4">{portfolioData.about}</p>
                </div>
            </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-24">
            <h3 className="text-4xl font-bold text-center mb-16 text-gray-900 dark:text-white">Professional Experience</h3>
            <div className="relative border-l-2 border-cyan-300 dark:border-cyan-800 ml-6 md:ml-0 md:pl-6">
                {portfolioData.experience.map((job, index) => (
                    <div key={index} className="mb-12 ml-10 animate-fade-in-up" style={{animationDelay: `${index * 150}ms`}}>
                        <span className="absolute flex items-center justify-center w-10 h-10 bg-cyan-100 rounded-full -left-5 ring-8 ring-white dark:ring-black dark:bg-cyan-900">
                            {job.logo}
                        </span>
                        <div className="p-6 bg-white dark:bg-gray-900/50 rounded-lg shadow-md border border-gray-200 dark:border-gray-800">
                            <div className="flex flex-wrap justify-between items-start gap-2">
                                <h4 className="text-xl font-semibold text-gray-900 dark:text-white">{job.role}</h4>
                                <span className="bg-cyan-100 text-cyan-800 text-xs font-semibold px-2.5 py-1 rounded-full dark:bg-cyan-900 dark:text-cyan-200 whitespace-nowrap">{job.date}</span>
                            </div>
                            <p className="block my-1 text-md font-normal text-gray-500 dark:text-gray-400">{job.company}</p>
                            <div className="mt-4 space-y-3 text-base text-gray-600 dark:text-gray-400">
                                {job.points.map((point, i) => (
                                    <div key={i} className="flex items-start">
                                        <RightArrowIcon className="w-4 h-4 mt-1 mr-2 flex-shrink-0 text-cyan-500" />
                                        <span>{point}</span>
                                    </div>
                                ))}
                            </div>
                            <div className="mt-4 flex flex-wrap gap-2">
                                {job.tech.map(tech => (
                                     <span key={tech} className="px-3 py-1 text-xs font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900/50 dark:text-blue-300">{tech}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
        
        {/* Education Section */}
        <section id="education" className="py-24">
            <h3 className="text-4xl font-bold text-center mb-16 text-gray-900 dark:text-white">Education</h3>
            <div className="relative border-l-2 border-cyan-300 dark:border-cyan-800 ml-6 md:ml-0 md:pl-6">
                {portfolioData.education.map((edu, index) => (
                    <div key={index} className="mb-12 ml-10 animate-fade-in-up" style={{animationDelay: `${index * 150}ms`}}>
                        <span className="absolute flex items-center justify-center w-10 h-10 bg-cyan-100 rounded-full -left-5 ring-8 ring-white dark:ring-black dark:bg-cyan-900">
                            {edu.logo}
                        </span>
                        <div className="p-6 bg-white dark:bg-gray-900/50 rounded-lg shadow-md border border-gray-200 dark:border-gray-800">
                            <div className="flex justify-between items-start">
                                <h4 className="text-xl font-semibold text-gray-900 dark:text-white">{edu.university}</h4>
                                <span className="bg-cyan-100 text-cyan-800 text-xs font-semibold px-2.5 py-1 rounded-full dark:bg-cyan-900 dark:text-cyan-200 whitespace-nowrap">{edu.date}</span>
                            </div>
                            <p className="block my-1 text-md font-normal text-gray-500 dark:text-gray-400">{edu.degree}</p>
                            <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">{edu.courses}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-24">
            <h3 className="text-4xl font-bold text-center mb-16 text-gray-900 dark:text-white">Featured Projects</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {portfolioData.projects.map((project, index) => (
                    <div key={index} className="group bg-white dark:bg-gray-900 rounded-xl shadow-lg hover:shadow-2xl overflow-hidden transform hover:-translate-y-2 transition-all duration-300 border border-gray-200 dark:border-gray-800 animate-fade-in-up" style={{animationDelay: `${index * 150}ms`}}>
                        <div className="p-8">
                            <div className="flex justify-between items-start mb-4">
                                <h4 className="text-2xl font-bold text-gray-900 dark:text-white">{project.title}</h4>
                                <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300">
                                    <LinkIcon className="w-6 h-6" />
                                </a>
                            </div>
                            <p className="text-gray-600 dark:text-gray-400 mb-6 min-h-[120px]">{project.description}</p>
                            <div className="flex flex-wrap gap-2">
                                {project.tags.map(tag => (
                                    <span key={tag} className="px-3 py-1 text-sm font-medium text-teal-800 bg-teal-100 rounded-full dark:bg-teal-900/50 dark:text-teal-300">{tag}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-24">
            <h3 className="text-4xl font-bold text-center mb-16 text-gray-900 dark:text-white">Technical Skills</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                {Object.entries(portfolioData.skills).map(([category, skillsList], index) => (
                    <div key={category} className="animate-fade-in" style={{animationDelay: `${index * 150}ms`}}>
                        <h4 className="text-2xl font-semibold mb-6 text-center text-gray-700 dark:text-gray-300">{category}</h4>
                        <div className="flex flex-wrap justify-center gap-4 items-center">
                            {skillsList.map(skill => (
                                <div key={skill} className="flex flex-col items-center gap-2 p-3 bg-gray-200 dark:bg-gray-800 rounded-lg transition-all duration-300 hover:bg-cyan-500 hover:text-white dark:hover:bg-cyan-500 cursor-default">
                                    <img src={techLogos[skill]} alt={`${skill} logo`} className="w-8 h-8 object-contain"/>
                                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300 text-center">{skill}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white dark:bg-gray-900/50 py-10 mt-16 border-t border-gray-200 dark:border-gray-800">
        <div className="container mx-auto px-6 text-center text-gray-600 dark:text-gray-400">
            <p className="text-lg font-semibold mb-4">Let's Connect!</p>
            <div className="flex justify-center space-x-6 mb-6">
                <a href={`mailto:${portfolioData.email}`} className="hover:text-cyan-400 transition-colors duration-300"><MailIcon className="w-7 h-7" /></a>
                <a href={portfolioData.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors duration-300"><LinkedinIcon className="w-7 h-7" /></a>
                <a href={portfolioData.github} target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors duration-300"><GithubIcon className="w-7 h-7" /></a>
            </div>
            <p>&copy; {new Date().getFullYear()} {portfolioData.name}. Built with React & Tailwind CSS.</p>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      {isVisible && (
        <button onClick={() => scrollToSection('hero')} className="fixed bottom-8 right-8 bg-cyan-600 text-white p-3 rounded-full shadow-lg hover:bg-cyan-700 transition-all duration-300 z-50 animate-fade-in">
          <ArrowUpIcon className="w-6 h-6" />
        </button>
      )}
    </div>
  );
}


