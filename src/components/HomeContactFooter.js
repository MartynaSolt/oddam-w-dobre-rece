import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
// import { messageSchema } from '../validations/ContactValidation';
import * as yup from "yup";

import Decoration from '../assets/assets/assets/Decoration.svg';
import Facebook from '../assets/assets/assets/Facebook.svg';
import Instagram from '../assets/assets/assets/Instagram.svg';

import '../scss/_homecontactfooter.scss';

const messageSchema = yup.object().shape({
    firstName: yup.string().required("Podane imię jest nieprawidłowe"),
    email: yup.string().email().required("Podany email jest nieprawidłowy!"),
    message: yup.string().min(120).required("Wiadomość musi mieć conajmniej 120 znaków!")
});

const HomeContactFooter = () => {
    const url = "https://fer-api.coderslab.pl/v1/portfolio/contact";

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(messageSchema),
    });

    const submitForm = (data) => {
        console.log(data);
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
                                                <label htmlFor="firstName">Wpisz swoje imię</label>
                                                <input
                                                    type="text"
                                                    name="firstName"
                                                    ref={register("firstName", {
                                                        required: "Required",
                                                      })}>
                                                </input>
                                                <p> {errors.firstName} </p>
                                            </div>
                                            <div className="form_email">
                                                <label htmlFor="email">Wpisz swój email</label>
                                                <input
                                                    type="text"
                                                    name="email"
                                                    ref={register("email", {
                                                        required: "Required",
                                                      })}>
                                                </input>
                                                <p> {errors.email?.message} </p>
                                            </div>
                                        </div>
                                        <div className="form_message">
                                            <label htmlFor="message">Wpisz swoją wiadomość</label>
                                            <textarea  
                                                id="message"
                                                ref={register("message", {
                                                    required: "Required",
                                                  })}>
                                            </textarea>
                                            <p> {errors.message?.message} </p>
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
