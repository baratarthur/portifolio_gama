import * as actions from '../actions';

const initial = {
    up: [],
    pop: [],
    now: [],
    top: []
}

export const filmsReducer = (state = initial, action) => {
    switch(action.type) {
        case actions.SAVE_UPCOMINGS:
            return {
                ...state,
                up: action.payload.upcomings
            }
        case actions.NOW_PLAYING:
            return {
                ...state,
                now: action.payload.nowplaying
            }
        case actions.TOP_RATED:
                return {
                    ...state,
                    top: action.payload.toprated
                }
        case actions.POPULAR_MOVIES:
                return {
                    ...state,
                    pop: action.payload.popular
                }
        default:
            return state
    }
}