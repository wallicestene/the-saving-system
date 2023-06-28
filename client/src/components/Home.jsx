import React, { useEffect, useState } from 'react'
import Customers from './Customers'

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
    <div className=' mt-20'>
        <h1 className="text-center mb-3">Customers</h1>
        <ul className=' bg-blue-100 h-screen overflow-y-scroll p-5'>
            { customerData.length > 0 ? (
                <div className=' flex flex-col gap-2 '>
                    {
                        customerData.map((customer, index) =>(
                            <li key={index}>
                               <Customers  customer={customer}/> 
                            </li>
                        ))
                    }
                </div>
            ) : (
                <div>Loading...</div>
            )
        }
        </ul>
    </div>
  )
}

export default Home