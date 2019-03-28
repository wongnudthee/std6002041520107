//import library
import React, { Component } from 'react';
import { View, Text, Image, Button } from 'react-native';
import CardSection from './CardSection';

//create component
class Card extends Component {
    render() {
        return (
            <View>
                <Text>พรุ่งนี้ค่อย</Text>
                <Text>ป็อบ ปองกูล</Text>
                <CardSection>
                    <Image 
                    style={{ width: 450, height: 450}}
                        source={{uri: 'https://i.ytimg.com/vi/YCaGYUIfdy4/maxresdefault.jpg' }} 
                    />
                </ CardSection>

                <CardSection>
                    <View style={{ width:100 }}> 
                    <Button
                        title="Click"
                        color="#841584"
                    />
                    </View>
                </ CardSection>
            </View>
        );
    }
}

//style
const style={
    button: { 
        justifyContent: 'center',
        alignItem: 'center',
        marginTop: 10
    }
}
       

// export
export default Card;