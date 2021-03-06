import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import Icon from '../lib/Icon'
import validator from 'validator'
import { useAuth, useShelts } from '../hooks'
import {reduceBedCount} from '../redux/ducks/shelters/'
import moment from 'moment'

function Form(props) {
  const [shelter_name, setShelter_Name] = useState('')
  const [shelter_NameError, setShelter_NameError] = useState("Shelter Name")
  const [first_name, setFirst_Name] = useState('')
  const [first_NameError, setFirst_NameError] = useState("First Name")
  const [last_name, setLast_Name] = useState('')
  const [last_NameError, setLast_NameError] = useState("Last Name")
  const [Gender, setGender] = useState('')
  const { res } = useAuth()

  const {bed_count} = useShelts()
  const currentDay = moment().format('LL')

function handleSubmit(e){
  e.preventDefault()
  bed_count(props.match.params.id)
  let err = false

  if (validator.isEmpty(shelter_name)){
    setShelter_NameError("Shelter Name - Cannot be blank")
  }

  if (validator.isEmpty(first_name)){
    setFirst_NameError("Name - Cannot be blank")
  } 

  if (validator.isEmpty(last_name)){
    setLast_NameError("Last Name - Cannot be blank")
  }


  else if (!err) {
    res(currentDay, props.match.params.shelter, first_name, last_name, Gender, props.match.params.id).then(resp => {
      //reduceBedCount(props.match.params.id, props.match.params.shelter, props.location.state.open_beds)
      props.history.push('/Submission')
    })
    
  } else {
    console.log("not submitted")
  }
}

  return (
    <div className="reservation">
        <div className="reservationHeader">
            <div className="HomeButton">
                <Link to="/"><Icon icon="home"> Home </Icon></Link>
            </div>
            <p className="projectName res">Beds For Hope</p>
        </div>
        <p className="reservationTitle"> Skip the line and add your name to the list here. </p>
        <div className="reservationForm">
          <p><b>- Required -</b></p>
          <form onSubmit={handleSubmit} >
          <div className="reservationPart">
            {/* <label className="error">{shelter_NameError}</label> */}
              <h1 className="shelterResName">{props.match.params.shelter}</h1>
              {/* <input
                className={setShelter_NameError === "" ? "" : "error"}
                onChange={e => setShelter_Name(e.target.value)}
                type="text"
                value={shelter_name}
                /> */}

            <div className="date">{currentDay}</div>
            <label className="error">{first_NameError}</label>
              <input 
                className={setFirst_NameError === "" ? "" : "error"}
                onChange={e => setFirst_Name(e.target.value)}
                type="text"
                value={first_name}
              />

            <label className="error">{last_NameError}</label>
              <input
                className={setLast_NameError === "" ? "" : "error"}
                onChange={e => setLast_Name(e.target.value)}
                type="text"
                value={last_name}
              />
            <label> Gender  
              <select className="GenderChoice" value={Gender} onChange={e=> setGender(e.target.value)}>
                <option>Select</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </label>

            <button  className="resButton2" type="submit">Submit</button> <br />
            <p><Link to="/ShelterList"><Icon icon="arrow-left"></Icon> Back to Shelter List</Link></p>
          </div>
          </form>
        </div>
    </div>
  )
}

export default Form