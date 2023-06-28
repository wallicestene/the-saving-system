import { KeyboardArrowLeft, KeyboardBackspace } from '@mui/icons-material'
import React, { useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router-dom/cjs/react-router-dom.min'

const CustomerDetails = () => {

    const [amount, setAmount] = useState("")

    const [customerData,setCustomerData ] = useState([])

    const history = useHistory()

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
    <div className=' p-5 bg-gray-200 w-96 flex flex-col  rounded'>
        <div className='h-10 w-10 grid place-items-center cursor-pointer ' onClick={() => history.go(-1)}>
            <KeyboardBackspace fontSize='large'/>
        </div>
        <h1 className='text-lg font-bold mb-1 border-b-2 border-slate-900'>Customer's Details</h1>
        <div className='flex flex-col gap-2'>
          <h1 className='uppercase'> <strong>Name: </strong><span className=''>{customerData.name}</span></h1> 
           <p className='uppercase'><strong>ID:  </strong><span className=''>{customerData.customerID}</span></p>
           <p className='uppercase'><strong>Amount:  </strong><span className=' lowercase first-letter:uppercase'>Ksh {customerData.amount}</span></p>
        </div>
        <p  className='px-2 text-sm text-gray-500'>Created on: {new Date(customerData.createdAt).toLocaleString()}</p>
        <p  className='px-2 text-sm text-gray-500'>Last Deposit: {new Date(customerData.updatedAt).toLocaleString()}</p>
        <form onSubmit={handleSubmit}
         className=' w-full'>
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