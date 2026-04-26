import React from 'react';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
    const navigate = useNavigate();

    const heroStyle = {
        backgroundImage: "url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1200')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        width: '100%',
        position: 'relative'
    };

    const buttonStyle = {
        cursor: 'pointer',
        position: 'relative',
        zIndex: 1000,
        pointerEvents: 'auto'
    };

    return (
        <section className='hero' style={heroStyle}>
            <div className='hero-overlay' style={{ position: 'relative', zIndex: 2, background: 'rgba(0,0,0,0.5)', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                <div className='Content'>
                    <div className='title'>
                        <h1 style={{ color: 'white', fontSize: '4rem', margin: 0 }}>LET'S</h1>
                        <h1 style={{ color: 'white', fontSize: '4rem', margin: 0 }}>GET'S</h1>
                        <h1 style={{ color: 'white', fontSize: '4rem', margin: 0 }}>MOVING</h1>
                    </div>
                </div>

                <div className="sub-title">
                    <p style={{ color: 'white', fontSize: '1.2rem' }}>Your Journey to Fitness Starts Here</p>
                    <p style={{ color: 'white', fontSize: '1.2rem' }}>Unleash Your Journey</p>
                </div>

                <div className="button" style={{ position: 'relative', zIndex: 10, display: 'flex', gap: '20px', marginTop: '30px' }}>
                    <button 
                        className="btn primary"
                        onClick={() => navigate('/register')}
                        style={buttonStyle}
                    >
                        Start Your Journey
                    </button>

                    <button 
                        className="btn secondary"
                        onClick={() => navigate('/dashboard/membership')}
                        style={buttonStyle}
                    >
                        Discover Your Plan
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Hero;