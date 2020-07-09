import React from "react";
import { StyleSheet, Text, View } from "react-native";
// import { accessibilityProps } from "react-native-paper/lib/typescript/src/components/MaterialCommunityIcon";

const displayResult = (props) => {
  // console.log(props);

  if (props.display == "loading...") {
    return <Text style={styles.text}>Please enter some value</Text>;
  }

  if (props.display.message) {
    return (
      <Text style={styles.text}>
        There is some error please try after some time
      </Text>
    );
  }
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Love Percentage : {props.display.percentage}
      </Text>
      <Text style={styles.text}>Result : {props.display.result} </Text>
    </View>
  );
};

export default displayResult;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  text: {
    fontSize: 30,
    color: "darkblue",
    textAlign: "center",
  },
});
