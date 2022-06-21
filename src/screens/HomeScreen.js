import React from 'react';
import { Text, StyleSheet, View, Button, TouchableOpacity } from 'react-native';


const HomeScreen = ({ navigation }) => {
  return (
  <View>
      <Text style={styles.text}>Home Screen</Text>
      <Button 
      title='Go to Components Screen'
      onPress={() => navigation.navigate('Components')}
      />
      <Button
      title='Go to Friends List'
      onPress={() => navigation.navigate('List')}
      />
  </View>
  )
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    textAlign: 'center'
  },
});

export default HomeScreen;
