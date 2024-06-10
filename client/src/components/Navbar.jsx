import React, { useState, useEffect } from 'react';

function Navbar() {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`${isSticky ? 'fixed top-0 left-0 w-full bg-white shadow-md z-50' : ''} flex items-center justify-between px-4 py-2`}
    >
      <h1 className="text-xl font-bold">My Brand Name</h1>
      <ul className="flex space-x-4">
        <li className="hover:text-gray-400">
          <a href="/login" className="font-medium">Login</a>
        </li>
        <li className="hover:text-gray-400">
          <a href="/register" className="font-medium">Register</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
