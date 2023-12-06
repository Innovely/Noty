import { useCallback, useEffect, useRef, useState } from "react";
import { Platform, ScrollView } from "react-native";
import changeNavigationBarColor from "react-native-navigation-bar-color";
import YoutubePlayer from "react-native-youtube-iframe";

import styled from "styled-components/native";

import { BoldStyledText, StyledText } from "@styles/globalStyles";

const Intro = () => {
  const scrollViewRef = useRef<ScrollView>(null);

  const [playing, setPlaying] = useState<boolean>(false);
  const [videoId, _setVideoId] = useState<string[]>([
    "t7orMfNuBD8",
    "awjrtNeLGNo",
    "4CrQH8N_pIw",
  ]);

  const onStateChange = useCallback((state: any) => {
    if (state === "ended") {
      setPlaying(false);
    }
  }, []);

  // const togglePlaying = useCallback(() => {
  //   setPlaying((prev) => !prev);
  // }, []);

  const onFullScreen = useCallback((status: boolean) => {
    if (Platform.OS === "android" && !status) {
      changeNavigationBarColor("transparent");
      console.log(status);
    }
  }, []);

  useEffect(() => {
    if (scrollViewRef && scrollViewRef.current) {
      scrollViewRef.current.scrollTo({ x: 330, y: 0, animated: true });
    }
  }, []); // 컴포넌트가 처음 마운트될 때만 실행되도록 합니다.

  return (
    <Container>
      <HeadContainer>
        <IntroMain>{"오늘날의 국회"}</IntroMain>
      </HeadContainer>
      <ScrollView
        ref={scrollViewRef}
        horizontal
        contentContainerStyle={{ gap: 5 }}
      >
        {videoId.map((_, index) => (
          <YoutubeContainer key={index}>
            <YoutubePlayer
              width={320}
              height={180}
              play={playing}
              videoId={videoId[index]} // 재생시킬 동영상의 ID
              onChangeState={onStateChange}
              onFullScreenChange={onFullScreen}
            />
          </YoutubeContainer>
        ))}
      </ScrollView>
      <StyledText style={{ color: "#535353", textDecorationLine: "underline" }}>
        {"현대화 되고 선진화 된 국회를 알아봅시다!"}
      </StyledText>
    </Container>
  );
};

const Container = styled.View`
  gap: 20px;
  align-items: center;
  width: 95%;
`;

const HeadContainer = styled.View`
  flex-direction: row;
  align-self: flex-start;
`;

const IntroMain = styled(BoldStyledText)`
  font-size: 24px;
  color: #00a184;
`;

const YoutubeContainer = styled.View`
  border-radius: 14px;
  background-color: black;
  padding: 10px;
`;

export default Intro;
