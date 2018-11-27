import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export class Hello extends React.Component{

    render(){
        return (
            <View style={styles.container}>
                <Text style={styles.textify}>Hellooo</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        justifyContent: 'center',
        alignItems :'center',
        backgroundColor : 'royalblue'
    },


    textify : {
        fontFamily : 'cursive',
        fontSize : 50,
        color: 'white'
    }
});