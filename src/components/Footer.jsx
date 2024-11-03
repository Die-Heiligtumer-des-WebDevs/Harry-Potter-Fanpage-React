import {
  FaGithub,
  FaShoppingBag,
  FaReact,
  FaHandHoldingHeart,
} from "react-icons/fa";
import { GiMagicGate } from "react-icons/gi";
import { LuFerrisWheel } from "react-icons/lu";
import { IoMdGitBranch } from "react-icons/io";
import { useState, useEffect } from "react";
import "../styles/main.scss";

function Footer() {
  const [showFooter, setShowFooter] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.innerHeight + window.scrollY;
      const pageHeight = document.documentElement.scrollHeight;
      setShowFooter(scrollPosition >= pageHeight - 1);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`footer-container ${showFooter ? "visible" : ""}`}>
      <div className="footer-links">
        <a href="https://github.com/Die-Heiligtumer-des-WebDevs/Harry-Potter-Fanpage-React" target="_blank">
          View our <FaGithub className="icon" /> Repository
        </a>
        <a href="https://www.harrypotter.com/de" target="_blank">
          The <GiMagicGate className="icon" /> awaits
        </a>
        <a href="https://www.orlandoparks.de/the-wizarding-world-of-harry-potter-universal-florida/" target="_blank">
          Funfactor <LuFerrisWheel className="icon" />
        </a>
        <a href="https://www.muggel-shop.de/c/hogwarts" target="_blank">
          Go put something in <FaShoppingBag className="icon" />
        </a>
      </div>

      <div className="footer-copyright">
        <p>
          © {new Date().getFullYear()} Created with <FaReact />,<IoMdGitBranch /> & <FaHandHoldingHeart /> by
          <strong> Die Heiligtümer des WebDevs</strong>
        </p>
      </div>
    </div>
  );
}

export default Footer;

