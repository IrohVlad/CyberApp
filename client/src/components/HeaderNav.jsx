import React, {Component} from 'react';
import { Link, useLocation } from 'react-router-dom';


const HeaderNav = ({loc}) => {
    return (
        <>
            <li className='header__nav_item'><Link  className={loc == '/' ? '_btn-lock' : '_btn'} to="">MAIN</Link></li> 
            <li className='header__nav_item'><Link className={loc == '/contact' ? '_btn-lock' : '_btn'} to="/contact">CONTACT</Link></li> 
        </>
    );
};

export default HeaderNav;