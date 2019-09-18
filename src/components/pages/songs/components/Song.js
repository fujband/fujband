import React, {Fragment, useContext, useEffect} from "react";

import SettingsContext from "../../../../context/settings/settingsContext";
import SongsContext from "../../../../context/songs/songsContext";

import Topbar from "../../../layout/Topbar";
import Content from "../../../layout/Content";

import style from "./assets/Song.module.css";

import NotFound from "../../util/NotFound";

const Song = (props) => {
    const settingsContext = useContext(SettingsContext);
    const {fontSize, fontLine, fontAlign} = settingsContext;

    const songsContext = useContext(SongsContext);
    const {currentSong, setCurrentSong} = songsContext;

    useEffect(() => {
        setCurrentSong(props.match.params.slug);
        // přidat update views

        // eslint-disable-next-line
    }, []);
    
    return (
        <Fragment>
            {currentSong ? (
                    <Fragment>
                        <Topbar title={currentSong.title} closeLink="/songs"></Topbar>
                        <Content>
                            <div
                                name="lyrics"
                                className={style.song}
                                style={{
                                    fontSize: fontSize,
                                    lineHeight: fontLine,
                                    textAlign: fontAlign
                                }}
                            >
                                {/* Předělat pro markdownu */}
                                <div dangerouslySetInnerHTML={{ __html: currentSong.text }}></div>
                            </div>
                        </Content>
                    </Fragment >
                ) : (<NotFound></NotFound>)
            } 
        </Fragment>        
    );  
};

export default Song;