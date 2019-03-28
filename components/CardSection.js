// import library
import React, { Component } from 'react';
import { View, Text } from 'react-native';

// create component
class CardSection extends Component {
    render(){
        return(
            <View>
                {this.props.children}
                <Text>xxx</Text>
            </View>
        );
    }
}

// export
export default CardSection;