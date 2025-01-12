import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom"; // Correctly import Link from react-router-dom
import nodeApi from "../axiosConfig"; // Make sure nodeApi is correctly set up

const SignInPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleSignIn = async (e) => {
    e.preventDefault();
    setError(""); // Reset any previous error

    try {
      // Send request to backend to check login credentials
      const response = await nodeApi.post("/studentLogin", {
        email_id: email,
        password: password,
        
      });   
      console.log(response)
      if (response.status === 200) {
        const { firstName, role,student_id } = response.data;

        // Save firstName and role to localStorage
        localStorage.setItem("student_id", student_id);
        localStorage.setItem("firstName", firstName);
        localStorage.setItem("role", role);
        // Navigate based on role
        if (role == true) {
          navigate("/admin");
        } else {
          navigate("/events");
        }
      }
    } catch (error) {
      setError(error.response?.data?.message || "An error occurred. Please try again.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-bold text-center text-blue-600 mb-6">Sign In</h2>
        <form onSubmit={handleSignIn}>
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
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your password"
            />
          </div>

          {error && <p className="text-red-500 text-sm">{error}</p>}

          <button type="submit" className="w-full py-2 bg-blue-600 text-white rounded-md hover:bg-blue-500 focus:outline-none">
            Sign In
          </button>

          <div className="mt-4 text-center">
            <p className="text-sm">
              Don't have an account?{" "}
              <Link to="/register" className="text-blue-600 hover:underline"> {/* Use Link instead of a */}
                Register here
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignInPage;
