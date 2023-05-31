import { useRef, useEffect, useState } from "react";
import styles from "./about-us.css";
import building from "../../../public/building.svg";
import Image from "next/image";

const AboutUs = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef();
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        setIsVisible(entry.isIntersecting);
      },
      { root: null, threshold: 0, rootMargin: "-40px" }
    );
    observer.observe(ref.current);
  }, []);
  return (
    <section
      ref={ref}
      className={isVisible ? "animate-section about-us" : "about-us"}
      id="about"
    >
      <Image className="building-svg" src={building} />
      <div className="content">
        <div className="content-title">
          About <span>Us</span>
        </div>
        <div className="content-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae ea
          rerum a repudiandae! Fugiat fuga blanditiis molestias, tenetur,
          obcaecati reprehenderit debitis reiciendis, temporibus voluptate animi
          omnis quaerat error ipsum labore?
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
