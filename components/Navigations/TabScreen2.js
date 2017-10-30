import React, { Component } from "react"
import { Button, Text } from "react-native"
import MainStyles from "../../styles/MainStyle"
import FontAwesome, { Icons } from "react-native-fontawesome"

class TabScreen2 extends Component {
  static navigationOptions = {
    tabBarLabel: "Tab 2",
    tabBarIcon: ({ tintColor }) => (
      <FontAwesome style={{ fontSize: 22, color: tintColor }}>{Icons.android}</FontAwesome>
    ),
  }
  render() {
    return <Button onPress={() => this.props.navigation.goBack()} title="Go back home" />
  }
}

export default TabScreen2
