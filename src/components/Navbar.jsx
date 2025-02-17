"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, ShoppingCart, User, X } from 'lucide-react';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className=" sticky p-4 top-0 z-50 shadow-md bg-gradient-to-r from-green-600 to-green-900   ">
      <div className="  mx-auto flex justify-between items-center">
        <div className="flex items-center gap-2">
          <button onClick={toggleMenu} className="md:hidden text-white">
            {menuOpen ? <X className="w-5 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
          <Link href="/" className="text-2xl font-bold text-white tracking-tight ">
            Productsss
          </Link>
        </div>

        <div className={`md:flex gap-6 text-white font-medium ${menuOpen ? 'flex flex-col items-center absolute top-16 left-0 w-full bg-blue-500 md:relative md:bg-transparent' : 'hidden'}`}>
  <Link
    href=""
    className="border-2 border-transparent hover:border-gray-500 hover:bg-gray-300 hover:text-gray-800 transition rounded-md py-2 px-4"
    onClick={() => setMenuOpen(false)}
  >
    Items
  </Link>
  <Link
    href=""
    className="border-2 border-transparent hover:border-gray-500 hover:bg-gray-300 hover:text-gray-800 transition rounded-md py-2 px-4"
    onClick={() => setMenuOpen(false)}
  >
    About US
  </Link>
  <Link
    href=""
    className="border-2 border-transparent hover:border-gray-500 hover:bg-gray-300 hover:text-gray-800 transition rounded-md py-2 px-4"
    onClick={() => setMenuOpen(false)}
  >
    Contact Us
  </Link>
</div>


        <div className="flex items-center gap-4">
          <ShoppingCart className="w-6 h-6 text-white cursor-pointer hover:text-gray-800 transition" />
          <User className="w-6 h-6 text-white cursor-pointer hover:text-gray-800 transition" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
