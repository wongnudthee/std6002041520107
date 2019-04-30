// import libraly
import React, { Component } from 'react';
import {View, Text, TextInput, Image, Button,StyleSheet } from 'react-native';
import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';


// write componenet
class Login extends Component{
	static navigationOptions = {
			title: "Login",
			headerStyle:{
				backgroundColor: '#000000',
				color: '#FFFFFF',
				fontSize: 20,
				},
                headerTintColor: "#6598FF",
                headerLeft: null
	}
    constructor(){
        super()
        this.state = {
            email: 's6002041520026@email.kmutnb.ac.th',
            password: ''
        }
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onPressLogin = this.onPressLogin.bind(this);
    }
    onChangeEmail(e){
        this.setState({ email: e});
        // console.log('Email : ',this.state.email);
    }
    onChangePassword(e){
        this.setState({ password: e});
        // console.log('Password : ',this.state.password);
    }
    onPressLogin(){
        // console.log(this.state)
        const url = "http://128.199.240.120:9999/api/auth/login";
        
        axios.post(url,this.state)
        .then(async function (resp){
            // console.log(resp.data.data.token)
            alert("Login Successfully");
			try{
				await AsyncStorage.setItem('User_Token',resp.data.data.token);
                this.props.navigation.navigate("Profile");
                
			
			}catch(error){
                alert("Email or Password incorrect");
				// console.log(error);
			}
            
        }.bind(this))
        .catch(function (error){
            // console.log(error)
			alert(error);
        })
    }
    /*
    async componentWillMount(){
        let token = await AsyncStorage.getItem("User_Token");
        if(token!=null){
            this.props.navigation.navigate("Profile");
        }
    }
    */
    async componentDidMount(){
        let token = await AsyncStorage.getItem("User_Token");
        if(token!=null){
            //console.log(token);
            this.props.navigation.navigate("Profile");
        }
        
    }
    render(){
        return(
            <View style={styles.container}>
                <Image style={{ width:100,height:100}} source={{uri: 'https://png.icons8.com/key-2/ultraviolet/50/3498db'}}/>
                <View style={styles.inputContainer}>
                <Image style={styles.inputIcon} source={{uri: 'https://png.icons8.com/message/ultraviolet/50/3498db'}}/>
                <TextInput
                    style={styles.inputs}
                    placeholder ="Email"
                    keyboardType ="email-address"
                    underlineColorAndroid ="transparent"
                    //onChangeText={(e) => this.setState({email:e})}
                    value={this.state.email}
                    onChangeText={this.onChangeEmail}
                />
                </View>
                <View style={styles.inputContainer}>
                    <Image style={styles.inputIcon} source={{uri: 'https://png.icons8.com/key-2/ultraviolet/50/3498db'}}/>
                    <TextInput
                        style={styles.input}
                        placeholder ="Password"
                        secureTextEntry={true}
                        underlineColorAndroid ="transparent"
                        value={this.state.password}
                        onChangeText={this.onChangePassword}
                    />
                </View>
                    
                <View style={{width:350,borderRadius:30}}>
                <Button
                    style={{borderRadius:30}}
                    title="Login"
                    color="#2332CC"
                    onPress={this.onPressLogin}


                />
                </View>
                {/* <Button
                    title="Profile"
                    color="#64a2ff"
                    onPress={ () => this.props.navigation.navigate('Profile')}
                /> */}
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#6598FF',
    },
    inputContainer: {
        borderBottomColor: '#F5FCFF',
        backgroundColor: '#FFFFFF',
        borderRadius:30,
        borderBottomWidth: 1,
        width:350,
        height:45,
        marginBottom:20,
        flexDirection: 'row',
        alignItems:'center'
    },
    inputs:{
        height:45,
        marginLeft:16,
        borderBottomColor: '#FFFFFF',
        flex:1,
    },
    inputIcon:{
      width:30,
      height:30,
      marginLeft:15,
      justifyContent: 'center'
    },
    buttonContainer: {
      height:45,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom:20,
      width:250,
      borderRadius:30,
    },
    loginButton: {
      backgroundColor: "#00b5ec",
    },
    loginText: {
      color: 'white',
    }
  });
export default Login;