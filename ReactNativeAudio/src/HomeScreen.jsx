import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {Button} from 'react-native-material-ui';

export default class HomeScreen extends Component {
    render() {
        return (
            <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                <Text>This is home HomeScreen</Text>
                <Button 
                    primary
                    raised
                    text="Go to Details"
                    onPress={() => this.props.navigation.navigate('Details')}
                />
            </View> 
        );
    }
}