import CustomTabBar from "@components/navigation/CustomTabBar";
import { createDrawerNavigator } from "@react-navigation/drawer";

import HomeScreen from "@screens/HomeScreen";
import QuizScreen from "../screens/QuizScreen";
import OXQuiz from "../screens/OXQuiz";
import Poll from "../screens/Poll";

const Drawer = createDrawerNavigator();

const NavigationDrawer = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerType: "front",
        drawerPosition: "right",
        swipeEnabled: false,
        sceneContainerStyle: { backgroundColor: "white" },
        // eslint-disable-next-line react/no-unstable-nested-components
        header: (props) => <CustomTabBar {...props} />,
      }}
      // drawerContent={(props) => <CustomDrawerContent {...props} />}
      initialRouteName="Home"
    >
      {/* 메인 페이지들은 BottomTabNavigator 컴포넌트를 통해 각 페이지간 이동 가능 */}
      <Drawer.Screen name="Home" component={HomeScreen} />
    </Drawer.Navigator>
  );
};

export default NavigationDrawer;
