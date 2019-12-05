import React from 'react'
import { useAuth } from "../hooks"
import { Link } from 'react-router-dom'
import Icon from '../lib/Icon'
import { useShelts } from '../hooks'


export default props => {
    const { id, signout} = useAuth()
    const { shelters } = useShelts()

    let currentShelter = {};
    if (shelters) {
        currentShelter = shelters.find(shelter => shelter.id === id) || {};
    }

    return (
        <div>
            <div className="HomeButton">
                <Link to="/"><Icon icon="home"> Home </Icon></Link>
            </div>

            <h1>Welcome {currentShelter.name}!</h1>
            <p>Your address is {currentShelter.address}</p>
            <p>You have {currentShelter.total_beds} beds total!</p>
            
            <button onClick={e => signout()}><Link to="/">Sign Out</Link></button>
        </div>
    )
}

