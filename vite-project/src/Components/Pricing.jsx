import React from 'react'
import { useNavigate } from 'react-router-dom'  // ✅ Import this
import "../App.css"

const Pricing = () => {
  const navigate = useNavigate()  // ✅ Initialize navigate hook

  const pricingPlans = [
    {
      imgUrl: "/basic.jpeg",
      title: "Basic Membership",
      price: 1000,
      length: 3,
      features: [
        "Access to gym equipment",
        "Locker room access",
        "Free WiFi",
        "Basic workout plan"
      ]
    },
    {
      imgUrl: "/elite.jpeg",
      title: "Premium Membership",
      price: 2500,
      length: 6,
      features: [
        "All Basic benefits",
        "Group classes included",
        "Personal trainer consultation",
        "Sauna access",
        "Nutrition guide"
      ],
      popular: true
    },
    {
      imgUrl: "/prenium.jpeg",
      title: "Elite Membership",
      price: 4000,
      length: 12,
      features: [
        "All Premium benefits",
        "Unlimited personal training",
        "Massage therapy sessions",
        "VIP locker",
        "24/7 access",
        "Guest passes"
      ]
    }
  ]

  return (
    <section className="pricing-section">
      <div className="container">
        <h2 className="section-title">OUR PRICING PLANS</h2>
        <p className="section-subtitle">Choose the perfect plan for your fitness journey</p>

        <div className="pricing-grid">
          {pricingPlans.map((plan, index) => (
            <div className={`pricing-card ${plan.popular ? 'popular' : ''}`} key={index}>
              {plan.popular && <div className="popular-badge">MOST POPULAR</div>}

              <div className="plan-image">
                <img src={plan.imgUrl} alt={plan.title} />
              </div>

              <div className="plan-details">
                <h3>{plan.title}</h3>
                <div className="price">
                  ₹{plan.price}<span>/{plan.length} months</span>
                </div>

                <ul className="features">
                  {plan.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>

                <button
                  className="join-button"
                  onClick={() =>
                    navigate("/payment", {
                      state: {
                        amount: plan.price,
                        plan: plan.title,
                      },
                    })
                  }
                >
                  Join Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Pricing