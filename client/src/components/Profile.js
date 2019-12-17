import React from 'react'
import { useAuth } from "../hooks"
import { Link } from 'react-router-dom'
import Icon from '../lib/Icon'
import { useShelts } from '../hooks'


export default props => {
    const { id, name, signout, address, open_beds} = useAuth()
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
            
           <div className="profileSection">
            <h1 className="welcome">Welcome {name}!</h1>
            {/* {shelters.map(shelter => (
                <>
                <p>Location: {shelter.address}</p>
                <p>You currently have {shelter.open_beds} beds available!</p>
                </>
            ))} */}
                 <>
                <p>Location: {shelters[0] ? shelters[0].address : ""}</p>
                <p>You currently have {shelters[0] ? shelters[0].open_beds : ""} beds available!</p>
                </>

            </div>
         
            
        
        </div>
    )
}

