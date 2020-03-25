import React from 'react';

class Card extends React.Component {

    state = {
        isBig: false
    }

    render(){
        const { film } = this.props;
        const { isBig } = this.state;
        return (
            isBig?
                <div
                    className="card"
                    style={{
                        backgroundImage:`url(http://image.tmdb.org/t/p/w500${film.backdrop_path})`
                    }} >
                    <div
                        className="filter"
                        onMouseOut={() => this.setState({ isBig: false })} >
                        <p>
                            <b>{film.title}</b> <br/><br/>
                            {film.overview.slice(0,144)}... read more
                        </p>
                    </div>
                </div>
            :
                <div
                    className="card-small"
                    style={{
                        backgroundImage:`url(http://image.tmdb.org/t/p/w500${film.backdrop_path})`
                    }} 
                    onMouseOver={() => this.setState({isBig:true})} ></div>
        )
    }
}

export default Card;
