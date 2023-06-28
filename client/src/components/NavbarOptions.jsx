import React from 'react'

const NavbarOptions = ({Icon, title}) => {
  return (
    <div className=' flex items-center gap-2' >
        <Icon/>
        <h1>{title}</h1>
    </div>
  )
}

export default NavbarOptions