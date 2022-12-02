import React, { useRef, useState } from "react";
import {
  Keyboard,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import Navigator from "../components/Navigator";

const Input = ({ placeholder, type }) => {
  return <TextInput keyboardType={type} placeholder={placeholder} />;
};

function Signup() {
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <ScrollView style={styles.container}>
        <Navigator bg1="#00C805" bg2="#00C805" bg3="#00C805" />
        <View>
          <Text style={styles.headerText}>Create Your Login</Text>
          <Text style={styles.text}>
            You are just a step away. Fill out the form to get started.
          </Text>
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.inputText}>Your name</Text>
          <Input placeholder="jeff brown" />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.inputText}>Username</Text>
          <Input placeholder="jeff brown" />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.inputText}>Phone number</Text>
          <Input placeholder="+123457768" type="numeric" />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.inputText}>Password</Text>
          <Input type="visible-password" />
        </View>
        <View style={styles.createParent}>
          <TouchableOpacity style={styles.create}>
            <Text style={styles.createText}>Create account</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </TouchableWithoutFeedback>
  );
}

export default Signup;

const styles = StyleSheet.create({
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
  text: {
    color: "#8B8B8B",
    fontSize: 18,
    fontWeight: "400",
    marginTop: 5,
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
});
