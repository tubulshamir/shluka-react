import React from 'react';
import { StyleSheet, Text, View, FlatList, ActivityIndicator } from 'react-native';
import Contact from '../HomePage/contact'
import { Constants, Contacts } from 'expo';

export default class HomePage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      data: []
    }
  }

  render() {
    if (this.state.isLoading) {
      return (
        <View style={{flex: 1, paddingTop: 70}}>
          <ActivityIndicator />
        </View>
      );
    }

    return (
      <View style={styles.container}>
        <FlatList
          data={this.state.data}
          // renderItem = {({item}) => <Text>{item._id}</Text>}
          renderItem = {({item}) => <Contact user={item}></Contact>}
        />
      </View>

    )

  }

  async showFirstContactAsync() {
    console.log('start');

    const permission = await Expo.Permissions.askAsync(Expo.Permissions.CONTACTS);
    if (permission.status !== 'granted') { 
      return; 
    }

    const contacts = await Contacts.getContactsAsync([
      Contacts.PHONE_NUMBERS,
    ]);

    console.log(contacts.data[10]);
    if (contacts.length > 0) {
      console.log('x');
      // let contact = `Name: ${contacts[0].name}\n` +
      //   `Phone: ${JSON.stringify(contacts[0].phoneNumbers)}\n`;
        
      console.log(contacts[0]);
    }
  }

  componentDidMount(){
    this.showFirstContactAsync();    
    return fetch('http://10.0.0.9:4000/getusers')
    .then((response) => response.json())
    .then((response) => {
      // this.state.data = responseJson;
      this.state.data = [];
      this.state.data.push({
        firstName: 'יוסי',
        lastName: 'בוכריס'
      })
      this.setState({
          isLoading: false
      })
    })
    .catch((error) => {
      console.error(error);
    });

  }
}

const styles = StyleSheet.create({
  container: {
  },
});
