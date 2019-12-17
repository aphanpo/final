import React from "react"
import { Link } from 'react-router-dom'
import Icon from '../lib/Icon'


function SubmitPage(props) {
    return (
        <div className="SubmitPage">
            <div className="submitHeader">
                <p><Link to="/ShelterList"><Icon icon="arrow-left"></Icon> Back to Shelter List</Link></p>
                <p className="submissionTitle">You've been added on the waitlist.</p>
                <div className="HomeButton">
                    <Link to="/"><Icon icon="home"> Home </Icon></Link>
                </div>
                
            </div>
            <div className="submission">
                <h1>Thank You</h1>
                <p className="thanks">Some important reminders:</p>
                <ol>
                    <li>Adding your name to the list <b>DOES NOT</b> guarantee you will get a bed.</li>
                    <li>Try to be there about 10 minutes before the shelter opens.</li>
                    <li>When you arrive, go <b>STRAIGHT</b> to the front of the line.</li>
                    <li>First come, first serve.</li>
                </ol>
            </div>
        </div>
    )
}

export default SubmitPage