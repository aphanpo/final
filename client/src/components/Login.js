import React, {useState} from 'react'
import { useAuth } from '../hooks'
import { Link } from 'react-router-dom'
import Icon from '../lib/Icon'
import validator from 'validator'

export default props => {
    const [name, setName] = useState('')
    const [nameError, setNameError] = useState('Shelter Name')
    const [password, setPassword] = useState('')
    const [passwordError, setPasswordError] = useState('Password')
    
    const { signin } = useAuth()

    function handleSubmit(e) {
        e.preventDefault()
        let err = false

        if (validator.isEmpty(name)){
            setNameError("Shelter Name or Password is not valid")
        }

        if (validator.isEmpty(password)){
            setPasswordError("Shelter Name or Password is not valid")
        }

        else if (!err){
            signin(name, password).then(resp => {
            props.history.push("/Profile")
            })
        }

        
    }

    return (
        <div className="login">
            <div className="loginHeader">
                <div className="HomeButton">
                <Link to="/"><Icon icon="home"> Home </Icon></Link>
                </div>
                <p className="loginTitle"> Login to manage your account</p>
                <p>Don't have an account? <Link to="./Register"><button className="LoginButton2">Sign up</button></Link></p>
            </div>
            
            <div className="loginForm">
                <form onSubmit={handleSubmit}>
                    <div className="loginPart">
                    <label className="error">{nameError}</label>
                    <input className={setNameError === "" ? "" : "error"} type="text" name="name" value={name} onChange={e=> setName(e.target.value)} />

                    <label className="error">{passwordError}</label>
                    <input className={setPasswordError === "" ? "" : "error"} type="password" name="password" value={password} onChange={e=> setPassword(e.target.value)} />

                    <button className="LoginButton3" type="submit">Login</button> 
                    </div>  
                </form>
            </div>
        </div>
    )
}