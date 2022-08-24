import React from 'react';
import {Link} from 'react-router-dom'

const styles = {
    margin: '15px 10px',
    padding: 0,
}

const GalleryGridItem = ({items, func}) => {
    return (
        items.map((item, i) => <div onClick={()=>func(i)} style={styles} ><img key={item.name} style={{width: '100%'}} src={item.img}/></div>)
    );
};

export default GalleryGridItem;