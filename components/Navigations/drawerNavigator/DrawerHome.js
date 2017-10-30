import React from "react"
import { View, Text } from "react-native"
import MainStyles from "../../../styles/MainStyle"

const DrawerHome = () => (
  <View style={MainStyles.container}>
    <Text style={MainStyles.greetings}>
      Welcome to Drawer home page. This will show you its working demo.
    </Text>
  </View>
)

export default DrawerHome
