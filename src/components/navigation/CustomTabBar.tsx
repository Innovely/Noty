import { Dimensions, TouchableOpacity } from "react-native";
import { Shadow } from "react-native-shadow-2";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import styled from "styled-components/native";

import Search from "@assets/icon/search.svg";
import CI from "@assets/icon/ci(white).svg";
import More from "@assets/icon/more_horiz.svg";
import { MediumStyledText } from "@styles/globalStyles";

const { height: SCREEN_HEIGHT } = Dimensions.get("screen");

const CustomHeader = ({ navigation }: { navigation: any; route: any }) => {
  const insets = useSafeAreaInsets();

  return (
    <Container bottomInset={insets.bottom} topInset={insets.top}>
      <Shadow
        distance={8}
        offset={[0, -2]}
        startColor="#0000001a"
        sides={{ start: false, end: false, top: true, bottom: false }}
      >
        <ContentsContainer>
          <TouchableOpacity style={{ alignItems: "center", gap: 10 }}>
            <Search width={40} height={40} fill="#96D9CC" />
            <MediumStyledText style={{ fontSize: 10, color: "#9b9b9b" }}>
              {"검색"}
            </MediumStyledText>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              alignItems: "center",
              alignSelf: "flex-start",
              top: -20,
              gap: 10,
            }}
          >
            <Shadow style={{ borderRadius: 35 }} distance={6} offset={[0, -2]}>
              <HomeButton>
                <CI width={50} height={50} />
              </HomeButton>
            </Shadow>
            <MediumStyledText style={{ fontSize: 10, color: "#9b9b9b" }}>
              {"홈"}
            </MediumStyledText>
          </TouchableOpacity>
          <TouchableOpacity
            style={{ alignItems: "center", gap: 10 }}
            onPress={() => {
              navigation.openDrawer();
            }}
          >
            <MoreButton>
              <More width={30} height={30} fill="#96D9CC" />
            </MoreButton>
            <MediumStyledText style={{ fontSize: 10, color: "#9b9b9b" }}>
              {"전체보기"}
            </MediumStyledText>
          </TouchableOpacity>
        </ContentsContainer>
      </Shadow>
    </Container>
  );
};

const Container = styled.View<{ topInset: number; bottomInset: number }>`
  position: absolute;
  top: ${(props) => SCREEN_HEIGHT - 80 - props.bottomInset}px;

  width: 100%;
`;

const ContentsContainer = styled.View`
  flex-direction: row;

  justify-content: space-around;
  align-items: center;

  width: 100%;
  height: 80px;

  background-color: white;
`;

const HomeButton = styled.View`
  justify-content: center;
  align-items: center;

  width: 70px;
  height: 70px;

  border-radius: 35px;

  background-color: #00a184;
`;

const MoreButton = styled.View`
  justify-content: center;
  align-items: center;

  width: 40px;
  height: 40px;

  border-width: 2px;
  border-color: #96d9cc;
  border-radius: 20px;
`;

export default CustomHeader;
