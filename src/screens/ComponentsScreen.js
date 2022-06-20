import React from "react";
import { Text, StyleSheet, View } from "react-native";

const ComponentsScreen = () => {
    
    return (
        <View>
            <Text style={{fontSize: 40, textAlign: "center"}}>
                Components Screen
            </Text>
            <Text style={styles.text}>
                Having fun with React Native to build an app!
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    text: {
        fontSize: 30,
        textAlign: 'center'
    }
});

export default ComponentsScreen;
