import React, { useEffect, useState } from 'react'

function TotalSavings() {
    const [totalAmount, setTotalAmount] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/api/totalAmount')
        .then(response => response.json())
        .then(data => {
            const totalAmount = totalAmount;
            // Do something with the totalAmount value in your frontend
            console.log("Total amount:", totalAmount);
        })
        .catch(error => {
            console.error("Error fetching total amount:", error);
            // Handle the error in your frontend
        });
    }, [])
  return (
    <div>TotalSavings</div>
  )
}

export default TotalSavings