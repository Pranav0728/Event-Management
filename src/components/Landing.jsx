import React from "react";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="bg-gray-100">
      {/* Navbar */}
      <header className="flex items-center justify-between p-5 bg-blue-600 text-white shadow-md fixed w-full z-10 top-0 left-0">
        <div className="text-2xl font-bold">College Placement Event</div>
        <nav>
          <ul className="flex space-x-8">
            <li><a href="#about" className="hover:text-gray-300">About</a></li>
            <li><a href="#events" className="hover:text-gray-300">Events</a></li>
            <li><a href="#contact" className="hover:text-gray-300">Contact</a></li>
          </ul>
        </nav>
        <div className="space-x-4">
            <Link to="/signin">
              <button className="px-6 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700">Login</button>
            </Link>
            <Link to="/register">
              <button className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-500">Register</button>
            </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-cover bg-center h-screen relative flex flex-col items-center justify-center text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 drop-shadow-lg">Welcome to the College Placement Event Portal</h1>
        <p className="text-lg sm:text-xl md:text-2xl mb-8 drop-shadow-lg">Your gateway to career opportunities and professional growth.</p>
        <button className="bg-yellow-500 px-8 py-3 text-lg rounded-lg hover:bg-yellow-400">Explore Events</button>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-gray-200 text-center">
        <h2 className="text-3xl font-semibold mb-6">About the Event</h2>
        <p className="text-lg sm:text-xl mx-auto max-w-4xl">
          Our College Placement Event brings together top companies and recruiters for students to explore career opportunities.
          Join us for a life-changing experience, featuring workshops, interviews, and networking events. Whether you're looking for internships or full-time roles, this event has it all.
        </p>
      </section>

      {/* Events Section */}
      <section id="events" className="py-16 bg-white text-center">
        <h2 className="text-3xl font-semibold mb-6">Upcoming Events</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-4">
          <div className="bg-gray-300 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-2">Technothon</h3>
            <p>Innovative technology showcase for students to present their tech skills.</p>
            <button className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-500">Join Now</button>
          </div>
          <div className="bg-gray-300 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-2">CodeFest</h3>
            <p>A hackathon to push your coding skills to the limit and win exciting prizes.</p>
            <button className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-500">Join Now</button>
          </div>
          <div className="bg-gray-300 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-2">Career Counseling</h3>
            <p>One-on-one sessions with industry professionals to guide your career path.</p>
            <button className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-500">Join Now</button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-600 text-white py-4 text-center">
        <p>&copy; 2025 College Placement Event | All Rights Reserved</p>
      </footer>
    </div>
  );
};

export default LandingPage;
