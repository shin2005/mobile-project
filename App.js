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

import { AppContainer, createAppContainer } from "react-navigation";

const AppNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen
  }
});

const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {
  onButtonPress() {}
  state = { text: "" };
  render() {
    return (
      <>
        <AppContainer />
        <View style={styles.container}>
          <Text
            style={{
              fontSize: 20,
              fontWeight: "bold",
              textAlign: "center",
              marginBottom: 10,
              color: "rgb(51, 14, 199)"
            }}
          >
            Keep at it!!!
          </Text>
          <Image
            source={require("./img/blackhole.jpeg")}
            style={styles.backgroundImage}
          />
          <TextInput
            style={{
              height: 40,
              borderColor: "black",
              borderStyle: "solid",
              borderWidth: 0.5,
              textAlign: "right"
            }}
            placeholder="username@email.com or phone number"
            onChangeText={text => this.setState({ text })}
          />
          <TextInput
            style={{
              height: 40,
              borderColor: "black",
              borderStyle: "solid",
              borderWidth: 0.5,
              textAlign: "right"
            }}
            placeholder="password"
            onChangeText={text => this.setState({ text })}
            secureTextEntry
          />
          <Button
            Button
            style={{ flex: 1, flexDirection: "row" }}
            title="Login"
            onPress={() =>
              AlertIOS.prompt("working on it", "My Alert Msg", [
                {
                  text: "damn it",
                  onPress: () => console.log("damn it pressed")
                },
                { text: "Fine", onPress: () => console.log("Fine Pressed") },
                { text: "OK", onPress: () => console.log("OK Pressed") }
              ])
            }
          />
          <Button
            title="RESUME"
            onPress={() =>
              AlertIOS.prompt(
                "RESUME",
                "coming soon",
                "don`t be mad",
                "Don`t Panic!",
                [
                  {
                    text: "come on",
                    onPress: () => console.log("come on pressed")
                  },
                  { text: "OK", onPress: () => console.log("OK pressed") }
                ]
              )
            }
          />
          <Button
            title="Don`t be Disturbed"
            onPress={() =>
              AlertIOS.prompt("working on this too", "My Alert Msg", [
                {
                  text: "damn it",
                  onPress: () => console.log("damn it pressed")
                },
                {
                  text: "Fine",
                  onPress: () => console.log("Fine pressed")
                },
                {
                  text: "OK",
                  onPress: () => console.log("OK Pressed")
                }
              ])
            }
          />
          <TextInput
            style={{ height: 40 }}
            placeholder="Type here to translate!"
            onChangeText={text => this.setState({ text })}
          />
          <Text style={{ padding: 10, fontSize: 42 }}>
            {this.state.text
              .split(" ")
              .map(word => word && "")
              .join(" ")}
          </Text>
        </View>
      </>
    );
  }
}

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
