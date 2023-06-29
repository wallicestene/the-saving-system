import React from 'react'

const NavbarOptions = ({Icon, title}) => {
  return (
    <div className='flex h-full items-center gap-2 hover:opacity-60' >
        <Icon/>
        <h1>{title}</h1>
    </div>
  )
}

export default NavbarOptions