import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import styles from "./services.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPersonDigging,
  faScrewdriverWrench,
  faTrowelBricks,
  faPaintRoller,
} from "@fortawesome/free-solid-svg-icons";

const Services = () => {
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
      className={
        isVisible ? "animate-section services-section" : "services-section"
      }
    >
      <div className="services-title">
        What we can <span>offer</span>
      </div>
      <div className="services-offer">
        <div className="service">
          <FontAwesomeIcon icon={faPersonDigging} className="icon" />
          <h3>Build</h3>
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
            temporibus quos illum, quam quibusdam recusandae earum quidem
            numquam dolores reiciendis consequuntur perspiciatis, iure minus
            veniam vel aliquam reprehenderit rem officiis?
          </span>
        </div>
        <div className="service">
          <FontAwesomeIcon icon={faScrewdriverWrench} className="icon" />
          <h3>Maintenance</h3>
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
            temporibus quos illum, quam quibusdam recusandae earum quidem
            numquam dolores reiciendis consequuntur perspiciatis, iure minus
            veniam vel aliquam reprehenderit rem officiis?
          </span>
        </div>
        <div className="service">
          <FontAwesomeIcon icon={faTrowelBricks} className="icon" />
          <h3>Renovation</h3>
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
            temporibus quos illum, quam quibusdam recusandae earum quidem
            numquam dolores reiciendis consequuntur perspiciatis, iure minus
            veniam vel aliquam reprehenderit rem officiis?
          </span>
        </div>
        <div className="service">
          <FontAwesomeIcon icon={faPaintRoller} className="icon" />
          <h3>Painting</h3>
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
            temporibus quos illum, quam quibusdam recusandae earum quidem
            numquam dolores reiciendis consequuntur perspiciatis, iure minus
            veniam vel aliquam reprehenderit rem officiis?
          </span>
        </div>
      </div>
    </section>
  );
};

export default Services;
