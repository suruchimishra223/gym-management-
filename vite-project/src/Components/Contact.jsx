import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "../App.css";
import AOS from "aos";
import "aos/dist/aos.css";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [serverMessage, setServerMessage] = useState({ text: '', type: '' });

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true
    });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = 'Name is required';

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone is required';
    } else if (!/^[0-9]{10,15}$/.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number';
    }

    if (!formData.message.trim()) newErrors.message = 'Message is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);
    setServerMessage({ text: '', type: '' });

    try {
      const response = await axios.post(
        'http://localhost:4000/api/email/send/email',
        formData
      );

      if (response.data.success) {
        setIsSubmitted(true);
        setServerMessage({
          text: 'Message sent successfully!',
          type: 'success'
        });

        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: ''
        });

        setTimeout(() => {
          setIsSubmitted(false);
          setServerMessage({ text: '', type: '' });
        }, 4000);
      } else {
        setServerMessage({
          text: 'Failed to send message',
          type: 'error'
        });
      }
    } catch (error) {
      setServerMessage({
        text: 'Server error. Try again later.',
        type: 'error'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="contact-section">

      {/* IMAGE SIDE */}
      <div 
        className="contact-image-section"
        data-aos="fade-right"
      >
        <div className="image-container">
          <img
            src={"woman.jpeg"}
            alt=""
            className="contact-image"
          />

          <div className="image-overlay">
            <div className="overlay-content">
              <h2 className="overlay-title">We'd Love to Hear From You</h2>
              <p className="overlay-text">
                Our team is ready to assist you
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* FORM SIDE */}
      <form 
        onSubmit={handleSubmit} 
        className="contact-form"
        data-aos="fade-left"
        noValidate
      >

        <div className="form-group" data-aos="fade-up" data-aos-delay="100">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className={errors.name ? 'error' : ''}
          />
          {errors.name && <span className="error-message">{errors.name}</span>}
        </div>

        <div className="form-group" data-aos="fade-up" data-aos-delay="200">
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className={errors.email ? 'error' : ''}
          />
          {errors.email && <span className="error-message">{errors.email}</span>}
        </div>

        <div className="form-group" data-aos="fade-up" data-aos-delay="300">
          <input
            type="tel"
            name="phone"
            placeholder="Your Phone"
            value={formData.phone}
            onChange={handleChange}
            className={errors.phone ? 'error' : ''}
          />
          {errors.phone && <span className="error-message">{errors.phone}</span>}
        </div>

        <div className="form-group" data-aos="fade-up" data-aos-delay="400">
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleChange}
          />
        </div>

        <div className="form-group" data-aos="fade-up" data-aos-delay="500">
          <textarea
            name="message"
            rows="5"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            className={errors.message ? 'error' : ''}
          />
          {errors.message && <span className="error-message">{errors.message}</span>}
        </div>

        <button
          type="submit"
          className="submit-btn"
          disabled={isSubmitting}
          data-aos="zoom-in"
          data-aos-delay="600"
        >
          {isSubmitting ? 'SENDING...' : 'SEND MESSAGE'}
        </button>

        {serverMessage.text && (
          <div className={`server-message ${serverMessage.type}`}>
            {serverMessage.text}
          </div>
        )}

      </form>
    </section>
  );
};

export default ContactForm;