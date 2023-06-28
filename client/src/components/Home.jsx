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
    <div>
        <h1 className="text-center">Customers</h1>
        <div>
            { customerData.length > 0 ? (
                <div className=' flex flex-col bg-slate-200 gap-2 '>
                    {
                        customerData.map((customer, index) =>(
                            <Customers key={index} customer={customer}/>
                        ))
                    }
                </div>
            ) : (
                <div>Loading...</div>
            )
        }
        </div>
    </div>
  )
}

export default Home