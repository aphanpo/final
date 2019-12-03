import React from 'react'
import { useAuth } from "../hooks"
import { Link } from 'react-router-dom'
import Icon from '../lib/Icon'


export default props => {
    const { name, address, signout, total_beds } = useAuth()
    return (
        <div>
            <Link to="/"><Icon icon="home"> Home </Icon></Link>
            <h1>Welcome {name}!</h1>
            <p>Your address is {address}</p>
            <p>You have {total_beds}!</p>
            <button onClick={e => signout()}><Link to="/">Sign Out</Link></button>
        </div>
    )
}