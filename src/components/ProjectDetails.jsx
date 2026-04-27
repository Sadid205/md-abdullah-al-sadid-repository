import { useEffect, useState } from "react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
// ProjectsData ইম্পোর্ট ঠিক রেখো
// import { ProjectsData } from "../Data/ProjectsData";

const ProjectDetails = () => {
  const { project_id } = useParams();
  const [selectedImgObj, setSelectedImgObj] = useState(null);
  
  // রেজুমি এবং আগের কন্টেক্সট অনুযায়ী ডামি ডাটা স্ট্রাকচার (যা তোমার ProjectsData তে থাকবে)
  const projectData = {
    id: 1,
    name: "POS + E-Commerce Platform",
    category: "Enterprise SaaS / Full-Stack",
    description: "Built an enterprise-level POS & e-commerce system that handles inventory, HRM, and finance analytics. It features a modular architecture with 16+ Django apps and production-ready Docker deployment.",
    github_link: "#",
    web_link: "https://cloudnextgen.co.uk/",
    rating: "4.9",
    details: {
      img_and_title: [
        { img_link: "/public/assets/pos-order.png", title: "Dashboard Overview" },
        { img_link: "/public/assets/pos-profile.png", title: "Profile Section" },
        { img_link: "/public/assets/pos-order.png", title: "Order Section" },
      ],
      technology: [
        { tech_name: "Django", tech_logo: "https://cdn.worldvectorlogo.com/logos/django.svg" },
        { tech_name: "Next.js", tech_logo: "https://cdn.worldvectorlogo.com/logos/next-js.svg" },
        { tech_name: "PostgreSQL", tech_logo: "https://cdn.worldvectorlogo.com/logos/postgresql.svg" },
        { tech_name: "Docker", tech_logo: "https://cdn.worldvectorlogo.com/logos/docker-3.svg" },
      ],
      key_features: [
        "16+ Modular Django Applications",
        "Role-Based Access Control (RBAC)",
        "Real-time Inventory Tracking",
        "Automated PDF/Excel Reporting",
        "CI/CD Pipeline with GitHub Actions",
        "JWT Authentication & Secure API"
      ]
    }
  };

  useEffect(() => {
    if (projectData?.details?.img_and_title?.length > 0) {
      setSelectedImgObj(projectData.details.img_and_title[0]);
    }
  }, [project_id]);

  if (!projectData) return <div style={{ color: "#e8ddd0", textAlign: "center", padding: "100px" }}>Project Not Found</div>;

  return (
    <div style={{
      background: "#0d1726",
      minHeight: "100vh",
      padding: "100px 20px 60px",
      fontFamily: "'DM Sans', sans-serif",
      color: "#e8ddd0"
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;600;700&family=DM+Sans:wght@300;400;500&display=swap');
        .custom-scrollbar::-webkit-scrollbar { width: 4px; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #35577D; border-radius: 10px; }
      `}</style>

      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        
        {/* Header Section */}
        <div style={{ marginBottom: "40px", borderBottom: "1px solid rgba(53, 87, 125, 0.2)", paddingBottom: "20px" }}>
           <Link to="/projects" style={{ color: "#DB9F75", textDecoration: "none", fontSize: "14px", display: "flex", alignItems: "center", gap: "8px", marginBottom: "15px" }}>
             ← Back to Portfolio
           </Link>
           <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "42px", fontWeight: 700, margin: 0 }}>
             {projectData.name}
           </h1>
           <p style={{ color: "#35577D", letterSpacing: "0.2em", fontSize: "12px", marginTop: "10px", textTransform: "uppercase" }}>
             Case Study / {projectData.category}
           </p>
        </div>

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
                style={{ width: "100%", height: "100%", objectFit: "cover", transition: "0.5s ease" }} 
              />
            </div>
            <p style={{ color: "rgba(200, 210, 225, 0.5)", fontSize: "13px", marginTop: "12px", textAlign: "center", fontStyle: "italic" }}>
              {selectedImgObj?.title}
            </p>
            
            <div style={{ display: "flex", gap: "12px", marginTop: "20px", justifyContent: "center", overflowX: "auto", paddingBottom: "10px" }}>
              {projectData.details.img_and_title.map((item, index) => (
                <img
                  key={index}
                  onClick={() => setSelectedImgObj(item)}
                  src={item.img_link}
                  alt="thumb"
                  style={{
                    width: "80px", height: "60px", objectFit: "cover", borderRadius: "8px",
                    cursor: "pointer", border: selectedImgObj?.img_link === item.img_link ? "2px solid #DB9F75" : "1px solid rgba(53, 87, 125, 0.3)",
                    opacity: selectedImgObj?.img_link === item.img_link ? 1 : 0.6,
                    transition: "0.3s"
                  }}
                />
              ))}
            </div>
          </div>

          {/* Right: Project Info */}
          <div>
            <div style={{ display: "flex", gap: "15px", marginBottom: "30px" }}>
              <a href={projectData.github_link} target="_blank" rel="noreferrer" style={linkButtonStyle}>
                <FaGithub /> GitHub Repository
              </a>
              <a href={projectData.web_link} target="_blank" rel="noreferrer" style={linkButtonStyle}>
                <FaExternalLinkAlt /> Live Preview
              </a>
            </div>

            <h3 style={sectionTitleStyle}>Description</h3>
            <p style={{ lineHeight: "1.8", color: "rgba(200, 210, 225, 0.7)", marginBottom: "30px", fontWeight: 300 }}>
              {projectData.description}
            </p>

            <h3 style={sectionTitleStyle}>Core Technologies</h3>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "20px", marginBottom: "40px" }}>
              {projectData.details.technology.map((tech, index) => (
                <div key={index} style={{ textAlign: "center", width: "70px" }}>
                  <div style={{ 
                    width: "50px", height: "50px", background: "rgba(255,255,255,0.03)", 
                    borderRadius: "12px", display: "flex", alignItems: "center", justifyContent: "center",
                    margin: "0 auto 8px", border: "1px solid rgba(53, 87, 125, 0.2)"
                  }}>
                    <img src={tech.tech_logo} alt={tech.tech_name} style={{ width: "28px", height: "28px", filter: "grayscale(20%)" }} />
                  </div>
                  <span style={{ fontSize: "11px", color: "rgba(200, 210, 225, 0.5)" }}>{tech.tech_name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div style={{ marginTop: "60px", background: "rgba(20, 30, 48, 0.5)", borderRadius: "20px", padding: "40px", border: "1px solid rgba(53, 87, 125, 0.1)" }}>
           <h3 style={{ ...sectionTitleStyle, textAlign: "center", marginBottom: "40px" }}>Key Features & Achievements</h3>
           <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "15px" }}>
             {projectData.details.key_features.map((feature, index) => (
               <div key={index} style={{ 
                 display: "flex", alignItems: "center", gap: "12px", padding: "15px 20px",
                 background: "rgba(53, 87, 125, 0.05)", borderRadius: "10px", border: "1px solid rgba(53, 87, 125, 0.1)"
               }}>
                 <div style={{ minWidth: "8px", height: "8px", borderRadius: "50%", background: "#DB9F75" }} />
                 <span style={{ fontSize: "14px", color: "rgba(200, 210, 225, 0.8)" }}>{feature}</span>
               </div>
             ))}
           </div>
        </div>

      </div>
    </div>
  );
};

// Reusable Styles
const linkButtonStyle = {
  display: "flex", alignItems: "center", gap: "10px", padding: "10px 20px",
  background: "transparent", border: "1px solid #DB9F75", color: "#DB9F75",
  borderRadius: "30px", fontSize: "13px", fontWeight: 600, transition: "0.3s", cursor: "pointer", textDecoration: "none"
};

const sectionTitleStyle = {
  fontFamily: "'Cormorant Garamond', serif", fontSize: "24px", fontWeight: 700, color: "#DB9F75",
  marginBottom: "15px", letterSpacing: "0.05em"
};

export default ProjectDetails;