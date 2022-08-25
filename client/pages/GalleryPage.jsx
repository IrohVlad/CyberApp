import React, { useState, useEffect } from 'react';
import { fetchItems, fetchGallery } from '../fethes.jsx';
import NavItem from '../src/components/NavItem.jsx';
import {useLocation} from 'react-router-dom';
import GallaryGridContainer from '../src/components/GallaryGridContainer.jsx';
import GalleryGridItem from '../src/components/GalleryGridItem.jsx';
import GalleryGrid from '../src/components/GalleryGrid.jsx';


const GalleryPage = () => {
    const [navItems, setNavItems] = useState([]);
    const [galleryItems, setGalleryItems] = useState([]);
    const [galleryPage, setGalleryPage] = useState(false);
    const id = new URLSearchParams(useLocation().search).get("id");
    const [sliderCounter, setSliderCounter] = useState(0)
    const [docWidth, setDocWidth] = useState('');

    
    
    useEffect(()=>{
        fetchItems(setNavItems);
        if (document.documentElement.clientWidth >= 1000){
            setDocWidth('max');
        }
        else if(document.documentElement.clientWidth < 1000 && document.documentElement.clientWidth > 500){
            setDocWidth('mid');
        }
        else if(document.documentElement.clientWidth <= 500){
            setDocWidth('min');
        }
    }, [])
    useEffect(()=>{
        setGalleryPage(false);
        setSliderCounter(0);
        fetchGallery(setGalleryItems, id);
    }, [galleryPage])
    window.addEventListener('resize', ()=>{ //переразмещение при масштабировании страницы
        if (document.documentElement.clientWidth >= 1000){
            setDocWidth('max');
        }
        else if(document.documentElement.clientWidth < 1000 && document.documentElement.clientWidth > 500){
            setDocWidth('mid');
        }
        else if(document.documentElement.clientWidth <= 500){
            setDocWidth('min');
        }
    });
    
    return (
        
        <main>
            <section className="galary__section">
                <div className='gallery-title'></div>
                <div className="galary__slider">
                    <div className="vectors">
                        <img onClick={()=> {
                            setSliderCounter(sliderCounter - 1);
                            if (sliderCounter < 1){
                                setSliderCounter(galleryItems.length - 1);
                            }
                            console.log(sliderCounter);
                        }} className="vector-1" src="http://localhost:7000/Vector-1.svg" alt=""/>
                        <img onClick={()=> {
                            setSliderCounter(sliderCounter + 1);
                            console.log(sliderCounter);
                            if (sliderCounter > galleryItems.length - 2){
                                setSliderCounter(0);
                            }
                        }} className="vector-2" src="http://localhost:7000/Vector.svg" alt=""/>
                    </div>
                    {galleryItems.map((item)=><div style={ {transform: `translateX(-${sliderCounter * 100}vw)`}} className='img'><img src={item.img} /></div>)}
                </div>
                <div className="main__sidebar sidebar">
                    <ul className="sidebar__nav">
                        {<NavItem items={navItems} func={setGalleryPage} />}
                    </ul>
                    <div className="slider__burger">
                        <div className="burger">
                            <div className="lines">
                                <div className="burger__line line-1"></div>
                                <div className="burger__line line-2"></div>
                                <div className="burger__line line-3"></div>
                            </div>
                            <ul className="burger__content">
                                {<NavItem items={navItems} />}
                            </ul>
                        </div>
                    </div>

                </div>
            </section>

            <section id="galary" className="gallary__grid _container">
                {/* <GallaryGridContainer Children={<GalleryGridItem func={setSliderCounter} items={galleryItems}></GalleryGridItem>}>
                    
                </GallaryGridContainer> */}
                {(docWidth == 'max' && <GalleryGrid func={setSliderCounter} columns={6} imgArr={galleryItems}/>) || 
                (docWidth == 'mid' && <GalleryGrid func={setSliderCounter} columns={4} imgArr={galleryItems}/>) || 
                (docWidth == 'min' && <GalleryGrid func={setSliderCounter} columns={2} imgArr={galleryItems}/>)}
            </section>
            
        </main>
    );
};

export default GalleryPage;