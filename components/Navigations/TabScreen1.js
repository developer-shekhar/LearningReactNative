import React, { Component } from "react"
import { Button, Text } from "react-native"
import FontAwesome, { Icons } from "react-native-fontawesome"
import MainStyles from "../../styles/MainStyle"

export default class TabScreen1 extends Component {
  static navigationOptions = {
    tabBarLabel: "Tab 1",
    tabBarIcon: ({ tintColor }) => (
      <FontAwesome style={{ fontSize: 22, color: tintColor }}>{Icons.apple}</FontAwesome>
    ),
  }
  render() {
    return <Button onPress={() => this.props.navigation.goBack()} title="Go back home" />
  }
}
