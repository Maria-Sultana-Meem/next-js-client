'use client'

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const links = [
    { name: "Home", href: "/" },
    { name: "Products", href: "/products" },
    { name: "About", href: "/about" },
    { name: "My Profile", href: "/myprofile" },
   
  ];

  return (
    <div className="bg-base-100 shadow-sm sticky top-0 z-50">
      <div className="navbar w-10/12 mx-auto">
        {/* Navbar Start */}
        <div className="navbar-start">
          {/* Mobile Dropdown */}
          <div className="dropdown">
            <button 
              tabIndex={0} 
              className="btn btn-ghost lg:hidden"
              onClick={() => setOpen(!open)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> 
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> 
              </svg>
            </button>
            {open && (
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow"
              >
                {links.map(link => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className={pathname === link.href ? "text-green-500" : "text-black"}
                      onClick={() => setOpen(false)}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Logo */}
          <Link href="/" className="text-green-500 font-bold text-xl ml-2">
            ProductHub
          </Link>
        </div>

        {/* Navbar Center - Desktop */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-5">
            {links.map(link => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={pathname === link.href ? "text-green-500" : "text-black"}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Navbar End */}
        <div className="navbar-end">
          <button className="btn bg-green-500 text-white">Login</button>
        </div>
      </div>
    </div>
  );
}
