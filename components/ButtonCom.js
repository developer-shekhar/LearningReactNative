import React, { Component } from "react";
import { StyleSheet, Text, Button, View, Alert } from "react-native";

import MainStyle from "../styles/MainStyle";

export default class ButtonCom extends Component {
  static navigationOptions = { title: "Component : Button" };

  render() {
    return (
      <View style={MainStyle.container}>
        <View style={MainStyle.box}>
          <Text style={MainStyle.greetings}>Simple Button</Text>
          <Text>
            The title and onPress handler are required. It is recommended to set
            accessibility lable to help make your app usable by everyone.
          </Text>
          <Button
            title="Press Me"
            onPress={() => {
              Alert.alert("You pressed me!");
            }}
          />
        </View>
        <View
          style={StyleSheet.flatten([MainStyle.topMargin20, MainStyle.box])}
        >
          <Text style={MainStyle.greetings}>Simple Button</Text>
          <Text>
            The title and onPress handler are required. It is recommended to set
            accessibility lable to help make your app usable by everyone.
          </Text>
        </View>
      </View>
    );
  }
}
