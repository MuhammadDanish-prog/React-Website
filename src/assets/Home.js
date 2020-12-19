import React from 'react'
import { NavLink } from 'react-router-dom';
import Navbar from './pieces/Navbar'
import web from '../img/img.jpg'
import Common from './pieces/Common';

const Home = () =>{
    return(
    <>
    <Common name="Grow your business with" imgsrc={web} visit="/services" btnName="Get Started" />
    </>
    );
}

export default Home;