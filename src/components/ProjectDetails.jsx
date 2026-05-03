import { useEffect, useState } from "react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";

// আপনার প্রজেক্ট ডাটাগুলো এখানে একটি অবজেক্ট বা অ্যারে হিসেবে থাকবে
const ALL_PROJECTS = [
  {
    id: 1,
    name: "POS + E-Commerce Platform",
    category: "Enterprise SaaS / Full-Stack",
    description: "An enterprise-grade POS and e-commerce ecosystem designed for Cloud Next Generation UK Ltd. It manages complex inventory, HRM, and financial analytics through a modular architecture of 16+ Django applications.",
    github_link: "#", // Private
    web_link: "https://pos.mdabdullahalsadid.com/",
    details: {
      img_and_title: [
        { img_link: "/assets/pos.png", title: "Dashboard Overview" },
        { img_link: "/assets/pos-order.png", title: "Order Management" },
        { img_link: "/assets/pos-profile.png", title: "Profile" },

      ],
      technology: [
        { tech_name: "Django", tech_logo: "https://cdn.worldvectorlogo.com/logos/django.svg" },
        { tech_name: "Next.js", tech_logo: "https://cdn.worldvectorlogo.com/logos/next-js.svg" },
        { tech_name: "Docker", tech_logo: "https://cdn.worldvectorlogo.com/logos/docker-3.svg" },
        { tech_name: "PostgreSQL", tech_logo: "https://cdn.worldvectorlogo.com/logos/postgresql.svg" },
      ],
      key_features: [
        "16+ Modular Django Applications for scalability",
        "Robust Role-Based Access Control (RBAC)",
        "Automated CI/CD Pipeline using GitHub Actions",
        "Integrated Financial Analytics and Reporting",
        "JWT-based Secure API Authentication"
      ]
    }
  },
  {
    id: 2,
    name: "Cricket Scorer",
    category: "Real-time System / WebSocket",
    description: "A high-performance real-time cricket scoring system. It leverages event-driven architecture to provide ball-by-ball updates and live statistics with minimal latency.",
    github_link: "https://github.com/Sadid205/Cricket-Scorer-Dockerize",
    web_link: "#",
    details: {
      img_and_title: [
        { img_link: "/assets/cricket-home.png", title: "Cricket Home" },
        { img_link: "/assets/cricket-player-details.png", title: "Player Details" },
        { img_link: "/assets/cricket-score.png", title: "Live Match Score" },
        { img_link: "/assets/cricket-scoreboard.png", title: "Cricket Scoreboard" },
      ],
      technology: [
        { tech_name: "Django", tech_logo: "https://cdn.worldvectorlogo.com/logos/django.svg" },
        { tech_name: "Redis", tech_logo: "https://cdn.worldvectorlogo.com/logos/redis.svg" },
        { tech_name: "React", tech_logo: "https://cdn.worldvectorlogo.com/logos/react-2.svg" },
        { tech_name: "WebSocket", tech_logo: "https://cdn.worldvectorlogo.com/logos/websocket.svg" },
      ],
      key_features: [
        "Real-time data synchronization via WebSockets",
        "Redis Channel Layer for efficient messaging",
        "Low-latency ball-by-ball tracking logic",
        "Fully Dockerized production environment",
        "Optimized PostgreSQL schema for sports data"
      ]
    }
  },
  {
    id: 3,
    name: "School ERP System",
    category: "Management System / Monorepo",
    description: "A comprehensive academic management solution built on a Monorepo architecture. It streamlines administration, student tracking, and automated reporting for educational institutions.",
    github_link: "#", // Private
    web_link: "#",
    details: {
      img_and_title: [
        { img_link: "/assets/schoolerp-main.png", title: "Admin Management Portal" },
        { img_link: "/assets/schoolerp-fees-collection.png", title: "Fees Collection" },
        { img_link: "/assets/schoolerp-class-schedules.png", title: "Class Schedules" },
        { img_link: "/assets/schoolerp-student-admission.png", title: "Student Admission" },
      ],
      technology: [
        { tech_name: "Django", tech_logo: "https://cdn.worldvectorlogo.com/logos/django.svg" },
        { tech_name: "React", tech_logo: "https://cdn.worldvectorlogo.com/logos/react-2.svg" },
        { tech_name: "PostgreSQL", tech_logo: "https://cdn.worldvectorlogo.com/logos/postgresql.svg" },
        { tech_name: "Webpack", tech_logo: "https://cdn.worldvectorlogo.com/logos/webpack.svg" },
      ],
      key_features: [
        "Unified Monorepo codebase management",
        "Automated PDF/Excel report generation",
        "Dynamic Exam and Payroll management",
        "Secure multi-role authentication system",
        "Scalable modular design for future modules"
      ]
    }
  },
  {
  id: 4,
  name: "Parcel Delivery System",
  category: "Logistics / Microservices",
  description: "A scalable parcel delivery and tracking system designed with a microservices-friendly architecture. It enables real-time parcel tracking, status updates, and efficient delivery management.",
  github_link: "https://github.com/Sadid205/parcel-delivery-system-dockerized",
  web_link: "#",
  details: {
    img_and_title: [
      { img_link: "/assets/parcel-me.png", title: "Profile" },
      { img_link: "/assets/parcel-about.png", title: "Parcel About" },
      { img_link: "/assets/parcel-contact.png", title: "Parcel Contact" },
      { img_link: "/assets/parcel-create.png", title: "Parcel Create" },
    ],
    technology: [
      { tech_name: "Node.js", tech_logo: "https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg" },
      { tech_name: "Express", tech_logo: "https://cdn.worldvectorlogo.com/logos/express-109.svg" },
      { tech_name: "MongoDB", tech_logo: "https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg" },
      { tech_name: "Docker", tech_logo: "https://cdn.worldvectorlogo.com/logos/docker.svg" },
      { tech_name: "Redis", tech_logo: "https://cdn.worldvectorlogo.com/logos/redis.svg" },
    ],
    key_features: [
      "Unique parcel tracking ID system",
      "Real-time parcel status updates",
      "Event-based tracking logs",
      "Dockerized multi-service architecture",
      "Redis caching for performance optimization"
    ]
  }
},
{
  id: 5,
  name: "Library Management System",
  category: "Management System / Full Stack",
  description: "A full-featured library management system for handling books, users, borrowing, and return workflows. Built with a containerized architecture for easy deployment and scalability.",
  github_link: "https://github.com/Sadid205/library-management-dockerized",
  web_link: "#",
  details: {
    img_and_title: [
      { img_link: "/assets/library-1.png", title: "Book List" },
      { img_link: "/assets/library-borrow.png", title: "Borrow Book" },
      { img_link: "/assets/library-update-book.png", title: "Update Book" },
      { img_link: "/assets/library-borrow-book.png", title: "Borrow Book" },
    ],
    technology: [
      { tech_name: "Django", tech_logo: "https://cdn.worldvectorlogo.com/logos/django.svg" },
      { tech_name: "Django REST Framework", tech_logo: "https://www.django-rest-framework.org/img/logo.png" },
      { tech_name: "PostgreSQL", tech_logo: "https://cdn.worldvectorlogo.com/logos/postgresql.svg" },
      { tech_name: "Docker", tech_logo: "https://cdn.worldvectorlogo.com/logos/docker.svg" },
      { tech_name: "Nginx", tech_logo: "https://cdn.worldvectorlogo.com/logos/nginx-1.svg" },
    ],
    key_features: [
      "Book catalog and inventory management",
      "Borrow and return tracking system",
      "Fine calculation for late returns",
      "Role-based authentication system",
      "Dockerized deployment with Nginx reverse proxy"
    ]
  }
}
];
const ProjectDetails = () => {
  const { project_id } = useParams(); // URL থেকে ID পাবে (যেমন: /projects/1)
  const [projectData, setProjectData] = useState(null);
  const [selectedImgObj, setSelectedImgObj] = useState(null);

  useEffect(() => {
    // URL এর ID অনুযায়ী ডাটা ফিল্টার করা
    const foundProject = ALL_PROJECTS.find(p => p.id === parseInt(project_id));
    
    if (foundProject) {
      setProjectData(foundProject);
      if (foundProject.details?.img_and_title?.length > 0) {
        setSelectedImgObj(foundProject.details.img_and_title[0]);
      }
    }
    // পেজ লোড হলে স্ক্রল উপরে নিয়ে যাওয়ার জন্য
    window.scrollTo(0, 0);
  }, [project_id]);

  if (!projectData) {
    return (
      <div style={{ background: "#0d1726", height: "100vh", display: "flex", alignItems: "center", justifyContent: "center", color: "#e8ddd0" }}>
        <h2>Project Loading or Not Found...</h2>
      </div>
    );
  }

  return (
    <div style={{
      background: "#0d1726",
      minHeight: "100vh",
      padding: "100px 20px 60px",
      fontFamily: "'DM Sans', sans-serif",
      color: "#e8ddd0"
    }}>
      {/* ... (বাকি CSS এবং JSX যা আপনি দিয়েছিলেন, সব একই থাকবে) ... */}
      
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        
        {/* Header Section */}
        <div style={{ marginBottom: "40px", borderBottom: "1px solid rgba(53, 87, 125, 0.2)", paddingBottom: "20px" }}>
           <Link to="/projects" style={{ color: "#DB9F75", textDecoration: "none", fontSize: "14px", display: "flex", alignItems: "center", gap: "8px", marginBottom: "15px" }}>
             ← Back to Projects
           </Link>
           <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "42px", fontWeight: 700, margin: 0 }}>
             {projectData.name}
           </h1>
           <p style={{ color: "#35577D", letterSpacing: "0.2em", fontSize: "12px", marginTop: "10px", textTransform: "uppercase" }}>
             Case Study / {projectData.category}
           </p>
        </div>

        {/* Media Gallery & Info Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))", gap: "50px" }}>
          
          {/* Left: Media Gallery */}
          <div>
            <div style={{ 
              borderRadius: "16px", overflow: "hidden", border: "1px solid rgba(219, 159, 117, 0.2)",
              background: "#141e30", height: "400px" 
            }}>
              <img 
                src={selectedImgObj?.img_link} 
                alt="Main View" 
                style={{ width: "100%", height: "100%", objectFit: "cover" }} 
              />
            </div>
            {/* ...thumbnails mapping... */}
            <div style={{ display: "flex", gap: "12px", marginTop: "20px", justifyContent: "center" }}>
              {projectData.details.img_and_title.map((item, index) => (
                <img
                  key={index}
                  onClick={() => setSelectedImgObj(item)}
                  src={item.img_link}
                  alt="thumb"
                  style={{
                    width: "80px", height: "60px", objectFit: "cover", borderRadius: "8px",
                    cursor: "pointer", border: selectedImgObj?.img_link === item.img_link ? "2px solid #DB9F75" : "1px solid rgba(53, 87, 125, 0.3)"
                  }}
                />
              ))}
            </div>
          </div>

          {/* Right: Project Info */}
          <div>
            <div style={{ display: "flex", gap: "15px", marginBottom: "30px" }}>
              <a href={projectData.github_link} target="_blank" rel="noreferrer" style={linkButtonStyle}>
                <FaGithub /> GitHub
              </a>
              <a href={projectData.web_link} target="_blank" rel="noreferrer" style={linkButtonStyle}>
                <FaExternalLinkAlt /> Live Link
              </a>
            </div>
            <h3 style={sectionTitleStyle}>Description</h3>
            <p style={{ lineHeight: "1.8", color: "rgba(200, 210, 225, 0.7)", marginBottom: "30px" }}>{projectData.description}</p>
            
            <h3 style={sectionTitleStyle}>Core Technologies</h3>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
              {projectData.details.technology.map((tech, index) => (
                <div key={index} style={{ textAlign: "center" }}>
                  <img src={tech.tech_logo} alt={tech.tech_name} style={{ width: "28px", height: "28px" }} />
                  <p style={{ fontSize: "10px", color: "rgba(200, 210, 225, 0.5)" }}>{tech.tech_name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Features... */}
      </div>
    </div>
  );
};

const linkButtonStyle = { /* আপনার আগের স্টাইল */ };
const sectionTitleStyle = { /* আপনার আগের স্টাইল */ };

export default ProjectDetails;