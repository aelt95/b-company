"use client";
import styles from "./header.css";
import Image from "next/image";
import image1 from "../../public/construction1-unsplash.jpg";
import image2 from "../../public/construction2-unsplash.jpg";
import { TypeAnimation } from "react-type-animation";

const Header = () => {
  return (
    <header>
      <nav className="nav-bar">
        <span>Logo?</span>
        <ul>
          <li>About us</li>
          <li>Contact us</li>
        </ul>
      </nav>
      <div className="header-section">
        <div className="company-content">
          <h1 className="company-name">Company name</h1>
          <div className="company-description">
            <div className="static-txt">We can</div>
            <TypeAnimation
              className="dynamic-txt"
              speed={25}
              sequence={["build", 2000, "renovate", 2000, "innovate", 2000]}
              repeat={Infinity}
            />{" "}
          </div>
          <button>Contact Us </button>
        </div>
        <div className="images-show">
          <Image className="image image-1" src={image1} />
          <Image className="image image-2" src={image2} />
        </div>
      </div>
    </header>
  );
};

export default Header;
