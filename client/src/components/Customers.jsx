import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom/cjs/react-router-dom.min'

const Customers = ({customer}) => {
    console.log(customer._id)
  return (
    <div className='customers flex flex-col gap-1  text-sm lg:text-base  bg-white rounded-md shadow-lg hover:bg-gradient-to-b from-gray-700 from-20% to-slate-400 hover:text-white transition ease-in-out delay-100 hover:scale-95 duration-100'>

        <Link to={`/customer/${customer._id}`}>
        <div className='flex p-2 gap-5 items-center justify-around'>
          <h1 className='uppercase text-sm lg:text-base'><strong >Name: </strong><span className='block text-sm lg:text-base'>{customer.name}</span></h1> 
           <p className='uppercase text-sm lg:text-base'><strong>ID: </strong><span className='block text-sm lg:text-base'>{customer.customerID}</span></p>
           <p className='uppercase text-sm lg:text-base'><strong>Saved Amount: </strong><span className='block' >Ksh {customer.amount.toLocaleString()}</span></p>
        </div>
        </Link> 
        <div className='flex justify-between flex-row-reverse'>
           <div className='px-2 text-xs text-gray-500  hover:text-white'>Created on: {new Date(customer.createdAt).toLocaleString()}</div>
            <div className='px-2 text-xs text-gray-500 hover:text-white'>Last Deposit: {new Date(customer.updatedAt).toLocaleString()}</div>  
        </div>
    </div>
  )
}

export default Customers