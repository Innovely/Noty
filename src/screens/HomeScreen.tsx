import { useCallback, useEffect, useState } from "react";
import { Platform } from "react-native";
import changeNavigationBarColor from "react-native-navigation-bar-color";

import { useSafeAreaInsets } from "react-native-safe-area-context";
import YoutubePlayer from "react-native-youtube-iframe";

import styled from "styled-components/native";

const HomeScreen = () => {
  const insets = useSafeAreaInsets();
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
    <Container insetTop={insets.top} insetBottom={insets.bottom}>
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
    </Container>
  );
};

const Container = styled.View<{ insetTop: number; insetBottom: number }>`
  flex: 1;
  justify-content: center;
  align-items: center;

  margin-top: ${(props) => props.insetTop}px;
  margin-bottom: ${(props) => props.insetBottom + 80}px;
`;

const YoutubeContainer = styled.View`
  border-radius: 14px;
  background-color: black;
  padding: 10px;
`;

export default HomeScreen;
