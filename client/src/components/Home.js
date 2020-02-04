import React from 'react'
import { Link } from 'react-router-dom'



export default props => {


    return (
        <>      
        {/* <link href="https://fonts.googleapis.com/css?family=Girassol&display=swap" rel="stylesheet"></link>   */}
        <div className="HomeBackgroundPostiion HomeBackgroundImage" />
        <div className="HomeBackgroundPostiion HomeBackgroundOverlay" />
        <p className="HomeprojectName">Beds For Hope</p> 
        <p className="homeheader">Are You ...</p>

        <div className="homepage">
            <div className="box">
                <p><b>... in <i>need of a bed</i> for tonight ? </b><br /> Click on the button below to find available shelters.</p>
                <Link to="./ShelterList" className="mainbuttons"><button className="mainbuttons FindShelter">FIND SHELTERS</button></Link>
            </div>
            
            <div className="box">
                <p><b>... a <i>shelter</i> ? </b><br /> Register your place now to help us combat homelessness!</p>
                <Link to="./Register" className="mainbuttons"><button className="mainbuttons RegisterButton">REGISTER SHELTER</button></Link>
            </div>
            
            <div className="box">
                <p><b>... <i> already registered</i> ? </b><br /> Login in to manage your account. </p>
                <Link to="./Login" className="mainbuttons box3"><button className="mainbuttons LoginButton">SHELTER LOGIN</button></Link>
            </div>
        </div>
        {/* <footer>
           <p className="HomeprojectName">Beds For Hope</p> 
        </footer> */}
        
        </>
    )
}