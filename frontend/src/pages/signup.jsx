import React from 'react';
import { useState } from 'react'
import axios from 'axios';
import { useNavigate, Link} from 'react-router-dom';
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import logo from '../assets/logo.png';

function Signup()
{
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password1, setPassword1] = useState('');
    const [password2, setPassword2] = useState('');
    const [username, setUsername] = useState('');

    function handleLogoutClick() {
      navigate('/');
  }

    function handleSubmit(event){
        event.preventDefault()
        
        axios.post('http://localhost:8000/signup', {username, email, password1, password2})
        .then(res=>{
            if(res.data['statusCode']==200) 
            {
              navigate('/');
            }
            else if(res.data=='notsuccess')
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
        <form onSubmit={handleSubmit}>
          <h1>Signup</h1>
          <div className="input-box">
            <input type="text" className="form-control" placeholder="Username" onChange={(e) => setUsername(e.target.value)}/>
            <FaUser className="icon" />
          </div>
          <div className="input-box">
            <input type="email" className="form-control" placeholder="Email" onChange={(e) => setEmail(e.target.value)}/>
            <IoIosMail className="icon" />
          </div>
          <div className="input-box">
            <input type="password" className="form-control" placeholder="Password" onChange={(e) => setPassword1(e.target.value)} />
            <FaLock className="icon"/>
          </div>
          <div className="input-box">
            <input type="password" className="form-control" placeholder="Repeat password" onChange={(e) => setPassword2(e.target.value)} />
            <FaLock className="icon"/>
          </div>
          <button type="submit">Signup</button>
          <div className="register-link">
              <p>have an account? <a href="" onClick={handleLogoutClick}>Login</a></p>
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

export default Signup
