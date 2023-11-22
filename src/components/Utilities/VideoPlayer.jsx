"use client";

import { useState } from "react";
import YouTube from "react-youtube";

const VideoPlayer = ({ youtubeId }) => {
    const option = {
        width: "300",
        height: "250",
    };

    const [isOpen, setIsOpen] = useState(true);

    const handleVideoPlayer = () => {
        setIsOpen((prevState) => !prevState);
    };

    const Player = () => {
        return (
        <div className="fixed bottom-2 right-2">
            <button
            onClick={handleVideoPlayer}
            className="text-color-primary bg-color-secondary float-right px-3 mb-1"
            >
            X
            </button>
            <YouTube
            videoId={youtubeId}
            onReady={(event) => event.target.pauseVideo()}
            opts={option}
            />
        </div>
        );
    };

    const ButtonOpenPlayer = () => {
        return(
            <button onClick={handleVideoPlayer} className=" rounded text-xl hover:bg-color-accent fixed bottom-5 right-5 w-32 bg-color-primary text-color-dark">
            Tonton Trailer
            </button>
        )
    }

    return isOpen ? <Player /> : <ButtonOpenPlayer/>

};

export default VideoPlayer;
