import React from 'react'
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

function HeroSection() {
  useGSAP(() => {
    gsap.from(".heroSection-inner  ", {
      duration: 0.2,
      delay: 0.2,
      opacity: 0
    })

    gsap.from(".heroSection", {
      transform: "scaleX(0.7) scaleY(0.2) translateY(80%)",
      borderRadius: "200px",
      duration: 4,
      ease: "expo.out"

    })

    gsap.from(".heroSection-inner h1, .heroSection-inner p, .heroSection-inner .moving-div", {
      opacity: 0,
      transform: "scaleX(0.7) scaleY(0.2) translateY(60%)",
      borderRadius: "200px",
      ease: "expo.out",

      duration: 1.4,
      stagger: 0.5
    })


  })

  return (
    <div className='heroSection'>
      <div className='heroSection-inner'>
        <h1>Namrata Universal</h1>
        <p>At Namrata Universal We Deliver With Focus On Quality, Integrity <br />And Long Term Relation.
          We have experienced professionals who <br /> understand that IT services is changing, and are
          true partners <br />who care about your success.</p>

        <div className="moving-div">

          <h2><i>Our clients</i> </h2>

          <div className="move">
            <img src="https://namratauniversal.com/img/client-1.jpg" alt="" />
            <img src="https://namratauniversal.com/img/client-2.jpg" alt="" />
            <img src="https://namratauniversal.com/img/client-3.jpg" alt="" />
            <img src="https://namratauniversal.com/img/client-4.jpg" alt="" />
            <img src="https://namratauniversal.com/img/client-11.png" alt="" />
            <img src="https://namratauniversal.com/img/client-12.png" alt="" />
            <img src="https://namratauniversal.com/img/client-21.png" alt="" />
            <img src="https://namratauniversal.com/img/client-23.png" alt="" />
            <img src="https://namratauniversal.com/img/client-15.png" alt="" />
            <img src="https://namratauniversal.com/img/client-16.png" alt="" />
            <img src="https://namratauniversal.com/img/client-5.jpg" alt="" />
            <img src="https://namratauniversal.com/img/client-6.jpg" alt="" />
            <img src="https://namratauniversal.com/img/client-7.jpg" alt="" />
            <img src="https://namratauniversal.com/img/client-8.jpg" alt="" />
            <img src="https://namratauniversal.com/img/client-9.png" alt="" />
            <img src="https://namratauniversal.com/img/client-10.png" alt="" />
            <img src="https://namratauniversal.com/img/client-14.png" alt="" />
            <img src="https://namratauniversal.com/img/client-13.png" alt="" />
            <img src="https://namratauniversal.com/img/client-18.png" alt="" />
            <img src="https://namratauniversal.com/img/client-17.png" alt="" />
            <img src="https://namratauniversal.com/img/client-19.jpeg" alt="" />
            <img src="https://namratauniversal.com/img/client-20.jpg" alt="" />
            <img src="https://namratauniversal.com/img/client-22.png" alt="" />
            <img src="https://namratauniversal.com/img/client-24.png" alt="" />
            <img src="https://namratauniversal.com/img/client-25.jpeg" alt="" />
            <img src="https://namratauniversal.com/img/client-26.png" alt="" />
          </div>
          <div className="move">
            <img src="https://namratauniversal.com/img/client-1.jpg" alt="" />
            <img src="https://namratauniversal.com/img/client-2.jpg" alt="" />
            <img src="https://namratauniversal.com/img/client-3.jpg" alt="" />
            <img src="https://namratauniversal.com/img/client-4.jpg" alt="" />
            <img src="https://namratauniversal.com/img/client-11.png" alt="" />
            <img src="https://namratauniversal.com/img/client-12.png" alt="" />
            <img src="https://namratauniversal.com/img/client-21.png" alt="" />
            <img src="https://namratauniversal.com/img/client-23.png" alt="" />
            <img src="https://namratauniversal.com/img/client-15.png" alt="" />
            <img src="https://namratauniversal.com/img/client-16.png" alt="" />
            <img src="https://namratauniversal.com/img/client-5.jpg" alt="" />
            <img src="https://namratauniversal.com/img/client-6.jpg" alt="" />
            <img src="https://namratauniversal.com/img/client-7.jpg" alt="" />
            <img src="https://namratauniversal.com/img/client-8.jpg" alt="" />
            <img src="https://namratauniversal.com/img/client-9.png" alt="" />
            <img src="https://namratauniversal.com/img/client-10.png" alt="" />
            <img src="https://namratauniversal.com/img/client-14.png" alt="" />
            <img src="https://namratauniversal.com/img/client-13.png" alt="" />
            <img src="https://namratauniversal.com/img/client-18.png" alt="" />
            <img src="https://namratauniversal.com/img/client-17.png" alt="" />
            <img src="https://namratauniversal.com/img/client-19.jpeg" alt="" />
            <img src="https://namratauniversal.com/img/client-20.jpg" alt="" />
            <img src="https://namratauniversal.com/img/client-22.png" alt="" />
            <img src="https://namratauniversal.com/img/client-24.png" alt="" />
            <img src="https://namratauniversal.com/img/client-25.jpeg" alt="" />
            <img src="https://namratauniversal.com/img/client-26.png" alt="" />
          </div>

        </div>

      </div>

    </div>
  )
}

export default HeroSection
