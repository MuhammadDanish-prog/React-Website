import React from 'react'
import { NavLink } from 'react-router-dom';
import Navbar from './pieces/Navbar'
import Common from './pieces/Common';
import web from '../img/img2.jpg'

const About = () =>{
    return(
        <>
        <Common name="Welcome to my About page" imgsrc={web} visit="/contact" btnName="Contact Now" />
        </>
    );
}

export default About;