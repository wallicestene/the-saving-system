import React, { useEffect, useState } from 'react'

function TotalSavings() {
    const [totalAmount, setTotalAmount] = useState([])
    useEffect(() => {
        fetch('https://saving-system.onrender.com/api/totalAmount')
        .then(response => response.json())
        .then(data => {
            setTotalAmount(data)
            console.log("Total amount:", data);
        })
        .catch(error => {
            console.error("Error fetching total amount:", error);
        });
    }, [])
  return (
    <section className='grid place-items-center h-screen text-center font-Poppins'>
    <div className=' w-96 h-52 rounded-xl shadow-xl  bg-slate-800 text-white flex flex-col items-center justify-center'>
        <div className=" border-b-2 mb-2 font-bold">
            <h1 >The Total Savings Accross all Customers</h1>
        </div>
        <div className='mt-2 font-Poppins'>
            <p>The current savings is <strong>ksh {totalAmount}</strong></p>
        </div>
    </div>
    </section>
  )
}

export default TotalSavings