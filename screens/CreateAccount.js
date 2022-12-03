import React from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import Navigator from "../components/Navigator";
import BouncyCheckbox from "react-native-bouncy-checkbox";

function CreateAccount({ navigation }) {
  return (
    <View style={styles.container}>
      <Navigator bg1="#00C805" />
      <Text style={styles.headerText}>Open new account</Text>
      <Text style={styles.text}>
        Join the community of a new generation of investors.
      </Text>
      <View style={styles.inputContainer}>
        <Text style={styles.inputText}>Your Email</Text>
        <TextInput
          placeholder="jeff.brown@example.c"
          keyboardType="email-address"
        />
      </View>
      <View style={styles.checkboxContainer}>
        <BouncyCheckbox fillColor="#00C805" />
        <View style={styles.textsContainer}>
          <Text style={styles.checkText}>I agree to EvergreenFX </Text>
          <Text style={[styles.checkText, { color: "#00C805" }]}>
            Privacy Policy{" "}
          </Text>
          <Text style={styles.checkText}>& </Text>
          <Text style={[styles.checkText, { color: "#00C805" }]}>Terms.</Text>
        </View>
      </View>
      <View style={styles.loginParent}>
        <TouchableOpacity
          onPress={() => navigation.navigate("Verification")}
          style={styles.login}
        >
          <Text style={styles.loginText}>Proceed</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.account}>
        <Text style={{ fontWeight: "700" }}>Already Have an Account? </Text>
        <TouchableOpacity>
          <Text
            onPress={() => navigation.navigate("Login")}
            style={{
              color: "#00C805",
              fontWeight: "700",
            }}
          >
            Sign In
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default CreateAccount;

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
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
    marginLeft: 10,
  },
  checkText: {
    fontSize: 14,
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
    borderColor: "#80E382",
    marginTop: 20,
    padding: 5,
    paddingLeft: 9,
    marginLeft: 5,
  },
  inputText: {
    color: "#AEAEAE",
    fontSize: 12,
  },
  login: {
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
  loginParent: {
    width: "100%",
    alignItems: "center",
    marginTop: 30,
  },
  loginText: {
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
  textsContainer: {
    flexDirection: "row",
  },
});
