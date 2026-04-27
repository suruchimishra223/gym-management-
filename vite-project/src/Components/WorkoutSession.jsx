import React, { useEffect } from 'react';
import "../App.css";
import AOS from "aos";
import "aos/dist/aos.css";

const WorkoutSession = () => {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <section className='workout-session'>
      <div className="container">

        {/* TOP SECTION */}
        <div className="session-intro">

          {/* Card 1 */}
          <div className="session-card" data-aos="fade-right">
            <h1>TOP WORKOUT SESSION</h1>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. At quidem,
              molestiae sequi odit hic ipsa.
            </p>
            <img src="Gym.jpeg" alt="workout session" className="session-image" />
          </div>

          {/* Card 2 */}
          <div className="session-card" data-aos="fade-left">
            <h1>FEATURED BOOTCAMPS</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint esse
              assumenda, at quis possimus rerum illo ut impedit.
            </p>
            <img src="Bootcamp.jpeg" alt="bootcamp" className='session-image' />
          </div>

        </div>

        {/* BOOTCAMP GRID */}
        <div className="bootcamp-grid">

          <div className="bootcamp-card" data-aos="zoom-in" data-aos-delay="100">
            <h4>Strength Training</h4>
            <p>Build muscle and increase strength with expert-led programs.</p>
          </div>

          <div className="bootcamp-card" data-aos="zoom-in" data-aos-delay="200">
            <h4>HIIT Workouts</h4>
            <p>Burn maximum calories with high-intensity training.</p>
          </div>

          <div className="bootcamp-card" data-aos="zoom-in" data-aos-delay="300">
            <h4>Yoga & Mobility</h4>
            <p>Improve flexibility and reduce stress.</p>
          </div>

          <div className="bootcamp-card" data-aos="zoom-in" data-aos-delay="400">
            <h4>Endurance Training</h4>
            <p>Boost stamina and cardiovascular health.</p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default WorkoutSession;