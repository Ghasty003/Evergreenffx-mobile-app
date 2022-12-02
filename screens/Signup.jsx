import React, { useRef, useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native';
import Navigator from '../components/Navigator';

function Signup() {

    return (
        <TouchableWithoutFeedback>

            <View>
                
                <Navigator bg1="#00C805" bg2="#00C805" bg3="#00C805" />

                <View>
                    <Text>Personal Details</Text>
                    <Text>Please fill your personal details below </Text>
                </View>

                <View>
                    <Text>Your name</Text>
                    <TextInput keyboardType='default' placeholder="jeff brown" />
                </View>

                <View>
                    <Text>Username</Text>
                    <TextInput keyboardType='default' placeholder="jeff brown" />
                </View>

                <View>
                    <Text>Phone number</Text>
                    <TextInput keyboardType='number-pad' placeholder="+101118097"/>
                </View>

                <View>
                    <Text>Password</Text>
                    <TextInput keyboardType='visible-password' />
                    <View>
                        <Text>p</Text>
                    </View>
                </View>

                <View>
                    <Text>Password Strength: </Text>
                    <Text></Text>
                </View>

                <View>
                    <View />
                    <View />
                    <View />
                </View>

                <View style={styles.verifyParent}>
                    <TouchableOpacity
                        style={styles.verify}
                    >
                        <Text style={styles.verifyText}>Verify</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </TouchableWithoutFeedback>
    );
}

export default Signup;

const styles = StyleSheet.create({

})