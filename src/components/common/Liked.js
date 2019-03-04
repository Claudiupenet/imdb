import React from 'react';
    const liked = (props) => {
        let classes = props.liked ? 'fa fa-heart' : 'fa fa-heart-o';
        return(
            <i onClick={ props.gabriel } className={ classes } ></i>
            );
    }
    
    export default liked;