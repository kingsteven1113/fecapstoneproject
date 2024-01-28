import './Navbar.css';
import { NavLink } from "react-router-dom";

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
        <div className="Logo">StayHealthy<span>+</span>
        </div>
        <div className="NavItemList">
            <nav>
            <NavLink to="/" className="NavItem">Home</NavLink>
            <NavLink to='/search/doctors' className="NavItem">Appointments</NavLink>
            <NavLink to='instant-consultation' className="NavItem">Instant Consultation</NavLink>
            <NavLink className="NavItem">Health Blog</NavLink>
            <NavLink className="NavItem">Reviews</NavLink>
            {isLoggedIn ? (
                    <>
                        <li onClick={handleDropdown} className="HelloUser">
                            <p>
                                Hello, {username}
                            </p>
                            {showDropdown && (
                                <select name="" id="">
                                        <NavLink to="/profile">Your Profile</NavLink>
                                        <NavLink to="/reports">Your Reports</NavLink>
                                </select>
                            )}
                        </li>
                        
                        <NavLink className="NavButton" onClick={handleLogout}>
                                Logout
                        </NavLink>
                        

                    </>
                ) : (
                    <>
                        <NavLink to="SignUp" className="NavButton">Sign Up</NavLink>
                        <NavLink to="Login" className="NavButton">Login</NavLink>
                    </>
                )}
            <NavLink to="SignUp" className="NavButton">Sign Up</NavLink>
            <NavLink to="Login" className="NavButton">Login</NavLink>
            </nav>
    </div>
    </div>

    )}

    export default NavBar;