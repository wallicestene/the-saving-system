import { Close, Create, Home } from '@mui/icons-material'
import React from 'react'
import NavbarOptions from './NavbarOptions'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

const MobileNav = ({showMobileNav, setShowMobileNav}) => {
  return (
    <div className=' backdrop-blur-md bg-white/10 h-screen w-full p-4'>
        <div className='mb-3 text-gray-900'>
            <Close onClick={() => setShowMobileNav(!showMobileNav)}/>
        </div>
        <ul className='flex flex-col gap-5 px-3'>
            <li >
                <Link to="/">
                <NavbarOptions Icon={Home} title="Home"/>
                </Link>
                </li>
            <li>
                <Link to="/savingform">
                <NavbarOptions Icon={Create} title="Saving Form"/>
                </Link>
                </li>
        </ul>
    </div>
  )
}

export default MobileNav