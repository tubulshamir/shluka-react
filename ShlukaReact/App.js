import React from 'react';
import { StyleSheet, Text, View, Button, Alert, FlatList, ActivityIndicator } from 'react-native';
import HomePage from '../ShlukaReact/containers/HomePage'

export default class App extends React.Component {

  render() {
    return (
      <View>
        <View style={styles.topRow}>
          <Text style={styles.topRowText}>Shluka</Text>
        </View>
        <HomePage></HomePage>
      </View>
    )

  }

}

const styles = StyleSheet.create({
  topRow: {
    height: 75, 
    backgroundColor: '#448AFF', 
    justifyContent: 'flex-end', 
    padding: 10,
  },
  topRowText: {
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: 'sans-serif-light'
  }
});