import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import CreateAccount from "./screens/CreateAccount";
import DefaultScreen from "./screens/DefaultScreen";
import Login from "./screens/Login";
import Signup from "./screens/Signup";
import VerificationScreen from "./screens/VerificationScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <View style={styles.container}>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="Default" component={DefaultScreen} />
          <Stack.Screen name="Createaccount" component={CreateAccount} />
          <Stack.Screen name="Verification" component={VerificationScreen} />
          <Stack.Screen name="Signup" component={Signup} />
          <Stack.Screen name="Login" component={Login} />
        </Stack.Navigator>
        <StatusBar style="auto" />
      </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
