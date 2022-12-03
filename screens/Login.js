import React from "react";
import {
  Keyboard,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";

function Login({ navigation }) {
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <Text style={styles.headerText}>Login to your account</Text>
        <Text style={styles.text}>
          Log into your dashboard to keep track of your earnings.
        </Text>
        <View style={styles.inputContainer}>
          <Text style={styles.inputText}>Your email</Text>
          <TextInput
            keyboardType="email-address"
            placeholder="jeffbrown@gmail.com"
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.inputText}>Password</Text>
          <TextInput keyboardType="visible-password" />
        </View>
        <View style={styles.createParent}>
          <TouchableOpacity style={styles.create}>
            <Text style={styles.createText}>Login</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.account}>
          <Text style={{ fontWeight: "700", color: "#696969" }}>
            New on our platform?{" "}
          </Text>
          <TouchableOpacity>
            <Text
              onPress={() => navigation.navigate("Createaccount")}
              style={{
                color: "#00C805",
                fontWeight: "700",
              }}
            >
              Create an account
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

export default Login;

const styles = StyleSheet.create({
  account: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
  },
  container: {
    flex: 1,
    backgroundColor: "#FAFAFA",
    padding: 15,
    paddingTop: 50,
  },
  headerText: {
    fontSize: 26,
    fontWeight: "700",
    marginTop: 20,
  },
  inputContainer: {
    width: 300,
    height: 56,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: "#D1D1D1",
    marginTop: 20,
    padding: 5,
    paddingLeft: 9,
    marginLeft: 5,
  },
  inputText: {
    color: "#AEAEAE",
    fontSize: 12,
  },
  create: {
    backgroundColor: "#00C805",
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
  createParent: {
    width: "100%",
    alignItems: "center",
    marginTop: 30,
  },
  createText: {
    textAlign: "center",
    fontSize: 16,
    fontWeight: "600",
  },
  text: {
    color: "#8B8B8B",
    fontSize: 18,
    fontWeight: "400",
    marginTop: 5,
  },
});
