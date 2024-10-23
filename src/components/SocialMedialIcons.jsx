import { FaInstagram, FaYoutube, FaTwitter, FaFacebook } from "react-icons/fa";

const SocialMedia = () => {
    return(
        <div className="socialMedia-box">
            <a href="https://www.instagram.com/harrypotter/?hl=en" target="blank"><FaInstagram className="socialMedia-icons"/></a>
            <a href="https://www.youtube.com/@harrypotter" target="blank"><FaYoutube  className="socialMedia-icons"/></a>
            <a href="https://x.com/harrypotter/?hl=en" target="blank"><FaTwitter  className="socialMedia-icons"/></a>
            <a href="https://www.facebook.com/harrypotter/?hl=en" target="blank"><FaFacebook className="socialMedia-icons"/></a>
        </div>
    )
}

export default SocialMedia;