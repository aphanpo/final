import React from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from "../hooks"
// import { useHouse } from "../hooks"
import Icon from '../lib/Icon'

export default props => {
    const { name, address, total_beds } = useAuth()
    // const { shelters } = new Array(10).fill(null)

    return (
        <>
            {/* {shelters.map((shelter) => (
                
                    <Link to={"./ShelterList" + shelter.id}>
                        <p>{shelter.name}</p>
                    </Link>
        
            ))}
     */}

        <div>
            <Link to="/"><Icon icon="home"> Home </Icon></Link>
            <h1> List of Available Shelters </h1>

            <p>Shelter Name: {name}</p>
            <p>Address: {address}</p>
            <p>Total Beds: {total_beds}</p>
       
        </div>

        </>
    )
}
