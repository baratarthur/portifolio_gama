import React from 'react';
import { connect } from 'react-redux';

import Card from './card';

function FilmsCarrousel(props) {
    const { title, type } = props;

    return <>
        <h1 className="carrousel-title" >{title}</h1>
        <div className="carrousel" >
            {props[type].map((film, i) => <Card key={i} film={film} /> )}
        </div>
    </>
}

const mapStateToProps = ({ filmsReducer }) => {
    return {
        up: filmsReducer.up,
        top: filmsReducer.top,
        pop: filmsReducer.pop,
        now: filmsReducer.now,  
    }
}

export default connect(mapStateToProps)(FilmsCarrousel);