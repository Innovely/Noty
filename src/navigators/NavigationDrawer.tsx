import CustomTabBar from "@components/navigation/CustomTabBar";
import { createDrawerNavigator } from "@react-navigation/drawer";
import type { DrawerHeaderProps } from "@react-navigation/drawer";
import ChatBotScreen from "@screens/ChatBotScreen";

import HomeScreen from "@screens/HomeScreen";
import InformationScreen from "@screens/InformationScreen";
import { useCallback } from "react";

const Drawer = createDrawerNavigator();

const NavigationDrawer = () => {
  const header = useCallback((props: DrawerHeaderProps) => {
    return <CustomTabBar {...props} />;
  }, []);

  return (
    <Drawer.Navigator
      screenOptions={{
        drawerType: "front",
        drawerPosition: "right",
        swipeEnabled: false,
        sceneContainerStyle: { backgroundColor: "white" },
        header,
      }}
      // drawerContent={(props) => <CustomDrawerContent {...props} />}
      initialRouteName="Home"
    >
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Info" component={InformationScreen} />
      <Drawer.Screen name="ChatBot" component={ChatBotScreen} />
    </Drawer.Navigator>
  );
};

export default NavigationDrawer;
