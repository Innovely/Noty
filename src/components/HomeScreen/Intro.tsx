import { useCallback, useEffect, useState } from "react";
import { Platform } from "react-native";
import changeNavigationBarColor from "react-native-navigation-bar-color";
import YoutubePlayer from "react-native-youtube-iframe";

import styled from "styled-components/native";

const Intro = () => {
  const [playing, setPlaying] = useState<boolean>(false);
  const [videoId, setVideoId] = useState<string>("WwFxgo5yDCk");

  const onStateChange = useCallback((state: any) => {
    if (state === "ended") {
      setPlaying(false);
    }
  }, []);

  const togglePlaying = useCallback(() => {
    setPlaying((prev) => !prev);
  }, []);

  const onFullScreen = useCallback((status: boolean) => {
    if (Platform.OS === "android" && !status) {
      changeNavigationBarColor("transparent");
      console.log(status);
    }
  }, []);

  return (
    <YoutubeContainer>
      <YoutubePlayer
        width={320}
        height={180}
        play={playing}
        videoId={videoId} // 재생시킬 동영상의 ID
        onChangeState={onStateChange}
        onFullScreenChange={onFullScreen}
      />
    </YoutubeContainer>
  );
};

const YoutubeContainer = styled.View`
  border-radius: 14px;
  background-color: black;
  padding: 10px;
`;

export default Intro;
