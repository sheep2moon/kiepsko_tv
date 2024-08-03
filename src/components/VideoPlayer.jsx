import React from "react";
import styled from "styled-components";

const VideoPlayer = ({ currentVideo }) => {
    console.log(currentVideo);
    return (
        <VideoPlayerContainer>
            <h1>{currentVideo.title}</h1>
            <VideoWrap>
                <video src={currentVideo.link} controls></video>
            </VideoWrap>
        </VideoPlayerContainer>
    );
};

export default VideoPlayer;

const VideoPlayerContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    > h1 {
        color: ${({ theme }) => theme.colors.accent};
    }
`;

const VideoWrap = styled.div`
    width: 100%;
    padding-top: 40.5%;
    position: relative;
    > video {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }
`;
