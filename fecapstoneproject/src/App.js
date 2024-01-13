import logo from './logo.svg';
import './App.css';
import NavBar from './Components/NavBar/NavBar';


function App() {
  return (
   <div className='App'>
      <BrowserRoutes>
        <NavBar>
          <Routes></Routes>
        </NavBar>
      </BrowserRoutes>
   </div>
  );
}

export default App;