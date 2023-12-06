import { useState } from "react";
import { TouchableOpacity, View } from "react-native";

import styled from "styled-components/native";

import { BoldStyledText, StyledText } from "@styles/globalStyles";

const Quiz = () => {
  const quiz =
    "공직자는 경조사와 관련하여 몇 만원을 초과하는 금품 등을 주거나 받아서는 안 될까요?";

  const quizOptions = ["1만원", "3만원", "5만원", "10만원"];
  const correctAnswerIndex = 2;

  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);

  const handleOptionPress = (option: string) => {
    setSelectedOption(option);
  };

  const handleSubmitVote = () => {
    if (selectedOption === quizOptions[correctAnswerIndex]) {
      setIsCorrect(true);
    } else {
      setIsCorrect(false);
    }
  };

  const isOptionSelected = (option: string) => {
    return selectedOption === option;
  };

  return (
    <Container>
      <HeadContainer>
        <QuizMain>{"오늘의 퀴즈"}</QuizMain>
        <QuizImage
          source={require("@assets/icon/2.png")}
          resizeMode={"cover"}
        />
      </HeadContainer>
      <BoxContainer>
        <QuizField>{"법률 분야"}</QuizField>
        <QuizText>{quiz}</QuizText>
        <QuizOptions>
          {quizOptions.map((option, index) => (
            <View key={index}>
              {isCorrect !== null ? (
                <SelectionButton
                  key={option}
                  selected={isOptionSelected(option)}
                  onPress={() => handleOptionPress(option)}
                  disabled
                  style={{
                    backgroundColor:
                      selectedOption === quizOptions[index]
                        ? isCorrect
                          ? "#00A184"
                          : "#F06C6C"
                        : correctAnswerIndex === index
                        ? "#9BD8CD"
                        : "#FCD4D4",
                  }}
                >
                  <ButtonText
                    style={{
                      color:
                        selectedOption === quizOptions[index]
                          ? isCorrect
                            ? "#FFFFFF"
                            : "#FCD4D4"
                          : correctAnswerIndex === index
                          ? "#00A184"
                          : "#F06C6C",
                    }}
                  >
                    {correctAnswerIndex === index ? "O 정답" : "X 오답"}
                  </ButtonText>
                </SelectionButton>
              ) : (
                <SelectionButton
                  key={option}
                  selected={isOptionSelected(option)}
                  onPress={() => handleOptionPress(option)}
                >
                  <ButtonText>{`${String.fromCharCode(
                    65 + index
                  )}. ${option}`}</ButtonText>
                </SelectionButton>
              )}
            </View>
          ))}
        </QuizOptions>
        {isCorrect !== null ? (
          <VoteButton
            onPress={() => setIsCorrect(null)}
            disabled={selectedOption === null}
          >
            <VoteButtonText disabled={selectedOption === null}>
              {"다시 선택"}
            </VoteButtonText>
          </VoteButton>
        ) : (
          <VoteButton
            onPress={handleSubmitVote}
            disabled={selectedOption === null}
          >
            <VoteButtonText disabled={selectedOption === null}>
              {"선택하기"}
            </VoteButtonText>
          </VoteButton>
        )}
      </BoxContainer>
    </Container>
  );
};

const Container = styled.View`
  gap: 20px;
  width: 95%;
`;

const BoxContainer = styled.View`
  gap: 20px;
  border-width: 1px;
  border-color: #69c8b6;
  border-radius: 30px;

  padding: 25px;
`;

const HeadContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin: 0 10px;
`;

const QuizMain = styled(BoldStyledText)`
  font-size: 20px;
  color: #00a184;
`;

const QuizField = styled(StyledText)`
  font-size: 12px;
  color: #00a184;
`;

const QuizOptions = styled.View`
  gap: 10px;
`;

const QuizText = styled(BoldStyledText)`
  font-size: 20px;
  margin-bottom: 10px;
  text-align: left;
`;

const SelectionButton = styled.Pressable<{ selected: boolean }>`
  align-items: flex-start;

  border-radius: 12px;

  padding: 10px;

  background-color: ${(props) => (props.selected ? "#cccccc" : "#CFEDE7")};
`;

const VoteButton = styled(TouchableOpacity)`
  align-self: flex-end;

  justify-content: center;
  align-items: center;

  border-radius: 12px;

  margin-top: 10px;
  padding: 10px 20px;

  background-color: ${(props) => (props.disabled ? "#CFEDE7" : "#00A184")};
`;

const ButtonText = styled(StyledText)`
  font-size: 16px;
  color: #6e6e6e;
  margin-left: 10px;
`;

const VoteButtonText = styled(StyledText)`
  font-size: 15px;
  color: ${(props) => (props.disabled ? "#6C6C6C" : "#FFFFFF")};
`;

const QuizImage = styled.Image``;

export default Quiz;
