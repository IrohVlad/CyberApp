import React from 'react';

const ContactPage = () => {
    return (
        <main>
            <section className="form__section _container">
                <div className="form__title">CONTACT FORM</div>
                <form action="URL">
                    <div className="text-input">
                        <input type="text" required="required" name="name"/>
                        <span>NAME</span>
                    </div>
                    <div className="text-input">
                        <input type="text" required="required" name="email"/>
                        <span>EMAIL</span>
                    </div>
                    <div className="text-input">
                        <textarea required="required" name="message"></textarea>
                        <span>MESSAGE</span>
                    </div>
                    <div className="button-input">
                        <button type="submit" required="required" name="btn" >SEND</button>
                        
                    </div>
                </form>
            </section>
        </main>
    );
};

export default ContactPage;