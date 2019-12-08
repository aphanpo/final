import React from 'react'
import { Route } from 'react-router-dom'
import Dashboard from './Dashboard'
import Profile from './Profile'

export default props => {
    return (
        <>
            <Route path="/" component={Dashboard} />
            <Route path="/profile" component={Profile} />
        </>
    )
}