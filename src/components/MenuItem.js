import React from 'react';
import bannerImage from '../assets/Pizza-Background.jpg';

function MenuItem({ image, name, price }) {
    return (
        <div className='menuItem'>
            <div style={{
                backgroundImage: `url(${bannerImage})`
            }}>  </div>
            <h3> {name} </h3>
            <p> ${price} </p>
        </div>
    )
}

export default MenuItem
