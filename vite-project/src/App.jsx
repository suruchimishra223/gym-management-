import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import WorkoutSession from './Components/WorkoutSession';
import Gallery from './Components/Gallery';
import Pricing from './Components/Pricing';
import Contact from './Components/Contact';
import BMICalculator from './Components/BMICalculator';
import Footer from './Components/Footer';

import Dashboard from './Dashboard/Dashboard';
import DashboardHome from './Dashboard/DashboardHome';
import DashboardAbout from './Dashboard/DashboardAbout';
import DashboardProgram from './Dashboard/DashboardProgram';
import DashboardMembership from './Dashboard/DashboardMembership';
import DashboardContact from './Dashboard/DashboardContact';

import HomeForm from './Form/HomeForm';
import MembershipForm from './Form/MemberShipFrom';
import ProgramForm from './Form/ProgramFrom';
import ContactForm from './Form/ContactFrom';
import UpdateFrom from './Form/UpdateFrom';

import HomeTable from './Table/HomeTable';
import MembershipTable from './Table/MembershipTable';
import ProgramTable from './Table/ProgramTable';
import ContactTable from './Table/ContactTable';

import Register from './Components/Register';
import Login from './Components/Login';
import Payment from './Pages/Payment';

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        {/* Home Page */}
        <Route path="/" element={
          <>
            <Hero />
            <WorkoutSession />
            <Gallery />
            <Pricing />
            <Contact />
            <BMICalculator />
          </>
        } />

        {/* Auth */}
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />

        {/* Payment Page */}
        <Route path="/payment" element={<Payment />} />

        {/* Dashboard */}
        <Route path="/dashboard" element={<Dashboard />}>
          <Route index element={<DashboardHome />} />
          <Route path="home" element={<DashboardHome />} />
          <Route path="about" element={<DashboardAbout />} />
          <Route path="program" element={<DashboardProgram />} />
          <Route path="membership" element={<DashboardMembership />} />
          <Route path="contact" element={<DashboardContact />} />

          {/* Forms */}
          <Route path="homeform" element={<HomeForm />} />
          <Route path="membershipform" element={<MembershipForm />} />
          <Route path="programform" element={<ProgramForm />} />
          <Route path="contactform" element={<ContactForm />} />
          <Route path="updatefrom" element={<UpdateFrom />} />

          {/* Tables */}
          <Route path="hometable" element={<HomeTable />} />
          <Route path="programtable" element={<ProgramTable />} />
          <Route path="membershiptable" element={<MembershipTable />} />
          <Route path="contacttable" element={<ContactTable />} />
        </Route>
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;