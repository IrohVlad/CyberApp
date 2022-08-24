import React, { useState, useEffect } from 'react';
import { fetchItems } from '../fethes.jsx';
import NavItem from '../src/components/NavItem.jsx';

const MainPage = () => {
    const [burgerActive, setBurger] = useState(false); 
    const [navItems, setNavItems] = useState([]);
    
    useEffect(()=>{
        fetchItems(setNavItems);
    }, [])
    return (
        <main>
            <section className="first-section _container">
                <div className="main__sidebar sidebar">
                    <ul className="sidebar__nav">
                        {<NavItem items={navItems} />}
                    </ul>
                    <div onClick={()=>{setBurger(!burgerActive)}} className={burgerActive ? "slider__burger burger_active" : "slider__burger"}>
                        <div  className="burger">
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
                    <ul className="sidebar__language">
                        <li className="sidebar__language_item _btn">EN</li>
                        <li className="sidebar__language_item _btn">RU</li>
                    </ul>
                </div>
                <div className="main__slider">

                    <video  src="http://localhost:7000/Dmitriy_Filippov_portfolio_2022.mp4" type="video/mp4" autoPlay muted loop></video>
                    <div className="gradient"></div>
                    <div className="slider__item">
                        <div className="slider__title">Dmitriy Filippov portfolio 2022</div>
                        <div className="slider__button">2D/3D DESIGN/ CONCEPT ART</div>
                    </div>

                </div>
            </section>
            <section class="second-section _container">
                <div className="main__img"><img src="http://localhost:7000/iam.jpg" alt=""/></div>
                <div className="main_disc disc">
                    <div className="disc__title">DMITRY FILIPPOV</div>
                    <div className="disc__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium voluptatibus veritatis unde aliquam ad animi at, blanditiis perferendis perspiciatis id consequatur impedit quos amet optio reprehenderit explicabo reiciendis temporibus sed necessitatibus quisquam in quasi mollitia esse. Sit, hic! Tempora fugiat exercitationem quaerat consequatur ipsam quisquam iste adipisci illum laborum, voluptas corrupti animi sit nisi doloremque possimus. Quaerat et maxime veniam eos voluptatem incidunt? Sunt cum similique corrupti. Aut est placeat blanditiis, similique autem pariatur nostrum maxime perspiciatis doloremque vitae fugit, eveniet voluptatibus rem culpa quaerat accusantium aperiam repellendus ullam. Ipsam non explicabo vel, natus soluta vero? Unde, laudantium corporis! Accusantium quis beatae dolores, neque adipisci eius ea blanditiis dicta consequuntur delectus eos minima? Commodi natus magnam accusamus aut unde esse.</div>
                </div>
            </section>
        </main>
    );
};

export default MainPage;