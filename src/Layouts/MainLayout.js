import Navigation from "../Components/Navigation";
import Footer from "../Footer";
import React from 'react';
import '../App.css';


const MainLayout = (props) => {
  return (
    <>
    <Navigation/>
    {props.children}
    <Footer/>
    </>
  )
}

export default MainLayout;