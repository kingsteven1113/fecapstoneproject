// import &#39;./NavBar.css&#39;
import './Navbar.css';

export default function NavBar() {
    return (
        <div className="NavBar">
        <div className="Logo">StayHealthy<span>+</span>
        </div>
        <div className="NavItemList">
            <nav>
            <a className="NavItem" href="E:/Coding/grihf-frontend_capstone_starter_code/Landing_Page/LandingPage.html">Home</a>
            <a className="NavItem" href="#">Appointments</a>
            <a className="NavItem" href="#">Health Blog</a>
            <a className="NavItem" href="#">Reviews</a>
            <a href="E:/Coding/grihf-frontend_capstone_starter_code/Sign_Up/Sign_Up.html"><button type="button" className="NavButton">Sign Up</button></a>
            <a href="E:\Coding\grihf-frontend_capstone_starter_code\Login\Login.html"><button type="button" className="NavButton">Login</button></a>
            </nav>
    </div>
    </div>
    )
  }