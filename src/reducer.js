export const initialState ={
    user:null,
    playlists: [],
    playing:false,
    item:null,
    spotify: null,
    discover_weekly: null,
    top_artists: null,
    // token:null
    // token:'BQCrMB0iYcDL_UK1wFGwUiyKNy4WWh9U3DHf9J_lMEBdkdGdKRpv0TKh3Gfc7LhrRx2aSGJBiJ18F9FsVb_0fPMbT2wmVLOazyGJiUhELh2epHmQfBBlUShX-bHabg-93bEposJsnt4kaWuvUeNJ5bVSIpCuvViAVekw321dK0Z1fizT'
};

const reducer = (state,action) =>{
    console.log(action)
    switch (action.type) {
        case 'SET_USER':
            return {
                ...state,
                user:action.user
            };
        case 'SET_TOKEN':
            return {
                ...state,
                token:action.token
            };
        case "SET_PLAYING":
            return {
                ...state,
                playing: action.playing,
            };
        case "SET_ITEM":
            return {
                ...state,
                item: action.item,
            };
        case 'SET_PLAYLISTS':
            return {
                ...state,
                playlists:action.playlists
            };
        case "SET_TOP_ARTISTS":
            return {
                ...state,
                top_artists: action.top_artists,
            };
        case 'SET_DISCOVER_WEEKLY':
            return {
                ...state,
                discover_weekly:action.discover_weekly
            };
        case "SET_SPOTIFY":
            return {
                ...state,
                spotify: action.spotify,
            };

        default:
            return {
            ...state
            };


    }

}

export default reducer;

