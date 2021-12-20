import React, { useState, useEffect } from 'react';
import JsonDataFundations from '../FUNDACJE_DATA.json';
import JsonDataOrganizations from '../ORGANIZACJE_DATA.json';
import JsonDataFundraising from '../FUNDACJE_DATA.json';

import ReactPaginate from 'react-paginate';

import Decoration from '../assets/assets/assets/Decoration.svg';

import '../scss/_homehelp.scss';

const HomeHelp = () => {
    const [data, setData] = useState([]);
    const [current, setCurrent] = useState("fundacje");

    const handleToggle = (e) => {
        const {id} = e.target
        setCurrent(id);
        setPageNumber(0)
    };

    useEffect(() => {
        switch (current) {
            case "fundacje": {
                setData(JsonDataFundations);
                break;
            }
               
            case "organizacje": {
                setData(JsonDataOrganizations);
                break;
            }
            
            case "zbiorki": {
                setData(JsonDataFundraising);
                break;
            }
        }

    }, [current])

    
    const [pageNumber, setPageNumber] = useState(0);

    const fundsPerPage = 3   

    const pageCount = Math.ceil(data.length / fundsPerPage);
    const paginatedData = data?.slice(pageNumber, pageNumber + 3)

    const changePage = ({selected}) => {
        setPageNumber(selected);
    };

    return (
        <div className="homehelp" id="fundacje">
            <div className="help-container">
                <p className="help-title">Komu pomagamy?</p>
                <div className="decoration"><img src={Decoration} /></div>
                <div className="help_buttons">
                    <button id="fundacje" onClick={handleToggle} className="help_button active">Fundacjom</button>
                    <button id="organizacje" onClick={handleToggle} className="help_button">Organizacjom<br />pozarządowym</button>
                    <button id="zbiorki" onClick={handleToggle} className="help_button">Lokalnym<br />zbiórkom</button>
                </div>
                <div className="help_content">
                    <div className="help_description">
                        <p>W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi współpracujemy. Możesz sprawdzić, czym się zajmują, komu pomagają i czego potrzebują.</p>
                    </div>
                    {paginatedData?.map((fund) => (
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
                    ))}
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
