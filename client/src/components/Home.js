import React from 'react'
import { Link } from 'react-router-dom'


export default props => {


    return (
        <>
        <h1 className="homeheader">Are You ...</h1>
        <div className="homepage">
            <div className="box">
                <p>... in need of a bed for tonight? <br /> Click on the button below to find available shelters.</p>
                <Link to="./ShelterList" className="mainbuttons"><button className="mainbuttons FindShelter">FIND SHELTERS</button></Link>
            </div>
            
            <div className="box">
                <p>... a shelter? <br /> Register your place now to help us combat homelessness!</p>
                <Link to="./Register" className="mainbuttons"><button className="mainbuttons RegisterButton">REGISTER SHELTER</button></Link>
            </div>
            
            <div className="box">
                <p>... already registered? <br /> Login in to manage your account. </p>
                <Link to="./Login" className="mainbuttons box3"><button className="mainbuttons LoginButton">SHELTER LOGIN</button></Link>
            </div>
            
        </div>
        </>
    )
}