import './SignUp.css';
import Login from '../Login/Login';
import { useLocation, useNavigate, useNavigation } from 'react-router-dom';
import { useState } from 'react';
import { PatternFormat } from 'react-number-format';


export default function SignUp() {

    const [role, setRole] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [showerr, setShowerr] = useState('');
    const navigate = useNavigate();
    const register = async (e) => {
        e.preventDefault();
        // API Call
        const response = await fetch(`${API_URL}/api/auth/register`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name: name,
                email: email,
                password: password,
                phone: phone,
                role: role,
            }),
        });
        const json = await response.json();
        if (json.authtoken) {
            sessionStorage.setItem("auth-token", json.authtoken);
            sessionStorage.setItem("role", role);
            sessionStorage.setItem("name", name);
            // phone and email
            sessionStorage.setItem("phone", phone);
            sessionStorage.setItem("email", email);
            // Redirect to home page
            navigate("/");   //on directing to home page you need to give logic to change login and signup buttons with name of the user and logout button where you have implemented Navbar functionality
            window.location.reload();
        } else {
            if (json.errors) {
                for (const error of json.errors) {
                    setShowerr(error.msg);
                }
            } else {
                setShowerr(json.error);
            }
        }
    };

    
    return (
        <form className="SignUpForm" method='POST' onSubmit={register}>
        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 31 31" fill="none" className="XButton">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M2.37358 0L0 2.37358L12.8037 15.1772L6.87408e-06 27.9809L2.37359 30.3545L15.1772 17.5508L27.9809 30.3545L30.3545 27.9809L17.5508 15.1772L30.3545 2.37358L27.9809 0L15.1772 12.8037L2.37358 0Z" fill="black"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M2.37358 0L0 2.37358L12.8037 15.1772L6.87408e-06 27.9809L2.37359 30.3545L15.1772 17.5508L27.9809 30.3545L30.3545 27.9809L17.5508 15.1772L30.3545 2.37358L27.9809 0L15.1772 12.8037L2.37358 0Z" fill="black"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M2.37358 0L0 2.37358L12.8037 15.1772L6.87408e-06 27.9809L2.37359 30.3545L15.1772 17.5508L27.9809 30.3545L30.3545 27.9809L17.5508 15.1772L30.3545 2.37358L27.9809 0L15.1772 12.8037L2.37358 0Z" fill="black"/>
            </svg>
        <div className="Heading">
        <div>
            <p className="SU_header">Sign Up</p>
            <p className="SU_headersubtext">Already a member? <a href="Login" ><span>Login</span></a></p>
        </div>
        </div>
        <div className="SUF_content">
            <div className="SUF_TextInputs">  
            <div className="RoleDiv">
            <p>Role <span>*</span></p>
            <select 
            title="Select Role" 
            name="role" 
            id="role" 
            onChange={(e) => setRole(e.target.value)}
            required>
                <option value="Select Role" disabled selected hidden>Select Role</option>
                <option value="Patient">Patient</option>
                <option value="Doctor">Doctor</option>
            </select>
            </div>  
            <div className="NameDiv">
                <p>Name <span>*</span></p>
                <input 
                name='Name'
                id='Name'
                title="Enter Your Name" 
                type="text" 
                placeholder="Enter your Full Name"
                onChange={(e) => setName(e.target.value)}
                required />
            </div>
            <div className="PhoneNumberDiv">
                <p>Phone number <span>*</span></p>
                <PatternFormat
                    id='phone'
                    name='phone' 
                    type="tel"
                    format="+1 (###) ###-####" 
                    mask="_" 
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder='Enter Your Phone Number (XXX)-XXX-XXXX'
                    required
                />
            </div>
            <div className="EmailDiv">
                <p>Email <span>*</span></p>
                <input 
                name='Email'
                id='Email'
                title="Enter your Email Address" 
                type="email" 
                placeholder="Enter your email address"
                onChange={(e) => setEmail(e.target.value)}
                required />
            </div>
            <div className="PasswordDiv">
                <p>Password <span>*</span></p>
                <input 
                name='Password'
                id='Password'
                title="Enter your Password" 
                type="password" 
                placeholder="Enter your password" 
                onChange={(e) => setPassword(e.target.value)} 
                required />
                <p><small className="PasswordSubText">* Must be more than 8 characters</small></p>
            </div>
            </div>
            <div className="SUF_Buttons">
                <button className="SignUpButton" type="submit" value="Sign Up">Sign Up</button> <br></br>
                <button className="ResetButton" type="reset" value="Reset">Reset</button>
            </div>
            {showerr && <div className="err" style={{ color: 'red' }}>{showerr}</div>}
        </div>
        
    </form>
    )
  }