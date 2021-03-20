import { Ionicons } from '@expo/vector-icons';
import { AntDesign, MaterialIcons } from "@expo/vector-icons";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import TabOneScreen from '../screens/TabOneScreen';
import TabTwoScreen from '../screens/TabTwoScreen';
import {BottomTabParamList, HomeParamList, TabTwoParamList} from '../types';
import NotFoundScreen from "../screens/NotFoundScreen";

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      tabBarOptions={{ activeTintColor: Colors[colorScheme].tint }}>
      <BottomTab.Screen
        name="Home"
        component={HomeNavigator}
        options={{
            tabBarIcon: ({ color }) => <AntDesign name="home" size={24} color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Coming Soon"
        component={TabTwoNavigator}
        options={{
            tabBarIcon: ({ color }) => <MaterialIcons name="video-library" size={24} color={color} />,
        }}
      />
        <BottomTab.Screen
            name="Search"
            component={NotFoundScreen}
            options={{
                tabBarIcon: ({ color }) => <Ionicons name="search" size={24} color={color} />,
            }}
        />
        <BottomTab.Screen
            name="Downloads"
            component={NotFoundScreen}
            options={{
                tabBarIcon: ({ color }) => <AntDesign name="download" size={24} color={color} />,
            }}
        />
    </BottomTab.Navigator>
  );
}



// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const HomeStack = createStackNavigator<HomeParamList>();

function HomeNavigator() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="HomeScreen"
        component={TabOneScreen}
        options={{ headerShown: false }}
      />
    </HomeStack.Navigator>
  );
}

const TabTwoStack = createStackNavigator<TabTwoParamList>();

function TabTwoNavigator() {
  return (
    <TabTwoStack.Navigator>
      <TabTwoStack.Screen
        name="TabTwoScreen"
        component={TabTwoScreen}
        options={{ headerTitle: 'Tab Two Title' }}
      />
    </TabTwoStack.Navigator>
  );
}
