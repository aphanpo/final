import React from 'react'
import { Link } from 'react-router-dom'


export default props => {


    return (
        <>
        <h1 className="homeheader">Are You ...</h1>
        <div className="homepage">
            <div className="box">
                <p>... in need of a bed for tonight? <br /> Click on the button below to find available shelters.</p>
                <button className="mainbuttons FindShelter"><Link to="./ShelterList">FIND SHELTERS</Link></button>
            </div>
            
            <div className="box">
                <p>... a shelter? <br /> Register your place now to help us combat homelessness!</p>
                <button className="mainbuttons RegisterButton"><Link to="./Register">REGISTER SHELTER</Link></button>
            </div>
            
            <div className="box">
                <p>... already registered? <br /> Login in to manage your account. </p>
                <button className="mainbuttons LoginButton"><Link to="./Login">SHELTER LOGIN</Link></button>
            </div>
            
        </div>
        </>
    )
}