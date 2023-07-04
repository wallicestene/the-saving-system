import React, { useEffect, useState } from 'react'
import Customers from './Customers'
import { CircularProgress } from '@mui/material'
import { Search } from '@mui/icons-material'
import { toast } from 'react-hot-toast'
const Home = () => {

    const [customerData, setCustomerData] = useState([])
    const [originalCustomerData, setOriginalCustomerData] = useState([]);

    const [search, setSearch] = useState("")
    console.log(search)
    useEffect(() =>{
        fetch('https://saving-system.onrender.com/api/customers')
        .then(res => res.json())
        .then(data =>{
            if(data.length > 0){
                setCustomerData(data)
                setOriginalCustomerData(data)
                console.log("Customers fetched successfully", data)
            }else{
                console.log("No customers fetched!")
            }
        })
    }, [])

    //handling the search input
    const handleInput = (e) => {
        e.preventDefault()

        const searchTerms = search.toLowerCase().split(" ");

        let searchedData = customerData.filter(customer => {
            const customerName = customer.name.toLowerCase() || customer.customerID
            return searchTerms.every(term => customerName.includes(term));
        });

        if (searchedData.length === 0) {
            fetch('https://saving-system.onrender.com/api/customers')
            .then(res => res.json())
            .then(data =>{
            if(data.length > 0){
                setCustomerData(data)
                console.log("Customers fetched successfully", data)
            }else{
                console.log("No customers fetched!")
            }
            
        })
        console.log("No customer with that name.");
            toast.error("No customer with that name.")
          }

        if(search === ""){
            setCustomerData(originalCustomerData)
            
        }
        else{
            setCustomerData(searchedData)
        }
        
    }
  return (
    <div className=' font-Montserrat'>
        <div className="text-center sticky top-16 bg-white mb-3 p-5  z-20">
        <h1 className='text-lg uppercase font-Poppins tracking-wide font-extrabold'>All Customers</h1>
        <div className=' flex justify-center'>
        <form onSubmit={handleInput} className='px-5 flex items-center justify-center bg-gray-50 border-t shadow-xl lg:w-500 w-96 rounded-xl mt-1'>
            <div>
                <Search/>
            </div>
            <input type="text" 
            className='placeholder:text-sm bg-transparent py-2 outline-none w-full indent-3'
            value={search}
            placeholder='Search customer by name'
            onChange={(e) => setSearch(e.target.value)}
            />
        </form>
        </div>
        </div>
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