import React from 'react'
import  { HashRouter as Router, Route, Switch } from 'react-router-dom/cjs/react-router-dom.min'
import Home from './components/Home'
import Navbar from './components/Navbar'
import SavingsForm from './components/SavingsForm'

const App = () => {
  return (
    <div className='mx-3'>
      <Router>
        <Navbar/>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/savingform" component={SavingsForm}/>
        </Switch>
      </Router>
    </div>
  )
}

export default App