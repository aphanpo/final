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
            props.history.push("/AboutMe")
        })
    }

    return (
        <div className="loginForm">
            <Link to="/"><Icon icon="home"> Home </Icon></Link>
            <form onSubmit={handleSubmit}>
                <input placeholder="name" type="text" name="name" value={name} onChange={e=> setName(e.target.value)} />
                <input placeholder="password" type="password" name="password" value={password} onChange={e=> setPassword(e.target.value)} />

                <button type="submit">Login</button>
                <button><Link to="./Register">Register</Link></button>
            </form>
        </div>
    )
}