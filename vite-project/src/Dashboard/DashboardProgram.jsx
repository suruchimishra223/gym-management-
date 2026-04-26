import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const programs = [
  {
    id: 1,
    title: "Weight Loss Program",
    duration: "12 Weeks",
    price: 4999,
    description:
      "A comprehensive program designed to help you shed fat effectively with cardio, strength training, and nutrition plans.",
    features: [
      "Personalized workout plan",
      "Weekly progress tracking",
      "Nutrition guidance",
      "Group classes",
    ],
  },
  {
    id: 2,
    title: "Muscle Building Program",
    duration: "16 Weeks",
    price: 6999,
    description:
      "Focus on hypertrophy and strength with tailored weight training and diet plans to build lean muscle mass.",
    features: [
      "Custom strength training",
      "Protein-rich diet plan",
      "Regular fitness assessments",
      "One-on-one trainer sessions",
    ],
  },
  {
    id: 3,
    title: "Yoga & Flexibility Program",
    duration: "8 Weeks",
    price: 3999,
    description:
      "Improve your flexibility, balance, and mental wellness through guided yoga sessions and breathing exercises.",
    features: [
      "Daily yoga classes",
      "Meditation & breathing techniques",
      "Stress relief focus",
      "Suitable for all levels",
    ],
  },
];

const DashboardProgram = () => {
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleJoinNow = (program) => {
    navigate("/payment", {
      state: {
        amount: program.price,
        plan: program.title,
        duration: program.duration,
      },
    });
  };

  return (
    <div style={{
      ...containerStyle,
      padding: isMobile ? "0 15px" : "0 20px",
      margin: isMobile ? "20px auto" : "40px auto"
    }}>
      <h1 style={{
        ...titleStyle,
        fontSize: isMobile ? "1.8rem" : "2.2rem",
        marginBottom: isMobile ? "20px" : "30px"
      }}>
        💪 Our Fitness Programs
      </h1>
      <div style={{
        ...programsContainerStyle,
        gap: isMobile ? "15px" : "20px",
        justifyContent: isMobile ? "center" : "space-between"
      }}>
        {programs.map((program) => (
          <div key={program.id} style={{
            ...programCardStyle,
            flex: isMobile ? "1 1 100%" : "1 1 280px",
            padding: isMobile ? "15px" : "20px",
            minWidth: isMobile ? "auto" : "280px"
          }}>
            <h2 style={{ fontSize: isMobile ? "1.3rem" : "1.5rem" }}>{program.title}</h2>
            <p style={{
              ...durationStyle,
              fontSize: isMobile ? "0.95rem" : "1rem"
            }}>
              Duration: {program.duration}
            </p>
            <p style={{ 
              fontSize: isMobile ? "1.2rem" : "1.3rem",
              fontWeight: "bold",
              color: "#e94560",
              margin: "10px 0"
            }}>
              ₹{program.price}
            </p>
            <p style={{ 
              fontSize: isMobile ? "0.95rem" : "1rem",
              lineHeight: "1.5"
            }}>
              {program.description}
            </p>
            <ul style={{
              paddingLeft: isMobile ? "20px" : "25px",
              margin: isMobile ? "12px 0" : "15px 0"
            }}>
              {program.features.map((feature, i) => (
                <li key={i} style={{
                  ...featureItemStyle,
                  fontSize: isMobile ? "0.9rem" : "1rem",
                  marginBottom: isMobile ? "6px" : "8px"
                }}>
                  ✓ {feature}
                </li>
              ))}
            </ul>
            <button
              style={{
                ...joinBtnStyle,
                padding: isMobile ? "10px 16px" : "12px 24px",
                fontSize: isMobile ? "0.9rem" : "1rem",
                width: isMobile ? "100%" : "auto"
              }}
              onClick={() => handleJoinNow(program)}
              onMouseEnter={(e) => {
                e.target.style.background = "#e94560";
                e.target.style.transform = "scale(1.02)";
              }}
              onMouseLeave={(e) => {
                e.target.style.background = "#2196F3";
                e.target.style.transform = "scale(1)";
              }}
            >
              Join Now →
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

// Styles
const containerStyle = {
  maxWidth: "1000px",
  margin: "40px auto",
  padding: "0 20px",
  fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  color: "#333",
};

const titleStyle = {
  textAlign: "center",
  marginBottom: "30px",
  color: "#2c3e50",
};

const programsContainerStyle = {
  display: "flex",
  flexWrap: "wrap",
  gap: "20px",
  justifyContent: "space-between",
};

const programCardStyle = {
  border: "2px solid #e0e0e0",
  borderRadius: "12px",
  padding: "20px",
  backgroundColor: "#fafafa",
  boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
  transition: "transform 0.3s ease, box-shadow 0.3s ease",
};

const durationStyle = {
  fontWeight: "bold",
  marginBottom: "10px",
  color: "#555",
};

const featureItemStyle = {
  marginBottom: "8px",
  lineHeight: "1.4",
};

const joinBtnStyle = {
  marginTop: "15px",
  padding: "10px 20px",
  backgroundColor: "#2196F3",
  color: "#fff",
  border: "none",
  borderRadius: "8px",
  cursor: "pointer",
  fontWeight: "bold",
  transition: "all 0.3s ease",
};

export default DashboardProgram;