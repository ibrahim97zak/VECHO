import React from 'react';
import Clients from '../components/Clients';
import Cta from '../components/Cta';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Intro from '../components/Intro';
import Products from '../components/Products';
import Services from '../components/Services';
import News from '../components/News';
import NavBar from '../components/Navbar/NavBar';


const Home = () => {
    return (
        <>
        <NavBar/>
            <Hero />
            <Intro />
            <Services />
            <Products />
            <Clients />
            <Cta/>
            <News/>
            <Footer />
        </>

    )
}

export default Home;

