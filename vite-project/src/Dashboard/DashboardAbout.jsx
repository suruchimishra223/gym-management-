import React, { useState, useEffect } from "react";

const DashboardAbout = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [isEditing, setIsEditing] = useState(false);
  const [aboutData, setAboutData] = useState({
    mission: "At Methil Fitness Club, our mission is to empower individuals to achieve their health and fitness goals through expert guidance, state-of-the-art equipment, and a supportive community.",
    vision: "We envision a healthier world where fitness is accessible to everyone, and we strive to be the leading fitness center known for innovation and excellence.",
    whyChooseUs: [
      "Experienced certified trainers",
      "Modern and safe equipment",
      "Customized workout programs",
      "Flexible membership plans",
      "Friendly and motivating environment"
    ]
  });

  const [formData, setFormData] = useState(aboutData);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleWhyChooseUsChange = (index, value) => {
    const updatedList = [...formData.whyChooseUs];
    updatedList[index] = value;
    setFormData({ ...formData, whyChooseUs: updatedList });
  };

  const addWhyChooseUs = () => {
    setFormData({
      ...formData,
      whyChooseUs: [...formData.whyChooseUs, ""]
    });
  };

  const removeWhyChooseUs = (index) => {
    const updatedList = formData.whyChooseUs.filter((_, i) => i !== index);
    setFormData({ ...formData, whyChooseUs: updatedList });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // TODO: Save to backend
    setAboutData(formData);
    setIsEditing(false);
    alert("About page updated successfully!");
  };

  return (
    <div style={containerStyle}>
      <div style={headerStyle}>
        <h1 style={{ ...titleStyle, fontSize: isMobile ? "1.8rem" : "2.5rem" }}>
          📄 About Methil Fitness Club
        </h1>
        <button onClick={() => setIsEditing(!isEditing)} style={editBtnStyle}>
          {isEditing ? "Cancel" : "✏️ Edit"}
        </button>
      </div>

      {isEditing ? (
        // Edit Form
        <form onSubmit={handleSubmit} style={formStyle}>
          <div style={fieldStyle}>
            <label>Mission</label>
            <textarea
              name="mission"
              value={formData.mission}
              onChange={handleChange}
              rows="4"
              style={inputStyle}
              required
            />
          </div>

          <div style={fieldStyle}>
            <label>Vision</label>
            <textarea
              name="vision"
              value={formData.vision}
              onChange={handleChange}
              rows="4"
              style={inputStyle}
              required
            />
          </div>

          <div style={fieldStyle}>
            <label>Why Choose Us</label>
            {formData.whyChooseUs.map((item, index) => (
              <div key={index} style={listItemStyle}>
                <input
                  type="text"
                  value={item}
                  onChange={(e) => handleWhyChooseUsChange(index, e.target.value)}
                  style={{ ...inputStyle, flex: 1 }}
                  required
                />
                <button
                  type="button"
                  onClick={() => removeWhyChooseUs(index)}
                  style={removeBtnStyle}
                >
                  ❌
                </button>
              </div>
            ))}
            <button type="button" onClick={addWhyChooseUs} style={addBtnStyle}>
              + Add Point
            </button>
          </div>

          <button type="submit" style={saveBtnStyle}>Save Changes</button>
        </form>
      ) : (
        // View Mode
        <>
          <section style={{ ...sectionStyle, marginBottom: isMobile ? "25px" : "30px" }}>
            <h2 style={{ fontSize: isMobile ? "1.4rem" : "1.8rem" }}>🎯 Our Mission</h2>
            <p style={{ fontSize: isMobile ? "1rem" : "1.1rem", lineHeight: "1.6" }}>
              {aboutData.mission}
            </p>
          </section>

          <section style={{ ...sectionStyle, marginBottom: isMobile ? "25px" : "30px" }}>
            <h2 style={{ fontSize: isMobile ? "1.4rem" : "1.8rem" }}>👁️ Our Vision</h2>
            <p style={{ fontSize: isMobile ? "1rem" : "1.1rem", lineHeight: "1.6" }}>
              {aboutData.vision}
            </p>
          </section>

          <section style={{ ...sectionStyle, marginBottom: isMobile ? "25px" : "30px" }}>
            <h2 style={{ fontSize: isMobile ? "1.4rem" : "1.8rem" }}>✅ Why Choose Us?</h2>
            <ul style={{
              paddingLeft: isMobile ? "20px" : "25px",
              fontSize: isMobile ? "1rem" : "1.1rem",
              lineHeight: "1.8"
            }}>
              {aboutData.whyChooseUs.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </section>

          <section style={sectionStyle}>
            <h2 style={{ fontSize: isMobile ? "1.4rem" : "1.8rem" }}>👨‍🏫 Meet Our Team</h2>
            <div style={{
              ...teamContainerStyle,
              gap: isMobile ? "15px" : "20px",
              justifyContent: isMobile ? "center" : "space-around"
            }}>
              <TeamMember
                name="Rohit Sharma"
                role="Head Trainer"
                img="https://randomuser.me/api/portraits/men/75.jpg"
                isMobile={isMobile}
              />
              <TeamMember
                name="Sneha Gupta"
                role="Nutritionist"
                img="https://randomuser.me/api/portraits/women/65.jpg"
                isMobile={isMobile}
              />
              <TeamMember
                name="Ajay Singh"
                role="Yoga Instructor"
                img="https://randomuser.me/api/portraits/men/43.jpg"
                isMobile={isMobile}
              />
            </div>
          </section>
        </>
      )}
    </div>
  );
};

const TeamMember = ({ name, role, img, isMobile }) => {
  return (
    <div style={{
      ...teamMemberStyle,
      width: isMobile ? "150px" : "180px",
      padding: isMobile ? "10px" : "15px"
    }}>
      <img
        src={img}
        alt={name}
        style={{
          ...teamImgStyle,
          width: isMobile ? "100px" : "120px",
          height: isMobile ? "100px" : "120px"
        }}
      />
      <h3 style={{
        fontSize: isMobile ? "1.1rem" : "1.3rem",
        margin: isMobile ? "8px 0" : "10px 0"
      }}>
        {name}
      </h3>
      <p style={{
        fontSize: isMobile ? "0.9rem" : "1rem",
        color: "#666"
      }}>
        {role}
      </p>
    </div>
  );
};

// Styles
const containerStyle = {
  maxWidth: "1000px",
  margin: "20px auto",
  padding: "20px",
  fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  color: "#333",
  background: "#fff",
  borderRadius: "12px",
  boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
};

const headerStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  borderBottom: "2px solid #e94560",
  paddingBottom: "15px",
  marginBottom: "25px",
};

const titleStyle = {
  textAlign: "left",
  margin: 0,
  color: "#2c3e50",
};

const editBtnStyle = {
  padding: "10px 20px",
  background: "#e94560",
  color: "white",
  border: "none",
  borderRadius: "8px",
  cursor: "pointer",
  fontSize: "14px",
  fontWeight: "bold",
};

const sectionStyle = {
  marginBottom: "30px",
};

const teamContainerStyle = {
  display: "flex",
  flexWrap: "wrap",
  gap: "20px",
  marginTop: "20px",
};

const teamMemberStyle = {
  textAlign: "center",
  boxShadow: "0 0 10px rgba(0,0,0,0.1)",
  borderRadius: "12px",
  backgroundColor: "#fafafa",
  transition: "transform 0.3s ease",
};

const teamImgStyle = {
  borderRadius: "50%",
  marginBottom: "10px",
  objectFit: "cover",
};

// Form Styles
const formStyle = {
  display: "flex",
  flexDirection: "column",
  gap: "20px",
};

const fieldStyle = {
  display: "flex",
  flexDirection: "column",
  gap: "8px",
};

const inputStyle = {
  padding: "10px",
  border: "1px solid #ddd",
  borderRadius: "8px",
  fontSize: "14px",
  fontFamily: "inherit",
};

const listItemStyle = {
  display: "flex",
  gap: "10px",
  marginBottom: "10px",
};

const addBtnStyle = {
  padding: "8px 15px",
  background: "#28a745",
  color: "white",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
  marginTop: "5px",
};

const removeBtnStyle = {
  padding: "8px 12px",
  background: "#dc3545",
  color: "white",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
};

const saveBtnStyle = {
  padding: "12px",
  background: "#e94560",
  color: "white",
  border: "none",
  borderRadius: "8px",
  cursor: "pointer",
  fontSize: "16px",
  fontWeight: "bold",
  marginTop: "10px",
};

export default DashboardAbout;