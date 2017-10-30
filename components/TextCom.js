import React, { Component } from "react"
import { Text, View, Alert } from "react-native"
// import { StackNavigator } from "react-navigation"
import MainStyle from "../styles/MainStyle"

const NestedText = () => (
  <Text>
    <AppHeaderText>
      <Text> Text </Text>
    </AppHeaderText>
    <Text style={MainStyle.bodyText}>supports nesting, styling, and touch handling</Text>
  </Text>
)

const AppHeaderText = props => (
  <Text style={{ fontSize: 20, fontWeight: "700" }}>{props.children}</Text>
)

export default class TextCom extends Component {
  static navigationOptions = { title: "Component : Text" }
  render() {
    return (
      <View style={MainStyle.container}>
        <Text>A React component for displaying text.</Text>
        <NestedText />
        <Text style={{ marginTop: 40 }}>
          <AppHeaderText>
            <Text> Text </Text>
          </AppHeaderText>
          component is special relative to its layout : everything inside it uses Text Layout not
          flexbox layout.
        </Text>
        <Text style={MainStyle.examples}>
          <Text> This is the first line </Text>
          <Text>
            This is second line. but its flow with first line just like it is part of first line.
          </Text>
        </Text>
        <View sytle={{ marginTop: 20 }}>
          <Text>Text can be configured to handle press or long press as well </Text>
          <Text style={MainStyle.examples}>
            <Text
              onPress={() => {
                Alert.alert("You just press the text")
              }}
            >
              Press here!
            </Text>
            {"\n"}
            <Text
              onLongPress={() => {
                Alert.alert("You just long pressed on the text")
              }}
            >
              Long Press here!!
            </Text>
          </Text>
        </View>
        <View sytle={{ marginTop: 20 }}>
          <AppHeaderText>
            <Text> Text Style Properties : </Text>
          </AppHeaderText>
        </View>
      </View>
    )
  }
}
