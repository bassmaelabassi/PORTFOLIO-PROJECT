import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const About = () => {
  const aboutRef = useRef(null);

  useEffect(() => {
    gsap.from(aboutRef.current, {
      opacity: 0,
      y: 50,
      duration: 1.2,
      ease: "power2.out",
    });
  }, []);

  return (
    <section ref={aboutRef} className="p-6 text-center">
      <h2 className="text-2xl font-bold">À Propos</h2>
      <p>
        Bienvenue sur mon portfolio ! Je suis Bassma El Abassi, développeuse passionnée par les technologies modernes et l'innovation...
      </p>
    </section>
  );
};

export default About;
