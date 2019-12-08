import React from "react"
import { Link } from 'react-router-dom'
import Icon from '../lib/Icon'


function SubmitPage(props) {
    return (
        <div className="SubmitPage">
            <div className="shelterHeader">
                <div className="HomeButton">
                    <Link to="/"><Icon icon="home"> Home </Icon></Link>
                </div>
            </div>
            <h1>Thank You</h1>
            <p className="thanks">Your name has been added on the list. When you arrive, go straight to the front.</p>
        </div>
    )
}

export default SubmitPage