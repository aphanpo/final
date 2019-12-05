import React from 'react'
import { Link } from 'react-router-dom'
import Icon from '../lib/Icon'
import { useShelts } from '../hooks'

export default props => {
    const { shelters } = useShelts()

    return (
        <div className="shelterPage">
            <div className="shelterHeader">
                <div className="HomeButton">
                    <Link to="/"><Icon icon="home"> Home </Icon></Link>
                </div>
                <p className="acct1"> List of Available Shelters </p>
            </div>
            
            {shelters.map(shelter => (
                <div className="shelterList">
                    <h3>{shelter.name}</h3>
                    <p>Location: {shelter.address}</p>
                    <p>Beds Available: {shelter.open_beds} out of {shelter.total_beds} </p>
                    <p className="last">Meals Available: {shelter.meal_option} <button><Link to="/Reservation/id"> Reserve a bed</Link></button></p>
                    
                </div>
            ))}
        </div>
    )
}
