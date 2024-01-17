import './Login.css';
import SignUp from '../SignUp/SignUp';
import { Link, useNavigate } from 'react-router-dom';
import { API_URL } from '../../config';
import React, { useState, useEffect } from 'react';

export default function Login() {

    const [password, setPassword] = useState("");
  const [email, setEmail] = useState('');
  const navigate = useNavigate();
  useEffect(() => {
    if (sessionStorage.getItem("auth-token")) {
      navigate("/")
    }
  }, []);
  const login = async (e) => {
    e.preventDefault();
    const res = await fetch(`${API_URL}/api/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        // name: name,
        email:email,
        password: password,
      }),
    });
    const json = await res.json();
    if (json.authtoken) {
      sessionStorage.setItem('auth-token', json.authtoken);
  
      sessionStorage.setItem('email', email);
      navigate('/');
      window.location.reload()
    } else {
      if (json.errors) {
        for (const error of json.errors) {
          alert(error.msg);
        }
      } else {
        alert(json.error);
      }
    }
  };


    return (
        <div className="LoginForm">
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 31 31" fill="none" className="XButton">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M2.37358 0L0 2.37358L12.8037 15.1772L6.87408e-06 27.9809L2.37359 30.3545L15.1772 17.5508L27.9809 30.3545L30.3545 27.9809L17.5508 15.1772L30.3545 2.37358L27.9809 0L15.1772 12.8037L2.37358 0Z" fill="black"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M2.37358 0L0 2.37358L12.8037 15.1772L6.87408e-06 27.9809L2.37359 30.3545L15.1772 17.5508L27.9809 30.3545L30.3545 27.9809L17.5508 15.1772L30.3545 2.37358L27.9809 0L15.1772 12.8037L2.37358 0Z" fill="black"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M2.37358 0L0 2.37358L12.8037 15.1772L6.87408e-06 27.9809L2.37359 30.3545L15.1772 17.5508L27.9809 30.3545L30.3545 27.9809L17.5508 15.1772L30.3545 2.37358L27.9809 0L15.1772 12.8037L2.37358 0Z" fill="black"/>
            </svg>
            <div className="Heading">
                <div>
                    <p className="SU_header">Login</p>
                    <p className="SU_headersubtext">Don't have an account? <span><Link to='SignUp'>Sign Up</Link></span></p>
            </div>
        </div>
        <div className="SUF_content">
            <form action="" onSubmit={login}>
                <div className="SUF_TextInputs"> 
                        <div className="EmailDiv">
                            <p>Email <span title='This is a required field.'>*</span></p>
                            <input 
                            onChange={(e) => setEmail(e.target.value)} 
                            title="Enter your Email Address" 
                            name='email' 
                            type="email" 
                            id="email" 
                            placeholder="Enter your email address" 
                            required/>
                        </div>
                        <div className="PasswordDiv">
                            <p>Password <span title='This is a required field.'>*</span></p>
                            <input 
                            title="Enter your Password" 
                            type="password"
                            name='password'
                            id='password'
                            onChange={(e) => setPassword(e.target.value)} 
                            placeholder="Enter your password" 
                            required/>
                            <p><small className="PasswordSubText">Forgot your Password?</small></p>
                        </div>
                </div>
                <div className="SUF_Buttons">
                    <input className="SignUpButton" type="submit" value="Login" /> <br></br>
                    <input className="ResetButton" type="reset" value="Reset" />
                </div>
            </form> 
        </div>
        
        </div>
    )
  }