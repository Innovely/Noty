import { useState } from "react";
import { TouchableOpacity, View } from "react-native";
import { Shadow } from "react-native-shadow-2";

import styled from "styled-components/native";

import {
  BoldStyledText,
  MediumStyledText,
  StyledText,
} from "@styles/globalStyles";

const Poll = () => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [voted, setVoted] = useState(false);
  const [votes, setVotes] = useState({
    찬성: 126,
    반대: 77,
    상관없음: 32,
  });

  const handleOptionPress = (option: string) => {
    setSelectedOption(option);
  };

  const handleSubmitVote = () => {
    if (selectedOption) {
      console.log("선택한 답안:", selectedOption);
      setVotes((prevVotes) => ({
        ...prevVotes,
        [selectedOption]: prevVotes[selectedOption] + 1,
      }));
      setVoted(true);
    } else {
      console.log("투표를 제출하려면 답안을 선택하세요.");
    }
  };

  const isOptionSelected = (option: string) => {
    return selectedOption === option;
  };

  const calculateVotingRatio = (option: string) => {
    const totalVotes = votes.찬성 + votes.반대 + votes.상관없음;
    return totalVotes === 0
      ? 0
      : ((votes[option] / totalVotes) * 100).toFixed(2);
  };

  return (
    <Container>
      <HeadContainer>
        <PollMain>{"여론 조사"}</PollMain>
      </HeadContainer>
      <Shadow style={{ width: "100%", borderRadius: 22 }}>
        <BoxContainer>
          <View style={{ gap: 5 }}>
            <PollDate>{"2023.00.00"}</PollDate>
            <TextContainer>
              <PollText>{"국민 평화통일 여론 조사"}</PollText>
              <ViewMoreText>{"자세히 보기"}</ViewMoreText>
            </TextContainer>
            <PollSum>{"간단한 설명"}</PollSum>
          </View>
          {Object.keys(votes).map((option) => (
            <Button
              key={option}
              selected={isOptionSelected(option)}
              onPress={() => handleOptionPress(option)}
              disabled={voted}
            >
              <HeadContainer>
                <ButtonText>{option}</ButtonText>
                {voted && (
                  <VotingRatioContainer>
                    <StyledText style={{ color: "#00A184" }}>
                      {`${calculateVotingRatio(option)}%`}
                    </StyledText>
                  </VotingRatioContainer>
                )}
              </HeadContainer>
            </Button>
          ))}

          <VoteButton
            onPress={handleSubmitVote}
            disabled={selectedOption === null || voted}
          >
            <VoteButtonText selected={selectedOption !== null}>
              {"투표하기"}
            </VoteButtonText>
          </VoteButton>
        </BoxContainer>
      </Shadow>
    </Container>
  );
};

const Container = styled.View`
  gap: 20px;
  width: 95%;
`;

const BoxContainer = styled.View`
  gap: 20px;

  border-radius: 22px;
  padding: 25px;
`;

const HeadContainer = styled.View`
  flex-direction: row;
`;

const PollDate = styled(StyledText)`
  font-size: 12px;
  color: #6c6c6c;
`;

const TextContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

const PollText = styled(BoldStyledText)`
  font-size: 20px;
`;

const ViewMoreText = styled(BoldStyledText)`
  font-size: 10px;
  text-decoration-line: underline;
  color: #6c6c6c;
`;

const PollMain = styled(BoldStyledText)`
  font-size: 20px;
  color: #00a184;
`;

const PollSum = styled(MediumStyledText)`
  font-size: 10px;
  color: #404040;
`;

const Button = styled(TouchableOpacity)<{ selected: boolean }>`
  border-color: #69c8b6;
  border-width: 1px;
  padding: 10px;
  border-radius: 10px;
`;

const VoteButton = styled(TouchableOpacity)`
  justify-content: center;
  align-items: center;
  width: 90px;

  border-radius: 12px;

  margin-bottom: 10px;
  padding: 10px;

  background-color: ${(props) => (props.disabled ? "#CCCCCC" : "#00A184")};
`;

const ButtonText = styled(StyledText)`
  font-size: 16px;
  color: #6e6e6e;
  margin-left: 10px;
`;

const VoteButtonText = styled(StyledText)<{ selected: boolean }>`
  font-size: 14px;
  color: ${(props) => (props.selected ? "white" : "#6e6e6e")};
`;

const VotingRatioContainer = styled.View`
  position: absolute;
  top: 0;
  right: 0;
`;

export default Poll;
