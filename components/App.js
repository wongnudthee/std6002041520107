import React from 'react';
import { View, Text } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import Header from './Header';
import Card from './Card';
import LoginScr from './Login';
import ProfileScr from './profile';


/*
class App extends React.Component {
    render() {
        return (
        
            <View>
                <Header title="LOGIN"/>
                <Login/>
                { <Text  style={{ fontSize:32 }} >Wongnudthee Ngorpok 6002041520107</Text>
                <Card/> }
            </View>
        );
    }
}
export default App;
*/
const MainNavigator = createStackNavigator({
	Login: {screen : LoginScr},
	Profile: { screen : ProfileScr }
},{
	initialRouteName: "Login"
	
});

const App = createAppContainer(MainNavigator);

export default App;