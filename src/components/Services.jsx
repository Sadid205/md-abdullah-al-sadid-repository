// import { useState } from "react";

// export const data = [
//   {
//     number: "01",
//     title: "BACK-END DEVELOPMENT",
//     description:
//       "I build scalable, production-ready back-ends using Django & Django REST Framework. From JWT authentication to Swagger API docs, REST APIs, and real-time systems with Django Channels & WebSocket.",
//   },
//   {
//     number: "02",
//     title: "FRONT-END DEVELOPMENT",
//     description:
//       "I convert Figma/XD/Photoshop designs into pixel-perfect UIs using React.js, Next.js, Redux Toolkit, RTK Query, and Tailwind CSS — with a focus on performance and clean architecture.",
//   },
//   {
//     number: "03",
//     title: "FULL-STACK DEVELOPMENT",
//     description:
//       "I architect and deliver complete web applications end-to-end. My stack includes Django + DRF on the back-end and Next.js / React on the front-end, backed by PostgreSQL and Redis.",
//   },
//   {
//     number: "04",
//     title: "DEVOPS & DEPLOYMENT",
//     description:
//       "I containerize apps with Docker & Docker Compose, configure Nginx & Gunicorn, set up CI/CD pipelines with GitHub Actions, and deploy to VPS — keeping production environments reliable and automated.",
//   },
//   {
//     number: "05",
//     title: "REAL-TIME SYSTEMS",
//     description:
//       "I design event-driven, low-latency real-time features using Django Channels, Redis channel layers, and WebSocket — like live cricket scoring systems with ball-by-ball updates.",
//   },
//   {
//     number: "06",
//     title: "REQUIREMENT ANALYSIS",
//     description:
//       "With a strong OOP foundation and 4 years of programming experience, I break down complex requirements, write clean pseudocode, and design modular, role-based architecture before a single line is coded.",
//   },
// ];

// const icons = [
//   // Back-end: server
//   <svg viewBox="0 0 24 24" fill="none" stroke="#35577D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
//     <rect x="2" y="3" width="20" height="4" rx="1" />
//     <rect x="2" y="10" width="20" height="4" rx="1" />
//     <rect x="2" y="17" width="20" height="4" rx="1" />
//     <circle cx="6" cy="5" r="0.8" fill="#35577D" />
//     <circle cx="6" cy="12" r="0.8" fill="#35577D" />
//     <circle cx="6" cy="19" r="0.8" fill="#35577D" />
//   </svg>,
//   // Front-end: code
//   <svg viewBox="0 0 24 24" fill="none" stroke="#35577D" strokeWidth="1.5" strokeLinecap="round">
//     <polyline points="16 18 22 12 16 6" />
//     <polyline points="8 6 2 12 8 18" />
//   </svg>,
//   // Full-stack: layers
//   <svg viewBox="0 0 24 24" fill="none" stroke="#35577D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
//     <polygon points="12 2 22 8.5 12 15 2 8.5 12 2" />
//     <polyline points="2 15.5 12 22 22 15.5" />
//     <polyline points="2 12 12 18.5 22 12" />
//   </svg>,
//   // DevOps: settings/gear
//   <svg viewBox="0 0 24 24" fill="none" stroke="#35577D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
//     <circle cx="12" cy="12" r="3" />
//     <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
//   </svg>,
//   // Real-time: activity
//   <svg viewBox="0 0 24 24" fill="none" stroke="#35577D" strokeWidth="1.5" strokeLinecap="round">
//     <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
//   </svg>,
//   // Requirement: clipboard
//   <svg viewBox="0 0 24 24" fill="none" stroke="#35577D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
//     <path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2" />
//     <rect x="9" y="3" width="6" height="4" rx="1" />
//     <line x1="9" y1="12" x2="15" y2="12" />
//     <line x1="9" y1="16" x2="13" y2="16" />
//   </svg>,
// ];

// const ServiceCard = ({ number, title, description, icon }) => {
//   const [hovered, setHovered] = useState(false);

//   return (
//     <div
//       onMouseEnter={() => setHovered(true)}
//       onMouseLeave={() => setHovered(false)}
//       style={{
//         position: "relative",
//         background: "linear-gradient(145deg, #1a2840 0%, #141e30 60%, #111826 100%)",
//         border: hovered
//           ? "1px solid rgba(219,159,117,0.4)"
//           : "1px solid rgba(53,87,125,0.3)",
//         borderRadius: "16px",
//         padding: "36px 32px",
//         cursor: "pointer",
//         overflow: "hidden",
//         transform: hovered ? "translateY(-8px) scale(1.01)" : "translateY(0) scale(1)",
//         transition:
//           "transform 0.4s cubic-bezier(0.23,1,0.32,1), border-color 0.4s ease, box-shadow 0.4s ease",
//         boxShadow: hovered
//           ? "0 24px 60px rgba(0,0,0,0.6), 0 8px 20px rgba(128,64,18,0.15), inset 0 1px 0 rgba(219,159,117,0.2), inset 0 -1px 0 rgba(0,0,0,0.4)"
//           : "0 4px 24px rgba(0,0,0,0.4), inset 0 1px 0 rgba(53,87,125,0.15), inset 0 -1px 0 rgba(0,0,0,0.3)",
//       }}
//     >
//       {/* Top golden shimmer */}
//       <div
//         style={{
//           position: "absolute",
//           top: 0, left: 0, right: 0,
//           height: "1px",
//           background: "linear-gradient(to right, transparent, rgba(219,159,117,0.5), transparent)",
//           opacity: hovered ? 1 : 0,
//           transition: "opacity 0.4s ease",
//         }}
//       />

//       {/* Bottom-right radial glow */}
//       <div
//         style={{
//           position: "absolute",
//           bottom: "-80px", right: "-80px",
//           width: "200px", height: "200px",
//           background: "radial-gradient(circle, rgba(128,64,18,0.15) 0%, transparent 70%)",
//           borderRadius: "50%",
//           opacity: hovered ? 1 : 0,
//           transform: hovered ? "scale(1.5)" : "scale(1)",
//           transition: "opacity 0.4s ease, transform 0.6s ease",
//           pointerEvents: "none",
//         }}
//       />

//       <div style={{ position: "relative", zIndex: 2 }}>
//         {/* Number */}
//         <div
//           style={{
//             display: "flex",
//             alignItems: "center",
//             gap: "12px",
//             marginBottom: "24px",
//             fontFamily: "'Cormorant Garamond', serif",
//             fontSize: "13px",
//             fontWeight: 600,
//             color: "#35577D",
//             letterSpacing: "0.15em",
//           }}
//         >
//           {number}
//           <div
//             style={{
//               flex: 1,
//               height: "1px",
//               background: "linear-gradient(to right, rgba(53,87,125,0.4), transparent)",
//               maxWidth: "40px",
//             }}
//           />
//         </div>

//         {/* Icon */}
//         <div
//           style={{
//             width: "44px", height: "44px",
//             borderRadius: "12px",
//             background: hovered
//               ? "linear-gradient(135deg, rgba(128,64,18,0.3), rgba(20,30,48,0.6))"
//               : "linear-gradient(135deg, rgba(53,87,125,0.25), rgba(20,30,48,0.6))",
//             border: hovered
//               ? "1px solid rgba(219,159,117,0.35)"
//               : "1px solid rgba(53,87,125,0.25)",
//             display: "flex",
//             alignItems: "center",
//             justifyContent: "center",
//             marginBottom: "20px",
//             transition: "background 0.4s ease, border-color 0.4s ease",
//           }}
//         >
//           <div style={{ width: "20px", height: "20px" }}>{icon}</div>
//         </div>

//         {/* Title */}
//         <div
//           style={{
//             fontFamily: "'Cormorant Garamond', serif",
//             fontSize: "22px",
//             fontWeight: 700,
//             color: hovered ? "#DB9F75" : "#e8ddd0",
//             marginBottom: "14px",
//             lineHeight: 1.25,
//             letterSpacing: "0.02em",
//             transition: "color 0.3s ease",
//           }}
//         >
//           {title}
//         </div>

//         {/* Description */}
//         <div
//           style={{
//             fontSize: "13.5px",
//             lineHeight: 1.75,
//             color: hovered ? "rgba(200,210,225,0.78)" : "rgba(200,210,225,0.52)",
//             marginBottom: "28px",
//             fontWeight: 300,
//             transition: "color 0.3s ease",
//           }}
//         >
//           {description}
//         </div>

//         {/* Explore arrow */}
//         <div
//           style={{
//             display: "flex",
//             alignItems: "center",
//             gap: "8px",
//             fontSize: "11px",
//             letterSpacing: "0.2em",
//             textTransform: "uppercase",
//             color: "#DB9F75",
//             fontWeight: 500,
//             opacity: hovered ? 1 : 0,
//             transform: hovered ? "translateY(0)" : "translateY(6px)",
//             transition: "opacity 0.35s ease, transform 0.35s ease",
//           }}
//         >
//           <span>Explore</span>
//           <div style={{ position: "relative", display: "flex", alignItems: "center" }}>
//             <div
//               style={{
//                 width: hovered ? "32px" : "24px",
//                 height: "1px",
//                 background: "#DB9F75",
//                 transition: "width 0.3s ease",
//               }}
//             />
//             <div
//               style={{
//                 position: "absolute",
//                 right: 0, top: "-3px",
//                 width: "6px", height: "6px",
//                 borderTop: "1px solid #DB9F75",
//                 borderRight: "1px solid #DB9F75",
//                 transform: "rotate(45deg)",
//               }}
//             />
//           </div>
//         </div>
//       </div>

//       {/* Corner dots */}
//       <div
//         style={{
//           position: "absolute",
//           bottom: "16px", right: "16px",
//           display: "flex", gap: "4px",
//           opacity: hovered ? 0.4 : 0.15,
//           transition: "opacity 0.3s ease",
//         }}
//       >
//         {[0, 1, 2].map((i) => (
//           <div
//             key={i}
//             style={{
//               width: "4px", height: "4px",
//               borderRadius: "50%",
//               background: "#DB9F75",
//             }}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// const ServicesSection = () => {
//   return (
//     <div
//       style={{
//         background: "#0d1726",
//         minHeight: "100vh",
//         padding: "60px 40px",
//         fontFamily: "'DM Sans', sans-serif",
//         position: "relative",
//         overflow: "hidden",
//       }}
//     >
//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;600;700&family=DM+Sans:wght@300;400;500&display=swap');
//       `}</style>

//       {/* BG glow top-left */}
//       <div
//         style={{
//           position: "absolute",
//           top: "-200px", left: "-200px",
//           width: "600px", height: "600px",
//           background: "radial-gradient(circle, rgba(53,87,125,0.35) 0%, transparent 70%)",
//           pointerEvents: "none",
//           borderRadius: "50%",
//         }}
//       />
//       {/* BG glow bottom-right */}
//       <div
//         style={{
//           position: "absolute",
//           bottom: "-150px", right: "-150px",
//           width: "500px", height: "500px",
//           background: "radial-gradient(circle, rgba(128,64,18,0.25) 0%, transparent 70%)",
//           pointerEvents: "none",
//           borderRadius: "50%",
//         }}
//       />

//       {/* Header */}
//       <div
//         style={{
//           display: "flex",
//           alignItems: "flex-end",
//           justifyContent: "space-between",
//           marginBottom: "56px",
//           position: "relative",
//           zIndex: 2,
//         }}
//       >
//         <div>
//           <p
//             style={{
//               fontSize: "11px",
//               letterSpacing: "0.3em",
//               textTransform: "uppercase",
//               color: "#804012",
//               fontWeight: 500,
//               margin: "0 0 10px 0",
//             }}
//           >
//             What I offer
//           </p>
//           <h2
//             style={{
//               fontFamily: "'Cormorant Garamond', serif",
//               fontSize: "52px",
//               fontWeight: 700,
//               color: "#e8ddd0",
//               lineHeight: 1,
//               margin: 0,
//             }}
//           >
//             My<br />
//             <span style={{ color: "#DB9F75" }}>Services</span>
//           </h2>
//           <div
//             style={{
//               width: "80px",
//               height: "1px",
//               background: "linear-gradient(to right, #804012, transparent)",
//               marginTop: "20px",
//             }}
//           />
//         </div>
//         <div
//           style={{
//             fontFamily: "'Cormorant Garamond', serif",
//             fontSize: "80px",
//             fontWeight: 600,
//             color: "rgba(53,87,125,0.15)",
//             lineHeight: 1,
//             userSelect: "none",
//           }}
//         >
//           0{data.length}
//         </div>
//       </div>

//       {/* Grid */}
//       <div
//         style={{
//           display: "grid",
//           gridTemplateColumns: "repeat(3, 1fr)",
//           gap: "24px",
//           position: "relative",
//           zIndex: 2,
//         }}
//       >
//         {data.map((item, index) => (
//           <ServiceCard
//             key={index}
//             number={item.number}
//             title={item.title}
//             description={item.description}
//             icon={icons[index]}
//           />
//         ))}
//       </div>

//       {/* Footer */}
//       <div
//         style={{
//           display: "flex",
//           alignItems: "center",
//           justifyContent: "space-between",
//           marginTop: "48px",
//           paddingTop: "28px",
//           borderTop: "1px solid rgba(53,87,125,0.2)",
//           position: "relative",
//           zIndex: 2,
//         }}
//       >
//         <span
//           style={{
//             fontSize: "12px",
//             letterSpacing: "0.15em",
//             color: "rgba(200,210,225,0.3)",
//             textTransform: "uppercase",
//           }}
//         >
//           MD. Abdullah Al Sadid — Software Engineer
//         </span>
//         <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
//           <div style={{ width: "40px", height: "1px", background: "rgba(219,159,117,0.3)" }} />
//           <span
//             style={{
//               fontSize: "11px",
//               letterSpacing: "0.12em",
//               color: "rgba(200,210,225,0.25)",
//               textTransform: "uppercase",
//             }}
//           >
//             All services
//           </span>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ServicesSection;

import { useState } from "react";

// ১. ডাটা কম্পোনেন্টের ভেতরে বা বাইরে ডিফাইন করা থাকতে হবে
const serviceData = [
  {
    number: "01",
    title: "BACK-END DEVELOPMENT",
    description: "I build scalable, production-ready back-ends using Django & Django REST Framework. From JWT authentication to Swagger API docs.",
  },
  {
    number: "02",
    title: "FRONT-END DEVELOPMENT",
    description: "I convert Figma/XD designs into pixel-perfect UIs using React.js, Next.js, Redux Toolkit, and Tailwind CSS.",
  },
  {
    number: "03",
    title: "FULL-STACK DEVELOPMENT",
    description: "I architect complete web applications end-to-end. My stack includes Django + DRF and Next.js / React.",
  },
  {
    number: "04",
    title: "DEVOPS & DEPLOYMENT",
    description: "I containerize apps with Docker, configure Nginx, and set up CI/CD pipelines with GitHub Actions.",
  },
  {
    number: "05",
    title: "REAL-TIME SYSTEMS",
    description: "I design event-driven, low-latency features using Django Channels, Redis, and WebSocket.",
  },
  {
    number: "06",
    title: "REQUIREMENT ANALYSIS",
    description: "I break down complex requirements, write clean pseudocode, and design modular, role-based architecture.",
  },
];

// ২. আইকনগুলোকে একটি ফাংশন হিসেবে রাখলে রেন্ডারিংয়ে সুবিধা হয়
const ServiceIcon = ({ index, hovered }) => {
  const color = hovered ? "#0d1726" : "#35577D"; // হোভার করলে কালার চেঞ্জ হবে
  const icons = [
    <svg viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="4" rx="1" /><rect x="2" y="10" width="20" height="4" rx="1" /><rect x="2" y="17" width="20" height="4" rx="1" /></svg>,
    <svg viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round"><polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" /></svg>,
    <svg viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 22 8.5 12 15 2 8.5 12 2" /><polyline points="2 15.5 12 22 22 15.5" /></svg>,
    <svg viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3" /><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33a1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" /></svg>,
    <svg viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12" /></svg>,
    <svg viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2" /><rect x="9" y="3" width="6" height="4" rx="1" /><line x1="9" y1="12" x2="15" y2="12" /><line x1="9" y1="16" x2="13" y2="16" /></svg>,
  ];
  return icons[index] || icons[0];
};

const ServiceCard = ({ number, title, description, index }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: "relative",
        background: hovered 
          ? "linear-gradient(165deg, #1e2d4a 0%, #141e30 50%, #0d1117 100%)" 
          : "linear-gradient(145deg, #162238 0%, #141e30 60%, #0d1117 100%)",
        border: `1px solid ${hovered ? "rgba(219,159,117,0.5)" : "rgba(53,87,125,0.2)"}`,
        borderRadius: "20px",
        padding: "32px",
        cursor: "pointer",
        transition: "all 0.4s ease",
        transform: hovered ? "translateY(-10px)" : "translateY(0)",
      }}
    >
      <div style={{ position: "relative", zIndex: 2 }}>
        <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "20px" }}>
          <span style={{ color: hovered ? "#DB9F75" : "#35577D", fontSize: "14px", fontWeight: "bold" }}>{number}</span>
          <div style={{ flex: 1, height: "1px", background: "rgba(53,87,125,0.2)" }} />
        </div>

        <div style={{
          width: "50px", height: "50px",
          borderRadius: "12px",
          background: hovered ? "#DB9F75" : "rgba(53,87,125,0.1)",
          display: "flex", alignItems: "center", justifyContent: "center",
          marginBottom: "20px",
          transition: "0.3s ease"
        }}>
          <div style={{ width: "24px", height: "24px" }}>
            <ServiceIcon index={index} hovered={hovered} />
          </div>
        </div>

        <h3 style={{ fontSize: "22px", color: hovered ? "#DB9F75" : "#e8ddd0", margin: "0 0 10px 0" }}>{title}</h3>
        <p style={{ fontSize: "14px", lineHeight: "1.6", color: hovered ? "#e8ddd0" : "rgba(200,210,225,0.5)" }}>{description}</p>
      </div>
    </div>
  );
};

const ServicesSection = () => {
  return (
    <div style={{ background: "#0d1726", padding: "60px 20px", minHeight: "100vh" }}>
      <div style={{ textAlign: "center", marginBottom: "50px" }}>
        <h2 style={{ fontSize: "40px", color: "#e8ddd0", margin: 0 }}>
          My <span style={{ color: "#DB9F75" }}>Services</span>
        </h2>
        <div style={{ width: "50px", height: "2px", background: "#DB9F75", margin: "15px auto" }} />
      </div>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
        gap: "25px",
        maxWidth: "1100px",
        margin: "0 auto"
      }}>
        {serviceData.map((item, index) => (
          <ServiceCard
            key={index}
            index={index}
            number={item.number}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </div>
  );
};

export default ServicesSection;