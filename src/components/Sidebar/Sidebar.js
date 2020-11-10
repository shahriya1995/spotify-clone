import React from "react"
import './Sidebar.css'
import SidebarOption from "./SidebarOption";
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import LibraryMusicOutlinedIcon from '@material-ui/icons/LibraryMusicOutlined';
import {useDataLayerValue} from "../../DataLayer";


function Sidebar() {
    const [{playlists}] = useDataLayerValue();
    return(
        <div className="sidebar">
            <img
                className="sidebar__logo"
                src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
                alt=""
            />
            <SidebarOption title="Home" Icon={HomeOutlinedIcon} />
            <SidebarOption title="Search" Icon={SearchOutlinedIcon} />
            <SidebarOption title="Your Library" Icon={LibraryMusicOutlinedIcon} />

            <strong className="sidebar__title">PLAYLISTS</strong>
            <br/>
            <hr />

            {playlists?.items?.map((playlist )=> (
                <SidebarOption title={playlist.name} />
            ))}



        </div>
    )
}
export default Sidebar
