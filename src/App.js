import "./App.css";
import Home from "./Home";
import Contact from "./Contact";
import openauto from "./photos/openauto.jpg";
import Header from "./Header";
import Footer from "./Footer";
import logo from './photos/Capture.JPG'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import footer from './photos/footer.JPG'


function App() {
  return (
    <>
    
      <div className="flex-column">
        <div className="left">
          <div className="logo">
            <img src={logo}></img>
          </div>
          <h1 className="heading">
            Vehicle Maintenance From The Comfort Of Your Home
          </h1>
          <h1 className="paratext">
            Open Auto Soothes the hassle of maintaining your vehicle and helps
            you deal with unexpected repairs worry free
          </h1>
          <Home></Home>
          <div className="footer">
            <img src={footer}></img>
          </div>
        </div>
        <div className="right">
        <div className="logo">
        <FontAwesomeIcon icon="fa-solid fa-phone" /> +769 586 4558 <FontAwesomeIcon icon="fa-solid fa-phone" /> service@openauto.ca
         <button type="submit" className="download-button">Download the app</button>
          </div>
          <img src={openauto}></img>
        </div>
      </div>
    </>
  );
}

export default App;
