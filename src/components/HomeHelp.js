import React, { useState } from 'react';
import JsonDataFundations from '../FUNDACJE_DATA.json';
import JsonDataOrganizations from '../ORGANIZACJE_DATA.json';
import JsonDataFundraising from '../FUNDACJE_DATA.json';

import ReactPaginate from 'react-paginate';

import Decoration from '../assets/assets/assets/Decoration.svg';

import '../scss/_homehelp.scss';

const HomeHelp = () => {
    const [isActive, setActive] = useState("false");

    const handleToggle = (e) => {
        setActive(!isActive);

        let classes = 'help_button';
        let els = document.getElementsByClassName('help_button active');
        if (els) {
            els[0].classList.remove('active')
        }
        e.target.className = classes.replace('help_button','help_button active');
    };

    const [funds, setFunds] =  useState(JsonDataFundations.slice(0, 9));
    const [org, setOrg] = useState(JsonDataOrganizations.slice(0, 6));
    const [raising, setRaising] = useState(JsonDataFundraising.slice(0, 3));
    
    const [pageNumber, setPageNumber] = useState(0);

    const fundsPerPage = 3
    const pagesVisited = pageNumber * fundsPerPage

    const displayFunds = funds
        .slice(pagesVisited, pagesVisited + fundsPerPage)
        .map((fund) => (
            <div className="content">
                <div className="content_list">
                    <div className="content_item">
                        <div className="top">
                            <p className="name">{fund.name}</p>
                            <p className="things">{fund.things}</p>
                        </div>
                        <div className="bottom">
                            <p className="idea">{fund.idea}</p>
                        </div>
                    </div>
                </div>
            </div>
        ));

    const displayOrg = org
        .slice(pagesVisited, pagesVisited + fundsPerPage)
        .map((org) => (
            <div className="content">
                <div className="content_list">
                    <div className="content_item">
                        <div className="top">
                            <p className="name">{org.name}</p>
                            <p className="things">{org.things}</p>
                        </div>
                        <div className="bottom">
                            <p className="idea">{org.idea}</p>
                        </div>
                    </div>
                </div>
            </div>
        ));
        
        const displayRaising = raising
        .slice(pagesVisited, pagesVisited + fundsPerPage)
        .map((raising) => (
            <div className="content">
                <div className="content_list">
                    <div className="content_item">
                        <div className="top">
                            <p className="name">{raising.name}</p>
                            <p className="things">{raising.things}</p>
                        </div>
                        <div className="bottom">
                            <p className="idea">{raising.idea}</p>
                        </div>
                    </div>
                </div>
            </div>
        ));     

    const pageCount = Math.ceil(funds.length / fundsPerPage);

    const changePage = ({selected}) => {
        setPageNumber(selected);
    };

    return (
        <div className="homehelp" id="fundacje">
            <div className="help-container">
                <p className="help-title">Komu pomagamy?</p>
                <div className="decoration"><img src={Decoration} /></div>
                <div className="help_buttons">
                    <button onClick={handleToggle} className="help_button active">Fundacjom</button>
                    <button onClick={handleToggle} className="help_button">Organizacjom<br />pozarządowym</button>
                    <button onClick={handleToggle} className="help_button">Lokalnym<br />zbiórkom</button>
                </div>
                <div className="help_content">
                    <div className="help_description">
                        <p>W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi współpracujemy. Możesz sprawdzić, czym się zajmują, komu pomagają i czego potrzebują.</p>
                    </div>
                    {displayFunds}
                    <ReactPaginate
                        previousClassName="pagination_previous"
                        nextClassName="pagination_next"
                        pageCount={pageCount}
                        onPageChange={changePage}
                        containerClassName={"pagination_buttons"}
                        activeClassName={"pagination_active"}
                    />
                </div>
            </div>
        </div>
    );
}
    
export default HomeHelp;
