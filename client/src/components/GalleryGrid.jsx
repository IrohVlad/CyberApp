import React from 'react';

const GalleryGrid = ({columns, imgArr, func}) => {
    let col = [];
    for(let i = 0; i < columns; i++){
        col.push([]);
    }
    // let index = 0;
    // for(let i = 0; i < col.length; i++){
    //     if(index == imgArr.length){
    //         break;
    //     }
    //     col[i].push(<div key={imgArr[index].id} onClick={()=>func(index)} className='grid-item'><img key={imgArr[index].id} className='grid-img' src={imgArr[index].img} /></div>)
    //     if(i == col.length - 1){
    //         i = -1;
    //     }
    //     index++;
    // }
    let id = 0;
    imgArr.forEach((item, i)=>{
        if(id == col.length){
            id = 0;
        }
        col[id].push(<div key={item.id} style={{
            height: `${80/columns}vw`,
            backgroundColor: 'black'
        }} onClick={()=>func(i)} className='grid-item'><img key={item.id} className='grid-img' src={item.img} /></div>)
        id++;
    })
    let colms = [];
    for(let i = 0; i < columns; i++){
        colms.push(<div key={i} className='gallary__grid-item'>{col[i]}</div>);
    }


    return (
        colms
    );
};

export default GalleryGrid;