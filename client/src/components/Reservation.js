import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import Icon from '../lib/Icon'
import validator from 'validator'
import { useAuth } from '../hooks'


function Form(props) {
  const [first_name, setFirst_Name] = useState('')
  const [first_NameError, setFirst_NameError] = useState("First Name")
  const [last_name, setLast_Name] = useState('')
  const [last_NameError, setLast_NameError] = useState("Last Name")

  const { res } = useAuth()
  
function handleSubmit(e){
  e.preventDefault()
  let err = false

  if (validator.isEmpty(first_name)){
    setFirst_NameError("Name - Cannot be blank")
  } 

  if (validator.isEmpty(last_name)){
    setLast_NameError("Last Name - Cannot be blank")
  }

  else if (!err) {
    res(first_name, last_name).then(resp => {
      props.history.push('Submission')
    })
    
  } else {
    console.log("not submitted")
  }
}

  return (
    <div className="reservation">
        <div className="shelterHeader">
            <div className="HomeButton">
                <Link to="/"><Icon icon="home"> Home </Icon></Link>
            </div>
            <p className="acct1"> Skip the line and add your name to the list here. </p>
        </div>
        
        <div className="reservationForm">
          <p><b>- Required -</b></p>
          <form onSubmit={handleSubmit} >
          <div className="reservationPart">
            <label className="error">{first_NameError}</label>
              <input 
                className={setFirst_NameError === "" ? "" : "error"}
                onChange={e => setFirst_Name(e.target.value)}
                placeholder="First Name"
                type="text"
                value={first_name}
              />

              <label className="error">{last_NameError}</label>
                <input
                  className={setLast_NameError === "" ? "" : "error"}
                  onChange={e => setLast_Name(e.target.value)}
                  placeholder="Last Name"
                  type="text"
                  value={last_name}
                />

              <button className="resButton2" type="submit">Submit</button> <br />
              <p><Link to="/ShelterList"><Icon icon="arrow-left"></Icon> Back to Shelter List</Link></p>
            </div>
            </form>
        </div>
    </div>
  )
}

export default Form