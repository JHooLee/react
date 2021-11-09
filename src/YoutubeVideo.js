import React, {children, Component} from "react";
import PropTypes from 'prop-types';

function YoutubeVideo({videold, videoName, videoLength, videoDesctiption, videoAuthor, children}){
    return(
        <div id={videold}>
            <h1>{videoName} - {(parseInt(videoLength)/1000).toFixed(1)} MB</h1>
            <h3>author - {videoAuthor}</h3>
            <p>{videoDesctiption}</p>
            {children}
        </div>
    )
}
export default YoutubeVideo;

YoutubeVideo.propTypes = {
    videold: PropTypes.string,
    videoName: PropTypes.string,
    videoLength: PropTypes.string,
    videoDesctiption: PropTypes.string
}

YoutubeVideo.defaultProps = {
    videoAuthor: "jhl"
}