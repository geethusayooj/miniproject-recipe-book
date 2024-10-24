import { NavLink } from "react-router-dom"
import App from "../App"
import AboutPage from "./About"
import Home from "./Home"

function Sidebar(){
    return(
        <div className="sidebarcontainer">
        
        <NavLink to="/aboutpage">About</NavLink>
        
        </div>
    )
}
export default Sidebar