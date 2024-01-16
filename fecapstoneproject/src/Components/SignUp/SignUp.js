import './SignUp.css';
import Login from '../Login/Login';

let tele = document.querySelector('#telle');

    tele.addEventListener('keyup', function(e){
      if (Event.key != 'Backspace' && (tele.value.length === 3 || tele.value.length === 7)){
      tele.value += '-';
      }
    });

export default function SignUp() {
    return (
        <form className="SignUpForm">
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
            <select title="Select Role" name="Role" id="" required>
                <option value="Select Role" disabled selected hidden>Select Role</option>
                <option value="Patient">Patient</option>
                <option value="Doctor">Doctor</option>
            </select>
            </div>  
            <div className="NameDiv">
                <p>Name <span>*</span></p>
                <input title="Enter Your Name" type="text" placeholder="Enter your Full Name" required />
            </div>
            <div className="PhoneNumberDiv">
                <p>Phone number <span>*</span></p>
                <input id="telle" maxLength={10} title="Enter Your Phone Number" type="tel" placeholder="Enter your phone number" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" required />
            </div>
            <div className="EmailDiv">
                <p>Email <span>*</span></p>
                <input title="Enter your Email Address" type="email" placeholder="Enter your email address" required />
            </div>
            <div className="PasswordDiv">
                <p>Password <span>*</span></p>
                <input title="Enter your Password" type="password" placeholder="Enter your password"  required />
                <p><small className="PasswordSubText">* Must be more than 8 characters</small></p>
            </div>
            </div>
            <div className="SUF_Buttons">
                <button className="SignUpButton" type="submit" value="Sign Up">Sign Up</button> <br></br>
                <button className="ResetButton" type="reset" value="Reset">Reset</button>
            </div>
        </div>
        
    </form>
    )
  }