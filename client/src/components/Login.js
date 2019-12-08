import React, {useState} from 'react'
import { useAuth } from '../hooks'
import { Link } from 'react-router-dom'
import Icon from '../lib/Icon'

export default props => {
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    
    const { signin } = useAuth()

    function handleSubmit(e) {
        e.preventDefault()

        signin(name, password).then(resp => {
            props.history.push("/Profile")
        })
    }

    return (
        <div className="login">
            <div className="loginHeader">
                <div className="HomeButton">
                <Link to="/"><Icon icon="home"> Home </Icon></Link>
                </div>
                <p className="acct"> Login to manage your account</p>
                <p>Don't have an account? <Link to="./Register"><button className="LoginButton2">Sign up</button></Link></p>
            </div>
            
            <div className="loginForm">
                <form onSubmit={handleSubmit}>
                    <div className="loginPart">
                    <label>Shelter Name</label>
                    <input type="text" name="name" value={name} onChange={e=> setName(e.target.value)} />

                    <label>Password</label>
                    <input type="password" name="password" value={password} onChange={e=> setPassword(e.target.value)} />

                    <button className="LoginButton3" type="submit">Login</button> 
                    </div>  
                </form>
            </div>
        </div>
    )
}