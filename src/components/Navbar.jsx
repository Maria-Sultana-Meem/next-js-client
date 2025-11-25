"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { auth } from "@/firebase.config";
import { onAuthStateChanged, signOut } from "firebase/auth";

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsub();
  }, []);

  const handleLogout = async () => {
    await signOut(auth);
  };

  return (
    <div className="bg-base-100 shadow-sm sticky top-0 z-50">
      <div className="navbar w-10/12 mx-auto">

      
        <div className="navbar-start">
         
          <div className="lg:hidden">
            <button
              onClick={() => setOpen(!open)}
              className="btn btn-ghost"
            >
              <svg xmlns="http://www.w3.org/2000/svg"
                fill="none" viewBox="0 0 24 24"
                strokeWidth="2" stroke="currentColor"
                className="w-6 h-6">
                <path strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
          </div>

         
          <Link href="/" className="text-green-500 font-bold text-xl ml-2">
            ProductHub
          </Link>
        </div>

       
        {open && (
          <ul className="absolute mt-16 bg-base-100 w-full left-0 p-4 shadow-lg flex flex-col gap-3 lg:hidden">

            <li>
              <Link
                href="/"
                className={pathname === "/" ? "text-green-500 font-bold" : ""}
                onClick={() => setOpen(false)}
              >
                Home
              </Link>
            </li>

            <li>
              <Link
                href="/products"
                className={pathname === "/products" ? "text-green-500 font-bold" : ""}
                onClick={() => setOpen(false)}
              >
                Products
              </Link>
            </li>

          
            {user && (
              <>
                <li>
                  <Link href="/add-product" onClick={() => setOpen(false)}>
                    Add Product
                  </Link>
                </li>
                <li>
                  <Link href="/manage-products" onClick={() => setOpen(false)}>
                    Manage Products
                  </Link>
                </li>
              </>
            )}

            {!user && (
              <>
                <li>
                  <Link href="/login" onClick={() => setOpen(false)}>
                    Login
                  </Link>
                </li>
                <li>
                  <Link href="/register" onClick={() => setOpen(false)}>
                    Register
                  </Link>
                </li>
              </>
            )}
          </ul>
        )}

     
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-5">
            <li>
              <Link href="/" className={pathname === "/" ? "text-green-500" : ""}>
                Home
              </Link>
            </li>
            <li>
              <Link href="/products" className={pathname === "/products" ? "text-green-500" : ""}>
                Products
              </Link>
            </li>

            {user && (
              <>
                <li><Link href="/add-product">Add Product</Link></li>
                <li><Link href="/manage-products">Manage Products</Link></li>
              </>
            )}
          </ul>
        </div>

      
        <div className="navbar-end gap-3">
          {user ? (
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost">
                <img
                  src={user.photoURL}
                  alt="User"
                  className="w-8 h-8 rounded-full"
                />
              </label>
              <ul className="dropdown-content menu p-3 shadow bg-base-100 w-52 rounded-box">
                <li className="font-semibold">{user.displayName}</li>
                <li className="text-sm">{user.email}</li>
                <li>
                  <button onClick={handleLogout} className="text-red-600">
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          ) : (
            <>
              <Link className="btn bg-green-500 text-white" href="/login">
                Login
              </Link>
              <Link className="btn bg-blue-500 text-white" href="/register">
                Register
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
