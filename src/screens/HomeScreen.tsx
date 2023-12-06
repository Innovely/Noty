import Intro from "@components/HomeScreen/Intro";
import Quiz from "@components/HomeScreen/Quiz";
import Poll from "@components/HomeScreen/Poll";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import styled from "styled-components/native";
import { ScrollView } from "react-native";
import OXQuiz from "@components/HomeScreen/OXQuiz";

const HomeScreen = () => {
  const insets = useSafeAreaInsets();

  return (
    <Container insetTop={insets.top} insetBottom={insets.bottom}>
      <ScrollView
        style={{ marginTop: 20 }}
        contentContainerStyle={{ alignItems: "center", gap: 30 }}
        showsVerticalScrollIndicator={false}
      >
        <Intro />
        <Quiz />
        <OXQuiz />
        <Poll />
        <Dummy />
      </ScrollView>
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

const Dummy = styled.View`
  height: 100px;
`;

export default HomeScreen;
