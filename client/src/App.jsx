import React from 'react'
import  { HashRouter as Router, Route, Switch } from 'react-router-dom/cjs/react-router-dom.min'
import Home from './components/Home'
import Navbar from './components/Navbar'
import SavingsForm from './components/SavingsForm'

const App = () => {
  return (
    <div className='relative'>
      <Router>
        <div className=' fixed w-full  lg:p-0 top-0 z-40'>
           <Navbar/>
        </div>
       
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/savingform" component={SavingsForm}/>
        </Switch>
      </Router>
    </div>
  )
}

export default App