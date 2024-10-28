import {
  FaGithub,
  FaShoppingBag,
  FaReact,
  FaHandHoldingHeart,
} from "react-icons/fa";
import { GiMagicGate } from "react-icons/gi";
import { LuFerrisWheel, LuBrainCircuit } from "react-icons/lu";
import { IoMdGitBranch } from "react-icons/io";

import "../styles/main.scss";
function Footer() {
  return (
    <>
      <div className="footer-container">
        <div className="footer-github">
          <p>
            Created with <FaReact />, <IoMdGitBranch />/<LuBrainCircuit /> and{" "}
            <FaHandHoldingHeart /> by 
            <strong> Die Heiligtümer des WebDevs</strong>
          </p>
        </div>
        <div className="footer-links">
          <a
            href="https://github.com/Die-Heiligtumer-des-WebDevs/Harry-Potter-Fanpage-React"
            target="_blank"
          >
            View our <FaGithub className="icon" /> Repository
          </a>
          <a href="https://www.harrypotter.com/de" target="_blank">
            The <GiMagicGate className="icon" /> awaits
          </a>
          <a
            href="https://www.orlandoparks.de/the-wizarding-world-of-harry-potter-universal-florida/"
            target="_blank"
          >
            Funfactor <LuFerrisWheel className="icon" />
          </a>
          <a href="https://www.muggel-shop.de/c/hogwarts" target="_blank">
            Go put something in <FaShoppingBag className="icon" />
          </a>
        </div>
      </div>
    </>
  );
}

export default Footer;
