import React, { Component } from "react"
import { Button } from "react-native"

import FontAwesome, { Icons } from "react-native-fontawesome"

class TabScreen3 extends Component {
  static navigationOptions = {
    tabBarLabel: "More",
    tabBarIcon: ({ tintColor }) => (
      <FontAwesome style={{ fontSize: 22, color: tintColor }}>{Icons.ellipsisH}</FontAwesome>
    ),
  }
  render() {
    return <Button onPress={() => this.props.navigation.goBack()} title="Go back home" />
  }
}

export default TabScreen3
