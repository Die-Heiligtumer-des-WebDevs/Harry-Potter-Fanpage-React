import { FaInstagram, FaYoutube, FaTwitter, FaFacebook } from "react-icons/fa";

import "../styles/components/icons.scss"

const SocialMedia = () => {
    return(
        <div className="socialMedia-box">
        <span><FaInstagram className="socialMedia-icons"/></span>
        <span><FaYoutube  className="socialMedia-icons"/></span>
        <span><FaTwitter  className="socialMedia-icons"/></span>
        <span><FaFacebook className="socialMedia-icons"/></span>
        </div>
    )
}

export default SocialMedia;