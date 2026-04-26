import React from 'react';
import "../App.css"

const WorkoutSession = () => {
  return (
    <section className='workout-session'>
      <div className="container">
        <div className="session-intro">
          <div className="session-card">
            <h1>TOP WORKOUT SESSION</h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. At quidem, molestiae sequi odit hic ipsa, nihil alias, ratione nesciunt dolor inventore libero facere tempora magni quasi officia mollitia sapiente iusto.</p>
            <img src="Gym.jpeg" alt="workout session" className="session-image" />
          </div>
          
          <div className="session-card">
            <h1>FEATURED BOOTCAMPS</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint esse assumenda, at quis possimus rerum illo ut impedit facere voluptatibus doloribus, velit modi! Atque maiores nostrum odit, perspiciatis commodi beatae.</p>
            <img src="Bootcamp.jpeg" alt="workout session" className='session-image'/>
          </div>


          

          
        </div>

        <div className="bootcamp-grid">
          <div className="bootcamp-card">
            <h4>Strength Training</h4>
            <p>Build muscle and increase strength with our expert-led strength training programs designed for all fitness levels.</p>
          </div>

          <div className="bootcamp-card">
            <h4>HIIT Workouts</h4>
            <p>Burn maximum calories in minimum time with our high-intensity interval training sessions.</p>
          </div>

          <div className="bootcamp-card">
            <h4>Yoga & Mobility</h4>
            <p>Improve flexibility and reduce stress with our yoga classes tailored for all experience levels.</p>
          </div>

          <div className="bootcamp-card">
            <h4>Endurance Training</h4>
            <p>Boost your stamina and cardiovascular health with our specialized endurance programs.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WorkoutSession;