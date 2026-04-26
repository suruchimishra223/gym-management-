import React from 'react'
import '../App.css'
import { Link } from "react-router-dom";

const Hero = () => {
    return (
        <section className='hero'>
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

            <div className="button">

                <Link to="Register">
                    <button className="btn primary">
                        Start Your Journey
                    </button>
                </Link>

                <Link to="/programs">
                    <button className="btn secondary">
                        Discover Your Plan
                    </button>
                </Link>

            </div>
        </section>
    )
}

export default Hero