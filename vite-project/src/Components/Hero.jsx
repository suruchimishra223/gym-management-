import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AOS from "aos";
import "aos/dist/aos.css";

const Hero = () => {
    const navigate = useNavigate();

    useEffect(() => {
        AOS.init({
            duration: 1200,
            once: true,
        });
    }, []);

    const heroStyle = {
        backgroundImage: "url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1200')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        width: '100%',
        position: 'relative'
    };

    return (
        <section className='hero' style={heroStyle}>
            <div 
                className='hero-overlay'
                style={{
                    position: 'relative',
                    zIndex: 2,
                    background: 'rgba(0,0,0,0.6)',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
            >

                {/* TITLE */}
                <div className='Content' data-aos="fade-up">
                    <div className='title'>
                        <h1 style={titleStyle}>LET'S</h1>
                        <h1 style={titleStyle}>GET</h1>
                        <h1 style={titleStyle}>MOVING</h1>
                    </div>
                </div>

                {/* SUBTITLE */}
                <div className="sub-title" data-aos="fade-up" data-aos-delay="300">
                    <p style={subStyle}>Your Journey to Fitness Starts Here</p>
                    <p style={subStyle}>Unleash Your Strength 💪</p>
                </div>

                {/* BUTTONS */}
                <div 
                    className="button" 
                    data-aos="zoom-in" 
                    data-aos-delay="600"
                    style={{
                        display: 'flex',
                        gap: '20px',
                        marginTop: '30px'
                    }}
                >
                    <button 
                        className="btn primary"
                        onClick={() => navigate('/register')}
                        style={btnPrimary}
                    >
                        Start Your Journey
                    </button>

                    <button 
                        className="btn secondary"
                        onClick={() => navigate('/dashboard/membership')}
                        style={btnSecondary}
                    >
                        Discover Your Plan
                    </button>
                </div>

            </div>
        </section>
    );
};

export default Hero;



// 🎨 Styles

const titleStyle = {
    color: 'white',
    fontSize: '4rem',
    margin: 0,
    fontWeight: 'bold',
    letterSpacing: '2px'
};

const subStyle = {
    color: 'white',
    fontSize: '1.2rem',
    textAlign: 'center',
    opacity: 0.9
};

const btnPrimary = {
    padding: "12px 25px",
    background: "#ff4d4d",
    border: "none",
    color: "white",
    borderRadius: "30px",
    cursor: "pointer",
    fontWeight: "bold",
    transition: "0.3s"
};

const btnSecondary = {
    padding: "12px 25px",
    background: "transparent",
    border: "2px solid white",
    color: "white",
    borderRadius: "30px",
    cursor: "pointer",
    fontWeight: "bold",
    transition: "0.3s"
};