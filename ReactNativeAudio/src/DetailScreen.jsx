import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {Button} from 'react-native-material-ui';

export default class DetailScreen extends Component {
    render() {
        return (
            <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                <Text>This is Details Screen</Text>
                <Button 
                    primary
                    raised
                    text="Go to Home"
                    onPress={() => this.props.navigation.navigate("Home")}
                />
                <Button 
                    primary
                    raised
                    text="Go Back"
                    onPress={() => this.props.navigation.goBack()}
                />
            </View>
        );
    }
}