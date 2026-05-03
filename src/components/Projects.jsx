import { useState } from "react";
import { FaExternalLinkAlt, FaGithub, FaInfoCircle } from "react-icons/fa";

const ProjectCard = ({ item }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        position: "relative",
        height: "360px", 
        borderRadius: "16px",
        overflow: "hidden",
        background: "#141e30",
        border: isHovered 
          ? "1px solid rgba(219,159,117,0.4)" 
          : "1px solid rgba(53, 87, 125, 0.2)",
        transition: "all 0.5s cubic-bezier(0.23, 1, 0.32, 1)",
        transform: isHovered ? "translateY(-8px)" : "translateY(0)",
      }}
    >
      <img
        src={item.cover}
        alt={item.name}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          transition: "transform 0.7s ease",
          transform: isHovered ? "scale(1.1)" : "scale(1)",
          opacity: isHovered ? 0.2 : 0.6,
        }}
      />

      <div style={{
        position: "absolute",
        top: 0, left: 0, right: 0, bottom: 0,
        padding: "25px",
        display: "flex",
        flexDirection: "column",
        justifyContent: isHovered ? "center" : "flex-end",
        alignItems: isHovered ? "center" : "flex-start",
        background: isHovered ? "rgba(13, 23, 38, 0.85)" : "linear-gradient(to top, rgba(13, 23, 38, 0.95), transparent)",
        transition: "all 0.4s ease",
        textAlign: isHovered ? "center" : "left",
      }}>
        <h3 style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: "22px",
          fontWeight: 700,
          color: isHovered ? "#DB9F75" : "#e8ddd0",
          marginBottom: "8px",
        }}>
          {item.name}
        </h3>

        <p style={{
          fontSize: "13px",
          lineHeight: "1.6",
          color: "rgba(200, 210, 225, 0.8)",
          marginBottom: "20px",
          opacity: isHovered ? 1 : 0,
          maxHeight: isHovered ? "100px" : "0px",
          overflow: "hidden",
          transition: "all 0.4s ease",
        }}>
          {item.description}
        </p>

        <div style={{
          display: "flex",
          gap: "12px",
          opacity: isHovered ? 1 : 0,
          transform: isHovered ? "translateY(0)" : "translateY(15px)",
          transition: "all 0.5s ease",
        }}>
          {item.github_link !== "#" && (
            <a href={item.github_link} target="_blank" rel="noreferrer" style={iconButtonStyle}><FaGithub /></a>
          )}
          <a href={item.web_link} target="_blank" rel="noreferrer" style={iconButtonStyle}><FaExternalLinkAlt /></a>
          <a href={`/project-details/${item.id}/`} style={iconButtonStyle}><FaInfoCircle /></a>
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const ProjectsData = [
    {
      id: 1,
      name: "POS + E-Commerce Platform",
      category: "Full-Stack",
      description: "Enterprise SaaS with inventory, HRM, and analytics. 16+ Django apps, JWT, and Docker deployment.",
      github_link: "#",
      web_link: "https://pos.mdabdullahalsadid.com/",
      cover: "/assets/pos.png",
    },
    {
      id: 2,
      name: "Real-time Cricket Scorer",
      category: "Real-time",
      description: "Event-driven architecture using WebSocket and Redis for ball-by-ball live updates.",
      github_link: "https://github.com/sadid-1",
      web_link: "https://cricketscorer.mdabdullahalsadid.com/",
      cover: "/assets/cricket-score.png",
    },
    {
      id: 3,
      name: "School ERP System",
      category: "Full-Stack",
      description: "Monorepo management system with role-based access control and automated reporting.",
      github_link: "#",
      web_link: "https://schoolerp.mdabdullahalsadid.com/",
      cover: "/assets/schoolerp-main.png",
    },
    {
    id: 4,
    name: "Parcel Delivery System",
    category: "Full-Stack",
    description: "Full-stack parcel delivery platform with TypeScript, Docker Compose, and CI/CD pipeline via GitHub Actions.",
    github_link: "https://github.com/Sadid205/parcel-delivery-system-dockerized",
    web_link: "https://parcel-delivery-system.mdabdullahalsadid.com/",
    cover: "/assets/parcel-home.png",
  },
  {
    id: 5,
    name: "Library Management System",
    category: "Full-Stack",
    description: "Dockerized library management app with TypeScript frontend and backend, automated CI/CD deployment using GitHub Actions.",
    github_link: "https://github.com/Sadid205/library-management-dockerized",
    web_link: "https://library-management.mdabdullahalsadid.com/",
    cover: "/assets/library-home.png",
  },
  ];

  const allCategory = ["all", ...new Set(ProjectsData.map((item) => item.category))];
  const [projects, setProjects] = useState(ProjectsData);
  const [activeCategory, setActiveCategory] = useState("all");

  const filterItems = (category_name) => {
    setActiveCategory(category_name);
    if (category_name === "all") {
      setProjects(ProjectsData);
    } else {
      setProjects(ProjectsData.filter((p) => p.category === category_name));
    }
  };

  return (
    <div style={{
      background: "#0d1726",
      height: "auto", // ফিক্সড হাইট রিমুভ করা হয়েছে
      padding: "60px 20px 40px", // নিচে প্যাডিং কমানো হয়েছে
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      fontFamily: "'DM Sans', sans-serif",
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;600;700&family=DM+Sans:wght@300;400;500&display=swap');
      `}</style>

      <div style={{ width: "100%", maxWidth: "1100px" }}>
        {/* Header - Centered */}
        <div style={{ textAlign: "center", marginBottom: "40px", position: "relative" }}>
          <p style={{ fontSize: "10px", letterSpacing: "0.4em", textTransform: "uppercase", color: "#804012", fontWeight: 600, marginBottom: "8px" }}>
            Portfolio
          </p>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "38px", fontWeight: 700, color: "#e8ddd0", margin: 0 }}>
            Recent <span style={{ color: "#DB9F75" }}>Works</span>
          </h2>
          <div style={{ position: "absolute", top: "-15px", right: "0", fontFamily: "'Cormorant Garamond', serif", fontSize: "60px", fontWeight: 600, color: "rgba(53, 87, 125, 0.08)", userSelect: "none" }}>
            05
          </div>
        </div>

        {/* Filter Buttons */}
        <div style={{ display: "flex", gap: "10px", justifyContent: "center", flexWrap: "wrap", marginBottom: "40px" }}>
          {allCategory.map((category, index) => (
            <button
              key={index}
              onClick={() => filterItems(category)}
              style={{
                padding: "8px 20px",
                borderRadius: "4px",
                border: "1px solid",
                borderColor: activeCategory === category ? "#DB9F75" : "rgba(53, 87, 125, 0.3)",
                background: "transparent",
                color: activeCategory === category ? "#DB9F75" : "rgba(200, 210, 225, 0.5)",
                fontSize: "10px",
                fontWeight: 600,
                textTransform: "uppercase",
                letterSpacing: "0.2em",
                cursor: "pointer",
                transition: "all 0.3s ease",
              }}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Grid - Centered items */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "25px",
          justifyContent: "center"
        }}>
          {projects.map((item) => (
            <ProjectCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

const iconButtonStyle = {
  width: "36px",
  height: "36px",
  borderRadius: "50%",
  background: "rgba(255, 255, 255, 0.03)",
  border: "1px solid rgba(219, 159, 117, 0.2)",
  color: "#DB9F75",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "16px",
  transition: "all 0.3s ease",
  textDecoration: "none",
};

export default Projects;