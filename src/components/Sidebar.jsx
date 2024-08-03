import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { links } from "../links.js";
import TextInput from "./TextInput.jsx";
import { GiPerspectiveDiceSixFacesRandom } from "react-icons/gi";

const Sidebar = ({ currentVideo, setCurrentVideo }) => {
    const videos = Object.keys(links).map(i => links[i]);
    const [filteredVideos, setFilteredVideos] = useState(videos);

    const handleSearch = e => {
        const filtered = videos.filter(v => v.title.toLowerCase().includes(e.target.value.toLowerCase()));
        setFilteredVideos(filtered);
    };
    const handleRandom = () => {
        setCurrentVideo(videos[Math.floor(Math.random() * videos.length)]);
    };

    return (
        <SidebarWrap>
            <SearchWrap>
                <TextInput label="Wyszukaj" handleSearch={handleSearch} />
            </SearchWrap>

            <VideosList>
                {filteredVideos.map(video => (
                    <VideoItem isActive={video.title === currentVideo.title} key={video.title} onClick={() => setCurrentVideo(video)}>
                        {video.title}
                    </VideoItem>
                ))}
            </VideosList>
            <RandomWrap>
                <RandomButton onClick={handleRandom}>
                    <GiPerspectiveDiceSixFacesRandom /> Losuj
                </RandomButton>
            </RandomWrap>
        </SidebarWrap>
    );
};

export default Sidebar;

const RandomWrap = styled.div`
    width: 100%;
    margin-top: 1rem;
`;

const RandomButton = styled.button`
    padding: 0.75rem;
    display: flex;
    border-radius: 2px;
    gap: 0.5rem;
    align-items: center;
    font-size: 1.4rem;
    background-color: ${({ theme }) => theme.colors.primary};
    border: none;
    color: ${({ theme }) => theme.colors.detail};
    :hover {
        cursor: pointer;
        background-color: ${({ theme }) => theme.colors.secondary};
    }
`;

const SidebarWrap = styled.div`
    padding: 0.5rem 1rem;
    background-color: ${({ theme }) => theme.colors.primary};
    width: 440px;
    max-height: 100vh;
    box-shadow: ${({ theme }) => theme.shadows.black80};
    @media (max-width: 768px) {
        width: 100%;
    }
`;
const SearchWrap = styled.div`
    width: 100%;
    height: 3rem;
    background-color: ${({ theme }) => theme.colors.primary};
    > input {
        width: 100%;
        padding: 0.5rem 0.25rem;
        background-color: #203239;
        border: none;
    }
`;
const VideosList = styled.ul`
    overflow-y: scroll;
    max-height: min(600px, 80vh);
    list-style: none;
    box-shadow: ${({ theme }) => theme.shadows.black80};
    @media (min-width: 1024px) {
        max-height: calc(100% - 12rem);
    }
`;
const VideoItem = styled.li`
    color: ${({ theme }) => theme.colors.accent};
    background-color: ${({ theme, isActive }) => (isActive ? theme.colors.secondary : "none")};
    padding: 0.2rem 0;
    :hover {
        cursor: pointer;
        background-color: ${({ theme }) => theme.colors.secondary};
    }
`;
