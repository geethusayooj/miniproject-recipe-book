import { NavLink } from "react-router-dom"
import App from "../App"
import AboutPage from "../page/AboutPage"
import HomePage from "../page/HomePage"

function Sidebar(){
    return(
        <div className="sidebarcontainer">
        
        <NavLink to="/about">About</NavLink>
        
        </div>
    )
}
export default Sidebar