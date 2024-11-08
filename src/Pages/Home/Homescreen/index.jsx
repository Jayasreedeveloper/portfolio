import Herosection from "../Herosection";
import Skills from "../Skills";
import About from "../About";
import Myportfolio from "../Myportfolio";
import ContactMe from "../Contactme";
import Footer from "../Footer";

import React from 'react'

function Home() {
  return (
    <>
        <Herosection/>
        <Skills/>
        <About/>
        <Myportfolio/>
        <ContactMe/>
        <Footer/>
    </>
  )
}

export default Home;