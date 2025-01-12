import React, { useState } from "react";
import nodeApi from "../axiosConfig";
import { CircleLoader } from "react-spinners"; // Importing CircleLoader from react-spinners

const RegisterPage = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);
  const [loading, setLoading] = useState(false); // Loading state to track registration process

  const handleRegister = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    const userData = {
      email_id: email,
      password: password,
      first_name: firstName,
      last_name: lastName,
    };

    setLoading(true); // Set loading to true when registration starts

    try {
      const response = await nodeApi.post("/studentRegister", userData);  // Using the nodeApi instance
      console.log("Registration successful", response.data);
      setSuccessMessage("Registration successful! Now login");
      setLoading(false); // Set loading to false after registration completes
    } catch (error) {
      console.error("Error registering:", error);
      setError(error.response ? error.response.data.message : "An error occurred");
      setLoading(false); // Set loading to false if an error occurs
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-bold text-center text-green-600 mb-6">Register</h2>

        {/* Error or success message display */}
        {error && <div className="text-red-500 text-center mb-4">{error}</div>}
        {successMessage && <div className="text-green-500 text-center mb-4">{successMessage}</div>}

        <form onSubmit={handleRegister}>
          <div className="mb-4">
            <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Enter your first name"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Enter your last name"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Enter your email"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Enter your password"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Confirm your password"
            />
          </div>

          {/* Show loading spinner while submitting */}
          {loading ? (
            <div className="flex justify-center">
              <CircleLoader color="#10B981" size={50} />
            </div>
          ) : (
            <button type="submit" className="w-full py-2 bg-green-600 text-white rounded-md hover:bg-green-500 focus:outline-none">
              Register
            </button>
          )}

          <div className="mt-4 text-center">
            <p className="text-sm">
              Already have an account?{" "}
              <a href="/signin" className="text-blue-600 hover:underline">
                Sign In here
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
