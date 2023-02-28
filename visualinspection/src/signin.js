import React from 'react';
import logo from './Img/logo.jpeg';
import './CSS/sign.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { AiOutlineUser } from 'react-icons/ai';
import { IconContext } from 'react-icons';
const Signin = () => {
    const [input, setInput] = useState({
        email: "",
        password: ""
    })
    const [message, setMessage] = useState("")
    const handleSubmit = (e) => {
        e.preventDefault();
        const regEx = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
        if ((regEx.test(input.email)) && (input.email && input.password)) {
            setMessage("Email is Valid");
        } else if (!regEx.test(input.email) && input.email !== " ") {
            setMessage("Enter Valid Details");
        }
    }
    return (
        <div>
            <div className='NavBar'>
                <img className='PHOTO' src={logo} alt="Ari-Logo" />
            </div>
            <div className='container'>
                <form onSubmit={handleSubmit}>
                    <IconContext.Provider value={{ className: "Icon", size: "2em", }}>
                        <center>
                            <AiOutlineUser />
                        </center>
                    </IconContext.Provider>
                    <h2 className='H2'>Sign In</h2>
                    <span style={{ color: "darkgray", margin: "0 0 0 2.3em", float: "left" }}>To continue to </span><span style={{ color: "chocolate", margin: "0 2.3em 0 0", float: "right" }}>Visual Inspection</span>
                    <br /> <br />
                    <div>
                        <div>
                            <input id='INPUT' name='email' value={input.email} onChange={(e) =>
                                setInput({ ...input, [e.target.name]: e.target.value, })} type='text' placeholder='Email Address' autocomplete='off' />
                        </div>
                        <br />
                        <div>
                            <input id='INPUT' name='password' onChange={(e) =>
                                setInput({ ...input, [e.target.name]: e.target.value, })} value={input.password} type='password' placeholder='Password' autocomplete='off' />
                        </div>
                        <Link>Forget Password?</Link>

                        <div>
                            <button type='submit' className='Button'>Sign In</button>
                            <br />
                            {message}
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Signin