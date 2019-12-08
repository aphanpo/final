import React from 'react'
import { Link } from 'react-router-dom'
import Icon from '../lib/Icon'
import { useShelts } from '../hooks'


export default props => {
    const { shelters, other_shelters, bed_count } = useShelts()
    
    return (
        <div className="shelterPage">
            <div className="shelterHeader">
                <div className="HomeButton">
                    <Link to="/"><Icon icon="home"> Home </Icon></Link>
                </div>
                <p className="acct1"> List of Available Shelters </p>
            </div>
            <div className="GoogleMap">
            <iframe width="1200" height="450" src="https://www.google.com/maps/embed/v1/search?q=open%20homeless%20shelters%20in%20Las%20Vegas&key=AIzaSyASjRHhAeoENVs6goGcXt6fDVfq6C5rYmc" allowfullscreen></iframe>
            </div>

            <div className="wrapper">
                <div className="mainShelterList">
                    {shelters.map(shelter => (
                        <div className="shelterList">
                            <h3>{shelter.name}</h3>
                            <p><Icon icon="map-pin"></Icon> : {shelter.address}</p>
                            <p><Icon icon="phone"></Icon> : {shelter.phone}</p>
                            <p><Icon icon="bed"></Icon> Available: {shelter.open_beds} {bed_count.length} out of {shelter.total_beds} </p>
                            <p className="last">Meals Available: {shelter.meal_option} <button className="resButton"><Link to="/Reservation"> Put me on the list</Link></button></p>        
                        </div>   
                    ))}
                </div>
                <div className="mainOtherShelterList">
                    {other_shelters.map(os => (
                    <div className="otherShelterList">
                        <p><b>{os.name}</b><br />
                        {os.formatted_address}</p>
                    </div>
                    ))}
                </div>
            </div>

        </div>
    )
}
