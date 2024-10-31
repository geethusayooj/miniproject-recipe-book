import { NavLink } from "react-router-dom";
import App from "../App";
import AboutPage from "../page/AboutPage";


function Sidebar() {
  return (
    <div className="sidebarcontainer">
      <div className="btnContainer">
        <NavLink className="homeBtn" to="/">
          Home
        </NavLink>
        <NavLink className="aboutBtn" to="/about">
          About
        </NavLink>
      </div>
    </div>
  );
}
export default Sidebar;
