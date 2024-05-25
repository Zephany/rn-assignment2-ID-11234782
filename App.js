import React from 'react';
import {StyleSheet,Text,view} from 'react-native';

export default function App() {
    return (
        <View style={StyleSheet.container}>
            <Text styles={styles.text}>
                My name is <Text style={styles.boldText}>Zephanila</Text>
            </Text>
        </View>
    )
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'blue',
        alignItems: 'center',
        justifyContent:'center',
    },
    text:{
        fontSize:24,
    },
    boldText:{
        fontWeight:'bold'
    }
}
)