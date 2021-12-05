import React from 'react';
import { Link } from 'react-router-dom';

import Decoration from '../assets/assets/assets/Decoration.svg';

import '../scss/_homeheader.scss';

const HomeHeader = () => (
    <div className="homeheader">
            <div className="header-content">
                <div>
                    <p>Zacznij pomagać! <br />Oddaj niechciane rzeczy w zaufane ręce</p>
                    <div><img src={Decoration} /></div>
                    <div className="header__buttons">
                        <div className="header-button">
                            <Link to="/logowanie" className="head-button">Oddaj <br />rzeczy</Link>
                        </div>
                        <div className="header-button">
                            <Link to="/logowanie" className="head-button">Zorganizuj <br />zbiórkę</Link>
                        </div>
                    </div>
                </div>
            </div>
    </div>
);

export default HomeHeader;
