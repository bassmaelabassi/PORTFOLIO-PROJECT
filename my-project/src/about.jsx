import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const About = () => {
  const aboutRef = useRef(null);

  useEffect(() => {
    gsap.from(aboutRef.current, {
      opacity: 1,
      y: 50,
      duration: 1.2,
      ease: "power2.out",
    });
  }, []);

  return (
    <section ref={aboutRef} className="p-6 text-center mb-20 text-black ">
      <h2 className="text-3xl font-bold mb-10 ">À Propos</h2>
      <p className="text-2xl">
      Je suis Bassma El Abassi, développeuse passionnée par les technologies modernes et l'innovation. Je conçois des solutions performantes et intuitives, alliant esthétique et efficacité. Mon objectif est de transformer vos idées en projets concrets et impactants.      </p>
    </section>
  );
};

export default About;
