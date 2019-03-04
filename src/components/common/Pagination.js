import React from 'react';

   const pagination = (props) => {
        const pages = 3;
        return(
            <nav>
                <ul className="pagination">
                    <li className="page-item"><a href="/" className="page-link"> 4 </a></li>
                </ul>
            </nav>
        );
    }

export default pagination;