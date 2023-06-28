import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import NavbarOptions from './NavbarOptions'
import { Create, Home } from '@mui/icons-material'

const Navbar = () => {
  return (
    <nav className=' flex items-center justify-between bg-slate-400 px-2 h-16'>
       <div>
       <h1 className=" uppercase text-2xl">SafeSaver</h1>
       </div>
       <div>
        <ul className='flex gap-5  px-3'>
            <li>
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
    </nav>
  )
}

export default Navbar