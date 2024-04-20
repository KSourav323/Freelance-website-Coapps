import { useState } from 'react'
import axios from 'axios';
import { useNavigate} from 'react-router-dom';
import { FaLock } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import '../style/main.css'
import React from 'react';
import logo from '../assets/logo.png';



function Login()
{
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function handleSignUpClick() {
      navigate('/signup');
  }

    function handleSubmit(event){
        event.preventDefault()
        
        axios.post('http://localhost:8000/login', {email, password})
        .then(res=>{
            if(res.data['statusCode']==200) 
            {
              navigate('/landing');
            }
            else
            {
                alert('invalid details')
                navigate('/')
            }
        })
        .catch(err=>{
            alert('invalid details')
            navigate('/')
    })




    }
    return(
      <div className="wrapper">
        <div className='img'>
          <img src={logo} alt="" />
        </div>
        <div className="form">
            <h1>Login</h1>
          <form onSubmit={handleSubmit}>
            <div className="input-box">
              <input type="email" className="form-control" placeholder="Email" onChange={(e) => setEmail(e.target.value)}/>
              <IoIosMail className="icon" />
            </div>
            <div className="input-box">
              <input type="password" className="form-control" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
              <FaLock className="icon"/>
            </div>  
            <button type="submit">Login</button>
            <div className="register-link">
                <p>Don't have an account? <a href="" onClick={handleSignUpClick}>Register</a></p>
            </div>
          </form>
        </div>
        
        <div className='para'>
          <p>Welcome to NeoHire, where talent meets opportunity!</p>
          <p>Whether you're a seasoned freelancer or just starting your journey into the world of remote work,</p>
          <p>NeoHire is your trusted platform for connecting with exciting projects</p>
          <p>and clients from around the globe.</p>
        </div>
      </div>
    )
}

export default Login
