import { View } from "react-native";

import { StyledText } from "@styles/globalStyles";

const ChatBotScreen = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <StyledText>{"챗봇 화면"}</StyledText>
    </View>
  );
};

export default ChatBotScreen;
