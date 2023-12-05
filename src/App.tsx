/**
 * @format
 */

import { Platform, StatusBar } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import changeNavigationBarColor from "react-native-navigation-bar-color";

import { NavigationContainer } from "@react-navigation/native";

// import { useSelector } from "react-redux";

// import { RootState } from "@redux/reducers";

import NavigationDrawer from "@navigators/NavigationDrawer";

const App = () => {
  // 안드로이드 하단 네비게이션 바 색상 제거
  if (Platform.OS === "android") {
    changeNavigationBarColor("transparent");
  }

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <StatusBar
          translucent
          backgroundColor="transparent"
          barStyle="dark-content"
        />
        <NavigationDrawer />
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
