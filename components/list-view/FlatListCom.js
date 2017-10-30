import React from "react"
import { Text, View, FlatList } from "react-native"
import MainStyle from "../../styles/MainStyle"

const datalist = [
  { key: "Shashi" },
  { key: "Shekhar" },
  { key: "Sharma" },
  { key: "Devin" },
  { key: "James" },
  { key: "Jackson" },
  { key: "Joel" },
  { key: "John" },
  { key: "Jillian" },
  { key: "Jimmy" },
  { key: "Julie" },
]

const FlatListCom = () => (
  <View style={MainStyle.container}>
    <Text style={MainStyle.greetings}>FlatList demo</Text>
    <FlatList
      data={datalist}
      renderItem={({ item }) => <Text style={MainStyle.listItem}> {item.key}</Text>}
    />
  </View>
)
export default FlatListCom
