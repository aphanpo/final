import React, {useState} from 'react'
import { useAuth } from '../hooks'
import { Link } from 'react-router-dom'
import Icon from '../lib/Icon'


export default props => {
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const [address, setAddress] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [bed_option, setBed_option] = useState('')
    const [open_beds, setOpen_beds] = useState('')
    const [total_beds, setTotal_beds] = useState('')
    const [meal_option, setMeal_option] = useState('')

    const [mon, setMon] = useState(("Mo")?true:false)
    const [tues, setTues] = useState(("Tu")?true:false) 
    const [wed, setWed] = useState(("We")?true:false) 
    const [thurs, setThurs] = useState(("Th")?true:false) 
    const [fri, setFri] = useState(("Fr")?true:false) 
    const [sat, setSat] = useState(("Sa")?true:false) 
    const [sun, setSun] = useState(("Su")?true:false)
    const [hours_open, setHours_open] = useState('')
    const [hours_closed, setHours_closed] = useState('')
    

    const { reg } = useAuth()

    function handleSubmit(e) {
        e.preventDefault()
        let days = []

        if (mon)
            {days.push("Mo")}
        if (tues)
            {days.push("Tu")}
        if (wed)
            {days.push("We")}
        if(thurs)
            {days.push("Th")}
        if(fri)
            {days.push("Fr")}
        if (sat)
            {days.push("Sa")}
        if (sun)
            {days.push("Su")}
        const days_open=days.join(',')

        reg(name, password, address, phone, email, days_open, hours_open, hours_closed, bed_option, open_beds, total_beds, meal_option ).then(resp => {
            props.history.push("/Login")
        })
  }
    

    return (
        <>
        <div className="HomeBackgroundPostiion RegisterBackgroundImage" />
        <div className="HomeBackgroundPostiion RegisterBackgroundOverlay" />
        <div className="register">
            <div className="registerHeader">
                <div className="HomeButton">
                    <Link to="/"><Icon icon="home"> Home </Icon></Link>
                </div>
                <p className="projectName registerName">Beds For Hope</p>
                <p className="registerName">Already have an account? <Link to="./Login"><button className="LoginButton2">Login</button></Link></p>
            </div>
            <p className="registerTitle">Create an account now</p>
            <div className="registerForm">  
                <form onSubmit={handleSubmit}>
                    <div className="shelterInfo">
                        <label>Shelter Name</label>
                        <input type="text" name="name" value={name} onChange={e=> setName(e.target.value)} />

                        <label>Shelter Address</label>
                        <input type="text" name="address" value={address} onChange={e=> setAddress(e.target.value)} />

                        <label>Phone Number</label>
                        <input placeholder="(999)999-9999" type="phone" name="phone" value={phone} onChange={e=> setPhone(e.target.value)} />

                        <label>Create a password</label>
                        <input type="password" name="password" value={password} onChange={e=> setPassword(e.target.value)} />

                        <label>Email</label>
                        <input placeholder="MyShelter@organization.com" type="email" name="email" value={email} onChange={e=> setEmail(e.target.value)} />

                        <div className="hours">  
                            <div className="daysOpen"> 
                                <label> Days Open:</label>
                                <label > Mo
                                    <input type="checkbox" value={mon} checked={mon} onChange={e=>setMon(!mon)} />                      
                                </label >
                                <label > Tu
                                    <input type="checkbox" value={tues} checked={tues} onChange={e=>setTues(!tues)} />                      
                                </label>
                                <label > We
                                    <input type="checkbox" value={wed} checked={wed} onChange={e=>setWed(!wed)} />                      
                                </label >
                                <label > Th
                                    <input type="checkbox" value={thurs} checked={thurs} onChange={e=>setThurs(!thurs)} />                      
                                </label>
                                <label > Fr
                                    <input type="checkbox" value={fri} checked={fri} onChange={e=>setFri(!fri)} />                      
                                </label>
                                <label > Sa
                                    <input type="checkbox" value={sat} checked={sat} onChange={e=>setSat(!sat)} />                      
                                </label>
                                <label > Su
                                    <input type="checkbox" name="sun" value={sun} checked={sun} onChange={e=>setSun(!sun)} />                      
                                </label>
                            </div> 
                
                                <div className="hoursOpen">
                                    <label>Hours Open: </label>
                                    <select className="choices" onChange={e => setHours_open(e.target.value)} value={hours_open} >
                                        <option value="default"> Select</option>
                                        <option value="24 Hours">24 Hours</option>
                                        <option value="12:00 am">12:00 am</option>
                                        <option value="01:00 am">01:00 am</option>
                                        <option value="02:00 am">02:00 am</option>
                                        <option value="03:00 am">03:00 am</option>
                                        <option value="04:00 am">04:00 am</option>
                                        <option value="05:00 am">05:00 am</option>
                                        <option value="06:00 am">06:00 am</option>
                                        <option value="07:00 am">07:00 am</option>
                                        <option value="08:00 am">08:00 am</option>
                                        <option value="09:00 am">09:00 am</option>
                                        <option value="10:00 am">10:00 am</option>
                                        <option value="11:00 am">11:00 am</option>
                                        <option value="12:00 pm">12:00 pm</option>
                                        <option value="01:00 pm">01:00 pm</option>
                                        <option value="02:00 pm">02:00 pm</option>
                                        <option value="03:00 pm">03:00 pm</option>
                                        <option value="04:00 pm">04:00 pm</option>
                                        <option value="05:00 pm">05:00 pm</option>
                                        <option value="06:00 pm">06:00 pm</option>
                                        <option value="07:00 pm">07:00 pm</option>
                                        <option value="08:00 pm">08:00 pm</option>
                                        <option value="09:00 pm">09:00 pm</option>
                                        <option value="10:00 pm">10:00 pm</option>
                                        <option value="11:00 pm">11:00 pm</option> 
                                    </select>

                                    <label> Closed: </label>
                                    <select className="choices" onChange={e => setHours_closed(e.target.value)} value={hours_closed} >
                                        <option value="default"> Select</option>
                                        <option value="24 Hours">24 Hours</option>
                                        <option value="12:00 am">12:00 am</option>
                                        <option value="01:00 am">01:00 am</option>
                                        <option value="02:00 am">02:00 am</option>
                                        <option value="03:00 am">03:00 am</option>
                                        <option value="04:00 am">04:00 am</option>
                                        <option value="05:00 am">05:00 am</option>
                                        <option value="06:00 am">06:00 am</option>
                                        <option value="07:00 am">07:00 am</option>
                                        <option value="08:00 am">08:00 am</option>
                                        <option value="09:00 am">09:00 am</option>
                                        <option value="10:00 am">10:00 am</option>
                                        <option value="11:00 am">11:00 am</option>
                                        <option value="12:00 pm">12:00 pm</option>
                                        <option value="01:00 pm">01:00 pm</option>
                                        <option value="02:00 pm">02:00 pm</option>
                                        <option value="03:00 pm">03:00 pm</option>
                                        <option value="04:00 pm">04:00 pm</option>
                                        <option value="05:00 pm">05:00 pm</option>
                                        <option value="06:00 pm">06:00 pm</option>
                                        <option value="07:00 pm">07:00 pm</option>
                                        <option value="08:00 pm">08:00 pm</option>
                                        <option value="09:00 pm">09:00 pm</option>
                                        <option value="10:00 pm">10:00 pm</option>
                                        <option value="11:00 pm">11:00 pm</option> 
                                    </select>
                                </div>
                            </div>
                    </div>

                    <div className="amenities">
                        <div className="bedding">
                            <label>Does your shelter offer beds? </label>
                            <select className="choices" name="beds" value={bed_option} onChange={e=> setBed_option(e.target.value)}>
                                <option>Select</option>
                                <option value="Yes">Yes</option>
                                <option value="No">No</option>
                            </select>      
                        
                            <p> If yes, how many total beds does your shelter have? <br/> If no, please enter '0'. <input className="inputBed" placeholder="0" type="text" name="total_beds" value={total_beds} onChange={e=> setTotal_beds(e.target.value)} /></p>

                            <p>How many beds are currently available? <br /> If none, please enter '0'. <input className="inputBed" placeholder="0" type="text" name="open_beds" value={open_beds} onChange={e=> setOpen_beds(e.target.value)} /></p>
                        </div>

                        <div className="food">
                            <label>Does your shelter offer meals? </label>
                            <select className="choices" name="meals" value={meal_option} onChange={e=> setMeal_option(e.target.value)}>
                                <option>Select</option>
                                <option value="Yes">Yes</option>
                                <option value="No">No</option>
                            </select>
                        </div>
                    </div>


                    <button className="RegisterButton2" type="submit">Register</button>  
                </form>
            </div>    
        </div>
        </>
    )
}