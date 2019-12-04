import React from 'react'
import { useAuth } from "../hooks"
import { Link } from 'react-router-dom'
import Icon from '../lib/Icon'
import { useShelts } from '../hooks'


export default props => {
    const { name, signout} = useAuth()
    const { shelters } = useShelts()

    return (
        <div>
            <div className="HomeButton">
                <Link to="/"><Icon icon="home"> Home </Icon></Link>
            </div>
            

            {shelters.map(shelter => (
                <>
                    <h1>Welcome {name}!</h1>
                    <p>Your address is {shelter.address}</p>
                    <p>You have {shelter.total_beds} beds total!</p>
                </>
            ))}
            
            <button onClick={e => signout()}><Link to="/">Sign Out</Link></button>
        </div>
    )
}

