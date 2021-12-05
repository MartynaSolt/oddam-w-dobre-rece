import React from 'react';

import '../scss/_homethreecolumns.scss';

const HomeThreeColumns = () => (
    <div className="homethreecolumns">
            <div className="threecolumns-container">
                <div>
                    <div className="column">
                        <p className="column_number">10</p>
                        <p className="column_title">oddanych worków</p>
                        <p className="column_content">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
                    </div>
                    <div className="column">
                        <p className="column_number">5</p>
                        <p className="column_title">wspartych organizacji</p>
                        <p className="column_content">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
                    </div>
                    <div className="column">
                        <p className="column_number">7</p>
                        <p className="column_title">zorganizowanych zbiórek</p>
                        <p className="column_content">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
                    </div>
                </div>
            </div>
    </div>
);

export default HomeThreeColumns;
