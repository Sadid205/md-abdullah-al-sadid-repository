// import backgroundImage from "/assets/portfoliobg.jpg";
// import AutoTyper from "./AutoTyper";
// const Banner = ({services,languages,contact,skills,education,projects})=>{
//     return (
//         <div className="h-full max-h-screen sm:ms-auto">
//             <div style={{height:"50vh"}} className="rounded-xl">
//             <div style={{
//             backgroundImage:`url(${backgroundImage})`,
//             backgroundSize:"Cover",
//             backgroundPosition:"center",
//             height:"100%",
//             borderRadius:"10px"
//             }} className="">
//                 <div className="flex flex-col items-center justify-center h-full gap-4">
//                     <div className="flex items-center justify-center overflow-hidden bg-yellow-400 border border-2 border-yellow-500 rounded rounded-full w-52 h-52">
//                         <img className="w-full h-full transition-all duration-300 ease-in hover:scale-110 hover:cursor-pointer" src="/assets/Profile.png" alt="Profile" />
//                     </div>
//                     <h1 className="text-2xl font-bold text-white">MD.ABDULLAH AL SADID</h1>
//                     <AutoTyper/>
//                 </div>
//             </div>
//         </div>
//         {services}
//         {languages}
//         {skills}
//         {education}
//         {projects}
//         {contact}
//         </div>
//     )
// }

// export default Banner;
import AutoTyper from "./AutoTyper";

const Banner = ({ services, languages, contact, skills, education, projects }) => {
  return (
    <div className="h-full max-h-screen sm:ms-auto">

      {/* ── Hero Section ── */}
      <div
        style={{
          position: "relative",
          height: "50vh",
          borderRadius: "14px",
          overflow: "hidden",
          background: "linear-gradient(145deg, #1a2840 0%, #141e30 55%, #0d1726 100%)",
          border: "1px solid rgba(53,87,125,0.3)",
          boxShadow:
            "0 8px 40px rgba(0,0,0,0.5), 0 2px 0 rgba(53,87,125,0.15) inset, 0 -1px 0 rgba(0,0,0,0.4) inset",
        }}
      >
        {/* Top golden shimmer line */}
        <div
          style={{
            position: "absolute",
            top: 0, left: 0, right: 0,
            height: "1px",
            background:
              "linear-gradient(to right, transparent, rgba(219,159,117,0.5), transparent)",
          }}
        />

        {/* BG glow — top-left navy */}
        <div
          style={{
            position: "absolute",
            top: "-120px", left: "-120px",
            width: "400px", height: "400px",
            background:
              "radial-gradient(circle, rgba(53,87,125,0.4) 0%, transparent 70%)",
            borderRadius: "50%",
            pointerEvents: "none",
          }}
        />

        {/* BG glow — bottom-right copper */}
        <div
          style={{
            position: "absolute",
            bottom: "-100px", right: "-100px",
            width: "350px", height: "350px",
            background:
              "radial-gradient(circle, rgba(128,64,18,0.3) 0%, transparent 70%)",
            borderRadius: "50%",
            pointerEvents: "none",
          }}
        />

        {/* Subtle grid texture */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(rgba(53,87,125,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(53,87,125,0.06) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
            pointerEvents: "none",
          }}
        />

        {/* Content */}
        <div
          style={{
            position: "relative",
            zIndex: 2,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            height: "100%",
            gap: "16px",
          }}
        >
          {/* Profile image */}
          <div
            style={{
              width: "130px",
              height: "130px",
              borderRadius: "50%",
              padding: "3px",
              background:
                "linear-gradient(135deg, #DB9F75 0%, #804012 50%, #35577D 100%)",
              boxShadow:
                "0 0 0 4px rgba(20,30,48,0.8), 0 12px 40px rgba(0,0,0,0.6), 0 0 60px rgba(219,159,117,0.18)",
              flexShrink: 0,
            }}
          >
            <div
              style={{
                width: "100%",
                height: "100%",
                borderRadius: "50%",
                overflow: "hidden",
                background: "#0d1726",
              }}
            >
              <img
                src="/assets/Profile.png"
                alt="MD. Abdullah Al Sadid"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  transition: "transform 0.4s cubic-bezier(0.23,1,0.32,1)",
                  display: "block",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.transform = "scale(1.08)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.transform = "scale(1)")
                }
              />
            </div>
          </div>

          {/* Name */}
          <div style={{ textAlign: "center" }}>
            <h1
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "clamp(20px, 3vw, 28px)",
                fontWeight: 700,
                color: "#e8ddd0",
                letterSpacing: "0.08em",
                margin: 0,
                lineHeight: 1.2,
              }}
            >
              MD. ABDULLAH AL{" "}
              <span style={{ color: "#DB9F75" }}>SADID</span>
            </h1>

            {/* Divider */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                margin: "10px auto 0",
                width: "fit-content",
              }}
            >
              <div
                style={{
                  width: "40px",
                  height: "1px",
                  background:
                    "linear-gradient(to right, transparent, rgba(219,159,117,0.5))",
                }}
              />
              <div
                style={{
                  width: "5px",
                  height: "5px",
                  borderRadius: "50%",
                  background: "#804012",
                }}
              />
              <div
                style={{
                  width: "40px",
                  height: "1px",
                  background:
                    "linear-gradient(to left, transparent, rgba(219,159,117,0.5))",
                }}
              />
            </div>
          </div>

          {/* AutoTyper */}
          <div
            style={{
              fontSize: "13px",
              letterSpacing: "0.12em",
              color: "rgba(200,210,225,0.6)",
              textTransform: "uppercase",
              fontFamily: "'DM Sans', sans-serif",
            }}
          >
            <AutoTyper />
          </div>
        </div>
      </div>

      {/* ── Rest of sections ── */}
      {services}
      {languages}
      {skills}
      {education}
      {projects}
      {contact}
    </div>
  );
};

export default Banner;