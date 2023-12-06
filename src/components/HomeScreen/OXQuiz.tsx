import { BoldStyledText, StyledText } from "@styles/globalStyles";
import React, { useState } from "react";
import styled from "styled-components/native";

const OXQuiz = () => {
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [modalVisible, setModalVisible] = useState<boolean>(false);

  const handleAnswer = (userAnswer: string) => {
    setIsCorrect(userAnswer === "O");

    setModalVisible(true);
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
        <QuizField>{"정책 분야"}</QuizField>
        <QuizText>{"청년 도약 계좌는 비과세 대상이다."}</QuizText>
        <QuizImage
          source={require("@assets/icon/1.png")}
          resizeMode="contain"
        />
        <ButtonContainer>
          <SelectionButton
            onPress={() => handleAnswer("O")}
            style={{ backgroundColor: "#00A184" }}
          >
            <ButtonText>{"O"}</ButtonText>
          </SelectionButton>
          <SelectionButton
            onPress={() => handleAnswer("X")}
            style={{ backgroundColor: "#F06C6C" }}
          >
            <ButtonText>{"X"}</ButtonText>
          </SelectionButton>
        </ButtonContainer>
      </BoxContainer>

      <StyledModal
        animationType="fade"
        transparent={true}
        statusBarTranslucent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <ModalContainer>
          <ModalContent>
            <ModalText>{isCorrect ? "정답입니다~!" : "오답입니다."}</ModalText>
            <StyledText style={{ fontSize: 12, textAlign: "center" }}>
              {
                "청년들이 자산을 형성할 수 있도록 도와주는 제도이기 때문에 청년 도약 계좌는 이자에 세금을 매기지 않아요!"
              }
            </StyledText>
            <ModalButton onPress={() => setModalVisible(!modalVisible)}>
              <ModalButtonText>닫기</ModalButtonText>
            </ModalButton>
          </ModalContent>
        </ModalContainer>
      </StyledModal>
    </Container>
  );
};

const Container = styled.View`
  gap: 20px;
  width: 95%;
`;

const BoxContainer = styled.View`
  align-items: center;
  gap: 20px;

  border-width: 1px;
  border-color: #69c8b6;
  border-radius: 30px;

  padding: 25px;
`;

const HeadContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

const QuizMain = styled(BoldStyledText)`
  font-size: 20px;
  color: #00a184;
`;

const QuizField = styled(StyledText)`
  align-self: flex-start;

  font-size: 12px;
  color: #00a184;
`;

const QuizText = styled(BoldStyledText)`
  font-size: 20px;
`;

const ButtonContainer = styled.View`
  flex-direction: row;
  gap: 8px;
`;

const SelectionButton = styled.TouchableOpacity`
  flex: 1;

  justify-content: center;
  align-items: center;

  border-radius: 12px;

  padding: 10px 0;
`;

const ButtonText = styled(StyledText)`
  font-size: 16px;
  color: #ffffff;
`;

const QuizImage = styled.Image``;

const StyledModal = styled.Modal``;

const ModalContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;

  background-color: rgba(0, 0, 0, 0.5);
`;

const ModalContent = styled.View`
  justify-content: center;
  align-items: center;
  gap: 30px;

  width: 80%;
  height: 300px;

  border-radius: 30px;

  padding: 20px;

  background-color: white;
`;

const ModalText = styled(BoldStyledText)`
  font-size: 18px;
`;

const ModalButton = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;

  width: 140px;

  padding: 10px;
  border-radius: 5px;
  background-color: #00a184;
`;

const ModalButtonText = styled(BoldStyledText)`
  color: white;
  font-size: 16px;
`;

export default OXQuiz;
