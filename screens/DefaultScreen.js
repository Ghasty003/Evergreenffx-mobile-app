import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

function DefaultScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Smart Trading Technology</Text>
      <Text style={styles.text}>
        EvergreenFX intelligent bot eliminates all the stress and hassle of
        traditional forex trading.
      </Text>
      <Image style={styles.img} source={require("../assets/circle.png")} />
      <View style={styles.loginParent}>
        <TouchableOpacity style={styles.login}>
          <Text style={styles.loginText}>Login</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.loginParent}>
        <TouchableOpacity
          onPress={() => navigation.navigate("Createaccount")}
          style={[styles.login, { backgroundColor: "#00C805" }]}
        >
          <Text style={styles.loginText}>Signup</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default DefaultScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FAFAFA",
    padding: 10,
  },
  headerText: {
    fontSize: 40,
    fontWeight: "700",
    marginTop: 40,
  },
  img: {
    position: "relative",
    right: -20,
  },
  login: {
    backgroundColor: "#FFFFFF",
    width: "90%",
    height: 43,
    borderRadius: 12,
    justifyContent: "center",
    borderColor: "#191919",
    borderWidth: 0.5,
    shadowColor: "red",
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 3,
  },
  loginParent: {
    width: "100%",
    alignItems: "center",
    marginVertical: 10,
  },
  loginText: {
    textAlign: "center",
    fontSize: 16,
    fontWeight: "600",
  },
  text: {
    fontSize: 18,
    fontWeight: "400",
    marginTop: 5,
  },
});
