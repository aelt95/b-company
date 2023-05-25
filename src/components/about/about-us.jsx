import styles from "./about-us.css";
import building from "../../../public/building.svg";
import Image from "next/image";

const AboutUs = () => {
  return (
    <section className="about-us">
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
