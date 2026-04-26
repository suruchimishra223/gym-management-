// DashboardMembership.jsx - Add hover effect
import React from "react";
import { useNavigate } from "react-router-dom";

const membershipPlans = [
  {
    title: "Basic Membership",
    price: 1000,
    duration: "3 months",
    image: "https://images.unsplash.com/photo-1558611848-73f7eb4001a1",
  },
  {
    title: "Premium Membership",
    price: 2500,
    duration: "6 months",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b",
    popular: true,
  },
  {
    title: "Elite Membership",
    price: 4000,
    duration: "12 months",
    image: "https://images.unsplash.com/photo-1599058917212-d750089bc07e",
  },
];

const DashboardMembership = () => {
  const navigate = useNavigate();

  return (
    <div style={container}>
      <h1 style={title}>Choose Your Plan</h1>

      <div style={cardContainer}>
        {membershipPlans.map((plan, i) => (
          <div
            key={i}
            style={{
              ...card,
              transform: plan.popular ? "scale(1.05)" : "scale(1)",
              border: plan.popular ? "2px solid #ff9800" : "none",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.05)";
              e.currentTarget.style.boxShadow = "0 15px 30px rgba(0,0,0,0.4)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = plan.popular ? "scale(1.05)" : "scale(1)";
              e.currentTarget.style.boxShadow = "0 8px 20px rgba(0,0,0,0.3)";
            }}
          >
            {plan.popular && <div style={badge}>⭐ Most Popular</div>}
            <img src={plan.image} alt={plan.title} style={image} />
            <h2>{plan.title}</h2>
            <p style={price}>₹{plan.price}</p>
            <p>{plan.duration}</p>
            <button
              style={btn}
              onClick={() =>
                navigate("/payment", {
                  state: {
                    amount: plan.price,
                    plan: plan.title,
                  },
                })
              }
              onMouseEnter={(e) => (e.currentTarget.style.background = "#45a049")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "#4CAF50")}
            >
              Join Now →
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DashboardMembership;

// 🎨 Styles
const container = {
  padding: "40px",
  background: "linear-gradient(to right, #1e3c72, #2a5298)",
  minHeight: "100vh",
  color: "#fff",
};

const title = {
  textAlign: "center",
  marginBottom: "40px",
  fontSize: "2.5rem",
};

const cardContainer = {
  display: "flex",
  justifyContent: "center",
  gap: "30px",
  flexWrap: "wrap",
};

const card = {
  width: "280px",
  background: "rgba(255,255,255,0.1)",
  backdropFilter: "blur(10px)",
  borderRadius: "15px",
  padding: "20px",
  textAlign: "center",
  boxShadow: "0 8px 20px rgba(0,0,0,0.3)",
  transition: "0.3s",
  position: "relative",
  cursor: "pointer",
};

const image = {
  width: "100%",
  height: "150px",
  objectFit: "cover",
  borderRadius: "10px",
};

const price = {
  fontSize: "1.8rem",
  fontWeight: "bold",
  margin: "10px 0",
  color: "#ff9800",
};

const btn = {
  marginTop: "15px",
  padding: "12px",
  width: "100%",
  background: "#4CAF50",
  border: "none",
  borderRadius: "8px",
  color: "#fff",
  cursor: "pointer",
  fontWeight: "bold",
  transition: "0.3s",
  fontSize: "16px",
};

const badge = {
  position: "absolute",
  top: "10px",
  right: "10px",
  background: "#ff9800",
  padding: "5px 10px",
  borderRadius: "20px",
  fontSize: "12px",
  fontWeight: "bold",
};