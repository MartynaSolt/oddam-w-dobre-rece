import React from 'react';
import { Link } from 'react-router-dom';

import Decoration from '../assets/assets/assets/Decoration.svg';
import IconFirst from '../assets/assets/assets/Icon-1.svg';
import IconSecond from '../assets/assets/assets/Icon-2.svg';
import IconThird from '../assets/assets/assets/Icon-3.svg';
import IconFourth from '../assets/assets/assets/Icon-4.svg';

import '../scss/_homefoursteps.scss';

const HomeFourSteps = () => (
    <div className="homefoursteps" id="ocochodzi">
        <div className="steps__title">
            <p>Wystarczą 4 proste kroki</p>
            <div><img src={Decoration} /></div>
        </div>
        <div className="steps__icons">
            <div className="icons-container">
                <div className="column">
                    <div className="icon"><img src={IconFirst} /></div>
                    <p className="title">Wybierz rzeczy</p>
                    <p className="content">ubrania, zabawki, sprzęt i inne</p>
                </div>
                <div className="column">
                    <div className="icon"><img src={IconSecond} /></div>
                    <p className="title">Spakuj je</p>
                    <p className="content">skorzystaj <br />z worków na śmieci</p>
                </div>
                <div className="column">
                    <div className="icon"><img src={IconThird} /></div>
                    <p className="title">Zdecyduj, komu chcesz pomóc</p>
                    <p className="content">wybierz zaufane miejsce</p>
                </div>
                <div className="column">
                    <div className="icon"><img src={IconFourth} /></div>
                    <p className="title">Zamów kuriera</p>
                    <p className="content">kurier przyjedzie <br />w dogodnym terminie</p>
                </div>
            </div>
        </div>
        <div className="steps__button">
            <div className="steps-button">
                <Link to="/logowanie" className="button">Oddaj <br />rzeczy</Link>
            </div>
        </div>
    </div>
);

export default HomeFourSteps;
