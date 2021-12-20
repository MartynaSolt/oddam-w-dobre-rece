import React, { useState } from 'react';
import { Axios } from 'axios';

import Decoration from '../assets/assets/assets/Decoration.svg';
import Facebook from '../assets/assets/assets/Facebook.svg';
import Instagram from '../assets/assets/assets/Instagram.svg';

import '../scss/_homecontactfooter.scss';

const HomeContactFooter = () => {
    const url = "https://fer-api.coderslab.pl/v1/portfolio/contact";

    const [data, setData] = useState({
        name: "",
        email: "",
        message: ""
    })

    const submit = (e) => {
        e.preventDefault();
        Axios.post(url,{
            name: data.name,
            email: data.email,
            message: data.message
        })
            .then(res => {
                console.log(res.data)
            })
    }

    const handle = (e) => {
        const newdata = {...data}
        newdata[e.target.id] = e.target.value
        setData(newdata)
        console.log(newdata)
    }

    return (
        <div className="contactfooter" id="kontakt">
            <div className="opacity">
                <div className="contactfooter-container">
                    <div className="contact">
                        <div className="contact_container">
                            <p>Skontaktuj się z nami!</p>
                            <div className="decoration"><img src={Decoration} /></div>
                            <div className="form">
                                <form onSubmit={(e) => submit(e)}>
                                    <div className="form_container">
                                        <div className="form_name-email">
                                            <div className="form_name">
                                                <label htmlFor="name">Wpisz swoje imię</label>
                                                <input 
                                                    onChange={(e) => handle(e)}
                                                    type="text" 
                                                    id="name"
                                                    value={data.name}>
                                                </input>
                                            </div>
                                            <div className="form_email">
                                                <label htmlFor="email">Wpisz swój email</label>
                                                <input 
                                                    onChange={(e) => handle(e)}
                                                    type="text" 
                                                    id="email"
                                                    value={data.email}>
                                                </input>
                                            </div>
                                        </div>
                                        <div className="form_message">
                                            <label htmlFor="message">Wpisz swoją wiadomość</label>
                                            <textarea
                                                onChange={(e) => handle(e)}  
                                                id="message"
                                                value={data.message}>
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
                            <div className="footer_icons">
                                <img src={Facebook} />
                                <img src={Instagram} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>    
        </div>
    )
}

export default HomeContactFooter;
