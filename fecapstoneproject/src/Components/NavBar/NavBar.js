import './Navbar.css';
import { NavLink } from "react-router-dom";

export default function NavBar() {
    return (
        <div className="NavBar">
        <div className="Logo">StayHealthy<span>+</span>
        </div>
        <div className="NavItemList">
            <nav>
            <NavLink to="/" className="NavItem">Home</NavLink>
            <NavLink to='/booking-appointments' className="NavItem">Appointments</NavLink>
            <NavLink to='instant-consultation' className="NavItem">Instant Consultation</NavLink>
            <NavLink className="NavItem">Health Blog</NavLink>
            <NavLink className="NavItem">Reviews</NavLink>
            <NavLink to="SignUp" className="NavButton">Sign Up</NavLink>
            <NavLink to="Login" className="NavButton">Login</NavLink>
            </nav>
    </div>
    </div>
    )
  }