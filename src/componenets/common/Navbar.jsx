import React from 'react';
import logo from '../../assets/Logo/Logo-Full-Light.png';
import { Link, matchPath, useLocation } from "react-router-dom";
import { NavbarLinks } from '../../data/navbar-links';
import { useSelector } from 'react-redux';

import ProfileDropDown from '../core/Auth/ProfileDropDown';

import { AiOutlineMenu, AiOutlineShoppingCart } from "react-icons/ai"
import { categories } from '../../services/apis';
import { apiConnector } from '../../services/apiconnector';
import { useEffect, useState } from 'react';
import {IoIosArrowDropdownCircle} from "react-icons/io";



const SubLinks = [
  {
    title: "python",
    links: "/catalog/python"
  },
  {
    title: "web dev",
    links: "/catalog/web-development"
  },
]
const Navbar = () => {
    
  // used selector hook
  const {token} = useSelector((state) => state.auth);
 const {user} = useSelector((state) => state.auth);
 const {totalItems} = useSelector((state) => state.cart);
  const location = useLocation();


/*
  const [subLinks, setSubLinks] = useState([]);

  const fetchSublinks = async () => {
    
  
      try {
        const result = await apiConnector("GET", categories.CATEGORIES_API)
        console.log("Printing sublinks result:", result);

        setSubLinks(result.data.data)
      } catch (error) {
        console.log("Could not fetch Categories.", error)
      }
    
   
  }


  useEffect(() => {
    fetchSublinks();
  
  }, [])

  */




  const matchRoute = (route) => {
    return matchPath({ path: route }, location.pathname)
  }
 

  return (
    <div className='flex h-14 items-center justify-center border-b-[1px] border-b-richblack-700'>
      <div className=' flex w-11/12 max-w-maxContent items-center justify-between'>
        {/* Logo */}
        <Link to="/">
          <img src={logo} width={160} height={42} loading='lazy' alt='logo' />
        </Link>

        {/* Nav Links */}
        <nav>
          <ul className='flex gap-x-6 text-richblack-25'>
          {
            NavbarLinks.map( (link, index) => (
              <li key={index}>
              {
                link.title === "Catalog" ? (
                  <div>
                    <p>{link.title}</p>
                    <IoIosArrowDropdownCircle/>
                    </div>
                ): (
                  <Link>

                  </Link>
                )
              }
              </li>
            ))
                  
          }
          </ul>
        </nav>

         {/* Login / Signup / Dashboard */}
        <div className="hidden items-center gap-x-4 md:flex">
          {
            user && user?.accountType !== "Instructor" && (
            <Link to="/dashboard/cart" className="relative">
              <AiOutlineShoppingCart className="text-2xl text-richblack-100" />
              {totalItems > 0 && (
                <span className="absolute -bottom-2 -right-2 grid h-5 w-5 place-items-center overflow-hidden rounded-full bg-richblack-600 text-center text-xs font-bold text-yellow-100">
                  {totalItems}
                </span>
              )}
            
            
            </Link>
          )}
          {token === null && (
            <Link to="/login">
              <button className="rounded-[8px] border border-richblack-700 bg-richblack-800 px-[12px] py-[8px] text-richblack-100">
                Log in
              </button>
            </Link>
          )}
          {token === null && (
            <Link to="/signup">
              <button className="rounded-[8px] border border-richblack-700 bg-richblack-800 px-[12px] py-[8px] text-richblack-100">
                Sign up
              </button>
            </Link>
          )}
          {token !== null && <ProfileDropDown />}
        </div>
        <button className="mr-4 md:hidden">
          <AiOutlineMenu fontSize={24} fill="#AFB2BF" />
        </button>

         

           </div>

        </div>

  );
};
export default Navbar;


//56.02


