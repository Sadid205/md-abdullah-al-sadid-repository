import { useEffect, useRef, useState } from "react";

const languagesData = [
  { name: "Bangla", level: "Native", percent: 95, flag: "🇧🇩" },
  { name: "English", level: "Professional", percent: 80, flag: "🇬🇧" },
  { name: "Hindi", level: "Conversational", percent: 70, flag: "🇮🇳" },
];

const LanguageBar = ({ name, level, percent, flag, index }) => {
  const [animated, setAnimated] = useState(false);
  const [hovered, setHovered] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setAnimated(true), index * 150);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [index]);

  return (
    <div
      ref={ref}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: "relative",
        background: hovered
          ? "linear-gradient(135deg, rgba(53,87,125,0.18), rgba(20,30,48,0.7))"
          : "linear-gradient(135deg, rgba(26,40,64,0.6), rgba(17,24,38,0.8))",
        border: hovered
          ? "1px solid rgba(219,159,117,0.35)"
          : "1px solid rgba(53,87,125,0.2)",
        borderRadius: "14px",
        padding: "20px 24px",
        transition: "background 0.4s ease, border-color 0.4s ease, transform 0.3s ease, box-shadow 0.4s ease",
        transform: hovered ? "translateX(6px)" : "translateX(0)",
        boxShadow: hovered
          ? "0 8px 30px rgba(0,0,0,0.4), 0 0 0 0 transparent"
          : "0 2px 12px rgba(0,0,0,0.2)",
        opacity: animated ? 1 : 0,
        translate: animated ? "none" : "0 20px",
        // CSS transition for entrance
        ...(animated
          ? { transition: "opacity 0.5s ease, translate 0.5s ease, background 0.4s ease, border-color 0.4s ease, transform 0.3s ease, box-shadow 0.4s ease" }
          : {}),
      }}
    >
      {/* Top shimmer on hover */}
      <div
        style={{
          position: "absolute",
          top: 0, left: 0, right: 0,
          height: "1px",
          background: "linear-gradient(to right, transparent, rgba(219,159,117,0.4), transparent)",
          opacity: hovered ? 1 : 0,
          transition: "opacity 0.4s ease",
          borderRadius: "14px 14px 0 0",
        }}
      />

      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "14px" }}>
        {/* Left: flag + name + level */}
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <div
            style={{
              width: "38px", height: "38px",
              borderRadius: "10px",
              background: hovered
                ? "linear-gradient(135deg, rgba(128,64,18,0.3), rgba(20,30,48,0.6))"
                : "linear-gradient(135deg, rgba(53,87,125,0.2), rgba(20,30,48,0.5))",
              border: hovered
                ? "1px solid rgba(219,159,117,0.3)"
                : "1px solid rgba(53,87,125,0.2)",
              display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: "18px",
              transition: "background 0.4s ease, border-color 0.4s ease",
              flexShrink: 0,
            }}
          >
            {flag}
          </div>
          <div>
            <div
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "18px",
                fontWeight: 700,
                color: hovered ? "#DB9F75" : "#e8ddd0",
                lineHeight: 1.1,
                letterSpacing: "0.03em",
                transition: "color 0.3s ease",
              }}
            >
              {name}
            </div>
            <div
              style={{
                fontSize: "10px",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "rgba(200,210,225,0.4)",
                marginTop: "2px",
                fontFamily: "'DM Sans', sans-serif",
              }}
            >
              {level}
            </div>
          </div>
        </div>

        {/* Right: percent badge */}
        <div
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "22px",
            fontWeight: 700,
            color: hovered ? "#DB9F75" : "#35577D",
            letterSpacing: "0.02em",
            transition: "color 0.3s ease",
            minWidth: "48px",
            textAlign: "right",
          }}
        >
          {percent}
          <span style={{ fontSize: "12px", opacity: 0.6 }}>%</span>
        </div>
      </div>

      {/* Progress bar track */}
      <div
        style={{
          height: "5px",
          background: "rgba(53,87,125,0.15)",
          borderRadius: "999px",
          overflow: "hidden",
          border: "1px solid rgba(53,87,125,0.1)",
        }}
      >
        {/* Fill */}
        <div
          style={{
            height: "100%",
            width: animated ? `${percent}%` : "0%",
            borderRadius: "999px",
            background: hovered
              ? "linear-gradient(to right, #804012, #DB9F75)"
              : "linear-gradient(to right, #35577D, #5b8ab5)",
            transition: animated
              ? `width 1.1s cubic-bezier(0.23,1,0.32,1) ${index * 0.12}s, background 0.4s ease`
              : "none",
            boxShadow: hovered
              ? "0 0 10px rgba(219,159,117,0.4)"
              : "0 0 6px rgba(53,87,125,0.3)",
            position: "relative",
          }}
        >
          {/* Shimmer sweep */}
          <div
            style={{
              position: "absolute",
              top: 0, right: 0,
              width: "30px", height: "100%",
              background: "linear-gradient(to right, transparent, rgba(255,255,255,0.25))",
              borderRadius: "999px",
            }}
          />
        </div>
      </div>
    </div>
  );
};

const Languages = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 80);
    return () => clearTimeout(t);
  }, []);

  return (
    <div
      style={{
        fontFamily: "'DM Sans', sans-serif",
        marginTop: "24px",
        opacity: mounted ? 1 : 0,
        transform: mounted ? "translateY(0)" : "translateY(16px)",
        transition: "opacity 0.5s ease, transform 0.5s ease",
      }}
    >
      {/* Section header */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: "24px",
          paddingBottom: "14px",
          borderBottom: "1px dashed rgba(53,87,125,0.3)",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <div
            style={{
              width: "3px", height: "22px",
              background: "linear-gradient(to bottom, #DB9F75, #804012)",
              borderRadius: "999px",
              flexShrink: 0,
            }}
          />
          <h2
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "20px",
              fontWeight: 700,
              color: "#e8ddd0",
              margin: 0,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
            }}
          >
            Languages
          </h2>
        </div>
        <span
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "20px",
            fontWeight: 600,
            color: "rgba(53,87,125,0.4)",
            letterSpacing: "0.05em",
          }}
        >
          0{languagesData.length}
        </span>
      </div>

      {/* Language bars */}
      <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
        {languagesData.map((lang, i) => (
          <LanguageBar key={lang.name} {...lang} index={i} />
        ))}
      </div>
    </div>
  );
};

export default Languages;