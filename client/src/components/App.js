import React from "react"
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './Home'
import ShelterList from './ShelterList'
import CheckLogin from './CheckLogin'
import Login from './Login'
import Register from './Register'
import AboutMe from './AboutMe'

function App() {

  return (

    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/CheckLogin" component={CheckLogin} />
          <Route exact path="/ShelterList" component={ShelterList} />
          <Route exact path="/Register" component={Register} />
          <Route exact path="/AboutMe" component={AboutMe} />
        </Switch>
      </Router>
    </div>

  )
}

export default App
