
import React , {useEffect} from "react"
import './App.css';
import Login from "./components/Login/Login";
import Player from "./components/Player/Player";
import {getTokenFromUrl} from "./spotify";
import SpotifyWebApi from "spotify-web-api-js";
import {useDataLayerValue} from "./DataLayer";

const spotify = new SpotifyWebApi();
function App() {

    const [{token},dispatch] = useDataLayerValue()


    useEffect(()=>{
        const hash = getTokenFromUrl();
        window.location.hash = "";
        const _token = hash.access_token;

        if (_token){
            dispatch({
                type:'SET_TOKEN',
                token:_token
            })

            console.log(token)
            spotify.setAccessToken(_token);
            spotify.getMe().then(user=>{
                console.log(user);

                dispatch({
                    type:'SET_USER',
                    user:user,
                });
            });

            spotify.getUserPlaylists().then(playlists =>{
                dispatch({
                    type:'SET_PLAYLISTS',
                    playlists:playlists,
                });
            });

            spotify.getMyTopArtists().then((response) =>
                dispatch({
                    type: "SET_TOP_ARTISTS",
                    top_artists: response,
                })

            );
            dispatch({
                type: "SET_SPOTIFY",
                spotify: spotify,
            });
            spotify.getPlaylist('37i9dQZEVXcKFtRgwuNWwh').then(response => {
                dispatch({
                    type:'SET_DISCOVER_WEEKLY',
                    discover_weekly:response,
                });
            })
        }
        console.log("i have a token---",token)


    },[token,dispatch]);

  return (
    <div className="app">
        {token ? <Player spotify={spotify} />:<Login />}
      {/*spotify logo*/}
      {/*login with spotify*/}


    </div>
  );
}

export default App;
