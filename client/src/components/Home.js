import React from 'react'
import { Link } from 'react-router-dom'


export default props => {


    return (
        <div>
            <button className="FindShelter"><Link to="./ShelterList">FIND SHELTERS</Link></button>
            <button className="LoginButton"><Link to="./Register">REGISTER SHELTER</Link></button>
            <button className="LoginButton"><Link to="./Login">SHELTER LOGIN</Link></button>
        </div>
    )
}