import { NavLink } from "react-router-dom"

import SocialMedia from "./SocialMedialIcons.jsx"
import HPLogo from "./HarryPotterLogo.jsx"
import "../styles/components/navbar.scss"
const Header = () => {
    return (
        <header>
            <nav className="navbar">
                <ul>
                    <li>
                        <SocialMedia />
                    </li>
                    <li>
                        <NavLink to="/"><HPLogo /></ NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
export default Header;