import React from 'react';
import {View, Text, Button, StyleSheet, ActivityIndicator} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import axios from 'axios';

class profile extends React.Component{

	constructor(){
		super();
		this.state = {
			name: "",
			email: "",
			id: "",

		};
		this.onPressLogout = this.onPressLogout.bind(this);
	}
	async onPressLogout(){
		await AsyncStorage.removeItem('User_Token');
		alert("Logout Successfully");
		this.props.navigation.navigate("Login");

	}

		static navigationOptions = {
			title: "Profile",
			headerStyle:{
				backgroundColor: '#000000',
				color: '#FFFFFF',
				fontSize: 20,
				},
				headerTintColor: "#6598FF",
				headerLeft: null
		};
	async componentDidMount(){
		try{
			const value = await AsyncStorage.getItem('User_Token');
			// console.log("TOKEN : "+value);
			if(value !== null){
				const url = "http://128.199.240.120:9999/api/auth/me";
				const config = {
					headers:{
						Accept: '*/*',
						Authorization:  " Bearer " + value	
					}
				}
				axios.get(url, config
				).then(function (resp){
					this.setState({
						email: resp.data.data.email,
						name: resp.data.data.name,
						id: resp.data.data._id
					});
				}.bind(this))
				.catch(async function (error){
					alert("Session Expired : Please Login Again.");
					await AsyncStorage.removeItem('User_Token');
					this.props.navigation.navigate("Login");
				}.bind(this))
			}else{
				alert("Please Login First..");
				this.props.navigation.navigate("Login");
			}


		} catch (error){
			// console.log(error);
		}
	
	};



	render(){
		if(this.state.name.length<=1){
			return(
			<View style={styles.container}>
				<ActivityIndicator
					size='large'
					color='#6598FF'
					style={{height:80,width:80}}
				/>
			</View>
			)
		}else{
			return(
				<View style={styles.container}>
					<Text style={{fontSize:32,color:"#FFFFFF"}}>Welcome</Text>
					<View style={{}}>
						<Text style={{fontSize:16,color:"#FFFFFF"}}>Name : {this.state.name}</Text>
						<Text style={{fontSize:16,color:"#FFFFFF"}}>Email : {this.state.email}</Text>
					</View>
					<Button
						title="Logout"
						onPress = { this.onPressLogout}
					/>
					<Button
						title="Back"
						onPress = { () => this.props.navigation.push("Login")}
					/>
				</View>
				

			)
		}

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
export default profile;