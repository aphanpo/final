import React from 'react'
import { Link } from 'react-router-dom'
import Icon from '../lib/Icon'
import { useShelts } from '../hooks'

export default props => {
    const { shelters } = useShelts()

    return (
        <div>
            <div>
                <div className="HomeButton">
                    <Link to="/"><Icon icon="home"> Home </Icon></Link>
                </div>
                <h1> List of Available Shelters </h1>
            </div>
            
            {shelters.map(shelter => (
                <>
                    <h2>{shelter.name}</h2>
                    <p>Address: {shelter.address}</p>
                    <p>Beds Available: {shelter.open_beds} out of {shelter.total_beds} </p>
                    <p>Meals Available: {shelter.meal_option}</p>
                </>
            ))}
        </div>
    )
}
