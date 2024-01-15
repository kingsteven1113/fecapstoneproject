import './Navbar.css';

export default function NavBar() {
    return (
        <div className="NavBar">
        <div className="Logo">StayHealthy<span>+</span>
        </div>
        <div className="NavItemList">
            <nav>
            <a className="NavItem">Home</a>
            <a className="NavItem" href="#">Appointments</a>
            <a className="NavItem" href="#">Health Blog</a>
            <a className="NavItem" href="#">Reviews</a>
            <a className="NavButton">Sign Up</a>
            <a className="NavButton">Login</a>
            </nav>
    </div>
    </div>
    )
  }