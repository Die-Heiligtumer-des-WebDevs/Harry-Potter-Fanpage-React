import "../styles/components/harryPotterLogo.scss"
import logo from "../assets/harryPotterLogo/logo-gold.png";

const HPLogo = () => {
    return (
        // den href pfad richtig angeben um auf die richtige seite zu kommen
        <a href="/">
            <img className="HPLogo" src={logo} alt="Harry Potter Logo" />
        </a>
    );
};

export default HPLogo;





