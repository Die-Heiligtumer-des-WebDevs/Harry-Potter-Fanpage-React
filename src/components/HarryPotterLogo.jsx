// import "../styles/components/harryPotterLogo.scss"
import "../styles/main.scss"
import logo from "../assets/harryPotterLogo/logo-gold.png";
import {Link} from "react-router-dom"

const HPLogo = () => {
    return (
        <Link href="/">
            <img className="HPLogo" src={logo} alt="Harry Potter Logo" />
        </Link>
    );
};

export default HPLogo;





