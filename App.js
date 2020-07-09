import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Appbar, TextInput, Button } from "react-native-paper";
import Results from "./components/displayResult";

export default class App extends React.Component {
  state = {
    fName: "",
    sName: "",
    data: "loading...",
  };

  submitButtonHandler = () => {
    // console.log("Submit is pressed!!");
    fetch(
      `https://love-calculator.p.rapidapi.com/getPercentage?fname=${this.state.fName}&sname=${this.state.sName}`,
      {
        headers: {
          "x-rapidapi-host": "love-calculator.p.rapidapi.com",
          "x-rapidapi-key":
            "#",
          //enter your API key here
        },
      }
    )
      .then((data) => data.json())
      .then((data2) => {
        console.log(data2);
        this.setState({
          data: data2,
        });
      });
  };

  render() {
    return (
      <View style={styles.container}>
        <Appbar.Header style={{ backgroundColor: "darkblue" }}>
          <Appbar.Content
            title="Love Predictor"
            style={{ alignItems: "center", backgroundColor: "darkblue" }}
          />
        </Appbar.Header>

        <TextInput
          label="First Person Name"
          value={this.state.fName}
          onChangeText={(text) => this.setState({ fName: text })}
          style={{ marginTop: 10, color: "grey" }}
        />

        <TextInput
          label="Second Person Name"
          value={this.state.sName}
          onChangeText={(text) => this.setState({ sName: text })}
          style={{ marginTop: 10 }}
        />

        <Button
          mode="contained"
          onPress={() => this.submitButtonHandler()}
          style={{ marginTop: 20 }}
        >
          Submit
        </Button>

        <Results display={this.state.data} />
        <StatusBar style="auto" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // marginTop: 10,
  },
});
