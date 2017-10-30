import { StackNavigator } from "react-navigation"
import ButtonCom from "./components/ButtonCom"
import HomeScreen from "./components/home/HomeScreen"
import TextCom from "./components/TextCom"
import FlexboxCom from "./components/FlexboxCom"
import TouchablesCom from "./components/TouchablesCom"
import ScrollViewCom from "./components/ScrollViewCom"
import FlatListCom from "./components/list-view/FlatListCom"
import SectionListCom from "./components/list-view/SectionListCom"
import Navigation from "./components/Navigations/Navigation"
import DrawerNav from "./components/Navigations/drawerNavigator/DrawaerNavigator"

const AppNav = StackNavigator({
  Home: { screen: HomeScreen },
  ButtonCom: { screen: ButtonCom },
  TextCom: { screen: TextCom },
  FlexboxCom: { screen: FlexboxCom },
  TouchablesCom: { screen: TouchablesCom },
  ScrollViewCom: { screen: ScrollViewCom },
  FlatListCom: { screen: FlatListCom },
  SectionListCom: { screen: SectionListCom },
  Navigation: { screen: Navigation },
  DrawerNav: { screen: DrawerNav },
})

export default AppNav
