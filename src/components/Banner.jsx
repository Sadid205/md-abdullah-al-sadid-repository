import AutoTyper from "./AutoTyper";

const CoderWidget = () => {
  const s = {
    kw:   { color: "#ff7b72" },
    va:   { color: "#79c0ff" },
    st:   { color: "#a5d6ff" },
    nu:   { color: "#f2cc60" },
    fn:   { color: "#d2a8ff" },
    prop: { color: "#79c0ff" },
    pu:   { color: "#e6edf3" },
  };

  const L = ({ children }) => (
    <div style={{ whiteSpace: "pre", minHeight: "1.5em", color: "#e6edf3", fontSize: "12px" }}>
      {children}
    </div>
  );

  return (
    <div style={{
      background: "#0d1117",
      borderRadius: "8px",
      border: "1px solid #30363d",
      fontFamily: "'Fira Code', 'Consolas', monospace",
      lineHeight: "1.6",
      overflow: "hidden",
      width: "100%",
      maxWidth: "420px",
    }}>
      <div style={{
        background: "#161b22",
        padding: "8px 14px",
        display: "flex",
        alignItems: "center",
        gap: "6px",
        borderBottom: "1px solid #30363d",
      }}>
        {["#ff5f57","#ffbd2e","#28c840"].map((c, i) => (
          <div key={i} style={{ width: 10, height: 10, borderRadius: "50%", background: c }} />
        ))}
        <span style={{ color: "#6e7681", fontSize: "11px", marginLeft: "6px" }}>sadid.py</span>
      </div>

      <div style={{ padding: "14px 18px" }}>
        <L><span style={s.kw}>const</span> <span style={s.va}>coder</span> <span style={s.pu}>= {"{"}</span></L>
        <L>{"  "}<span style={s.prop}>name</span><span style={s.pu}>:</span> <span style={s.st}>'Abdullah Al Sadid'</span><span style={s.pu}>,</span></L>
        <L>{"  "}<span style={s.prop}>title</span><span style={s.pu}>:</span> <span style={s.st}>'Software Engineer'</span><span style={s.pu}>,</span></L>
        <L>{""}</L>
        <L>{"  "}<span style={s.prop}>skills</span><span style={s.pu}>: [</span></L>
        <L>{"    "}<span style={s.st}>'Django'</span><span style={s.pu}>,</span> <span style={s.st}>'DRF'</span><span style={s.pu}>,</span> <span style={s.st}>'Next.js'</span><span style={s.pu}>,</span></L>
        <L>{"    "}<span style={s.st}>'React'</span><span style={s.pu}>,</span> <span style={s.st}>'Redux'</span><span style={s.pu}>,</span> <span style={s.st}>'Docker'</span><span style={s.pu}>,</span></L>
        <L>{"    "}<span style={s.st}>'PostgreSQL'</span><span style={s.pu}>,</span> <span style={s.st}>'Redis'</span><span style={s.pu}>,</span></L>
        <L>{"    "}<span style={s.st}>'GitHub Actions'</span><span style={s.pu}>,</span> <span style={s.st}>'Nginx'</span><span style={s.pu}>,</span></L>
        <L>{"  "}<span style={s.pu}>],</span></L>
        <L>{""}</L>
        <L>{"  "}<span style={s.prop}>hardWorker</span><span style={s.pu}>:</span> <span style={s.nu}>true</span><span style={s.pu}>,</span></L>
        <L>{"  "}<span style={s.prop}>quickLearner</span><span style={s.pu}>:</span> <span style={s.nu}>true</span><span style={s.pu}>,</span></L>
        <L>{"  "}<span style={s.prop}>problemSolver</span><span style={s.pu}>:</span> <span style={s.nu}>true</span><span style={s.pu}>,</span></L>
        <L>{""}</L>
        <L>{"  "}<span style={s.prop}>hireable</span><span style={s.pu}>:</span> <span style={s.kw}>function</span><span style={s.pu}>() {"{"}</span></L>
        <L>{"    "}<span style={s.kw}>return</span> <span style={s.pu}>(</span></L>
        <L>{"      "}<span style={s.va}>this</span><span style={s.pu}>.</span><span style={s.prop}>hardWorker</span> <span style={s.pu}>&amp;&amp;</span></L>
        <L>{"      "}<span style={s.va}>this</span><span style={s.pu}>.</span><span style={s.prop}>problemSolver</span> <span style={s.pu}>&amp;&amp;</span></L>
        <L>{"      "}<span style={s.va}>this</span><span style={s.pu}>.</span><span style={s.prop}>skills</span><span style={s.pu}>.</span><span style={s.fn}>length</span> <span style={s.pu}>&gt;=</span> <span style={s.nu}>5</span></L>
        <L>{"    "}<span style={s.pu}>);</span></L>
        <L>{"  "}<span style={s.pu}>{"}"}</span><span style={s.pu}>,</span></L>
        <L>
          <span style={s.pu}>{"}"}</span><span style={s.pu}>;</span>{" "}
          <span style={{
            display: "inline-block", width: "2px", height: "12px",
            background: "#58a6ff", verticalAlign: "middle",
            animation: "blink 1s step-end infinite",
          }} />
        </L>
      </div>
    </div>
  );
};

const Banner = ({ projectshowcase,services, languages, contact, skills, education, projects,experience }) => {
  return (
    <div className="h-full max-h-screen sm:ms-auto">
      <style>{`
        @keyframes blink { 50% { opacity: 0; } }
        .banner-hero {
          padding: 40px 32px;
        }
        @media (max-width: 768px) {
          .banner-hero {
            padding-top: 90px !important;
          }
        }
      `}</style>

      {/* Hero */}
      <div
        className="banner-hero"
        style={{
          position: "relative",
          borderRadius: "14px",
          overflow: "hidden",
          background: "linear-gradient(145deg, #1a2840 0%, #141e30 55%, #0d1726 100%)",
          border: "1px solid rgba(53,87,125,0.3)",
          boxShadow: "0 8px 40px rgba(0,0,0,0.5)",
        }}
      >
        {/* Shimmer */}
        <div style={{
          position: "absolute", top: 0, left: 0, right: 0, height: "1px",
          background: "linear-gradient(to right, transparent, rgba(219,159,117,0.5), transparent)",
        }} />

        {/* BG glows */}
        <div style={{
          position: "absolute", top: "-120px", left: "-120px",
          width: "400px", height: "400px",
          background: "radial-gradient(circle, rgba(53,87,125,0.4) 0%, transparent 70%)",
          borderRadius: "50%", pointerEvents: "none",
        }} />
        <div style={{
          position: "absolute", bottom: "-100px", right: "-100px",
          width: "350px", height: "350px",
          background: "radial-gradient(circle, rgba(128,64,18,0.3) 0%, transparent 70%)",
          borderRadius: "50%", pointerEvents: "none",
        }} />

        {/* Grid */}
        <div style={{
          position: "absolute", inset: 0,
          backgroundImage: "linear-gradient(rgba(53,87,125,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(53,87,125,0.06) 1px, transparent 1px)",
          backgroundSize: "40px 40px", pointerEvents: "none",
        }} />

        {/* Two-column — centered */}
        <div style={{
          position: "relative", zIndex: 2,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "48px",
          flexWrap: "wrap",
        }}>

          {/* LEFT — profile */}
          <div style={{
            display: "flex", flexDirection: "column",
            alignItems: "center", gap: "14px",
            flex: "0 0 auto",
          }}>
            <div style={{
              width: "120px", height: "120px", borderRadius: "50%", padding: "3px",
              background: "linear-gradient(135deg, #DB9F75 0%, #804012 50%, #35577D 100%)",
              boxShadow: "0 0 0 4px rgba(20,30,48,0.8), 0 12px 40px rgba(0,0,0,0.6)",
            }}>
              <div style={{ width: "100%", height: "100%", borderRadius: "50%", overflow: "hidden", background: "#0d1726" }}>
                <img
                  src="/assets/profile.jpg"
                  alt="MD. Abdullah Al Sadid"
                  style={{
                    width: "100%", height: "100%", objectFit: "cover",
                    transition: "transform 0.4s cubic-bezier(0.23,1,0.32,1)", display: "block",
                  }}
                  onMouseEnter={e => e.currentTarget.style.transform = "scale(1.08)"}
                  onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}
                />
              </div>
            </div>

            <div style={{ textAlign: "center" }}>
              <h1 style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "clamp(16px, 2vw, 24px)",
                fontWeight: 700, color: "#e8ddd0",
                letterSpacing: "0.08em", margin: 0, lineHeight: 1.2,
              }}>
                MD. ABDULLAH AL <span style={{ color: "#DB9F75" }}>SADID</span>
              </h1>
              <div style={{
                display: "flex", alignItems: "center",
                gap: "10px", margin: "8px auto 0", width: "fit-content",
              }}>
                <div style={{ width: "40px", height: "1px", background: "linear-gradient(to right, transparent, rgba(219,159,117,0.5))" }} />
                <div style={{ width: "5px", height: "5px", borderRadius: "50%", background: "#804012" }} />
                <div style={{ width: "40px", height: "1px", background: "linear-gradient(to left, transparent, rgba(219,159,117,0.5))" }} />
              </div>
            </div>

            <div style={{
              fontSize: "12px", letterSpacing: "0.12em",
              color: "rgba(200,210,225,0.6)", textTransform: "uppercase",
              fontFamily: "'DM Sans', sans-serif",
            }}>
              <AutoTyper />
            </div>
          </div>

          {/* RIGHT — widget */}
          <div style={{ flex: "0 0 auto" }}>
            <CoderWidget />
          </div>

        </div>
      </div>

      {/* Sections */}
      {services}
      {languages}
      {skills}
      {experience}
      {education}
      {projects}
      {projectshowcase}
      {contact}
    </div>
  );
};

export default Banner;