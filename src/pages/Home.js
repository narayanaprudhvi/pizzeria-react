import React from 'react';
import { Link } from 'react-router-dom';
import bannerImage from '../assets/Pizza-Background.jpg';
import '../styles/Home.css';
function Home() {
    return (
        <div className='home' style={{
            backgroundImage: `url(${bannerImage})`
        }}>

            <div className='headerContainer'>
                <h1> Prudhvi's Pizzeria </h1>
                <p>Pizza to fit any taste</p>
                <Link to='/menu'>
                    <button> Order Now </button>
                </Link>
            </div>
        </div>
    )
}

export default Home
