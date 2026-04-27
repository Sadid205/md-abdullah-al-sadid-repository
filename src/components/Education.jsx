import { useState } from "react";

const EducationCard = ({ data, index }) => {
  const [hovered, setHovered] = useState(false);
  
  // BSc হলে 'Expected' দেখাবে, নাহলে 'Completed'
  const isOngoing = data.degree.toLowerCase().includes("bsc") || data.degree.toLowerCase().includes("ongoing");

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: "relative",
        background: "linear-gradient(145deg, #1a2840 0%, #141e30 60%, #111826 100%)",
        border: hovered
          ? "1px solid rgba(219,159,117,0.4)"
          : "1px solid rgba(53,87,125,0.2)",
        borderRadius: "10px",
        padding: "20px 25px",
        marginBottom: "16px",
        transition: "all 0.4s cubic-bezier(0.23, 1, 0.32, 1)",
        transform: hovered ? "translateX(8px)" : "translateX(0)",
        boxShadow: hovered 
          ? "0 15px 30px rgba(0,0,0,0.4), inset 0 1px 0 rgba(219,159,117,0.1)"
          : "0 5px 15px rgba(0,0,0,0.2)",
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "20px" }}>
        <div style={{ flex: 1 }}>
          {/* Degree & ID */}
          <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "4px" }}>
            <span style={{ 
              fontFamily: "'Cormorant Garamond', serif", 
              color: "#35577D", 
              fontWeight: 700, 
              fontSize: "16px" 
            }}>
              0{index + 1}.
            </span>
            <h3 style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "20px",
              fontWeight: 700,
              color: hovered ? "#DB9F75" : "#e8ddd0",
              textTransform: "uppercase",
              margin: 0,
              transition: "color 0.3s ease"
            }}>
              {data.degree} 
            </h3>
          </div>

          {/* Institute Name */}
          <p style={{
            fontSize: "14px",
            color: "rgba(200,210,225,0.7)",
            margin: "0 0 8px 26px",
            fontWeight: 400
          }}>
            {data.institute}
          </p>

          {/* Dynamic Status Tag */}
          <div style={{
            display: "inline-block",
            marginLeft: "26px",
            padding: "2px 10px",
            background: isOngoing ? "rgba(219, 159, 117, 0.1)" : "rgba(53, 87, 125, 0.1)",
            border: isOngoing ? "1px solid rgba(219, 159, 117, 0.2)" : "1px solid rgba(53, 87, 125, 0.2)",
            borderRadius: "4px",
            fontSize: "11px",
            color: isOngoing ? "#DB9F75" : "#aab8c2",
            fontWeight: 500,
            letterSpacing: "0.05em"
          }}>
            {isOngoing ? "EXPECTED GRADUATION" : "COMPLETED"}: {data.year}
          </div>
        </div>

        {/* Status Indicator */}
        <div style={{ textAlign: "right" }}>
            <div style={{
                width: "8px",
                height: "8px",
                borderRadius: "50%",
                background: isOngoing ? "#DB9F75" : "#35577D",
                display: "inline-block",
                boxShadow: isOngoing && hovered ? "0 0 10px #DB9F75" : "none",
                opacity: hovered ? 1 : 0.3,
                transition: "all 0.3s ease"
            }} />
        </div>
      </div>
    </div>
  );
};

const Education = () => {
  const EducationData = [
    { 
      degree: "BSc in Chemistry (Ongoing)", 
      institute: "Govt Keshab Chandra College, Jhenaidah", 
      year: "2027" 
    },
    { 
      degree: "Higher Secondary Certificate (HSC)", 
      institute: "Kustia Islamia College, Kustia", 
      year: "2022" 
    },
    { 
      degree: "Secondary School Certificate (SSC)", 
      institute: "Harinakunda Priyonath School & College", 
      year: "2019" 
    }
  ];

  return (
    <div style={{
      background: "#0d1726",
      padding: "40px 20px",
      fontFamily: "'DM Sans', sans-serif"
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;600;700&family=DM+Sans:wght@300;400;500&display=swap');
      `}</style>

      <div style={{ maxWidth: "800px", margin: "0 auto" }}>
        <div style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "30px",
          borderBottom: "1px solid rgba(53, 87, 125, 0.2)",
          paddingBottom: "15px"
        }}>
          <h2 style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "32px",
            fontWeight: 700,
            color: "#e8ddd0",
            margin: 0
          }}>
            My <span style={{ color: "#DB9F75" }}>Education</span>
          </h2>
          <div style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "40px",
            fontWeight: 600,
            color: "rgba(53, 87, 125, 0.15)",
          }}>
            04
          </div>
        </div>

        <div>
          {EducationData.map((data, index) => (
            <EducationCard key={index} data={data} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Education;