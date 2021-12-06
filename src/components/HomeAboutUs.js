import React from 'react';

import Decoration from '../assets/assets/assets/Decoration.svg';
import Signature from '../assets/assets/assets/Signature.svg';

import '../scss/_homeaboutus.scss';

const HomeAboutUs = () => (
    <div className="homeaboutus" id="onas">
        <div className="aboutus_section">
            <div className="aboutus_content">
                <div className="content-container">
                    <p className="aboutus-title">O nas</p>
                    <div><img src={Decoration} /></div>
                    <p className="aboutus-story">Nori grape silver beet broccoli kombu beet greens fava bean potato quandong celery. Bunya nuts black-eyed pea prairie turnip leek lentil turnip greens parsnip.</p>
                    <div className="signature"><img src={Signature} /></div>
                </div>
            </div>
            <div className="aboutus-photo"></div>
        </div>
    </div>
);

export default HomeAboutUs;
