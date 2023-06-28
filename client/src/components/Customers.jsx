import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

const Customers = ({customer}) => {
  return (
    <div className='customers p-5 text-sm lg:text-base  bg-white rounded-md shadow-lg'>
        <Link >
        <div className='flex gap-5 items-center justify-around'>
          <h1 className='uppercase'>Name: <span className='block'>{customer.name}</span></h1> 
           <p className='uppercase'>ID:  <span className='block'>{customer.customerID}</span></p>
           <p className='uppercase'>Amount:  <span className='block'>{customer.amount}</span></p>
        </div>
        </Link>
    </div>
  )
}

export default Customers