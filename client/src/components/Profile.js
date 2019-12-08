import React from 'react'
import { useAuth } from "../hooks"
import { Link } from 'react-router-dom'
import Icon from '../lib/Icon'
import { useShelts } from '../hooks'


export default props => {
    const { name, signout, address, total_beds} = useAuth()
    const {shelters} = useShelts()

    // let currentShelter = {};
    // if (shelters) {
    //     currentShelter = shelters.find(shelter => shelter.id === id) || {};
    // }

    return (
        <div className="login">
            <div className="loginHeader">
                <div className="HomeButton">
                    <Link to="/"><Icon icon="home"> Home </Icon></Link>
                </div>
                <button className="LogOut" onClick={e => signout()}><Link to="/" className="LogOut">Sign Out</Link></button>
            </div>
            
            
            <h1>Welcome {name}!</h1>
            {shelters.map(s => (
                <>
                <p>Location: {s.address}</p>
                <p>You have {s.total_beds} beds total!</p>
                </>
            ))}
            {/* <p>Your address is {address}</p>
            <p>You have {total_beds} beds total!</p> */}
            
            
        </div>
    )
}

