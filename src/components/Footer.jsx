import {
  FaGithub,
  FaShoppingBag,
  FaReact,
  FaHandHoldingHeart,
} from "react-icons/fa";
import { GiMagicGate } from "react-icons/gi";
import { LuFerrisWheel, LuBrainCircuit } from "react-icons/lu";
import { IoMdGitBranch } from "react-icons/io";

import "../styles/main.css";
function Footer() {
  return (
    <>
      <div className="footer-container">
        <div className="footer-github">
          <p>
            Created with <FaReact />, <IoMdGitBranch />/<LuBrainCircuit /> and{" "}
            <FaHandHoldingHeart /> by
          </p>
          <strong>Die Heiligtümer des WebDevs</strong>
          <a
            href="https://github.com/Die-Heiligtumer-des-WebDevs/Harry-Potter-Fanpage-React"
            target="_blank"
          >
            View our <FaGithub className="icon" /> Repository
          </a>
        </div>
        <div className="footer-links">
          <a href="https://www.harrypotter.com/de">
            <GiMagicGate className="icon" /> The Magic awaits
          </a>
          <a href="https://www.orlandoparks.de/the-wizarding-world-of-harry-potter-universal-florida/">
            <LuFerrisWheel className="icon" /> The Fun awaits
          </a>
          <a href="https://www.muggel-shop.de/c/hogwarts">
            <FaShoppingBag className="icon" />
            The Money flies
          </a>
        </div>
      </div>
    </>
  );
}

export default Footer;
