import React from "react";
import { View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { GoalsScreen } from "../../features/goals/screens/goals.screen";

const Tab = createBottomTabNavigator();

function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Home!</Text>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Settings!</Text>
    </View>
  );
}

const TAB_ICON = {
  Goals: "md-shield-checkmark",
  Map: "md-map",
  Checkout: "md-cart",
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
      <Tab.Screen name="Goals" component={GoalsScreen} />
      <Tab.Screen name="Checkout" component={SettingsScreen} />
      <Tab.Screen name="Map" component={HomeScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
};
