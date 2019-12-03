import React, {useState} from 'react'
import { useAuth } from '../hooks'
import { Link } from 'react-router-dom'
import Icon from '../lib/Icon'


export default props => {
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const [address, setAddress] = useState('')
    const [bed_option, setBed_option] = useState('')
    const [total_beds, setTotal_beds] = useState('')
    

    
    const { reg } = useAuth()

    function handleSubmit(e) {
        e.preventDefault()

        reg(name, password, address, bed_option, total_beds).then(resp => {
            props.history.push("/Login")
        })
  }
    

    return (
        <div className="register">
            <div className="registerForm">
                <Link to="/"><Icon icon="home"> Home </Icon></Link>
                <p>Already have an account? <button><Link to="./Login"> Login</Link></button></p>
                <form onSubmit={handleSubmit}>
                    <input placeholder="Shelter Name" type="text" name="name" value={name} onChange={e=> setName(e.target.value)} />
                    <input placeholder="Password" type="password" name="password" value={password} onChange={e=> setPassword(e.target.value)} />
                    <input placeholder="Shelter Address" type="text" name="address" value={address} onChange={e=> setAddress(e.target.value)} />

                    <br />
                    <br />

                    <div className="bedding">
                        <label>Does your shelter offer beds?
                        <select name="beds" value={bed_option} onChange={e=> setBed_option(e.target.value) }>
                            <option>Select</option>
                            <option value="Y">Yes</option>
                            <option value="N">No</option>
                        </select>
                        </label>
                        <p> If yes, how many total beds does your shelter have? If no, please enter '0'.</p>
                        <input placeholder="0" type="text" name="total_beds" value={total_beds} onChange={e=> setTotal_beds(e.target.value)} />
                    </div>

                    <button type="submit">Register</button>  
                </form>
            </div>    
        </div>
    )
}