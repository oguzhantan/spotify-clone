export const initialState = {
    user: null,
    playlists: [],
    spotify: null,
    //discover_weekly: null,
    //top_artists: null,
    playing: false,
    item: null,
    //remove after developing
    //token: 'BQDbXZyOHIDSrk6aRGWl9P3JYrze7yjaYvgD6HfATP0OtWpeMyDklICUQW9QNsYC1Mj72U3fuXleB7i-LnjFN1Hj5TN8DLg6YaBA_oq3iMX7jQFczfoFufPXUJYw46IrpfItFHkwKOI7o2YWtvbYIatlsgRN05AbQbHbmfVXlazknI4_',

}

const reducer = (state, action) => {
    console.log(action);

    switch (action.type) {
        case 'SET_USER':
            return {
                ...state,
                user: action.user,
            };
        
        case 'SET_TOKEN':
            return {
                ...state,
                token: action.token,
            };
        
        case "SET_SPOTIFY":
            return {
                ...state,
                spotify: action.spotify,
      };
        case 'SET_PLAYLISTS':
            return {
                ...state,
                playlists: action.playlists,
            };
        case 'SET_DISCOVER_WEEKLY':
            return {
                ...state,
                discover_weekly:action.discover_weekly,
            }
        
        default:
            return state;
    }
};

export default reducer;