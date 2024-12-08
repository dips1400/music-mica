import "./App.css";
import Discover from "./components/Discover";
import Library from "./components/Library";
import Trends from "./components/Trends";
import Home from "./components/Home";
import Logo from "./images/logo.png";
import Homes from "./images/home.png";
import Trend from "./images/trend.png";
import Music from "./images/music.png";
import Search from "./images/discover.png";
import Setting from "./images/settings.png";
import Logout from "./images/logout2.png";
import { Route, Routes, NavLink } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <div className="menu">
        <div className="logo">
          <img src={Logo} alt="logo" height={35} width={30} />
          <span class="dream">Dream</span>Music
        </div>
        <div className="menulist">
          <p>MENU</p>
          <ul>
            <li>
              <NavLink to="/" activeClassName="active">
                <img src={Homes} alt="home" height={17} width={17} />
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/trends" activeClassName="active">
                <img src={Trend} alt="trend" height={17} width={17} />
                Trends
              </NavLink>
            </li>
            <li>
              <NavLink to="/library" activeClassName="active">
                <img src={Music} alt="music" height={17} width={17} />
                Library
              </NavLink>
            </li>
            <li>
              <NavLink to="/discover" activeClassName="active">
                <img src={Search} alt="discovery" height={17} width={17} />
                Discover
              </NavLink>
            </li>
            <div className="bottom-links">
              <p style={{fontSize:"small"}}>GENERAL</p>
              <li>
                <NavLink to="/setting" activeClassName="active">
                  <img src={Setting} alt="setting" height={17} width={17} />
                  Setting
                </NavLink>
              </li>
              <li>
                <NavLink to="/logout" activeClassName="active">
                  <img style={{backgroundColor:"black"}}src={Logout} alt="logout" height={17} width={17} />
                  Logout
                </NavLink>
              </li>
            </div>
          </ul>
        </div>
      </div>
      <div className="content">
      <Routes>
      <Route path="/" element={<Home />} />
          <Route path="/trends" element={<Trends />} />
          <Route path="/library" element={<Library />} />
          <Route path="/discover" element={<Discover />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
