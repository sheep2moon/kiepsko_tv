import { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import Sidebar from "./components/Sidebar.jsx";
import VideoPlayer from "./components/VideoPlayer.jsx";

function App() {
    const theme = {
        colors: {
            primary: "#141E27",
            secondary: "#203239",
            detail: "#E0DDAA",
            accent: "#EEEDDE"
        },
        shadows: {
            black80: "0 0 30px #00000080"
        }
    };

    const [currentVideo, setCurrentVideo] = useState("");

    return (
        <ThemeProvider theme={theme}>
            <AppContainer>
                <VideoPlayer currentVideo={currentVideo} />
                <Sidebar setCurrentVideo={setCurrentVideo} currentVideo={currentVideo} />
            </AppContainer>
        </ThemeProvider>
    );
}

export default App;

const AppContainer = styled.div`
    width: 100vw;
    min-height: 100vh;
    display: flex;
    background-color: ${({ theme }) => theme.colors.primary};
    @media (max-width: 768px) {
        flex-direction: column;
        align-items: center;
    }
`;
