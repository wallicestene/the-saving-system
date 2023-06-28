import React, { useState } from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import NavbarOptions from './NavbarOptions'
import { Create, Home, Menu } from '@mui/icons-material'
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
       <h1 className=" uppercase text-2xl">SafeSaver</h1>
       <div className=' lg:hidden'>
          {
         <Menu onClick={() => setShowMobileNav(!showMobileNav)}/>
      }
       </div>
    
       </div>
       <div>
        <ul className='hidden lg:flex gap-5 w-96 px-3 items-center justify-evenly'>
            <li>
                <Link to="/">
                <NavbarOptions Icon={Home} title="Home"/>
                </Link>
                </li>
            <li>
                <Link to="/savingform">
                <NavbarOptions Icon={Create} title="Add Customer"/>
                </Link>
                </li>
        </ul>
       </div>
    </nav>
  )
}

export default Navbar