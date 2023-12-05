/**
 * @format
 */

import { Text, View } from "react-native";

import styled from "styled-components/native";
import QuizScreen from "./screens/QuizScreen";

const App = () => {
  return <QuizScreen />;
};

const Container = styled.View`
  justify-content: center;
  align-items: center;
`;

export default App;
