import React, { useState } from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import NavbarOptions from './NavbarOptions'
import {Create, Home, Login, Menu, PersonAddAlt1, Savings } from '@mui/icons-material'
import MobileNav from './MobileNav'
import { useAuthContext } from '../context/authContext'

const Navbar = () => {
    const [showMobileNav, setShowMobileNav] = useState(false)
    const [{ user }, dispatch] = useAuthContext();


    const handleLogOut = () =>{
      // remove user from storage
      localStorage.removeItem('user');
      dispatch({
        type:'LOGOUT',
        user: null
      })
    }
  return (
    <nav className='border-b-2 py-5  overflow-hidden flex items-center justify-between m-0 bg-white shadow-md px-2 lg:px-4 lg:h-fit h-16 relative font-Poppins'>
            <div className=' fixed lg:hidden z-40 right-0 top-0'>
               {
                showMobileNav && <MobileNav showMobileNav={showMobileNav} setShowMobileNav={setShowMobileNav}/>  
               }
            </div>
       <div className=' flex items-center justify-between w-full'>
       <h1 className=" uppercase text-2xl font-bold">SafeSaver</h1>
       <div onClick={handleLogOut} className=' cursor-pointer'>LogOut</div>
       <div className=' lg:hidden'>
          {
            <div className=' cursor-pointer'>
              <Menu onClick={() => setShowMobileNav(!showMobileNav)} fontSize='large'/>
            </div>
         
      }
       </div>
    
       </div>
       <div>
        <ul className='hidden  lg:flex w-600 px-3 items-center justify-between font-bold overflow-hidden'>
            <li>
                <Link to="/">
                <NavbarOptions Icon={Home} title="Home"/>
                </Link>
            </li>
            <li>
                <Link to="/totalAmount">
                <NavbarOptions Icon={Savings} title="Total Savings"/>
                </Link>
            </li>
            <li>
                <Link to="/savingform">
                <NavbarOptions Icon={PersonAddAlt1} title="Add Customer"/>
                </Link>
            </li>
            <li>
                <Link to="/login">
                <NavbarOptions Icon={Login} title="Log in"/>
                </Link>
            </li>
            <li>
                <Link to="/signup">
                <NavbarOptions Icon={Create} title="Sign up"/>
                </Link>
            </li>
        </ul>
       </div>
    </nav>
  )
}

export default Navbar