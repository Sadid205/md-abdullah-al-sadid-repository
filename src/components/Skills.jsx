import { useEffect, useRef, useState } from "react";

// ─── SVG Icons (inline, no external deps) ───────────────────────────────────
const Icon = {
  Python: (
    <svg viewBox="0 0 48 48" width="18" height="18">
      <path fill="#0277BD" d="M24.047,5c-1.555.005-2.633.142-3.936.367-3.848.67-4.549,2.077-4.549,4.67V14h9v2H15.22h-4.35c-2.636,0-4.943,1.242-5.674,4.219-.826,3.417-.863,5.557,0,9.125C5.851,32.005,7.294,34,9.931,34h3.632v-5.104c0-2.966,2.686-5.896,5.764-5.896h7.236c2.523,0,5-1.862,5-4.377V9.037c0-2.439-1.759-4.263-4.218-4.672C27.406,5.359,25.589,4.994,24.047,5zM19.063,9c.821,0,1.5.677,1.5,1.502,0,.833-.679,1.498-1.5,1.498-.837,0-1.5-.664-1.5-1.498C17.563,9.68,18.226,9,19.063,9z"/>
      <path fill="#FFC107" d="M23.078,43c1.555-.005,2.633-.142,3.936-.367,3.848-.67,4.549-2.077,4.549-4.67V34h-9v-2h9.343h4.35c2.636,0,4.943-1.242,5.674-4.219.826-3.417.863-5.557,0-9.125C41.274,15.995,39.831,14,37.194,14h-3.632v5.104c0,2.966-2.686,5.896-5.764,5.896h-7.236c-2.523,0-5,1.862-5,4.377v8.586c0,2.439,1.759,4.263,4.218,4.672C19.719,42.641,21.536,43.006,23.078,43zM28.063,39c-.821,0-1.5-.677-1.5-1.502,0-.833.679-1.498,1.5-1.498.837,0,1.5.664,1.5,1.498C29.563,38.32,28.899,39,28.063,39z"/>
    </svg>
  ),
  JS: (
    <svg viewBox="0 0 48 48" width="18" height="18">
      <path fill="#ffd600" d="M6,42V6h36v36H6z"/>
      <path fill="#000" d="M29.538,32.947c.692,1.124,1.444,2.201,3.037,2.201,1.338,0,2.04-.665,2.04-1.585,0-1.101-.726-1.492-2.198-2.133l-.807-.344c-2.329-.988-3.878-2.226-3.878-4.841,0-2.41,1.845-4.244,4.728-4.244,2.053,0,3.528.711,4.592,2.573l-2.514,1.607c-.553-.988-1.151-1.377-2.078-1.377-.946,0-1.545.597-1.545,1.377,0,.964.6,1.354,1.985,1.951l.807.344C36.452,29.645,38,30.839,38,33.523,38,36.415,35.716,38,32.65,38c-2.999,0-4.702-1.505-5.65-3.368L29.538,32.947zM17.952,33.029c.506.906,1.275,1.603,2.381,1.603,1.058,0,1.667-.418,1.667-2.043V22h3.333v11.101c0,3.367-1.953,4.899-4.805,4.899-2.577,0-4.437-1.746-5.195-3.368L17.952,33.029z"/>
    </svg>
  ),
  TS: (
    <svg viewBox="0 0 48 48" width="18" height="18">
      <rect width="36" height="36" x="6" y="6" fill="#1976d2"/>
      <path fill="#fff" d="M27,22h-6v-3h15v3h-6v16h-3V22zM15.008,37.837c.588.308,1.671.655,2.777.655,2.832,0,4.215-1.406,4.215-4.306V26h-2.997v8.091c0,1.421-.484,1.909-1.546,1.909-.541,0-1.099-.158-1.449-.35V37.837z"/>
    </svg>
  ),
  React: (
    <svg viewBox="0 0 48 48" width="18" height="18">
      <path fill="#80deea" d="M24,34C11.1,34,1,29.6,1,24c0-5.6,10.1-10,23-10c12.9,0,23,4.4,23,10C47,29.6,36.9,34,24,34zM24,16c-12.6,0-21,4.1-21,8c0,3.9,8.4,8,21,8s21-4.1,21-8C45,20.1,36.6,16,24,16z"/>
      <path fill="#80deea" d="M15.1,44.6c-1,0-1.8-.2-2.6-.7C7.6,41.1,8.9,30.2,15.3,19l0,0c3-5.2,6.7-9.6,10.3-12.4c3.9-3,7.4-3.9,9.8-2.5c2.5,1.4,3.4,4.9,2.8,9.8c-0.6,4.6-2.6,10-5.6,15.2c-3,5.2-6.7,9.6-10.3,12.4C19.7,43.5,17.2,44.6,15.1,44.6zM32.9,5.4c-1.6,0-3.7.9-6,2.7c-3.4,2.7-6.9,6.9-9.8,11.9l0,0c-6.3,10.9-6.9,20.3-3.6,22.2c1.7,1,4.5.1,7.6-2.3c3.4-2.7,6.9-6.9,9.8-11.9c2.9-5,4.8-10.1,5.4-14.4c0.5-4-.1-6.8-1.8-7.8C34,5.6,33.5,5.4,32.9,5.4z"/>
      <path fill="#80deea" d="M33,44.6c-5,0-12.2-6.1-17.6-15.6C8.9,17.8,7.6,6.9,12.5,4.1l0,0C17.4,1.3,26.2,7.8,32.7,19c3,5.2,5,10.6,5.6,15.2c0.7,4.9-.3,8.3-2.8,9.8C34.7,44.4,33.9,44.6,33,44.6zM13.5,5.8c-3.3,1.9-2.7,11.3,3.6,22.2c6.3,10.9,14.1,16.1,17.4,14.2c1.7-1,2.3-3.8,1.8-7.8c-0.6-4.3-2.5-9.4-5.4-14.4C24.6,9.1,16.8,3.9,13.5,5.8z"/>
      <circle cx="24" cy="24" r="4" fill="#80deea"/>
    </svg>
  ),
  Next: (
    <svg viewBox="0 0 48 48" width="18" height="18">
      <circle cx="24" cy="24" r="20" fill="#000"/>
      <path fill="#fff" d="M18,14h3v13.4L35,14h3.5L24,32.5V34h-6V14z"/>
    </svg>
  ),
  Tailwind: (
    <svg viewBox="0 0 48 48" width="18" height="18">
      <path fill="#00acc1" d="M24,9.604c-6.4,0-10.4,3.199-12,9.597c2.4-3.199,5.2-4.398,8.4-3.599c1.826.456,3.131,1.781,4.576,3.247C27.328,21.236,30.051,24,36,24c6.4,0,10.4-3.199,12-9.598c-2.4,3.199-5.2,4.399-8.4,3.6c-1.825-.456-3.13-1.781-4.575-3.247C32.672,12.367,29.948,9.604,24,9.604zM12,24c-6.4,0-10.4,3.199-12,9.598c2.4-3.199,5.2-4.399,8.4-3.599c1.825.457,3.13,1.781,4.575,3.246C15.328,35.633,18.051,38.397,24,38.397c6.4,0,10.4-3.199,12-9.598c-2.4,3.199-5.2,4.399-8.4,3.599c-1.826-.456-3.131-1.781-4.576-3.246C20.672,26.764,17.949,24,12,24z"/>
    </svg>
  ),
  Redux: (
    <svg viewBox="0 0 48 48" width="18" height="18">
      <path fill="#7c4dff" d="M7.373,11.443C7.293,9.132,9.094,7,11.529,7h24.946c2.435,0,4.236,2.132,4.155,4.443c-0.077,2.221.023,5.097.747,7.443c.726,2.353,1.951,3.84,3.957,4.031v2.167c-2.006.191-3.23,1.678-3.957,4.031c-.724,2.345-.824,5.222-.747,7.443C40.71,38.868,38.909,41,36.475,41H11.529c-2.434,0-4.236-2.132-4.155-4.443c.077-2.221-.023-5.097-.747-7.443c-.726-2.353-1.954-3.84-3.96-4.031v-2.167c2.006-.191,3.233-1.678,3.96-4.031C7.35,16.54,7.451,13.664,7.373,11.443z"/>
      <path fill="#fff" d="M27.073,23.464v-0.028c1.853-.32,3.299-2.057,3.299-3.97c0-1.352-.52-2.498-1.504-3.312c-.981-.812-2.357-1.241-3.981-1.241H17.45V33.08h7.475c1.942,0,3.555-.474,4.663-1.372c1.109-.899,1.696-2.207,1.696-3.783C31.283,25.544,29.593,23.756,27.073,23.464zM23.59,22.608h-3.181V17.29h3.784c2.076,0,3.219.911,3.219,2.565C27.413,21.63,26.055,22.608,23.59,22.608zM20.409,24.834h3.759c2.716,0,4.092.981,4.092,2.916c0,1.932-1.357,2.953-3.925,2.953h-3.926V24.834z"/>
    </svg>
  ),
  Django: (
    <svg viewBox="0 0 48 48" width="18" height="18">
      <path fill="#004d40" d="M8,16v12.646C6.655,28.9,5.949,29,4.878,29C1.67,28.997,0,27.565,0,24.816c0-2.649,1.771-4.368,4.516-4.368c.426,0,.75.033,1.143.134V16H8z"/>
      <path fill="#004d40" d="M12,20.046v6.618c0,2.076-.155,3.224-.612,4.084c-.426.827-.987,1.349-2.146,1.925l-2.437-1.149c1.159-.539,1.721-1.015,2.079-1.742c.375-.743.494-1.754.494-4.017v-5.721H12z"/>
      <rect width="2.623" height="2.713" x="9.377" y="16" fill="#004d40"/>
      <path fill="#004d40" d="M13.734,20.876c1.136-.552,2.223-.795,3.408-.795c1.321,0,2.189.363,2.573,1.073C19.93,21.551,20,22.068,20,23.175v5.407c-1.152.171-2.606.294-3.673.294c-2.156,0-3.123-.778-3.123-2.505c0-1.868,1.285-2.731,4.441-3.006V22.78c0-.483-.235-.658-.884-.658c-.95,0-2.02.278-3.024.812L13.734,20.876z"/>
      <path fill="#004d40" d="M21.418,20.693c1.52-.421,2.772-.613,4.041-.613c1.318,0,2.273.317,2.839.93C28.83,21.588,29,22.222,29,23.573v5.303h-2.574v-5.195c0-1.038-.335-1.424-1.252-1.424c-.351,0-.669.035-1.186.195v6.425h-2.57V20.693z"/>
      <path fill="#004d40" d="M43.566,20.046c2.753,0,4.434,1.66,4.434,4.348c0,2.756-1.752,4.483-4.544,4.483c-2.756,0-4.456-1.659-4.456-4.33C39.005,21.774,40.757,20.046,43.566,20.046z"/>
    </svg>
  ),
  DRF: (
    <svg viewBox="0 0 48 48" width="18" height="18">
      <circle cx="24" cy="24" r="20" fill="#a30000"/>
      <path fill="#fff" d="M14,16h12c3.3,0,6,2.7,6,6s-2.7,6-6,6h-5v6h-7V16zM21,25h4c1.1,0,2-.9,2-2s-.9-2-2-2h-4V25z"/>
    </svg>
  ),
  Docker: (
    <svg viewBox="0 0 48 48" width="18" height="18">
      <path fill="#1565c0" d="M47,22c-0.3-0.2-3.2-2.3-9.4-1.5c-0.3-3.4-3.1-5.1-3.3-5.2l-0.7-0.4l-0.5,0.6c-0.9,1.1-1.4,2.9-1.3,4.5c0.1,0.9,0.4,1.8,0.9,2.6c-1.3,0.7-3.3,0.9-3.7,0.9H2.4C1.6,23.5,1,24.1,1,25c-0.1,2.8,0.3,5.5,1.4,8.1c1.3,2.8,3.2,4.9,5.7,6.2c2.8,1.5,7.3,2.3,12.4,2.3c2.3,0,4.6-0.2,6.7-0.7c3.1-0.7,6-2,8.5-4.1c2-1.7,3.6-3.9,4.7-6.3c1.4-0.1,4.4-0.1,5.9-3c0.1-0.1,0.5-1,0.7-2L47,22z"/>
      <path fill="#e3f2fd" d="M10,23h3v3h-3V23zM14.5,23h3v3h-3V23zM19,23h3v3h-3V23zM23.5,23h3v3h-3V23zM19,18.5h3v3h-3V18.5zM23.5,18.5h3v3h-3V18.5zM28,18.5h3v3h-3V18.5zM10,18.5h3v3h-3V18.5zM14.5,18.5h3v3h-3V18.5z"/>
    </svg>
  ),
  Nginx: (
    <svg viewBox="0 0 48 48" width="18" height="18">
      <path fill="#43a047" d="M24,4L6,14v20l18,10l18-10V14L24,4z"/>
      <path fill="#fff" d="M30,32h-4V22l-8,10h-4V16h4v10l8-10h4V32z"/>
    </svg>
  ),
  GitHub: (
    <svg viewBox="0 0 48 48" width="18" height="18">
      <path fill="#fff" d="M24,4C12.954,4,4,12.954,4,24c0,8.887,5.801,16.411,13.82,19.016C18.823,43.21,19.228,42.621,19.228,42.103c0-0.496-0.018-1.808-0.028-3.549c-5.542,1.204-6.713-2.67-6.713-2.67c-0.907-2.301-2.213-2.913-2.213-2.913c-1.808-1.236,0.137-1.211,0.137-1.211c1.999,0.141,3.051,2.052,3.051,2.052c1.779,3.048,4.667,2.167,5.805,1.657c0.18-1.288,0.695-2.167,1.267-2.664c-4.425-0.504-9.078-2.213-9.078-9.849c0-2.174,0.777-3.951,2.051-5.346c-0.207-0.502-0.888-2.528,0.194-5.271c0,0,1.672-0.535,5.478,2.043C20.7,14.417,22.35,14.2,24,14.192c1.65,0.008,3.301,0.225,4.843,0.66c3.803-2.578,5.472-2.043,5.472-2.043c1.085,2.743,0.402,4.769,0.196,5.271c1.277,1.395,2.049,3.172,2.049,5.346c0,7.654-4.661,9.34-9.099,9.836c0.715,0.615,1.351,1.833,1.351,3.694c0,2.664-0.024,4.813-0.024,5.469c0,0.523,0.397,1.134,1.408,0.94C38.208,40.407,44,32.887,44,24C44,12.954,35.046,4,24,4z"/>
    </svg>
  ),
  Postgres: (
    <svg viewBox="0 0 48 48" width="18" height="18">
      <path fill="#336791" d="M24,4C12.95,4,4,12.95,4,24s8.95,20,20,20s20-8.95,20-20S35.05,4,24,4z"/>
      <path fill="#fff" d="M30,16H18c-1.1,0-2,.9-2,2v2h16v-2C32,16.9,31.1,16,30,16zM16,22v8c0,1.1.9,2,2,2h2v4l4-4h6c1.1,0,2-.9,2-2v-8H16zM26,28h-4v-2h4V28zM26,24h-4v-2h4V24z"/>
    </svg>
  ),
  Redis: (
    <svg viewBox="0 0 48 48" width="18" height="18">
      <path fill="#d32f2f" d="M24,4C12.95,4,4,12.95,4,24s8.95,20,20,20s20-8.95,20-20S35.05,4,24,4z"/>
      <path fill="#fff" d="M14,28l10,4l10-4v-3l-10,4l-10-4V28zM14,22l10,4l10-4l-10-4L14,22zM14,25l10,4l10-4v-3l-10,4l-10-4V25z"/>
    </svg>
  ),
  HTML: (
    <svg viewBox="0 0 48 48" width="18" height="18">
      <path fill="#E65100" d="M41,5H7l3,34l14,4l14-4L41,5z"/>
      <path fill="#FF6D00" d="M24,8L24,39.9,35.2,36.7,37.7,8z"/>
      <path fill="#FFF" d="M24,25v-4h8.6l-.7,11.5L24,35.1v-4.2l4.1-1.4.3-4.5H24zM32.9,17l.3-4H24v4H32.9z"/>
      <path fill="#EEE" d="M24,30.9v4.2l-7.9-2.6L15.7,27h4l.2,2.5L24,30.9zM19.1,17H24v-4h-9.1l.7,12H24v-4h-4.6L19.1,17z"/>
    </svg>
  ),
  CSS: (
    <svg viewBox="0 0 48 48" width="18" height="18">
      <path fill="#0277BD" d="M41,5H7l3,34l14,4l14-4L41,5z"/>
      <path fill="#039BE5" d="M24,8L24,39.9,35.2,36.7,37.7,8z"/>
      <path fill="#FFF" d="M33.1,13L24,13,24,17,28.9,17,28.6,21,24,21,24,25,28.4,25,28.1,29.5,24,30.9,24,35.1,31.9,32.5,32.6,21,32.6,21z"/>
      <path fill="#EEE" d="M24,13v4h-8.9l-.3-4H24zM19.4,21l.2,4H24v-4H19.4zM19.8,27h-4l.3,5.5,7.9,2.6v-4.2l-4.1-1.4L19.8,27z"/>
    </svg>
  ),
};

// ─── Skill Data ───────────────────────────────────────────────────────────────
const skillCategories = [
  {
    label: "Languages",
    count: "01",
    skills: [
      { name: "Python",     icon: Icon.Python,   percent: 92 },
      { name: "JavaScript", icon: Icon.JS,        percent: 90 },
      { name: "TypeScript", icon: Icon.TS,        percent: 82 },
      { name: "HTML",       icon: Icon.HTML,      percent: 95 },
      { name: "CSS",        icon: Icon.CSS,       percent: 90 },
    ],
  },
  {
    label: "Front-End",
    count: "02",
    skills: [
      { name: "React.js",      icon: Icon.React,    percent: 88 },
      { name: "Next.js",       icon: Icon.Next,     percent: 85 },
      { name: "Redux Toolkit", icon: Icon.Redux,    percent: 82 },
      { name: "Tailwind CSS",  icon: Icon.Tailwind, percent: 92 },
    ],
  },
  {
    label: "Back-End",
    count: "03",
    skills: [
      { name: "Django",     icon: Icon.Django, percent: 93 },
      { name: "Django REST",icon: Icon.DRF,    percent: 90 },
    ],
  },
  {
    label: "Database",
    count: "04",
    skills: [
      { name: "PostgreSQL", icon: Icon.Postgres, percent: 82 },
      { name: "Redis",      icon: Icon.Redis,    percent: 75 },
    ],
  },
  {
    label: "DevOps & Tools",
    count: "05",
    skills: [
      { name: "Docker",         icon: Icon.Docker, percent: 85 },
      { name: "Nginx",          icon: Icon.Nginx,  percent: 78 },
      { name: "GitHub Actions", icon: Icon.GitHub, percent: 80 },
    ],
  },
];

// ─── Single skill bar ─────────────────────────────────────────────────────────
const SkillBar = ({ name, icon, percent, index, groupIndex }) => {
  const [animated, setAnimated] = useState(false);
  const [hovered, setHovered]   = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting)
          setTimeout(() => setAnimated(true), groupIndex * 120 + index * 90);
      },
      { threshold: 0.25 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [index, groupIndex]);

  return (
    <div
      ref={ref}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: "relative",
        background: hovered
          ? "linear-gradient(135deg,rgba(53,87,125,0.18),rgba(20,30,48,0.7))"
          : "linear-gradient(135deg,rgba(26,40,64,0.5),rgba(17,24,38,0.75))",
        border: hovered
          ? "1px solid rgba(219,159,117,0.35)"
          : "1px solid rgba(53,87,125,0.18)",
        borderRadius: "12px",
        padding: "14px 18px",
        cursor: "default",
        opacity: animated ? 1 : 0,
        transform: animated ? "translateX(0)" : "translateX(-18px)",
        transition: [
          `opacity 0.45s ease ${groupIndex * 0.12 + index * 0.08}s`,
          `transform 0.45s ease ${groupIndex * 0.12 + index * 0.08}s`,
          "background 0.35s ease",
          "border-color 0.35s ease",
          hovered ? "box-shadow 0.35s ease" : "",
        ]
          .filter(Boolean)
          .join(", "),
        boxShadow: hovered
          ? "0 6px 24px rgba(0,0,0,0.4),0 2px 8px rgba(128,64,18,0.12)"
          : "0 2px 8px rgba(0,0,0,0.15)",
      }}
    >
      {/* top shimmer */}
      <div style={{
        position:"absolute", top:0, left:0, right:0, height:"1px",
        background:"linear-gradient(to right,transparent,rgba(219,159,117,0.4),transparent)",
        opacity: hovered ? 1 : 0, transition:"opacity 0.35s ease",
        borderRadius:"12px 12px 0 0",
      }}/>

      <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", marginBottom:"10px" }}>
        {/* icon + name */}
        <div style={{ display:"flex", alignItems:"center", gap:"10px" }}>
          <div style={{
            width:"32px", height:"32px", borderRadius:"8px", flexShrink:0,
            background: hovered
              ? "linear-gradient(135deg,rgba(128,64,18,0.28),rgba(20,30,48,0.55))"
              : "linear-gradient(135deg,rgba(53,87,125,0.2),rgba(20,30,48,0.5))",
            border: hovered ? "1px solid rgba(219,159,117,0.28)" : "1px solid rgba(53,87,125,0.18)",
            display:"flex", alignItems:"center", justifyContent:"center",
            transition:"background 0.35s ease, border-color 0.35s ease",
          }}>
            {icon}
          </div>
          <span style={{
            fontFamily:"'DM Sans',sans-serif", fontSize:"13px", fontWeight:500,
            color: hovered ? "#DB9F75" : "#c8d5e2",
            letterSpacing:"0.04em", transition:"color 0.3s ease",
          }}>
            {name}
          </span>
        </div>
        {/* percent */}
        <span style={{
          fontFamily:"'Cormorant Garamond',serif", fontSize:"16px", fontWeight:700,
          color: hovered ? "#DB9F75" : "#35577D",
          letterSpacing:"0.02em", transition:"color 0.3s ease", minWidth:"40px", textAlign:"right",
        }}>
          {percent}<span style={{ fontSize:"10px", opacity:0.6 }}>%</span>
        </span>
      </div>

      {/* track */}
      <div style={{
        height:"4px", background:"rgba(53,87,125,0.12)",
        borderRadius:"999px", overflow:"hidden",
        border:"1px solid rgba(53,87,125,0.08)",
      }}>
        <div style={{
          height:"100%",
          width: animated ? `${percent}%` : "0%",
          borderRadius:"999px",
          background: hovered
            ? "linear-gradient(to right,#804012,#DB9F75)"
            : "linear-gradient(to right,#35577D,#5b8ab5)",
          transition: animated
            ? `width 1.0s cubic-bezier(0.23,1,0.32,1) ${groupIndex*0.12+index*0.09}s, background 0.35s ease`
            : "none",
          boxShadow: hovered ? "0 0 8px rgba(219,159,117,0.4)" : "0 0 4px rgba(53,87,125,0.3)",
          position:"relative",
        }}>
          <div style={{
            position:"absolute", top:0, right:0,
            width:"20px", height:"100%",
            background:"linear-gradient(to right,transparent,rgba(255,255,255,0.22))",
            borderRadius:"999px",
          }}/>
        </div>
      </div>
    </div>
  );
};

// ─── Category block ───────────────────────────────────────────────────────────
const CategoryBlock = ({ label, count, skills, groupIndex }) => {
  const [mounted, setMounted] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setTimeout(() => setMounted(true), groupIndex * 80); },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [groupIndex]);

  return (
    <div
      ref={ref}
      style={{
        opacity: mounted ? 1 : 0,
        transform: mounted ? "translateY(0)" : "translateY(20px)",
        transition: `opacity 0.5s ease ${groupIndex*0.1}s, transform 0.5s ease ${groupIndex*0.1}s`,
      }}
    >
      {/* sub-header */}
      <div style={{
        display:"flex", alignItems:"center", justifyContent:"space-between",
        marginBottom:"14px", paddingBottom:"10px",
        borderBottom:"1px dashed rgba(53,87,125,0.22)",
      }}>
        <div style={{ display:"flex", alignItems:"center", gap:"10px" }}>
          <div style={{
            width:"3px", height:"16px",
            background:"linear-gradient(to bottom,#DB9F75,#804012)",
            borderRadius:"999px", flexShrink:0,
          }}/>
          <span style={{
            fontFamily:"'Cormorant Garamond',serif", fontSize:"15px", fontWeight:700,
            color:"#e8ddd0", letterSpacing:"0.14em", textTransform:"uppercase",
          }}>
            {label}
          </span>
        </div>
        <span style={{
          fontFamily:"'Cormorant Garamond',serif", fontSize:"15px", fontWeight:600,
          color:"rgba(53,87,125,0.4)", letterSpacing:"0.05em",
        }}>
          {count}
        </span>
      </div>

      {/* bars */}
      <div style={{ display:"flex", flexDirection:"column", gap:"8px" }}>
        {skills.map((sk, i) => (
          <SkillBar key={sk.name} {...sk} index={i} groupIndex={groupIndex} />
        ))}
      </div>
    </div>
  );
};

// ─── Main export ──────────────────────────────────────────────────────────────
const Skills = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 80);
    return () => clearTimeout(t);
  }, []);

  return (
    <div
      style={{
        fontFamily:"'DM Sans',sans-serif",
        marginTop:"24px",
        opacity: mounted ? 1 : 0,
        transform: mounted ? "translateY(0)" : "translateY(16px)",
        transition:"opacity 0.5s ease, transform 0.5s ease",
      }}
    >
      {/* Section header */}
      <div style={{
        display:"flex", alignItems:"center", justifyContent:"space-between",
        marginBottom:"28px", paddingBottom:"14px",
        borderBottom:"1px dashed rgba(53,87,125,0.3)",
      }}>
        <div style={{ display:"flex", alignItems:"center", gap:"12px" }}>
          <div style={{
            width:"3px", height:"22px",
            background:"linear-gradient(to bottom,#DB9F75,#804012)",
            borderRadius:"999px", flexShrink:0,
          }}/>
          <h2 style={{
            fontFamily:"'Cormorant Garamond',serif", fontSize:"20px", fontWeight:700,
            color:"#e8ddd0", margin:0, letterSpacing:"0.12em", textTransform:"uppercase",
          }}>
            Technical Skills
          </h2>
        </div>
        <span style={{
          fontFamily:"'Cormorant Garamond',serif", fontSize:"20px", fontWeight:600,
          color:"rgba(53,87,125,0.4)", letterSpacing:"0.05em",
        }}>
          0{skillCategories.length}
        </span>
      </div>

      {/* Two-column grid */}
      <div style={{
        display:"grid",
        gridTemplateColumns:"repeat(auto-fit,minmax(260px,1fr))",
        gap:"28px",
      }}>
        {skillCategories.map((cat, gi) => (
          <CategoryBlock key={cat.label} {...cat} groupIndex={gi} />
        ))}
      </div>
    </div>
  );
};

export default Skills;