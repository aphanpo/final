import React, {useState} from 'react'
import { useAuth } from '../hooks'
import { Link } from 'react-router-dom'
import Icon from '../lib/Icon'


export default props => {
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const [address, setAddress] = useState('')
    const [email, setEmail] = useState('')
    const [bed_option, setBed_option] = useState('')
    const [open_beds, setOpen_beds] = useState('')
    const [total_beds, setTotal_beds] = useState('')
    const [meal_option, setMeal_option] = useState('')
    

    
    const { reg } = useAuth()

    function handleSubmit(e) {
        e.preventDefault()
  
        reg(name, password, address, email, bed_option, open_beds, total_beds, meal_option).then(resp => {
            props.history.push("/Login")
        })
  }
    

    return (
        <div className="register">
            <div className="registerHeader">
                <div className="HomeButton">
                    <Link to="/"><Icon icon="home"> Home </Icon></Link>
                </div>
                <p className="acct">Create an account now</p>
                <p>Already have an account? <button className="LoginButton2"><Link to="./Login"> Login</Link></button></p>
            </div>
            
            <div className="registerForm">  
                <form onSubmit={handleSubmit}>
                    <div className="shelterInfo">
                        <label>Shelter Name</label>
                        <input placeholder="Shelter Name" type="text" name="name" value={name} onChange={e=> setName(e.target.value)} />

                        <label>Shelter Address</label>
                        <input placeholder="Shelter Address" type="text" name="address" value={address} onChange={e=> setAddress(e.target.value)} />

                        <label>Create a password</label>
                        <input placeholder="Password" type="password" name="password" value={password} onChange={e=> setPassword(e.target.value)} />

                        <label>Email</label>
                        <input placeholder="MyShelter@organization.com" type="email" name="email" value={email} onChange={e=> setEmail(e.target.value)} />
                    </div>

                    <div className="amenities">
                        <div className="bedding">
                            <label>Does your shelter offer beds? </label>
                            <select className="choices" name="beds" value={bed_option} onChange={e=> setBed_option(e.target.value)}>
                                <option>Select</option>
                                <option value="Y">Yes</option>
                                <option value="N">No</option>
                            </select>      
                        
                            <p> If yes, how many total beds does your shelter have? If no, please enter '0'. <input className="inputBed" placeholder="0" type="text" name="total_beds" value={total_beds} onChange={e=> setTotal_beds(e.target.value)} /></p>

                            <p>How many beds are currently available? If none, please enter '0'. <input className="inputBed" placeholder="0" type="text" name="open_beds" value={open_beds} onChange={e=> setOpen_beds(e.target.value)} /></p>
                        </div>

                        <div className="food">
                            <label>Does your shelter offer meals? </label>
                            <select className="choices" name="meals" value={meal_option} onChange={e=> setMeal_option(e.target.value)}>
                                <option>Select</option>
                                <option value="Y">Yes</option>
                                <option value="N">No</option>
                            </select>
                        </div>
                    </div>


                    <button className="RegisterButton2" type="submit">Register</button>  
                </form>
            </div>    
        </div>
    )
}