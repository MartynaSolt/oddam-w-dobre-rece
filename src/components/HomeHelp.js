import React, { useState } from 'react';
import JsonDataFundations from '../FUNDACJE_DATA.json';
import ReactPaginate from 'react-paginate';

import Decoration from '../assets/assets/assets/Decoration.svg';

import '../scss/_homehelp.scss';

const HomeHelp = () => {
    const [funds, setFunds] =  useState(JsonDataFundations.slice(0, 9));
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

    const pageCount = Math.ceil(funds.length / fundsPerPage);

    const changePage = ({selected}) => {
        setPageNumber(selected);
    };

    return (
        <div className="homehelp">
            <div className="help-container">
                <p>Komu pomagamy?</p>
                <div className="decoration"><img src={Decoration} /></div>
                <div className="help_buttons">
                    <button>Fundacjom</button>
                    <button>Organizacjom pozarządowym</button>
                    <button>Lokalnym zbiórkom</button>
                </div>
                <div className="help_content">
                    <p>W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi współpracujemy. Możesz sprawdzić, czym się zajmują, komu pomagają i czego potrzebują.</p>
                    {displayFunds}
                    <ReactPaginate
                        previousLabel=""
                        nextLabel=""
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
