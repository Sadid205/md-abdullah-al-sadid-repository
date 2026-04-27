import { useState } from "react";

const EXPERIENCE = [
  {
    id: 1,
    company: "Cloud Next Generation UK Ltd",
    role: "Software Engineer",
    location: "Remote",
    period: "Jan 2025 - Present",
    techStack: ["Django", "DRF", "Next.js", "React", "Docker", "CI/CD"],
    highlights: [
      "Promoted from Intern to Software Engineer due to exceptional performance.",
      "Building full-stack applications for enterprise POS and e-commerce systems.",
      "Implementing secure JWT authentication and RESTful APIs.",
      "Managing production deployments using Docker, Nginx, and CI/CD pipelines.",
      "Working in an Agile environment with focus on TDD and daily stand-ups.",
    ],
  }
];

const s = {
  kw:   { color: "#ff7b72" }, // Keyword
  va:   { color: "#79c0ff" }, // Variable
  st:   { color: "#a5d6ff" }, // String
  pu:   { color: "#e6edf3" }, // Punctuation
  fn:   { color: "#d2a8ff" }, // Function/Role
  cm:   { color: "#8b949e" }, // Comment
  accent: { color: "#DB9F75" } // Your Golden Accent
};

const ExperienceCode = ({ exp }) => (
  <div style={{
    background: "#0d1117",
    borderRadius: "0 0 10px 10px",
    padding: "20px 24px",
    fontFamily: "'Fira Code', monospace",
    fontSize: "13px",
    lineHeight: "1.8",
  }}>
    <div style={{ color: "#e6edf3" }}>
      <span style={s.kw}>class</span> <span style={s.fn}>Experience</span> <span style={s.pu}>{"{"}</span>
    </div>

    <div style={{ paddingLeft: "24px" }}>
      <div>
        <span style={s.cm}>// {exp.period}</span>
      </div>
      <div>
        <span style={s.va}>this</span>.<span style={s.prop}>role</span> = <span style={s.st}>'{exp.role}'</span><span style={s.pu}>;</span>
      </div>
      <div>
        <span style={s.va}>this</span>.<span style={s.prop}>company</span> = <span style={s.st}>'{exp.company}'</span><span style={s.pu}>;</span>
      </div>
      
      <div style={{ marginTop: "10px" }}>
        <span style={s.kw}>const</span> <span style={s.va}>achievements</span> = <span style={s.pu}>[</span>
        {exp.highlights.map((text, i) => (
          <div key={i} style={{ paddingLeft: "24px" }}>
            <span style={s.st}>"{text}"</span><span style={s.pu}>,</span>
          </div>
        ))}
        <span style={s.pu}>];</span>
      </div>
    </div>

    <div style={{ color: "#e6edf3" }}>
      <span style={s.pu}>{"}"}</span>
    </div>
  </div>
);

const Experience = () => {
  const [activeId, setActiveId] = useState(1);

  return (
    <div style={{ padding: "40px 0" }}>
      {/* Title with your Gradient Style */}
      <div style={{ marginBottom: "24px" }}>
        <h2 style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: "clamp(20px, 3vw, 28px)",
          fontWeight: 700,
          color: "#e8ddd0",
          letterSpacing: "0.1em",
          margin: 0,
          textTransform: "uppercase",
        }}>
          Experience
        </h2>
        <div style={{
          width: "48px", height: "2px", marginTop: "8px",
          background: "linear-gradient(to right, #DB9F75, transparent)",
        }} />
      </div>

      {/* Experience Cards */}
      <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
        {EXPERIENCE.map(exp => (
          <div key={exp.id} 
            onClick={() => setActiveId(activeId === exp.id ? null : exp.id)}
            style={{
              borderRadius: "10px",
              border: `1px solid ${activeId === exp.id ? "rgba(219, 159, 117, 0.4)" : "#30363d"}`,
              overflow: "hidden",
              background: "#0d1117",
              cursor: "pointer"
            }}
          >
            {/* Header */}
            <div style={{
              padding: "16px 20px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              background: activeId === exp.id ? "#161b22" : "#0d1117",
            }}>
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <div style={{ display: "flex", gap: "6px" }}>
                  {["#ff5f57", "#ffbd2e", "#28c840"].map((c, i) => (
                    <div key={i} style={{ width: 10, height: 10, borderRadius: "50%", background: c }} />
                  ))}
                </div>
                <span style={{ color: activeId === exp.id ? "#DB9F75" : "#8b949e", fontFamily: "'Fira Code', monospace", fontSize: "14px" }}>
                  {exp.company}.js
                </span>
              </div>
              <span style={{ color: "#58a6ff", fontSize: "12px", fontFamily: "'Fira Code', monospace" }}>
                {activeId === exp.id ? "viewing_experience()" : "./click_to_open"}
              </span>
            </div>

            {/* Expandable Section */}
            <div style={{
              maxHeight: activeId === exp.id ? "800px" : "0px",
              overflow: "hidden",
              transition: "max-height 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
            }}>
              <ExperienceCode exp={exp} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;