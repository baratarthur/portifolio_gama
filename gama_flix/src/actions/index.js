export const SAVE_UPCOMINGS = 'SAVE_UPCOMINGS';
export const POPULAR_MOVIES = 'POPULAR_MOVIES';
export const NOW_PLAYING = 'NOW_PLAYING';
export const TOP_RATED = 'TOP_RATED';

export const saveUpcomings = (upcomings) => ({
    type: SAVE_UPCOMINGS,
    payload: {
        upcomings
    }
})

export const savePopular = (popular) => ({
    type: POPULAR_MOVIES,
    payload: {
        popular
    }
})

export const saveNowPlaying = (nowplaying) => ({
    type: NOW_PLAYING,
    payload: {
        nowplaying
    }
})

export const saveTopRated = (toprated) => ({
    type: TOP_RATED,
    payload: {
        toprated
    }
})
