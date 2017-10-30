import React, { Component } from "react"
import { Text, View, ScrollView, Image } from "react-native"
import MainStyle from "../styles/MainStyle"

// import { StackNavigator } from "react-navigation"

export default class ScrollViewCom extends Component {
  static navigationOptions = { title: "Component : Flex" }

  render() {
    return (
      <View style={MainStyle.container}>
        <Text style={MainStyle.greetings}> Welcome to ScrollView Component</Text>
        <ScrollView stickyHeaderIndices={[0]}>
          <Text>
            This is a scroll view. You can scroll horizontally or vertically to see more items.
          </Text>
          <View style={MainStyle.box}>
            <Text> Image header text </Text>
            <Image source={require("../img/puppy.jpeg")} />
          </View>
          <View style={MainStyle.box}>
            <Text> Image header text </Text>
            <Image
              style={{ width: 345 }}
              source={require("../img/puppy-2.jpg")}
              resizeMode="contain"
            />
          </View>
          <View style={MainStyle.box}>
            <Text> Image header text </Text>
            <Image source={require("../img/puppy.jpeg")} />
          </View>

          <View style={MainStyle.box}>
            <Text> Image header text </Text>
            <ScrollView horizontal>
              <Image resizeMode="cover" source={require("../img/puppy-2.jpg")} />
            </ScrollView>
          </View>
        </ScrollView>
      </View>
    )
  }
}
