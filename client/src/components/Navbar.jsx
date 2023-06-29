import React, { useState } from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import NavbarOptions from './NavbarOptions'
import {Home, Menu, PersonAddAlt1, Savings } from '@mui/icons-material'
import MobileNav from './MobileNav'

const Navbar = () => {
    const [showMobileNav, setShowMobileNav] = useState(false)

  return (
    <nav className=' flex items-center justify-between bg-white shadow-md px-2 lg:p-4 lg:h-fit h-16 relative font-Poppins'>
            <div className=' fixed lg:hidden z-40 right-0 top-0'>
               {
                showMobileNav && <MobileNav showMobileNav={showMobileNav} setShowMobileNav={setShowMobileNav}/>  
               }
            </div>
       <div className=' flex items-center justify-between w-full'>
       <h1 className=" uppercase text-2xl font-bold">SafeSaver</h1>
       <div className=' lg:hidden'>
          {
            <div className=' cursor-pointer'>
              <Menu onClick={() => setShowMobileNav(!showMobileNav)} fontSize='large'/>
            </div>
         
      }
       </div>
    
       </div>
       <div>
        <ul className='hidden  lg:flex w-500 px-3 items-center justify-between font-bold'>
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
        </ul>
       </div>
    </nav>
  )
}

export default Navbar