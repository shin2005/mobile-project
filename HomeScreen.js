import React, { Component } from "react";
import {
  AlertIOS,
  Button,
  StyleSheet,
  View,
  TextInput,
  Image,
  Text
} from "react-native";
import { Header, Left, Right, Icon } from "native-base";

class HomeScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Header>
          <Left>
            <Icon
              name="menu"
              onPress={() => this.props.navigation.openDrawer()}
            />
          </Left>
        </Header>
        <View
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        />
        <Text>HomeScreen</Text>
      </View>
    );
  }
}

const AppDrawerNavigator = createDrawerNavigator({
  Home: HomeScreen,
  Settings: SettingsScreen
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  backgroundImage: {
    flex: 10,
    resizeMode: "center"
  }
});
