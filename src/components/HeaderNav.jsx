import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Rocket } from 'lucide-react';

export default function HeaderNav({ onBook }) {
  return (
    <header className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b border-gray-200">
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 text-gray-900 font-semibold">
          <Rocket className="h-5 w-5 text-indigo-600" />
          <span>Spotles</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <NavLink to="/" className={({isActive})=> isActive? 'text-indigo-600' : 'text-gray-700 hover:text-gray-900'}>Home</NavLink>
          <NavLink to="/services" className={({isActive})=> isActive? 'text-indigo-600' : 'text-gray-700 hover:text-gray-900'}>Services</NavLink>
          <NavLink to="/blog" className={({isActive})=> isActive? 'text-indigo-600' : 'text-gray-700 hover:text-gray-900'}>Blog</NavLink>
          <NavLink to="/about" className={({isActive})=> isActive? 'text-indigo-600' : 'text-gray-700 hover:text-gray-900'}>About</NavLink>
          <NavLink to="/contact" className={({isActive})=> isActive? 'text-indigo-600' : 'text-gray-700 hover:text-gray-900'}>Contact</NavLink>
        </nav>
        <div className="flex items-center gap-3">
          <button onClick={onBook} className="rounded-lg bg-indigo-600 text-white px-4 py-2 text-sm hover:bg-indigo-700">Book Now</button>
        </div>
      </div>
    </header>
  );
}
