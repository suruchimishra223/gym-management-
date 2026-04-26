import React, { useState, useEffect } from "react";

const DashboardContact = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

 const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    const response = await fetch(  'http://localhost:4000/api/email/send/email', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const result = await response.json();

    if (result.success) {
      alert("Message sent successfully!");
      setFormData({ name: "", email: "", phone: "", message: "" });
    } else {
      alert("Failed to send message.");
    }
  } catch (error) {
    console.error("Email sending error:", error);
    alert("Server error. Try again later.");
  }
};


  return (
    <section style={{
      ...containerStyle,
      padding: isMobile ? "0 15px" : "0 20px",
      margin: isMobile ? "20px auto" : "40px auto"
    }}>
      <h2 style={{
        ...titleStyle,
        fontSize: isMobile ? "1.8rem" : "2.2rem",
        marginBottom: isMobile ? "20px" : "30px"
      }}>
        Contact Us
      </h2>

      <div style={{
        ...contactGrid,
        flexDirection: isMobile ? "column" : "row",
        gap: isMobile ? "15px" : "30px"
      }}>
        {/* Contact Info */}
        <div style={{
          ...infoBox,
          padding: isMobile ? "20px 15px" : "25px 20px",
          backgroundColor: "#f5f7fa"
        }}>
          <h3 style={{ 
            fontSize: isMobile ? "1.3rem" : "1.5rem",
            color: "#2c3e50",
            marginBottom: "20px",
            position: "relative",
            paddingBottom: "10px"
          }}>
            <span style={headingUnderline}>Get in Touch</span>
          </h3>
          
          <div style={contactItem}>
            <span style={iconStyle}>📍</span>
            <p style={infoTextStyle}>123 Fitness Street, Gym City, India</p>
          </div>
          
          <div style={contactItem}>
            <span style={iconStyle}>📞</span>
            <p style={infoTextStyle}>+91 98765 43210</p>
          </div>
          
          <div style={contactItem}>
            <span style={iconStyle}>📧</span>
            <p style={infoTextStyle}>info@methilfitness.com</p>
          </div>
          
          <div style={contactItem}>
            <span style={iconStyle}>🕐</span>
            <p style={infoTextStyle}>Mon - Sat: 6AM to 10PM</p>
          </div>
        </div>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} style={{
          ...formBox,
          padding: isMobile ? "20px 15px" : "25px 20px",
          backgroundColor: "#ffffff"
        }}>
          <h3 style={{ 
            fontSize: isMobile ? "1.3rem" : "1.5rem",
            color: "#2c3e50",
            marginBottom: "20px",
            position: "relative",
            paddingBottom: "10px"
          }}>
            <span style={headingUnderline}>Send a Message</span>
          </h3>
          
          <input 
            type="text" 
            name="name"
            placeholder="Your Name" 
            value={formData.name}
            onChange={handleChange}
            required 
            style={{
              ...inputStyle,
              padding: isMobile ? "12px 15px" : "14px 20px",
              fontSize: isMobile ? "14px" : "16px",
              marginBottom: isMobile ? "15px" : "20px"
            }} 
          />
          
          <input 
            type="email" 
            name="email"
            placeholder="Your Email" 
            value={formData.email}
            onChange={handleChange}
            required 
            style={{
              ...inputStyle,
              padding: isMobile ? "12px 15px" : "14px 20px",
              fontSize: isMobile ? "14px" : "16px",
              marginBottom: isMobile ? "15px" : "20px"
            }} 
          />
          
          <input 
            type="tel" 
            name="phone"
            placeholder="Phone Number" 
            value={formData.phone}
            onChange={handleChange}
            required 
            style={{
              ...inputStyle,
              padding: isMobile ? "12px 15px" : "14px 20px",
              fontSize: isMobile ? "14px" : "16px",
              marginBottom: isMobile ? "15px" : "20px"
            }} 
          />
          
          <textarea 
            name="message"
            placeholder="Your Message" 
            rows={isMobile ? "4" : "5"} 
            value={formData.message}
            onChange={handleChange}
            required 
            style={{
              ...textareaStyle,
              padding: isMobile ? "12px 15px" : "14px 20px",
              fontSize: isMobile ? "14px" : "16px",
              marginBottom: isMobile ? "20px" : "25px"
            }}
          ></textarea>
          
          <button 
            type="submit" 
            style={{
              ...submitBtn,
              padding: isMobile ? "12px" : "14px",
              fontSize: isMobile ? "14px" : "16px",
              width: "100%"
            }}
          >
            Send Message
          </button>
        </form>
      </div>

      {/* Embedded Google Map */}
      <div style={{
        ...mapContainer,
        marginTop: isMobile ? "30px" : "40px",
        borderRadius: "12px"
      }}>
        <iframe
          title="gym-map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.9547478770627!2d75.79489797545744!3d26.838113962678225!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db54fe17d17ab%3A0x6fbd46f86d598d26!2sGym!5e0!3m2!1sen!2sin!4v1669986791111"
          width="100%"
          height={isMobile ? "250" : "350"}
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          aria-label="Location of Methil Fitness Club on Google Maps"
        ></iframe>
      </div>
    </section>
  );
};

// Styles
const containerStyle = {
  maxWidth: "1100px",
  margin: "40px auto",
  padding: "0 20px",
  fontFamily: "'Poppins', Arial, sans-serif",
};

const titleStyle = {
  textAlign: "center",
  marginBottom: "30px",
  color: "#2c3e50",
  fontWeight: "600",
};

const contactGrid = {
  display: "flex",
  flexWrap: "wrap",
  gap: "20px",
};

const infoBox = {
  flex: "1 1 300px",
  padding: "20px",
  borderRadius: "12px",
  boxShadow: "0 5px 15px rgba(0,0,0,0.05)",
};

const formBox = {
  flex: "1 1 300px",
  display: "flex",
  flexDirection: "column",
  padding: "20px",
  borderRadius: "12px",
  boxShadow: "0 5px 15px rgba(0,0,0,0.05)",
};

const contactItem = {
  display: "flex",
  alignItems: "flex-start",
  gap: "12px",
  marginBottom: "15px"
};

const iconStyle = {
  fontSize: "1.2rem",
  marginTop: "2px"
};

const infoTextStyle = {
  margin: "0",
  fontSize: "0.95rem",
  lineHeight: "1.6",
  color: "#4a5568"
};

const headingUnderline = {
  position: "relative",
  display: "inline-block",
  "&:after": {
    content: '""',
    position: "absolute",
    bottom: "-5px",
    left: "0",
    width: "50px",
    height: "3px",
    backgroundColor: "#ff5722",
    borderRadius: "3px"
  }
};

const inputStyle = {
  padding: "14px 20px",
  fontSize: "16px",
  borderRadius: "8px",
  border: "1px solid #e2e8f0",
  transition: "all 0.3s ease",
  outline: "none",
  "&:focus": {
    borderColor: "#ff5722",
    boxShadow: "0 0 0 3px rgba(255, 87, 34, 0.2)"
  }
};

const textareaStyle = {
  ...inputStyle,
  resize: "none",
  minHeight: "120px"
};

const submitBtn = {
  backgroundColor: "#ff5722",
  color: "#fff",
  padding: "14px",
  fontWeight: "600",
  border: "none",
  borderRadius: "8px",
  cursor: "pointer",
  transition: "all 0.3s ease",
  "&:hover": {
    backgroundColor: "#e64a19",
    transform: "translateY(-2px)"
  },
  "&:active": {
    transform: "translateY(0)"
  }
};

const mapContainer = {
  marginTop: "30px",
  borderRadius: "12px",
  overflow: "hidden",
  boxShadow: "0 5px 15px rgba(0,0,0,0.1)"
};

export default DashboardContact;