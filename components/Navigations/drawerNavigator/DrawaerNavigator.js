import React from "react"
import { DrawerNavigator } from "react-navigation"
import Ionicons from "react-native-vector-icons/Ionicons"

import DrawerHome from "./DrawerHome"
import ProfileCom from "./ProfileCom"
import SettingsCom from "./SettingsCom"

const Navigator = DrawerNavigator(
  {
    Home: {
      screen: DrawerHome,
      navigationOptions: {
        drawerLabel: "Home",
        drawerIcon: ({ tintColor, focused }) => (
          <Ionicons
            name={focused ? "ios-home" : "ios-home-outline"}
            size={20}
            style={{ color: tintColor }}
          />
        ),
      },
    },
    Profile: {
      screen: ProfileCom,
      navigationOptions: {
        drawerLabel: "Profile",
        drawerIcon: ({ tintColor, focused }) => (
          <Ionicons
            name={focused ? "ios-contact" : "ios-contact-outline"}
            size={20}
            style={{ color: tintColor }}
          />
        ),
      },
    },
    Settings: {
      screen: SettingsCom,

      navigationOptions: {
        drawerLabel: "Settings",
        drawerIcon: ({ tintColor, focused }) => (
          <Ionicons
            name={focused ? "ios-settings" : "ios-settings-outline"}
            size={20}
            style={{ color: tintColor }}
          />
        ),
      },
    },
  },
  {
    contentOptions: {
      activeTintColor: "#e91e63",
    },
  },
)
const DrawerNav = () => <Navigator />

export default DrawerNav
