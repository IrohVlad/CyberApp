import React from 'react';

const Footer = () => {
    return (
        <footer>
            <div className="footer _container">
                <div className="footer__block">
                    <div className="footer_text_1">Follow us via social media:</div>
                    <div className="footer__btns">
                        <img src="http://localhost:7000/instagramm.svg" alt=""/>
                        <img src="http://localhost:7000/facebook.svg" alt=""/>
                        <img src="http://localhost:7000/telegramm.svg" alt=""/>
                        <img src="http://localhost:7000/youtube.svg" alt=""/>
                        <img src="http://localhost:7000/vk.svg" alt=""/>
                    </div>
                </div>
                <div className="footer_text_2">© Cyber-feel.com</div>
            </div>
        </footer>
    );
};

export default Footer;