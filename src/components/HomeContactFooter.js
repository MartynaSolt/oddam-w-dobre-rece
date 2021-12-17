import React from 'react';

import Decoration from '../assets/assets/assets/Decoration.svg';
import Facebook from '../assets/assets/assets/Facebook.svg';
import Instagram from '../assets/assets/assets/Instagram.svg';

import '../scss/_homecontactfooter.scss';

const HomeContactFooter = () => (
    <div className="contactfooter">
        <div className="opacity">
            <div className="contactfooter-container">
                <div className="contact">
                    <div className="contact_container">
                        <p>Skontaktuj się z nami!</p>
                        <div className="decoration"><img src={Decoration} /></div>
                        <div className="form">
                            <form>
                                <div className="form_container">
                                    <div className="form_name-email">
                                        <div className="form_name">
                                            <label htmlFor="name">Wpisz swoje imię</label>
                                            <input 
                                                type="text" 
                                                id="name">
                                            </input>
                                        </div>
                                        <div className="form_email">
                                            <label htmlFor="email">Wpisz swój email</label>
                                            <input 
                                                type="text" 
                                                id="email">
                                            </input>
                                        </div>
                                    </div>
                                    <div className="form_message">
                                        <label htmlFor="message">Wpisz swoją wiadomość</label>
                                        <textarea  
                                            id="message">
                                        </textarea>
                                    </div>
                                    <div className="form_submit">
                                        <button className="form_button">Wyślij</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="footer">
                    <div className="footer-container">
                        <p>Copyright by Coders Lab</p>
                        <div>
                            <img src={Facebook} />
                            <img src={Instagram} />
                        </div>
                    </div>
                </div>
            </div>
        </div>    
    </div>
);

export default HomeContactFooter;
