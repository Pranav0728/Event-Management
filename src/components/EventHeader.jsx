import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
const EventHeader = () => {
  const [activeMenu, setActiveMenu] = useState(false);
    const navigate = useNavigate()
  // Toggle the hamburger menu
  const toggleMenu = () => {
    setActiveMenu(!activeMenu);
  };
  const logout = ()=>{
    localStorage.removeItem("firstName")
    localStorage.removeItem("role")
    navigate("/");
  }
  return (
    <>
      <header className="bg-gray-800 text-white w-full py-8 px-5 fixed top-0 left-0 h-[10vh] z-10">
        <div className="container mx-auto h-[100%] flex justify-between items-center">
          <div className="text-[1.2rem] font-bold logo">TPO Website</div>

          {/* Desktop Navigation */}
          <nav>
            <ul className="hidden md:flex space-x-4">
  
              <li>
                <NavLink
                  to="/events"
             
                >
                  Events
                </NavLink>
              </li>
            </ul>
          </nav>

          {/* Hamburger Icon for Mobile */}
          <div
            className="HamBurgerIcon flex md:hidden justify-center items-center pr-4 cursor-pointer"
            onClick={toggleMenu}
          >
            <div className="flex flex-col justify-center items-center">
              <div
                className={`w-8 h-1 bg-white mb-1 transition-all duration-300 ${activeMenu ? 'rotate-45 translate-y-2' : ''}`}
              ></div>
              <div
                className={`w-8 h-1 bg-white mb-1 transition-all duration-300 ${activeMenu ? 'opacity-0' : ''}`}
              ></div>
              <div
                className={`w-8 h-1 bg-white transition-all duration-300 ${activeMenu ? '-rotate-45 -translate-y-2' : ''}`}
              ></div>
            </div>
          </div>

          {/* Contact Information (Visible on desktop) */}
          <div className="text-sm hidden md:flex contact">
            <button onClick={logout} className="bg-red-700 rounded-sm p-2 font-semibold text-[1.2rem]">Log out</button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-gray-800 text-white transition-all duration-500 overflow-hidden ${activeMenu ? 'max-h-[20vh] mt-[10vh]' : 'max-h-20'}`}
        style={{
          transitionTimingFunction: 'ease-in-out',
        }}
      >
        <nav className="flex flex-col items-center py-4">
          <ul className="flex flex-col items-center gap-4">
            <li>
              <NavLink
                to="/events"
                onClick={toggleMenu}
              >
                Events
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default EventHeader;
