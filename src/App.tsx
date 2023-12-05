/**
 * @format
 */

import { Text, View } from "react-native";

import styled from "styled-components/native";
import QuizScreen from "./screens/QuizScreen";
import OXQuiz from "./screens/OXQuiz";

const App = () => {
  return <OXQuiz />;
};

const Container = styled.View`
  justify-content: center;
  align-items: center;
`;

export default App;
