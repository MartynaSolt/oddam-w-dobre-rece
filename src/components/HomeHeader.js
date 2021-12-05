import React from 'react';
import { Link } from 'react-router-dom';

import Decoration from '../assets/assets/assets/Decoration.svg';

const HomeHeader = () => (
    <div className="homeheader">
            <div className="header-content">
                <h2>Zacznij pomagać! <br />Oddaj niechciane rzeczy w zaufane ręce</h2>
                <div><img src={Decoration} /></div>
                <div className="header__buttons">
                    <div className="header-button">
                        <Link to="/logowanie">Oddaj rzeczy</Link>
                    </div>
                    <div className="header-button">
                        <Link to="/logowanie">Zorganizuj zbiórkę</Link>
                    </div>
                </div>
            </div>
    </div>
);

export default HomeHeader;
