import './Navbar.css';
import { NavLink } from "react-router-dom";
import { useEffect, useState } from 'react';

const NavBar = () => {
    const [click, setClick] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [showDropdown, setShowDropdown] = useState(false);
    const handleClick = () => setClick(!click);

    const handleLogout = () => {
        sessionStorage.removeItem("auth-token");
        sessionStorage.removeItem("name");
        sessionStorage.removeItem("email");
        sessionStorage.removeItem("phone");
        // remove email phone
        localStorage.removeItem("doctorData");
        setIsLoggedIn(false);
        // setUsername("");

        // Remove the reviewFormData from local storage
        for (let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i);
            if (key.startsWith("reviewFormData_")) {
                localStorage.removeItem(key);
            }
        }
        setEmail('');
        window.location.reload();
    }
    const handleDropdown = () => {
        setShowDropdown(!showDropdown);
    }
    useEffect(() => {
        const storedemail = sessionStorage.getItem("email");

        if (storedemail) {
            setIsLoggedIn(true);
            setUsername(storedemail);
        }
    }, []);

    useEffect(() => {
        // Check if the user is already logged in
        const storedUsername = sessionStorage.getItem("name");

        if (storedUsername) {
            setIsLoggedIn(true);
            setUsername(storedUsername);
        }
    }, []);


    return (
        <div className="NavBar">
        <NavLink to='/' className="Logo">StayHealthy<span>+</span>
        </NavLink>
        <div>
            {isLoggedIn ? (
                    <nav>
                        <ul className="NavItemList">
                        
                        <li><NavLink to="/fecapstoneproject" className="NavItem">Ho2me</NavLink></li>
                        <li><NavLink to='/search/doctors' className="NavItem">Appointments</NavLink></li>
                        <li><NavLink to='instant-consultation' className="NavItem">Instant Consultation</NavLink></li>
                        <li><NavLink className="NavItem">Health Blog</NavLink></li>
                        <li><NavLink to='/reviews' className="NavItem">Reviews</NavLink></li>
                        
                        <li>
                        <NavLink onClick={handleDropdown} className="NavItem"> Hello, {username}
                           
                            {showDropdown && (
                                <ul className='dropdown-menu'>
                                        <li><NavLink className="NavItem HelloUser" to="/profile">Your Profile</NavLink></li>
                                        <li><NavLink className="NavItem HelloUser" to="/reports">Your Reports</NavLink></li>
                               </ul>
                            )}
                        </NavLink>
                        </li>
                        
                        <li>
                        <NavLink className="NavButton" onClick={handleLogout}>
                                Logout
                        </NavLink>
                        </li>
                        </ul>
                    </nav>
                ) : (
                    <nav>
            <NavLink to="/" className="NavItem">Home</NavLink>
            <NavLink to='/search/doctors' className="NavItem">Appointments</NavLink>
            <NavLink to='instant-consultation' className="NavItem">Instant Consultation</NavLink>
            <NavLink className="NavItem">Health Blog</NavLink>
            <NavLink to='/reviews' className="NavItem">Reviews</NavLink>
            <NavLink to='SignUp' className="NavButton">Sign Up</NavLink>
            <NavLink to='Login' className="NavButton">Login</NavLink>
                    </nav>
                )}
                
            
    </div>
    </div>

    )}

    export default NavBar;