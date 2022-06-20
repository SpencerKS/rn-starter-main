import React from 'react';
import { Text, StyleSheet, View, Button, TouchableOpacity } from 'react-native';
import { clickProps } from 'react-native-web/dist/cjs/modules/forwardedProps';
import { NavigationEvents } from 'react-navigation';
import ComponentsScreen from './ComponentsScreen';

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
