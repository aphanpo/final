import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Icon from '../lib/Icon'
import { useShelts } from '../hooks'
import {useGuests } from '../hooks'
import moment from 'moment'


export default props => {
    const { shelters, other_shelters, bed_count } = useShelts()
    // const [bed_count, setBed_count] = useState('')
    const {guestlist} = useGuests()

    const currentDay = moment().format('LL')
    return (
        <div className="shelterPage">
            <div className="shelterHeader">
                <div className="HomeButton">
                    <Link to="/"><Icon icon="home"> Home </Icon></Link>
                </div>
                <p className="projectName">Beds For Hope</p>
                <div>
                    <p><Link to="/Register" ><button className="RLbuttons">Register</button></Link></p>
                    <p><Link to="/Login"><button className="RLbuttons">Login</button></Link></p>
                </div>
            </div>
            <p className="shelterTitle"> List of Available Shelters </p>
            <div className="GoogleMap">
            <iframe width="1200" height="450" src="https://www.google.com/maps/embed/v1/search?q=open%20homeless%20shelters%20that%20are%20not%20closed%20in%20Las%20Vegas&key=AIzaSyASjRHhAeoENVs6goGcXt6fDVfq6C5rYmc" allowFullScreen></iframe>
            </div>

            <div className="wrapper">
                <div className="mainShelterList">
                    {shelters.map((shelter, i) => (
                        <div className="shelterList" key={i}>
                            <p className="shelterName">{shelter.name}</p>
                            <p> <Icon icon="map-pin"></Icon> : {shelter.address}</p>
                            <p><Icon icon="phone"></Icon> : {shelter.phone}</p>
                            <p><Icon icon="clock-o"></Icon> : {shelter.days_open} ({shelter.hours_open} - {shelter.hours_closed})</p>
                
                            <p><Icon icon="bed"></Icon> Available: {shelter.open_beds - (guestlist.filter(c=>c.shelter_id === shelter.id && c.date ===currentDay)).length} out of {shelter.total_beds} </p>

                            <p className="last">Meals Available: {shelter.meal_option} 
                                {shelter.open_beds - (guestlist.filter(c=>c.shelter_id === shelter.id && c.date ===currentDay)).length === 0 ? (<p><b>Fully Booked!</b></p>) : (<button className="resButton"><Link to={{
                                pathname: `/Reservation/${shelter.name}/${shelter.id}`,
                                state: {
                                    open_beds: shelter.open_beds
                                }
                            }}> Get me on the list</Link></button>) }
                                </p>        
                        </div>   
                    ))}
                </div>
                <div className="mainOtherShelterList">
                    <p className="openTitle">Other Nearby Shelters:</p>
                    {other_shelters.map((os, i) => (
                    <div className="otherShelterList" key=
                    {i}>
                        <p><b>{os.name}</b><br />
                        {os.formatted_address}</p>
                    </div>
                    ))}
                </div>
            </div>

        </div>
    );
}

