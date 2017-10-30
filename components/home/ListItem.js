import React, { Component } from "react"
import { Button } from "react-native"

class ListItem extends Component {
  onOptionButtonPressed = (item) => {
    // load selected component page
    let targetScreen = "ButtonCom"
    switch (item.key) {
      case "text":
        targetScreen = "TextCom"
        break
      case "flex":
        targetScreen = "FlexboxCom"
        break
      case "ScrollView":
        targetScreen = "TouchablesCom"
        break
      case "scroll-view":
        targetScreen = "ScrollViewCom"
        break

      case "section-list":
        targetScreen = "SectionListCom"
        break
      case "flat-list":
        targetScreen = "FlatListCom"
        break
      case "navigation":
        targetScreen = "Navigation"
        break
      case "drawer-navigation":
        targetScreen = "DrawerNav"
        break

      default:
        targetScreen = "ButtonCom"
        break
    }

    this.props.navigate(targetScreen)
  }

  render() {
    return (
      <Button
        title={this.props.item.text}
        onPress={() => this.onOptionButtonPressed(this.props.item)}
      />
    )
  }
}

export default ListItem
