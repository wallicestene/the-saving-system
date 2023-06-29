import React, { useEffect, useState } from 'react'
import Customers from './Customers'
import { CircularProgress } from '@mui/material'

const Home = () => {
    const [customerData, setCustomerData] = useState([])

    useEffect(() =>{
        fetch('http://localhost:5000/api/customers')
        .then(res => res.json())
        .then(data =>{
            if(data.length > 0){
                setCustomerData(data)
                console.log("Customers fetched successfully", data)
            }else{
                console.log("No customers fetched!")
            }
        })
    }, [])
  return (
    <div className='bg-gray-50 font-Montserrat'>
        <h1 className="text-center sticky top-16 bg-white mb-3 p-5 text-lg uppercase font-Poppins tracking-wide font-extrabold z-40">All Customers</h1>
        <ul className=' h-screen overflow-y-scroll px-5 scroll-smooth'>
            { customerData.length > 0 ? (
                <div className=' flex flex-col gap-4 tracking-tight '>
                    {
                        customerData.map((customer, index) =>(
                            <li key={index}>
                               <Customers  customer={customer}/> 
                            </li>
                        ))
                    }
                </div>
            ) : (
                <div className=' grid place-items-center h-screen'>
                  <div className=' grid place-items-center '>
                    <CircularProgress/>
                    <p>Loading...</p>
                    </div>
                </div>
            )
        }
        </ul>
    </div>
  )
}

export default Home