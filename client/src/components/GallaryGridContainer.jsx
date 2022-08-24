import React, { Children } from 'react';

const styles = {
    margin: 0,
    padding: 0,
    width: '100%',
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, 250px)',
    justifyContent: 'center',

}

const GallaryGridContainer = ({Children}) => {
    
    return (
        <div style={styles}>
            {Children}
        </div>
    );
};


export default GallaryGridContainer;