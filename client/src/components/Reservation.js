import React from 'react'
import { Link } from 'react-router-dom'
import Icon from '../lib/Icon'

export default props => {
    return (
        <div>
            <div className="shelterHeader">
                <div className="HomeButton">
                    <Link to="/"><Icon icon="home"> Home </Icon></Link>
                </div>
                <p className="acct1"> Intake form </p>
            </div>
        <p>Here you create a form for homeless person to try to reserve a bed</p>
        </div>
    )
}
