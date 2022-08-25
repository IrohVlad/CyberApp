import React, {Component} from 'react';
import { Link, useLocation } from 'react-router-dom';


const HeaderNav = () => {
    return (
        <>
            <li className='header__nav_item'><Link className='_btn' to="">MAIN</Link></li> 
            <li className='header__nav_item'><Link className='_btn' to="/contact">CONTACT</Link></li> 
        </>
    );
};

export default HeaderNav;