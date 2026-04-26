import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Payment = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const { amount, plan } = location.state || {};

  // ❌ If direct /payment open - redirect to membership
  if (!amount || !plan) {
    return (
      <div style={container}>
        <div style={card}>
          <h2>❌ No Plan Selected</h2>
          <button style={button} onClick={() => navigate("/dashboard/membership")}>
            Go Back to Membership
          </button>
        </div>
      </div>
    );
  }

  const handlePayment = async () => {
    try {
      // ✅ Create Razorpay Order
      const res = await fetch("http://localhost:4000/api/payment/order", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ amount, plan }),
      });

      const data = await res.json();

      if (!data.id) {
        alert("❌ Order creation failed. Please try again.");
        return;
      }

      // ✅ Razorpay Options
      const options = {
        key: "rzp_test_ShwzTXzGotWYfh", // Your Razorpay Test Key
        amount: data.amount,
        currency: "INR",
        name: "Methil Fitness Club",
        description: `Payment for ${plan}`,
        order_id: data.id,
        image: "https://png.pngtree.com/png-vector/20221209/ourmid/pngtree-gym-subscription-concept-icon-lined-lineart-membership-vector-png-image_43264042.jpg",
        
        handler: async function (response) {
          // ✅ Verify Payment
          try {
            const verifyRes = await fetch("http://localhost:4000/api/payment/verify", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                razorpay_order_id: response.razorpay_order_id,
                razorpay_payment_id: response.razorpay_payment_id,
                razorpay_signature: response.razorpay_signature,
                amount,
                plan,
              }),
            });

            const result = await verifyRes.json();

            if (result.success) {
              alert(`✅ Payment Successful! ${plan} activated.`);
              navigate("/dashboard/membership");
            } else {
              alert("❌ Payment Verification Failed");
            }
          } catch (error) {
            console.error("Verification Error:", error);
            alert("❌ Verification Error. Contact Support.");
          }
        },

        prefill: {
          name: "Fitness Member",
          email: "member@fitness.com",
          contact: "9876543210",
        },

        theme: {
          color: "#e94560",
        },
      };

      const rzp = new window.Razorpay(options);
      rzp.open();

    } catch (err) {
      console.error("Payment Error:", err);
      alert("❌ Payment Error. Please try again.");
    }
  };

  // Get image based on plan
  const getPlanImage = () => {
    if (plan === "Basic Membership" || plan === "Basic") {
      return "https://img.freepik.com/premium-vector/your-gym-logo_1287994-5.jpg?w=2000";
    } else if (plan === "Premium Membership" || plan === "Premium") {
      return "https://static.vecteezy.com/system/resources/previews/018/844/399/non_2x/fitness-center-logo-sport-and-fitness-logo-design-gym-logo-icon-design-stock-or-emblem-with-woman-and-man-silhouette-woman-and-man-holding-dumbbells-vector.jpg";
    } else {
      return "https://png.pngtree.com/png-vector/20221209/ourmid/pngtree-gym-subscription-concept-icon-lined-lineart-membership-vector-png-image_43264042.jpg";
    }
  };

  return (
    <div style={container}>
      <div style={card}>
        {/* Dynamic Image based on plan */}
        <img src={getPlanImage()} alt={plan} style={image} />

        <h2 style={title}>{plan}</h2>
        <p style={price}>₹ {amount}</p>
        <p style={subtitle}>Secure Payment via Razorpay</p>

        <button style={button} onClick={handlePayment}>
          Pay Now
        </button>

        <button 
          style={{ ...button, ...backButton }} 
          onClick={() => navigate(-1)}
        >
          Back
        </button>
      </div>
    </div>
  );
};

/* ✅ Styles */
const container = {
  height: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  background: "linear-gradient(135deg, #1e3c72, #2a5298)",
};

const card = {
  background: "#fff",
  padding: "30px",
  borderRadius: "15px",
  textAlign: "center",
  width: "350px",
  boxShadow: "0 15px 30px rgba(0,0,0,0.2)",
};

const image = {
  width: "100px",
  marginBottom: "15px",
  borderRadius: "50%",
  background: "#f5f5f5",
  padding: "10px",
  objectFit: "cover",
};

const title = {
  marginBottom: "10px",
  fontSize: "22px",
  color: "#2c3e50",
};

const price = {
  fontSize: "28px",
  fontWeight: "bold",
  marginBottom: "10px",
  color: "#e94560",
};

const subtitle = {
  fontSize: "14px",
  color: "#777",
  marginBottom: "20px",
};

const button = {
  padding: "12px 25px",
  background: "#e94560",
  color: "#fff",
  border: "none",
  borderRadius: "8px",
  cursor: "pointer",
  fontSize: "16px",
  fontWeight: "bold",
  width: "100%",
  marginBottom: "10px",
};

const backButton = {
  background: "#666",
};

export default Payment;