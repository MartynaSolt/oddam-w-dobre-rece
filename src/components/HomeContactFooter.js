import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
// import { messageSchema } from '../validations/ContactValidation';
import * as yup from "yup";

import Decoration from '../assets/assets/assets/Decoration.svg';
import Facebook from '../assets/assets/assets/Facebook.svg';
import Instagram from '../assets/assets/assets/Instagram.svg';

import '../scss/_homecontactfooter.scss';

const messageSchema = yup.object({
    name: yup.string().required("Imię jest wymagane!"),
    email: yup.string().email().required("Email jest wymagany!"),
    message: yup.string().min(120).required("Wiadomość jest wymagana!"),
}).required();
    

const HomeContactFooter = () => {
    const url = "https://fer-api.coderslab.pl/v1/portfolio/contact";

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(messageSchema),
    });
    
    const submitForm = (data) => {
        console.log(data);
        window.fetch(url, {
            method: "POST",
            "headers": {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(res => console.log(res))

    };

    return (
        <div className="contactfooter" id="kontakt">
            <div className="opacity">
                <div className="contactfooter-container">
                    <div className="contact">
                        <div className="contact_container">
                            <p>Skontaktuj się z nami!</p>
                            <div className="decoration"><img src={Decoration} /></div>
                            <div className="form">
                                <form onSubmit={handleSubmit(submitForm)}>
                                    <div className="form_container">
                                        <div className="form_name-email">
                                            <div className="form_name">
                                                <label htmlFor="name">Wpisz swoje imię</label>
                                                <input
                                                    type="text"
                                                    name="name"
                                                    {...register("name")}>
                                                </input>
                                                <p>{errors.firstName && "Podane imię jest nieprawidłowe!"}</p>
                                            </div>
                                            <div className="form_email">
                                                <label htmlFor="email">Wpisz swój email</label>
                                                <input
                                                    type="text"
                                                    name="email"
                                                    {...register("email")}>
                                                </input>
                                                <p> {errors.email && "Podany email jest nieprawidłowy!"} </p>
                                            </div>
                                        </div>
                                        <div className="form_message">
                                            <label htmlFor="message">Wpisz swoją wiadomość</label>
                                            <textarea  
                                                id="message"
                                                {...register("message")}>
                                            </textarea>
                                            <p> {errors.message && "Wiadomość musi mieć conajmniej 120 znaków!"} </p>
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
