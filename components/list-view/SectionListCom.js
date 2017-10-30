import React from "react"
import { Text, View, SectionList, StyleSheet } from "react-native"
import MainStyle from "../../styles/MainStyle"

let styles
const dataList = [
  { title: "S", data: ["Shashi", "Shekhar", "Sharma"] },
  { title: "J", data: ["Jackson", "James", "Joel", "John", "Jillian", "Jimmy", "Julie"] },
]
const SectionListCom = () => (
  <View style={MainStyle.container}>
    <Text style={MainStyle.greetings}> Section List Demo : </Text>
    <SectionList
      sections={dataList}
      renderItem={({ item }) => <Text style={MainStyle.listItem}> {item} </Text>}
      renderSectionHeader={({ section }) => (
        <Text style={styles.sectionHeader}> {section.title} </Text>
      )}
    />
  </View>
)
export default SectionListCom
styles = StyleSheet.create({
  sectionHeader: {
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    fontSize: 14,
    fontWeight: "bold",
    backgroundColor: "rgba(197,247,497,1)",
  },
})
