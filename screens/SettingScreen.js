import React from 'react';
import { StyleSheet, Text, View, TextInput, Alert, TouchableOpacity } from 'react-native';
import firebase from 'firebase';
import db from '../config'
import MyHeader from '../components/MyHeader';

export default class SettingScreen extends React.Component{
    constructor(){
    super()
    this.state={
    username: '',
    address: '',
    mobilenumber: '',
    docId: '',
    lastName: '',
    firstName: '',
    }
    }

    getUserDetails=()=>{
    var username = firebase.auth().currentUser.email
    db.collection('users').where('username', '==' , username).get()
    .then(snapShot =>{
    snapShot.forEach(doc =>{
    var data= doc.data()
    this.setState({
    username: data.username,
    address: data.address,
    mobilenumber: data.mobile_number,
    lastName: data.last_name,
    firstName: data.first_name,
    docId: doc.id ,
    })
    })
    })
    }

    updateUserDetails=()=>{
        db.collection('users').doc(this.state.docId)
        .update({
        'mobile_number': this.state.mobilenumber,
        'address': this.state.address,
        'username': this.state.username,
        'first_name': this.state.firstName,
        'last_name': this.state.lastName,
    })
        return Alert.alert('Profile Updated Successfully')
    }
    componentDidMount(){
    this.getUserDetails()
    }
    render(){
    return(
    <View style={styles.container}>
    <MyHeader
    title='Settings'
    navigation= {this.props.navigation}
    />
    <View style={styles.formContainer}>

    <TextInput
    style={styles.inputBox}
    placeholder= 'Enter Your Email Id'
    onChangeText={(text)=>{
    this.setState({
    username: text
    })
    }}
    value={this.state.username}
   />

<TextInput
    style={styles.inputBox}
    placeholder= 'Enter Your Name'
    onChangeText={(text)=>{
    this.setState({
    firstName: text
    })
    }}
    value={this.state.firstName}
   />

<TextInput
    style={styles.inputBox}
    placeholder= 'Enter Your Last Name'
    onChangeText={(text)=>{
    this.setState({
    lastName: text
    })
    }}
    value={this.state.lastName}
   />
    <TextInput
    style={styles.inputBox}
    placeholder= 'Enter Your Phone Number'
    onChangeText={(text)=>{
    this.setState({
    mobilenumber: text
    })
    }}
    value={this.state.mobilenumber}
    />

    <TextInput
    style={styles.inputBox}
    placeholder= 'Enter Your Address'
    onChangeText={(text)=>{
    this.setState({
    address: text
    })
    }}
    value={this.state.address}
   />
   </View>
 
   <View>
   <TouchableOpacity
   style={styles.saveButton}
   onPress={()=>{
   this.updateUserDetails()
   }}>
   <Text style={styles.buttonText}>Update</Text>
   </TouchableOpacity>

   </View>
   </View>
)
}
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    inputBox:{
        width: 300,
        height: 40,
        borderBottomWidth: 1.5,
        borderColor: 'black',
        fontSize: 20,
        margin: 10,
        paddingLeft: 10,
      },
      saveButton:{
        width: 300,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        backgroundColor: 'blue',
        shadowColor: 'black',
        marginBottom: -10,
        shadowOffset: {
            width: 0,
            height: 8,
        },
    },
    formContainer: {
    width: '100%' ,
    flex: 1,
    alignItems: 'center',
    },
    buttonText:{
        color: 'white',
        fontWeight: 'bold',
        fontSize: 20,
       },
  });