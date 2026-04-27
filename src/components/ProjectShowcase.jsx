import { useState } from "react";

const PROJECTS = [
  {
    id: 1,
    name: "POS & E-Commerce Platform",
    github: "https://github.com/Sadid205/pos_ecom",
    tools: [
      "Django", "DRF", "Next.js", "TypeScript",
      "Redux Toolkit", "RTK Query", "Ant Design",
      "PostgreSQL", "Docker", "Nginx",
      "GitHub Actions", "GHCR", "JWT", "Swagger",
    ],
    myRole: "Full Stack Developer",
    description:
      "A production-ready multi-module POS & E-Commerce platform with 16 Django apps covering orders, inventory, HRM, payments, subscriptions, marketing, and couriers. Features JWT authentication, Swagger API docs, and a Next.js (TypeScript) frontend with Redux Toolkit. Fully automated CI/CD pipeline via GitHub Actions, Docker, GHCR, and Nginx — deployed on a live VPS.",
  },
  {
    id: 2,
    name: "School ERP System",
    github: "https://github.com/Sadid205/School-erp",
    tools: [
      "Django", "DRF", "React.js", "Webpack",
      "PostgreSQL", "Docker", "GitHub Actions",
      "WeasyPrint", "ReportLab", "openpyxl", "QR Code",
    ],
    myRole: "Full Stack Developer",
    description:
      "A full-featured School ERP system with automated PDF, Excel, and QR code report generation. Built with a monorepo architecture combining Django backend and React frontend via Webpack. Includes role-based access control, attendance, exam management, and fee tracking. Deployed with separate dev/prod Docker environments and CI/CD via GitHub Actions.",
  },
  {
    id: 3,
    name: "Cricket Scorer",
    github: "https://github.com/Sadid205/Cricket-Scorer-Dockerize",
    tools: [
      "Django", "Django Channels", "WebSocket",
      "React.js", "Docker", "GitHub Actions", "PostgreSQL",
    ],
    myRole: "Full Stack Developer",
    description:
      "A real-time cricket scoring application built with Django Channels and WebSocket for live score updates. Features ball-by-ball tracking, innings management, player statistics, and live scorecard. Fully Dockerized with a production-ready setup and automated CI/CD pipeline via GitHub Actions.",
  },
  // নতুন প্রজেক্ট যোগ করতে এখানে আরেকটা object add করুন
];

const s = {
  kw:   { color: "#ff7b72" },
  va:   { color: "#79c0ff" },
  st:   { color: "#a5d6ff" },
  prop: { color: "#79c0ff" },
  pu:   { color: "#e6edf3" },
  fn:   { color: "#d2a8ff" },
  cm:   { color: "#f2cc60" },
  desc: { color: "#7ee787" },
};

const CodeBlock = ({ project }) => (
  <div style={{
    background: "#0d1117",
    borderRadius: "0 0 10px 10px",
    padding: "20px 24px",
    fontFamily: "'Fira Code', 'Consolas', monospace",
    fontSize: "13px",
    lineHeight: "1.8",
  }}>
    <div style={{ color: "#e6edf3" }}>
      <span style={s.kw}>const</span>{" "}
      <span style={s.va}>project</span>{" "}
      <span style={s.pu}>= {"{"}</span>
    </div>

    <div style={{ paddingLeft: "24px" }}>
      <div>
        <span style={s.prop}>name</span>
        <span style={s.pu}>: </span>
        <span style={s.st}>'{project.name}'</span>
        <span style={s.pu}>,</span>
      </div>

      <div>
        <span style={s.prop}>tools</span>
        <span style={s.pu}>: [</span>
        {project.tools.map((t, i) => (
          <span key={i}>
            <span style={s.st}>'{t}'</span>
            {i < project.tools.length - 1 && <span style={s.pu}>, </span>}
          </span>
        ))}
        <span style={s.pu}>],</span>
      </div>

      <div>
        <span style={s.prop}>myRole</span>
        <span style={s.pu}>: </span>
        <span style={s.fn}>{project.myRole}</span>
        <span style={s.pu}>,</span>
      </div>

      <div style={{ marginTop: "4px" }}>
        <span style={s.prop}>description</span>
        <span style={s.pu}>: </span>
        <span style={s.desc}>{project.description}</span>
        <span style={s.pu}>,</span>
      </div>
    </div>

    <div style={{ color: "#e6edf3" }}>
      <span style={s.pu}>{"}"}</span>
      <span style={s.pu}>;</span>
    </div>
  </div>
);

const ProjectCard = ({ project, isActive, onClick }) => (
  <div
    onClick={onClick}
    style={{
      borderRadius: "10px",
      border: `1px solid ${isActive ? "rgba(88,166,255,0.4)" : "#30363d"}`,
      overflow: "hidden",
      cursor: "pointer",
      transition: "border-color 0.3s ease",
      background: "#0d1117",
    }}
  >
    {/* Title bar */}
    <div style={{
      background: isActive ? "#161b22" : "#0d1117",
      padding: "12px 20px",
      display: "flex",
      alignItems: "center",
      gap: "8px",
      borderBottom: isActive ? "1px solid #30363d" : "none",
      transition: "background 0.3s ease",
    }}>
      {["#ff5f57", "#ffbd2e", "#28c840"].map((c, i) => (
        <div key={i} style={{ width: 11, height: 11, borderRadius: "50%", background: c }} />
      ))}
     <span style={{
        color: isActive ? "#58a6ff" : "#8b949e",
        fontFamily: "'Fira Code', monospace",
        fontSize: "14px",
        marginLeft: "12px",
        transition: "color 0.3s ease",
      }}>
        {project.name}
      </span>
        <a
        href={project.github}
        target="_blank"
        rel="noreferrer"
        onClick={e => e.stopPropagation()}
        style={{
          marginLeft: "auto",
          color: "#58a6ff",
          fontSize: "12px",
          fontFamily: "'Fira Code', monospace",
          textDecoration: "none",
          opacity: isActive ? 1 : 0,
          transition: "opacity 0.3s ease",
        }}
      >
        {"GitHub →"}
      </a>
    </div>

    {/* Expandable code block */}
    <div style={{
      maxHeight: isActive ? "600px" : "0px",
      overflow: "hidden",
      transition: "max-height 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
    }}>
      <CodeBlock project={project} />
    </div>
  </div>
);
const ProjectsShowCase = () => {
  const [activeId, setActiveId] = useState(1);

  return (
    <div style={{ padding: "40px 0" }}>
      {/* Section title */}
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
          Projects
        </h2>
        <div style={{
          width: "48px", height: "2px", marginTop: "8px",
          background: "linear-gradient(to right, #DB9F75, transparent)",
        }} />
      </div>

      {/* Project list */}
      <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        {PROJECTS.map(project => (
          <ProjectCard
            key={project.id}
            project={project}
            isActive={activeId === project.id}
            onClick={() => setActiveId(activeId === project.id ? null : project.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectsShowCase;