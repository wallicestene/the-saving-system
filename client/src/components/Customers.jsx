import React from 'react'

const Customers = ({customer}) => {
  return (
    <div className='customers'>
        <div className='flex gap-5 items-center justify-around p-5 border-2 border-black'>
          <h1>Name: {customer.name}</h1> 
           <p>ID: {customer.customerID}</p>
           <p>Amount: {customer.amount}</p>
        </div>
    </div>
  )
}

export default Customers