import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom/cjs/react-router-dom.min'

const Customers = ({customer}) => {
    console.log(customer._id)
  return (
    <div className='customers flex flex-col gap-1  text-sm lg:text-base  bg-white rounded-md shadow-lg'>

        <Link to={`/customer/${customer._id}`}>
        <div className='flex p-2 gap-5 items-center justify-around'>
          <h1 className='uppercase'>Name: <span className='block'>{customer.name}</span></h1> 
           <p className='uppercase'>ID:  <span className='block'>{customer.customerID}</span></p>
           <p className='uppercase'>Amount:  <span className='block'>{customer.amount}</span></p>
        </div>
        </Link> 
        <div className='flex justify-between flex-row-reverse'>
           <div className='px-2 text-xs text-gray-500'>Created on: {new Date(customer.createdAt).toLocaleString()}</div>
            <div className='px-2 text-xs text-gray-500'>Last Deposit: {new Date(customer.updatedAt).toLocaleString()}</div>  
        </div>
    </div>
  )
}

export default Customers