import React from 'react';
import { connect } from 'react-redux';

import * as api from '../../services';
import { 
    saveUpcomings,
    savePopular,
    saveNowPlaying,
    saveTopRated
} from '../../actions';
import FilmsCarrousel from './films-carrousel';

class LandingPage extends React.Component {
    
    componentDidMount() {
        api.getUpcoming().then(data => this.props.saveUp(data.results));
        api.getPopularMovies().then(data => this.props.savePop(data.results));
        api.getNowPlaying().then(data => this.props.saveNow(data.results));
        api.getTopRated().then(data => this.props.saveTop(data.results));
    }

    render() {
        return <div>
            <FilmsCarrousel title="Now Playing" type="now" />
            <FilmsCarrousel title="Upcoming" type="up" />
            <FilmsCarrousel title="Most Popular" type="pop" />
            <FilmsCarrousel title="Top Rated" type="top" />
        </div>
    }
}

const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch) => {
    return {
        saveUp: data => dispatch(saveUpcomings(data)),
        savePop: data => dispatch(savePopular(data)),
        saveNow: data => dispatch(saveNowPlaying(data)),
        saveTop: data => dispatch(saveTopRated(data)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LandingPage);
