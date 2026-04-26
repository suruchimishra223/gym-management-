import React from 'react';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
    const navigate = useNavigate();

    const buttonStyle = {
        cursor: 'pointer',
        position: 'relative',
        zIndex: 1000,
        pointerEvents: 'auto'
    };

    return (
        <section className='hero' style={{ position: 'relative', zIndex: 1 }}>
            <div className='hero-overlay' style={{ position: 'relative', zIndex: 2 }}>
                <div className='Content'>
                    <div className='title'>
                        <h1>LET'S</h1>
                        <h1>GET'S</h1>
                        <h1>MOVING</h1>
                    </div>
                </div>

                <div className="sub-title">
                    <p>Your Journey to Fitness Starts Here</p>
                    <p>Unleash Your Journey</p>
                </div>

                <div className="button" style={{ position: 'relative', zIndex: 10 }}>
                    <button 
                        className="btn primary"
                        onClick={() => navigate('/register')}
                        style={buttonStyle}
                        onMouseEnter={(e) => e.target.style.cursor = 'pointer'}
                    >
                        Start Your Journey
                    </button>

                    <button 
                        className="btn secondary"
                        onClick={() => navigate('/dashboard/membership')}
                        style={buttonStyle}
                        onMouseEnter={(e) => e.target.style.cursor = 'pointer'}
                    >
                        Discover Your Plan
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Hero;