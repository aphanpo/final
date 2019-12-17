import React from "react"
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './Home'
import ShelterList from './ShelterList'
import CheckLogin from './CheckLogin'
import Login from './Login'
import Register from './Register'
import Profile from './Profile'
import Reservation from './Reservation'
import Submission from './Submission'

function App() {

  return (

    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/CheckLogin" component={CheckLogin} />
          <Route exact path="/ShelterList" component={ShelterList} />
          <Route exact path="/Reservation/:shelter/:id" component={Reservation} />
          <Route exact path="/Submission" component={Submission} />
          <Route exact path="/Register" component={Register} />
          <Route exact path="/Profile" component={Profile} />
        </Switch>
      </Router>
    </div>

  )
}

export default App
