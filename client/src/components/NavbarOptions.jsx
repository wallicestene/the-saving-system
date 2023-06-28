import React from 'react'

const NavbarOptions = ({Icon, title}) => {
  return (
    <div className=''>
        <Icon/>
        <h1>{title}</h1>
    </div>
  )
}

export default NavbarOptions