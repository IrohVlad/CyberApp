import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import HeaderNav from './HeaderNav.jsx';
import { fetchItems } from '../../fethes.jsx';
import NavItem from './NavItem.jsx';

const Header = () => {
    const [burgerActive, setBurger] = useState(false); 
    const [navItems, setNavItems] = useState([]);
    useEffect(()=>{
        fetchItems(setNavItems);
    }, [])
    return (
        <header>
            <div className="header _container">
                <div className="header__logo">
                    
                    <img src="http://62.113.105.113:7000/cyber_logo_3low.png" alt=""/>
                    
                </div>
                <div onClick={()=>{setBurger(!burgerActive)}} className={burgerActive ? "header__burger burger_active" : "header__burger"}>
                    <div onClick={()=>{setBurger(!burgerActive)}} className="burger">
                        <div className="lines">
                            <div className="burger__line line-1"></div>
                            <div className="burger__line line-2"></div>
                            <div className="burger__line line-3"></div>
                        </div>
                        <ul className="burger__content header__burger_content">
                            <HeaderNav/>
                        </ul>
                    </div>
                </div>
                <ul className="header__nav">
                    <HeaderNav/>
                </ul>
            </div>
        </header>
    );
};

export default Header;