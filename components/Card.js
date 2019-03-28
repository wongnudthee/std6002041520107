//import library
import React, { Component } from 'react';
import { View, Text, Image, Button } from 'react-native';
import CardSection from './CardSection';

//create component
class Card extends Component {
    render() {
        return (
            <View>

                <CardSection>
                    <Image 
                    style={{ width: 100, height: 100}}
                        source={{uri: 'https://upload.wikimedia.org/wikipedia/th/d/d0/Cocktail_band.jpg' }} 
                    />
                    <Text>ค็อกเทล</Text>
                    <Text>โปรดเถิดรัก</Text>
                </ CardSection>

                <CardSection>
                         <View style={{justifyContent: 'center', alignItems: 'center'}}> 
                            <Image 
                            style={{ width: 300, height: 300}}
                            source={{uri: 'https://i.ytimg.com/vi/YCaGYUIfdy4/maxresdefault.jpg' }} 
                            />
                        </View>
                </ CardSection>

                <CardSection>
                    <View style={{justifyContent: 'center', alignItems: 'center'}}> 
                        <View style={{ width:100 }}> 
                            <Button
                                title="Click"
                                color="#841584"
                            />
                        </View>
                    </View>
                </ CardSection>
            </View>
        );
    }
}

//style
/*const style={
    Button: { 
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10
    }
}*/
       


// export
export default Card;