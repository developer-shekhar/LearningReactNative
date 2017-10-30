import React from "react"
import { Text, View } from "react-native"
import { TabNavigator } from "react-navigation"
import FontAwesome, { Icons } from "react-native-fontawesome"

import MainStyles from "../../styles/MainStyle"
import TabScreen1 from "./TabScreen1"
import TabScreen2 from "./TabScreen2"
import TabScreen3 from "./TabScreen3"

class NavigateHome extends React.Component {
  static navigationOptions = {
    tabBarLabel: "Home",
    // Note: By default the icon is only shown on iOS. Search the showIcon option below.
    tabBarIcon: ({ tintColor }) => (
      <FontAwesome style={{ fontSize: 22, color: tintColor }}>{Icons.home}</FontAwesome>
    ),
  }

  render() {
    return (
      <View style={MainStyles.container}>
        <Text>This will show you various option to navigate between different screens</Text>
      </View>
    )
  }
}

const TabNavigatorDemo = TabNavigator(
  {
    NavigateHome: { screen: NavigateHome },
    TabScreen1: { screen: TabScreen1 },
    TabScreen2: { screen: TabScreen2 },
    TabScreen3: { screen: TabScreen3 },
  },
  {
    tabBarPosition: "bottom",
    animationEnabled: true,
    tabBarOptions: {
      activeTintColor: "#e91e63",
    },
  },
)

const Navigation = () => <TabNavigatorDemo />

export default Navigation
