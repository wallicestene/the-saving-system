import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom/cjs/react-router-dom.min'

const CustomerDetails = () => {

    const [amount, setAmount] = useState("")

    const [customerData,setCustomerData ] = useState([])

   const handleSubmit = (e) =>{
    e.preventDefault()
    const id = customerData._id

    const updatedAmount = Number(customerData.amount) + Number(amount); // Calculating the updated amount

    const savingAmount = { amount: updatedAmount };

        fetch(`http://localhost:5000/api/customers/${id}`,{
            method: "PATCH",
            body: JSON.stringify(savingAmount),
            headers:{
                "Content-Type": "application/json"
            }
        })
        .then(res => res.json())
        .catch(err => alert(err.message))
   }
    const { id } = useParams()
    useEffect(() =>{
        fetch(`http://localhost:5000/api/customers/${id}`)
        .then(res => res.json())
        .then(data =>{
                setCustomerData(data)
                console.log("Customers fetched successfully", data)
    })
    .catch(err => console.log(err.message))
    },[])
  return (
    <section className='mt-20 h-screen grid place-items-center'>
    <div className=' p-5 bg-slate-400 w-96 flex flex-col items-center'>
        <h1 className='text-lg font-bold mb-1 border-b-2'>Customer'details</h1>
        <div className='flex flex-col gap-2'>
          <h1 className='uppercase'>Name: <span className=''>{customerData.name}</span></h1> 
           <p className='uppercase'>ID:  <span className=''>{customerData.customerID}</span></p>
           <p className='uppercase'>Amount:  <span className=' lowercase first-letter:uppercase'>Ksh {customerData.amount}</span></p>
        </div>
        {/* <p>{customerData.createdAt}</p> */}
        <form onSubmit={handleSubmit}
         className=' w-96'>
       <div className=' flex flex-col gap-4 text-center'>
       <label htmlFor="amount" className='block m-2'>
               <h1 className=' text-lg font-bold'>Deposit amount to Save</h1>
            <input type="number"
            min="0"
            name='amount'
            required
            placeholder="Enter amount "
            onChange={(e) => setAmount(e.target.value) }
             id='amount'  
             value={amount}
             className='placeholder:text-gray-500 mt-2 bg-slate-300 p-2 rounded-md bg-none w-full'
              /></label>
              <div className=' grid place-items-center'>
              <button className=' bg-gradient-to-r from-red-500 to-red-700 px-6 text-white tracking-wide py-2 rounded-xl uppercase'>Deposit</button>
              </div>
       </div>
        </form>
        </div>
        </section>
  )
}

export default CustomerDetails