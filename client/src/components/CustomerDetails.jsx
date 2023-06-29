import { Delete, KeyboardArrowLeft, KeyboardBackspace } from '@mui/icons-material'
import React, { useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router-dom/cjs/react-router-dom.min'

const CustomerDetails = () => {

    const [amount, setAmount] = useState("")

    const [showDelete, setShowDelete] = useState(false)

    const [customerData,setCustomerData ] = useState([])

    const history = useHistory()

   const handleSubmit = (e) =>{
    e.preventDefault()
    const id = customerData._id

    // Calculating the updated amount
    const updatedAmount = Number(customerData.amount) + Number(amount); 

    const savingAmount = { amount: updatedAmount };

        fetch(`https://saving-system.onrender.com/api/customers/${id}`,{
            method: "PATCH",
            body: JSON.stringify(savingAmount),
            headers:{
                "Content-Type": "application/json"
            }
        })
        .then(res => res.json())
        .catch(err => alert(err.message))
        setAmount("")
        history.go(-1)
   }
    const { id } = useParams()

    useEffect(() =>{
        fetch(`https://saving-system.onrender.com/api/customers/${id}`)
        .then(res => res.json())
        .then(data =>{
                setCustomerData(data)
                console.log("Customers fetched successfully", data)
    })
    .catch(err => console.log(err.message))
    },[])

// deleting the customer

    const handleclick = () =>{
        fetch(`https://saving-system.onrender.com/api/customers/${customerData._id}`,{
            method: "DELETE",
        })
        .then((res) => res.json())
        .catch(err =>{
            console.log(err.message)
        })
    }

  return (
    <section className=' h-screen grid place-items-center'>
    <div className=' p-5 bg-gray-200 w-96 flex flex-col  rounded relative shadow-l'>
        <div className='h-10 w-10 grid place-items-center cursor-pointer ' onClick={() => history.go(-1)}>
            <KeyboardBackspace fontSize='large'/>
        </div>
        <h1 className='text-lg font-bold mb-1 border-b-2 border-slate-900'>Customer's Details</h1>
        <div className='flex flex-col gap-2'>
          <h1 className='uppercase'> <strong>Name: </strong><span className=''>{customerData.name}</span></h1> 
           <p className='uppercase'><strong>ID:  </strong><span className=''>{customerData.customerID}</span></p>
           <p className='uppercase'><strong>Amount:  </strong><span className='uppercase'>Ksh {customerData.amount ? customerData.amount.toLocaleString() : ""}</span></p>
        </div>
        <p  className='px-2 text-xs text-gray-500'>Created on: {new Date(customerData.createdAt).toLocaleString()}</p>
        <p  className='px-2 text-xs text-gray-500'>Last Deposit: {new Date(customerData.updatedAt).toLocaleString()}</p>
        <form onSubmit={handleSubmit}
         className=' w-full'>
       <div className=' flex flex-col gap-4 text-center'>
       <label htmlFor="amount" className='block m-2'>
               <h1 className=' text-lg font-bold'>Deposit amount to <span className=' uppercase'>{customerData.name}</span></h1>
            <input type="number"
            min="0"
            name='amount'
            required
            placeholder="Enter deposit amount "
            onChange={(e) => setAmount(e.target.value) }
             id='amount'  
             value={amount}
             className='placeholder:text-gray-500 mt-2 bg-slate-300 p-2 rounded-md bg-none w-full'
              /></label>
              <div className=' grid place-items-center'>
              <button className=' bg-gradient-to-r from-red-500 to-red-700 px-6 text-white tracking-wide py-2 rounded-xl uppercase transition ease-in-out delay-75  hover:scale-110 duration-200'>Deposit</button>
              </div>
       </div>
        </form>
        <div className='bg-gray-100 rounded absolute bottom-0 right-1 z-40 cursor-pointer'>
            <div className='flex justify-end text-xs' onClick={() => setShowDelete(!showDelete)}>
               <Delete fontSize='small'/>
                <div>
                <h1>Delete Customer</h1>
                </div>
            </div>
            
            
        </div>
         {
            showDelete && 
            <div className=' absolute left-0 bg-opacity-90 text-white z-40 top-0 rounded right-0 grid place-items-center bg-gray-900 p-5 text-center'>
            <p>
                Are you sure you want to delete <strong>{customerData.name}</strong> from your customer list?
            </p>
            <button className='p-5 left-0'>
                 <div className=' flex gap-3 items-center '>
                 <div className=' flex items-center justify-center bg-red-600 text-white h-10 w-20 rounded-full' onClick={() => {
                handleclick()
                history.go(-1)
                }}>
                 <h1>Yes</h1>
                 </div>
                 <div  className=' flex items-center justify-center h-10 w-20 bg-green-700  rounded-full text-white' onClick={() => setShowDelete(!showDelete)}>
                 <h1>No</h1>
                 </div>
                 </div>
            </button>
            </div>
         }
        </div>
        
        </section>
  )
}

export default CustomerDetails