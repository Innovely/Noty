import styled from "styled-components/native";

import { BoldStyledText, StyledText } from "@styles/globalStyles";
import { Image, View } from "react-native";

const LockUp = () => {
  return (
    <Container>
      <HeadContainer>
        <LockUpMain>{"새로운 법안, 정책 살펴보기"}</LockUpMain>
      </HeadContainer>
      <ContentsContainer>
        <Image
          source={require("@assets/thumb/thumb1.webp")}
          style={{ width: 160, height: 90 }}
        />
        <View style={{ flex: 1, gap: 5 }}>
          <BoldStyledText>
            {"상어가족이 표절이라고요? | 법 읽어드립니다! | 국회방송"}
          </BoldStyledText>
          <StyledText style={{ fontSize: 12 }}>
            {
              "나를 알고, 법을 알면 백전백승💪 일상 속 분쟁을 해결하는 시간! 법 읽어드립니다!"
            }
          </StyledText>
        </View>
      </ContentsContainer>
      <ContentsContainer>
        <Image
          source={require("@assets/thumb/thumb2.webp")}
          style={{ width: 160, height: 90 }}
        />
        <View style={{ flex: 1, gap: 5 }}>
          <BoldStyledText>
            {
              "통장에 보낸 생활비 증여세 내야 할까? | 법 읽어드립니다! | 국회방송"
            }
          </BoldStyledText>
          <StyledText style={{ fontSize: 12 }}>
            {
              "나를 알고, 법을 알면 백전백승💪 일상 속 분쟁을 해결하는 시간! 법 읽어드립니다!"
            }
          </StyledText>
        </View>
      </ContentsContainer>
      <ContentsContainer>
        <Image
          source={require("@assets/thumb/thumb3.webp")}
          style={{ width: 160, height: 90 }}
        />
        <View style={{ flex: 1, gap: 5 }}>
          <BoldStyledText>
            {
              "AI가 발명한 제품 특허권이 인정될까? | 법 읽어드립니다! | 국회방송"
            }
          </BoldStyledText>
          <StyledText style={{ fontSize: 12 }}>
            {
              "나를 알고, 법을 알면 백전백승💪 일상 속 분쟁을 해결하는 시간! 법 읽어드립니다!"
            }
          </StyledText>
        </View>
      </ContentsContainer>
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

const LockUpMain = styled(BoldStyledText)`
  font-size: 20px;
  color: #00a184;
`;

const ContentsContainer = styled.View`
  flex-direction: row;
  gap: 10px;
  width: 100%;
`;

export default LockUp;
