import React, { useState } from 'react'

const SavingsForm = () => {
    const [name, setName] = useState("")
    const [customerID, setCustomerID] = useState("")
    const [amount, setAmount] = useState("")

    const handleSubmit = (e) =>{
        e.preventDefault()

        const customer = {name, customerID, amount}

        fetch("https://saving-system.onrender.com/api/customers", {
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
    <div className='grid place-items-center font-Montserrat'>
        <form onSubmit={handleSubmit}
        className=' w-96 h-screen grid place-items-center border'>
        
            <div className=' w-full p-2 flex flex-col gap-2'>
                <div className='text-center p-3 font-Poppins uppercase tracking-wider'>
                    <h1><strong>Customer Details</strong></h1>
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
             className=' placeholder:text-gray-500 bg-slate-300 p-2 rounded-md bg-none w-full'
              />
            <label htmlFor="ID" className='block'>
            Customer's ID 
            </label>

            <input type="number"
            name='customerID'
            required
            min="0"
            value={customerID}
            placeholder="Enter Customer's ID"
            onChange={(e) => setCustomerID(e.target.value) }
             id='ID' 
              className=' placeholder:text-gray-500 bg-slate-300 p-2 rounded-md bg-none w-full' 
              />
            <label htmlFor="amount" className='block'>
            Customer's Saving Amount
            </label>

            <input type="number"
            name='amount'
            min="0"
            value={amount}
            onChange={(e) => setAmount(e.target.value) }
             placeholder=' Enter Saving amount'
             id='amount' 
              className=' placeholder:text-gray-500 bg-slate-300 p-2 rounded-md bg-none w-full' />
              <div className='grid place-items-center'>
              <button className=' bg-gradient-to-t from-red-500 to-red-700 px-6 text-white tracking-wide py-2 rounded-xl transition ease-in-out delay-75 hover:scale-110 duration-200'>SUBMIT</button>
              </div>
              </div>
        </form>
    </div>
  )
}

export default SavingsForm