import React from "react"
import './Body.css'
import Header from "../Header/Header";
import {useDataLayerValue} from "../../DataLayer";
import {Favorite, MoreHoriz, PlayCircleFilled} from "@material-ui/icons";
import SongRow from "../SongRow/SongRow";

function Body({spotify}) {
    const [{discover_weekly},dispatch] = useDataLayerValue()

    const playPlaylist = (id) => {
        spotify
            .play({
                context_uri: `spotify:artist:7Cj5qDchYyFHiJbGcT53PZ`,
                offset: `position:5`
            })
            .then((res) => {
                spotify.getMyCurrentPlayingTrack().then((r) => {
                    dispatch({
                        type: "SET_ITEM",
                        item: r.item,
                    });
                    dispatch({
                        type: "SET_PLAYING",
                        playing: true,
                    });
                });
            });
    };

    const playSong = (id) => {
        spotify
            .play({
                context_uri: [`spotify:track:${id}`],
            })
            .then((res) => {
                spotify.getMyCurrentPlayingTrack().then((r) => {
                    dispatch({
                        type: "SET_ITEM",
                        item: r.item,
                    });
                    dispatch({
                        type: "SET_PLAYING",
                        playing: true,
                    });
                });
            });
    };


    return(
        <div className="body">
            <Header spotify={spotify} />

            <div className="body__info">
                <img src={discover_weekly?.images[0].url} alt=""/>
                <div className="body__infoText">
                    <strong>PLAYLIST</strong>
                    <h2>Discover Weekly</h2>
                    <p>{discover_weekly?.description}</p>
                    <br />
                    <b>Spotify </b> <p style={{display:"inline-block"}}>{discover_weekly?.tracks.total} songs, 1hr 30min</p>


                </div>

            </div>

            <div className="body__songs">
                <div className="body__icons">
                    <PlayCircleFilled className="body__shuffle" onClick={playPlaylist}/>
                    <Favorite fontSize="large" />
                    <MoreHoriz />
                </div>

                {/*<div className="body__table">*/}
                {/*    <p># TITLE</p>*/}
                {/*    <p>ALBUM</p>*/}
                {/*    <p>DATE ADDED</p>*/}

                {/*</div>*/}
                <br/>
                    <hr/>

                {discover_weekly?.tracks.items.map(item=>(
                    <>
                    <SongRow  playSong={playSong} track={item.track} />

                    </>

                ))}
            </div>
        </div>
    )
}
export default Body
