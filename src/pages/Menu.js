import React from 'react';
import { MenuList } from '../helpers/MenuList';
import MenuItem from '../components/MenuItem';
import '../styles/Menu.css';
function Menu() {
    return (
        <div className='menu'>
            <h1 className='menuTitle'>Our Menu</h1>
            <div className='menuList'>
                {MenuList.map((menuItem, Key) => {
                    return <MenuItem key={Key} image={menuItem.image}
                        name={menuItem.name} price={menuItem.price} />
                })}
            </div>
        </div>
    )
}

export default Menu
