import { useState } from "react";
import { FaEnvelope, FaFacebook, FaGithub, FaLinkedin, FaMapMarkerAlt, FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const ContactInfoItem = ({ icon, label, value, link }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        display: "flex",
        alignItems: "center",
        gap: "15px",
        padding: "15px",
        borderRadius: "12px",
        background: isHovered ? "rgba(53, 87, 125, 0.1)" : "transparent",
        border: isHovered ? "1px solid rgba(219, 159, 117, 0.3)" : "1px solid transparent",
        transition: "all 0.3s ease",
        cursor: link ? "pointer" : "default",
        textDecoration: "none"
      }}
      as={link ? "a" : "div"}
      href={link}
      target={link ? "_blank" : undefined}
    >
      <div style={{
        width: "40px",
        height: "40px",
        borderRadius: "10px",
        background: isHovered ? "#DB9F75" : "rgba(53, 87, 125, 0.15)",
        color: isHovered ? "#0d1726" : "#DB9F75",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "18px",
        transition: "all 0.3s ease"
      }}>
        {icon}
      </div>
      <div>
        <p style={{ fontSize: "11px", color: "rgba(200, 210, 225, 0.4)", margin: 0, textTransform: "uppercase", letterSpacing: "1px" }}>{label}</p>
        <p style={{ fontSize: "15px", color: "#e8ddd0", margin: 0, fontWeight: 500 }}>{value}</p>
      </div>
    </div>
  );
};

const Contact = () => {
  return (
    <div style={{
      background: "#0d1726",
      padding: "60px 20px",
      fontFamily: "'DM Sans', sans-serif",
      display: "flex",
      flexDirection: "column",
      alignItems: "center"
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;600;700&family=DM+Sans:wght@300;400;500&display=swap');
      `}</style>

      <div style={{ width: "100%", maxWidth: "900px" }}>
        {/* Header */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "50px", borderBottom: "1px solid rgba(53, 87, 125, 0.2)", paddingBottom: "15px" }}>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "32px", fontWeight: 700, color: "#e8ddd0", margin: 0 }}>
            Get In <span style={{ color: "#DB9F75" }}>Touch</span>
          </h2>
          <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "40px", fontWeight: 600, color: "rgba(53, 87, 125, 0.15)" }}>
            06
          </div>
        </div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "30px",
          background: "linear-gradient(145deg, #1a2840 0%, #111826 100%)",
          padding: "40px",
          borderRadius: "20px",
          border: "1px solid rgba(53, 87, 125, 0.2)"
        }}>
          {/* Left Column: Direct Contact */}
          <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            <ContactInfoItem 
              icon={<FaEnvelope />} 
              label="Email" 
              value="abdullahalsadid1914@gmail.com" 
            />
            <ContactInfoItem 
              icon={<FaWhatsapp />} 
              label="Mobile / WhatsApp" 
              value="+8801881543084" 
            />
            <ContactInfoItem 
              icon={<FaMapMarkerAlt />} 
              label="Address" 
              value="Jhenaidah, Bangladesh" 
            />
          </div>

          {/* Right Column: Social Links */}
          <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", borderLeft: "1px solid rgba(53, 87, 125, 0.1)", paddingLeft: "20px" }}>
            <p style={{ 
              fontFamily: "'Cormorant Garamond', serif", 
              fontSize: "20px", 
              color: "#DB9F75", 
              marginBottom: "25px",
              fontWeight: 600
            }}>Social Connect</p>
            
            <div style={{ display: "flex", gap: "15px", flexWrap: "wrap", justifyContent: "center" }}>
              <SocialIcon link="https://github.com/Sadid205" icon={<FaGithub />} />
              <SocialIcon link="https://www.linkedin.com/in/abdullah-al-sadid/" icon={<FaLinkedin />} />
              <SocialIcon link="https://x.com/Sadid58827821" icon={<FaXTwitter />} />
              <SocialIcon link="https://www.facebook.com/md.abdullahalsadid19/" icon={<FaFacebook />} />
            </div>
            
            <p style={{ marginTop: "30px", fontSize: "12px", color: "rgba(200, 210, 225, 0.3)", textAlign: "center" }}>
              Let's build something scalable together.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const SocialIcon = ({ link, icon }) => {
  const [hover, setHover] = useState(false);
  return (
    <a 
      href={link} 
      target="_blank" 
      rel="noreferrer"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        width: "45px",
        height: "45px",
        borderRadius: "50%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "20px",
        background: hover ? "#DB9F75" : "transparent",
        color: hover ? "#0d1726" : "#DB9F75",
        border: "1px solid #DB9F75",
        transition: "all 0.3s ease",
        textDecoration: "none"
      }}
    >
      {icon}
    </a>
  );
};

export default Contact;