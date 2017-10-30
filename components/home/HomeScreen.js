import React, { Component } from "react"
import { StyleSheet, View, FlatList } from "react-native"

import ListItem from "./ListItem"

let styles
class HomeScreen extends Component {
  static navigationOptions = { title: "Welcome" }
  render() {
    const { navigate } = this.props.navigation
    const dataList = [
      { text: "Text", key: "text" },
      { text: "Button", key: "button" },
      { text: "Flex", key: "flex" },
      { text: "Touchable", key: "touchable" },
      { text: "ScrollView", key: "scroll-view" },
      { text: "FlatList", key: "flat-list" },
      { text: "SectionList", key: "section-list" },
      { text: "Navigation", key: "navigation" },
      { text: "Drawer Navigation", key: "drawer-navigation" },
    ]

    return (
      <View style={styles.container}>
        <FlatList
          data={dataList}
          renderItem={({ item }) => <ListItem navigate={navigate} item={item} />}
        />
      </View>
    )
  }
}

export default HomeScreen

styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 22,
    backgroundColor: "#F5FCFF",
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
    marginTop: 8,
    marginBottom: 8,
    backgroundColor: "green",
    textAlign: "center",
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5,
  },
})
