import { useState } from "react";

const CERTIFICATES = [
  {
    id: 1,
    title: "Full Stack Web Development & Software Engineering",
    issuer: "Programming Hero (Phitron)",
    date: "Dec 2023",
    image: "/assets/certificate_phitron.jpg",
    // আপনার বিস্তারিত টপিকগুলো এখানে অবজেক্ট আকারে সাজানো হয়েছে
    specializations: {
      data_structures: ["Linked List", "Stack", "Queue", "Binary Tree", "BST", "Heap"],
      algorithms: ["BFS/DFS", "Dijkstra", "Bellman Ford", "Dynamic Programming", "Knapsack"],
      backend_oop: ["Python OOP", "Encapsulation", "Inheritance","JWT"],
      database: ["PostgreSQL", "Normalization", "Indexing", "Query Optimization"]
    }
  }
];

const s = {
  kw:   { color: "#ff7b72" }, // Keyword
  va:   { color: "#79c0ff" }, // Variable
  st:   { color: "#a5d6ff" }, // String
  pu:   { color: "#e6edf3" }, // Punctuation
  fn:   { color: "#d2a8ff" }, // Function
  cm:   { color: "#8b949e" }, // Comment
  accent: { color: "#DB9F75" } // Golden Accent
};

const CertificateCode = ({ cert }) => (
  <div style={{
    background: "#0d1117",
    padding: "24px",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
    gap: "30px",
    alignItems: "start"
  }}>
    {/* Left Side: Detail Code Block */}
    <div style={{
      fontFamily: "'Fira Code', monospace",
      fontSize: "12px",
      lineHeight: "1.6",
    }}>
      <div style={{ color: "#e6edf3" }}>
        <span style={s.kw}>class</span> <span style={s.fn}>PhitronGraduate</span> <span style={s.pu}>{"{"}</span>
      </div>

      <div style={{ paddingLeft: "20px" }}>
        <span style={s.cm}>/* Full Curriculum Expertise */</span>
        
        {Object.entries(cert.specializations).map(([key, list]) => (
          <div key={key} style={{ marginTop: "8px" }}>
            <span style={s.va}>this</span>.<span style={s.va}>{key}</span> = <span style={s.pu}>[</span>
            <div style={{ paddingLeft: "20px" }}>
              {list.map((item, i) => (
                <span key={i}>
                  <span style={s.st}>"{item}"</span>
                  {i < list.length - 1 ? <span style={s.pu}>, </span> : ""}
                  {i % 2 === 1 && <br />} {/* প্রতি লাইনে ২টা করে স্কিল দেখাবে */}
                </span>
              ))}
            </div>
            <span style={s.pu}>];</span>
          </div>
        ))}
      </div>

      <div style={{ color: "#e6edf3", marginTop: "10px" }}>
        <span style={s.pu}>{"}"}</span>
      </div>
    </div>

    {/* Right Side: Image Preview */}
    <div style={{
      borderRadius: "8px",
      border: "1px solid #30363d",
      overflow: "hidden",
      background: "#161b22",
      boxShadow: "0 10px 30px rgba(0,0,0,0.5)"
    }}>
      <div style={{ 
        background: "#21262d", padding: "8px 12px", fontSize: "11px", color: "#8b949e",
        display: "flex", justifyContent: "space-between", borderBottom: "1px solid #30363d"
      }}>
        <span>certificate_preview.png</span>
        <span style={{ color: s.accent.color }}>Verified ✓</span>
      </div>
      <img 
        src={cert.image} 
        alt={cert.title} 
        style={{ width: "100%", height: "auto", display: "block" }} 
      />
    </div>
  </div>
);

const Certificates = () => {
  const [activeId, setActiveId] = useState(1);

  return (
    <div style={{ padding: "40px 0" }}>
      <div style={{ marginBottom: "28px" }}>
        <h2 style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: "28px", fontWeight: 700, color: "#e8ddd0", letterSpacing: "0.1em", textTransform: "uppercase", margin: 0
        }}>
          Specializations & Certificates
        </h2>
        <div style={{ width: "50px", height: "2px", background: "#DB9F75", marginTop: "8px" }} />
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
        {CERTIFICATES.map(cert => (
          <div key={cert.id} style={{
            borderRadius: "12px", border: `1px solid ${activeId === cert.id ? "#DB9F75" : "#30363d"}`,
            background: "#0d1117", overflow: "hidden"
          }}>
            <div 
              onClick={() => setActiveId(activeId === cert.id ? null : cert.id)}
              style={{
                padding: "18px 24px", cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center",
                background: activeId === cert.id ? "#161b22" : "transparent"
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
                <div style={{ color: s.accent.color }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                </div>
                <div>
                  <div style={{ color: "#e6edf3", fontSize: "15px", fontWeight: "600", fontFamily: "sans-serif" }}>{cert.title}</div>
                  <div style={{ color: "#8b949e", fontSize: "12px", marginTop: "2px" }}>{cert.issuer} • {cert.date}</div>
                </div>
              </div>
              <div style={{ color: "#58a6ff", fontFamily: "'Fira Code', monospace", fontSize: "12px" }}>
                {activeId === cert.id ? "close_details()" : "expand_curriculum()"}
              </div>
            </div>

            <div style={{
              maxHeight: activeId === cert.id ? "1500px" : "0px",
              overflow: "hidden", transition: "max-height 0.7s ease-in-out"
            }}>
              <CertificateCode cert={cert} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Certificates;