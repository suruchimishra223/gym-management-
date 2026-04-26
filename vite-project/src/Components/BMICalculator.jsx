import "../App.css"
import React, { useState } from 'react';

const BMICalculator = () => {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [unit, setUnit] = useState('metric');
  const [gender, setGender] = useState('male');
  const [bmi, setBmi] = useState(null);
  const [message, setMessage] = useState('');

  const calculateBMI = () => {
    let heightInMeters;
    let weightInKg;

    if (unit === 'metric') {
      heightInMeters = parseFloat(height) / 100;
      weightInKg = parseFloat(weight);
    } else {
      const feet = parseInt(height.split("'")[0]) || 0;
      const inches = parseInt(height.split("'")[1]) || 0;
      heightInMeters = (feet * 12 + inches) * 0.0254;
      weightInKg = parseFloat(weight) * 0.453592;
    }

    if (!heightInMeters || !weightInKg || heightInMeters <= 0 || weightInKg <= 0) {
      setMessage('Please enter valid height and weight.');
      setBmi(null);
      return;
    }

    const calculatedBMI = weightInKg / (heightInMeters * heightInMeters);
    setBmi(calculatedBMI.toFixed(2));

    if (calculatedBMI < 18.5) {
      setMessage('You are underweight.');
    } else if (calculatedBMI >= 18.5 && calculatedBMI < 24.9) {
      setMessage('You have a normal weight.');
    } else if (calculatedBMI >= 25 && calculatedBMI < 29.9) {
      setMessage('You are overweight.');
    } else {
      setMessage('You are obese.');
    }
  };

  return (
    <div style={{
      maxWidth: '900px',
      margin: '30px auto',
      padding: '20px',
      display: 'flex',
      gap: '20px',
      backgroundColor: '#f5f5f5',
      borderRadius: '10px',
      boxShadow: '0 0 10px rgba(0,0,0,0.1)'
    }}>
      {/* Left Image Section */}
      <div style={{ flex: '1', textAlign: 'center' }}>
        <img
          src={"bmi.jpeg"}
          alt="BMI Illustration"
          style={{ width: '200%', maxWidth: '350px', borderRadius: '10px', height:'100%'}}
        />
      </div>

      {/* Right BMI Calculator Section */}
      <div style={{ flex: '1' }}>
        <h2 style={{ textAlign: 'center' }}>BMI Calculator</h2>

        {/* Gender */}
        <div style={{ marginBottom: '10px' }}>
          <label>
            <strong>Gender:</strong>
            <select
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              style={{ marginLeft: '10px' }}
            >
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </label>
        </div>

        {/* Unit */}
        <div style={{ marginBottom: '10px' }}>
          <label>
            <strong>Select Unit:</strong>
            <select
              value={unit}
              onChange={(e) => setUnit(e.target.value)}
              style={{ marginLeft: '10px' }}
            >
              <option value="metric">Metric (cm/kg)</option>
              <option value="imperial">Imperial (feet'inch/pounds)</option>
            </select>
          </label>
        </div>

        {/* Height */}
        <div style={{ marginBottom: '10px' }}>
          <label>
            <strong>Height</strong> ({unit === 'metric' ? 'cm' : "feet'inches"}):
            <input
              type="text"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              placeholder={unit === 'metric' ? 'e.g. 170' : "e.g. 5'8"}
              style={{ width: '100%', padding: '8px', marginTop: '5px' }}
            />
          </label>
        </div>

        {/* Weight */}
        <div style={{ marginBottom: '10px' }}>
          <label>
            <strong>Weight</strong> ({unit === 'metric' ? 'kg' : 'lbs'}):
            <input
              type="text"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              placeholder={unit === 'metric' ? 'e.g. 70' : 'e.g. 154'}
              style={{ width: '100%', padding: '8px', marginTop: '5px' }}
            />
          </label>
        </div>

        {/* Button */}
        <button
          onClick={calculateBMI}
          style={{
            width: '100%',
            padding: '10px',
            backgroundColor: '#007bff',
            color: '#fff',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer'
          }}
        >
          Calculate BMI
        </button>

        {/* Result */}
        {bmi && (
          <div style={{ marginTop: '20px', textAlign: 'center' }}>
            <h3>Your BMI: {bmi}</h3>
            <p>{message}</p>
            <p><strong>Gender:</strong> {gender.charAt(0).toUpperCase() + gender.slice(1)}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default BMICalculator;
