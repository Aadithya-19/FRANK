import React from 'react';
import {
    Text,
    View,
    TextInput,
    Alert,
    StyleSheet
} from "react-native";

export default class SignIn extends React.Component {
    constructor() {
        super();
        this.state = {
            username: "",
        };
    }

    signUp = (username, password) => {
        firebase.auth().createUserWithEmailAndPassword(username, password)
            .then((responce) => {
                return Alert.alert("User Added Successfully")
            })
            .catch(function (error) {
                var errorCode = error.code;
                var errorMessage = error.message;
                return Alert.alert(errorMessage)
            })
    }
    render() {
        return (
            <View>
            <Text style = {{color: '#ff5722', fontSize: 18, fontWeight: 'bold', marginLeft: 55}}>USERNAME</Text>
            <View style = {{alignItems:'center'}}>
                <TextInput
                style = {styles.loginBox}
                keyboardType = 'email-address'
                onChangeText = {(text)=>{
                    this.setState({
                        username: text
                    })
                }}
                />
            </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    loginBox: {
        width: 300,
        height: 40,
        borderWidth: 1.5,
        fontSize: 20,
        margin: 10,
        paddingLeft: 70,
    }
})