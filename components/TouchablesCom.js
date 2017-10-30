import React, { Component } from "react"
import {
  View,
  Text,
  Alert,
  TouchableHighlight,
  TouchableOpacity,
  TouchableWithoutFeedback,
  StyleSheet,
} from "react-native"
// import { StackNavigator } from "react-navigation"
import MainStyle from "../styles/MainStyle"

let styles
const AppHeaderText = props => <Text style={MainStyle.greetings}>{props.children}</Text>

const TouchableContainer = (props) => {
  const {
    TheTouchable,
    onPressButton,
    onLongPressButton,
    btnText,
    descText,
    btnStyle,
    btnTextStyle,
  } = props

  return (
    <View style={MainStyle.box}>
      <AppHeaderText>{btnText}: </AppHeaderText>
      <Text style={{ padding: 5, lineHeight: 20 }}> {descText}</Text>
      <TheTouchable
        onPress={() => onPressButton()}
        onLongPress={() => onLongPressButton()}
        underlayColor="white"
        style={{ marginTop: 10, marginBottom: 10 }}
      >
        <View style={btnStyle}>
          <Text style={btnTextStyle}>{btnText}</Text>
        </View>
      </TheTouchable>
    </View>
  )
}

export default class TouchablesCom extends Component {
  static navigationOptions = { title: "Component : Touchable" }

  onPressButton = () => {
    Alert.alert("You tapped the button!")
  }
  onLongPressButton = () => {
    Alert.alert("You just long pressed this")
  }
  descTextTouchH = "Generally, you can use TouchableHighlight anywhere you would use a button or link on web. The view/'s background will be darkened when the user presses down on the button."
  btnTextTouchH = "TouchableHighlight"

  descTextTouchOp = "can be used to provide feedback by reducing the opacity of the button, allowing the background to be seen through while the user is pressing down."
  btnTextTouchOp = "TouchableOpacity"
  descTextTouchWF = "If you need to handle a tap gesture but you don't want any feedback to be displayed, use TouchableWithoutFeedback."
  btnTextTouchWF = "TouchableWithoutFeedback"

  render() {
    return (
      <View style={MainStyle.container}>
        <AppHeaderText> Touchable Components</AppHeaderText>
        <TouchableContainer
          TheTouchable={TouchableHighlight}
          onLongPressButton={this.onLongPressButton}
          onPressButton={this.onPressButton}
          descText={this.descTextTouchH}
          btnText={this.btnTextTouchH}
          btnStyle={StyleSheet.flatten([styles.btnCommon, { backgroundColor: "green" }])}
          btnTextStyle={StyleSheet.flatten([styles.btnTextCommon, { color: "white" }])}
        />
        <TouchableContainer
          TheTouchable={TouchableOpacity}
          onLongPressButton={this.onLongPressButton}
          onPressButton={this.onPressButton}
          descText={this.descTextTouchOp}
          btnText={this.btnTextTouchOp}
          btnStyle={StyleSheet.flatten([styles.btnCommon, { backgroundColor: "red" }])}
          btnTextStyle={StyleSheet.flatten([styles.btnTextCommon, { color: "white" }])}
        />
        <TouchableContainer
          TheTouchable={TouchableWithoutFeedback}
          onLongPressButton={this.onLongPressButton}
          onPressButton={this.onPressButton}
          descText={this.descTextTouchWF}
          btnText={this.btnTextTouchWF}
          btnStyle={StyleSheet.flatten([styles.btnCommon, { backgroundColor: "orange" }])}
          btnTextStyle={StyleSheet.flatten([styles.btnTextCommon, { color: "black" }])}
        />
      </View>
    )
  }
}

styles = StyleSheet.create({
  btnCommon: {
    padding: 8,
    marginTop: 10,
    borderRadius: 4,
  },
  btnTextCommon: {
    textAlign: "center",
    fontWeight: "600",
  },
})
