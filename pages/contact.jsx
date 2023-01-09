import React from 'react'
import Contact from './components/Contact'
import Hero from './components/Hero'
import Footer from './components/Footer'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";


const contact = () => {
  return (
    <div>
       <Hero
        heading='Contact'
        message='Je prendrais contact avec vous afin de discuter de votre projet !'
      />
      <Contact />
      <a href="#">
  <FontAwesomeIcon className="mx-4" style={{ fontSize: "24px", alignItems: "center" }} icon={faFacebook} />
</a>
<a href="#">
  <FontAwesomeIcon className="mx-4" style={{ fontSize: "24px", alignitems: "center" }} icon={faInstagram} />
</a>
<a href="#">
  <FontAwesomeIcon className="mx-4" style={{ fontSize: "24px", alignItems: "center" }} icon={faTwitter} />
</a>
      <Footer />
    </div>
  )
}

export default contact