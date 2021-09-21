import React from "react";
import { View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { GoalsScreen } from "../../features/goals/screens/goals.screen";
import { HomeScreen } from "../../features/home/screens/home.screen";
import { FinancialScreen } from "../../features/finances/screens/financial.screen";
const Tab = createBottomTabNavigator();

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Settings!</Text>
    </View>
  );
}

const TAB_ICON = {
  Home: "md-home",
  Goals: "md-shield-checkmark",
  Map: "md-map",
  Finances: "wallet-sharp",
  Settings: "md-settings",
};

const createScreenOptions = ({ route }) => {
  const iconName = TAB_ICON[route.name];
  return {
    tabBarIcon: ({ size, color }) => (
      <Ionicons name={iconName} size={size} color={color} />
    ),
    tabBarActiveTintColor: "#c66aab",
    tabBarInactiveTintColor: "#b2d3e1",
    tabBarStyle: [
      {
        display: "flex",
      },
      null,
    ],
  };
};
export const AppNavigator = () => {
  return (
    <Tab.Navigator screenOptions={createScreenOptions}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Goals" component={GoalsScreen} />
      <Tab.Screen name="Finances" component={FinancialScreen} />
      <Tab.Screen name="Map" component={HomeScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
};
