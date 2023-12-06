import { StyledText } from "@styles/globalStyles";
import { View } from "react-native";

const InformationScreen = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <StyledText>{"실시간 정보 화면"}</StyledText>
    </View>
  );
};

export default InformationScreen;
