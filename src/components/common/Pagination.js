import React from 'react';

   const pagination = (props) => {
        const {pageSize, itemsCount, onPageChange} = props;
        const numPages = Math.ceil(itemsCount /pageSize);
        const pages = new Array(numPages).fill(null);
     
        return(
            <nav>
                <ul className="pagination">
                    {
                        pages.map((p, index) => (
                            <li className="page-item" key={index}><a className="page-link" onClick={() => onPageChange(index + 1)}> {index + 1} </a></li>
                        ))
                    }
                    
                </ul>
            </nav>
        );
    }

export default pagination;