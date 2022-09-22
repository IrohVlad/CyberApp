import React from 'react';
import {Link} from 'react-router-dom'

const NavItem = ({id, items, func}) => {
    console.log(id);
    return (
        items.map((item, i) => <li onClick={()=> func && func()} key={i} className='sidebar__nav_item'><Link className={item.id == id ? '_btn-lock' : '_btn'} to={`/gallery?id=${item.id}`}>{item.name}</Link></li>)
    );
};

export default NavItem;