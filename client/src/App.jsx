import React, { useEffect } from 'react'
import  { HashRouter as Router, Route, Switch } from 'react-router-dom/cjs/react-router-dom.min'
import Home from './components/Home'
import Navbar from './components/Navbar'
import SavingsForm from './components/SavingsForm'
import CustomerDetails from './components/CustomerDetails'
import TotalSavings from './components/TotalSavings'
import { Toaster } from 'react-hot-toast'
import Login from './components/Login'
import signUp from './components/signUp'
import { useAuthContext } from './context/authContext'

const App = () => {
  const [{ user }, dispatch] = useAuthContext();
  useEffect(() => {
  // setting onAuthState
    const user = JSON.parse(localStorage.getItem("user"))
    if(user){
      dispatch({
        type:"LOGIN",
        user: user
      })
    }
  }, [])
  return (
    <div className='relative'>
      <Router>
        <div className=' sticky w-full  lg:p-0 top-0 z-40'>
           <Navbar/>
        </div>
       {
        user ? (
          <div>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/customer/:id" component={CustomerDetails}/>
          <Route path="/savingform" component={SavingsForm}/>
          <Route path="/totalAmount" component={TotalSavings}/>
          <Route path='/login' component={Login} />
          <Route path='/signup' component={signUp} />
        </Switch>
        </div>
        ) : (
          <Login/>
        )
       }
      </Router>
      <Toaster/>
    </div>
  )
}

export default App