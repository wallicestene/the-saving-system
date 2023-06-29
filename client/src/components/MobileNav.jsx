import { Close, Create, Home, PersonAddAlt1, Savings } from '@mui/icons-material'
import React from 'react'
import NavbarOptions from './NavbarOptions'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

const MobileNav = ({showMobileNav, setShowMobileNav}) => {
  return (
    <div className=' backdrop-blur-md bg-white/10 h-screen w-full p-4'>
        <div className='mb-3 text-gray-900 cursor-pointer'>
            <Close onClick={() => setShowMobileNav(!showMobileNav)} fontSize='large'/>
        </div>
        <ul className='flex flex-col gap-10 px-3 font-bold'>
            <li >
                <Link to="/" onClick={() => setShowMobileNav(!showMobileNav)}>
                <NavbarOptions Icon={Home} title="Home"/>
                </Link>
              </li>
              <li>
                <Link to="/totalAmount" onClick={() => setShowMobileNav(!showMobileNav)}>
                <NavbarOptions Icon={Savings} title="Total Savings"/>
                </Link>
            </li>
            <li>
                <Link to="/savingform" onClick={() => setShowMobileNav(!showMobileNav)}>
                <NavbarOptions Icon={PersonAddAlt1} title="Add Customer"/>
                </Link>
            </li>
        </ul>
    </div>
  )
}

export default MobileNav