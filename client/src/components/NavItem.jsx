import React from 'react';
import {Link} from 'react-router-dom'

const NavItem = ({items, func}) => {
    return (
        items.map(item => <li onClick={()=> func && func()} key={item.name} className='sidebar__nav_item _btn'><Link className='_btn' to={`/gallery?id=${item.id}`}>{item.name}</Link></li>)
    );
};

export default NavItem;