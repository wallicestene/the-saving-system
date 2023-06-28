import React, { useState } from 'react'

const SavingsForm = () => {
    const [name, setName] = useState("")
    const [customerID, setCustomerID] = useState("")
    const [amount, setAmount] = useState("")

    const handleSubmit = (e) =>{
        e.preventDefault()

        const customer = {name, customerID, amount}

        fetch("http://localhost:5000/api/customers", {
            method: "POST",
            body: JSON.stringify(customer),
            headers:{
                "Content-Type": "application/json"
            }
        })
        .then(res => res.json())
        .catch(err => alert(err.message))

        setName("")
        setCustomerID("")
        setAmount("")
    }
  return (
    <div className='grid place-items-center'>
        <form onSubmit={handleSubmit}
        className=' w-96 h-screen grid place-items-center'>
        
            <div className=' w-full p-2'>
                <div className='text-center p-3'>
                    <h1>Customer Details</h1>
                </div>
            <label htmlFor="name" className='block'>
                Customer's Name 
            </label>

            <input type="text"
            name='name'
            required
            placeholder="Enter Customer's Name "
            onChange={(e) => setName(e.target.value) }
             id='name'  
             value={name}
             className='bg-blue-300 p-2 rounded-md bg-none w-full'
              />
            <label htmlFor="ID" className='block'>
            Customer's ID 
            </label>

            <input type="number"
            name='customerID'
            required
            value={customerID}
            placeholder="Enter Customer's ID"
            onChange={(e) => setCustomerID(e.target.value) }
             id='ID' 
              className='bg-blue-300 p-2 rounded-md bg-none w-full' 
              />
            <label htmlFor="amount" className='block'>
            Customer's Saving Amount
            </label>

            <input type="number"
            name='amount'
            required
            value={amount}
            onChange={(e) => setAmount(e.target.value) }
             placeholder=' Enter Saving amount'
             id='amount' 
              className='bg-blue-300 p-2 rounded-md bg-none w-full' />
              <button>SUBMIT</button>
              </div>
        </form>
    </div>
  )
}

export default SavingsForm