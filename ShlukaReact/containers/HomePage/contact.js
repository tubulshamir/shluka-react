import React from 'react';
import { StyleSheet, Text, View, Image, TouchableNativeFeedback} from 'react-native';

export default class Contact extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.user){
        return (
            <TouchableNativeFeedback
                onPress={this._onPressContact}>
                <View style={styles.container}>
                    <Image source={require('../../assets/images/anonymous.png')} 
                        style={styles.profilePic}/>
                    <Text style={styles.userNameText}>
                        {this.props.user.firstName} {this.props.user.lastName}
                    </Text>
                </View>
            </TouchableNativeFeedback>
            );    
        }
    }

    _onPressContact(){
        
    }
}

const styles = StyleSheet.create({
    container: {
        borderBottomColor: '#BDBDBD',
        borderBottomWidth: 1,
        padding: 18,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    },
    userNameText: {
        fontSize: 18,
        fontFamily: 'sans-serif-light',
        color: '#303030',
        marginLeft: 10
    },
    profilePic: {
        height: 30,
        width: 30
    }
});
