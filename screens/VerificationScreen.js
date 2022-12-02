import React, { useRef } from "react";
import {
  Keyboard,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import Navigator from "../components/Navigator";

function VerificationScreen({ navigation }) {
  const i1 = useRef("");
  const i2 = useRef("");
  const i3 = useRef("");
  const i4 = useRef("");
  const i5 = useRef("");
  const i6 = useRef("");

  const handlePress1 = () => {
    i2.current.focus();
  };
  const handlePress2 = () => {
    i3.current.focus();
  };
  const handlePress3 = () => {
    i4.current.focus();
  };
  const handlePress4 = () => {
    i5.current.focus();
  };
  const handlePress5 = () => {
    i6.current.focus();
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <Navigator bg1="#00C805" bg2="#00C805" />
        <Text style={styles.headerText}>Email Verification</Text>
        <Text style={styles.text}>
          Verify your email to help us confirm your access to the email
          provided.
        </Text>
        <View style={styles.backConatiner}>
          <Text style={{ fontWeight: "700" }}>Not your email? </Text>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text
              style={{
                color: "#00C805",
                fontWeight: "700",
              }}
            >
              Go back
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            onTextInput={handlePress1}
            ref={i1}
            style={styles.input}
            autoFocus
          />
          <TextInput onTextInput={handlePress2} ref={i2} style={styles.input} />
          <TextInput onTextInput={handlePress3} ref={i3} style={styles.input} />
          <TextInput onTextInput={handlePress4} ref={i4} style={styles.input} />
          <TextInput onTextInput={handlePress5} ref={i5} style={styles.input} />
          <TextInput ref={i6} style={styles.input} />
        </View>
        <View style={styles.verifyParent}>
          <TouchableOpacity
            onPress={() => navigation.navigate("Signup")}
            style={styles.verify}
          >
            <Text style={styles.verifyText}>Verify</Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

export default VerificationScreen;

const styles = StyleSheet.create({
  backConatiner: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
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
  input: {
    width: 45,
    height: 45,
    borderWidth: 1,
    borderColor: "#D1D1D1",
    borderRadius: 8,
    marginHorizontal: 5,
    textAlign: "center",
  },
  inputContainer: {
    flexDirection: "row",
    marginTop: 20,
  },
  verify: {
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
  verifyParent: {
    width: "100%",
    alignItems: "center",
    marginTop: 30,
  },
  verifyText: {
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
