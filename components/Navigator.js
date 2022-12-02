import React from "react";
import { StyleSheet, Text, View } from "react-native";

function Navigator({ bg1, bg2, bg3 }) {
  return (
    <View style={styles.container}>
      <Text style={[styles.circle, { backgroundColor: bg1 }]}>1</Text>
      <View style={[styles.dash, { left: -2 }]} />
      <Text
        style={[
          styles.circle,
          { left: -4, backgroundColor: bg2 ? bg2 : "#D1D1D1" },
        ]}
      >
        2
      </Text>
      <View style={[styles.dash, { left: -5.5 }]} />
      <Text
        style={[
          styles.circle,
          { left: -6.3, backgroundColor: bg3 ? bg3 : "#D1D1D1" },
        ]}
      >
        3
      </Text>
    </View>
  );
}

export default Navigator;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginTop: 30,
    alignItems: "center",
  },
  circle: {
    width: 25,
    height: 25,
    backgroundColor: "#D1D1D1",
    margin: 2,
    borderRadius: 25 / 2,
    textAlign: "center",
    color: "white",
    fontSize: 12,
    padding: 5,
  },
  dash: {
    width: 35,
    height: 1,
    backgroundColor: "#D1D1D1",
  },
});
