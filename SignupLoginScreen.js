import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Alert} from 'react-native';
import db from '../config'
import firebase from 'firebase'

export default class SignUpLoginScreen extends React.Component{
    constructor(){
        super()
        this.state={
            username:'',
            password:''
        }
    }
userLogin = (username, password)=>{
    firebase.auth().signInWithEmailAndPassword(username,password)
    .then(()=>{
        return Alert.alert("Successfully Login")
    })
    .catch((error)=>{
        var errorCode = error.code;
        var errorMessage = error.message;
        return Alert.alert(errorMessage)
    })
}
userSignUp = (username, password)=>{
    firebase.auth().signInWithEmailAndPassword(username, password)
    .then((response)=>{
        return Alert.alert("User Added Successfully")
    })
    .catch(function(error){
        var errorCode = error.code;
        var errorMessage = error.message;
        return Alert.alert(errorMessage)
    })
}
  render(){
    return (
        <View style = {styles.container}>
        <View style = {styles.subcontainer}>
      <View>
        <Text style={{color:'ff5722', fontSize:18, fontWeight:'bold', marginLeft:55,}}>USERNAME</Text>
        <View style = {{alignItems:'center'}}>
          <TextInput
          style={styles.loginBox}
          keyboardType = 'email-address'
          onChangeText={(text)=>{
            this.setState({
              username: text
            })
          }}
          />
          
      </View>
        <Text style={{color:'ff5722', fontSize:18, fontWeight:'bold', marginLeft:55,}}>PASSWORD</Text>
        <View style = {{alignItems:'center'}}>
          <TextInput
          style={styles.loginBox}
          secureTextEntry = 'true'
          onChangeText={(text)=>{
            this.setState({
              password: text
            })
          }}
          />
        </View>
        </View>
        <View style={{alignItems:'center'}}>
          <TouchableOpacity
          style={[styles.button,{marginBottom:10}]}
          onPress = {()=>{this.userLogin(this.state.username, this.state.password)}}
          >
            <Text style = {{color:'ff5722', fontSize:18, fontWeight: 'bold'}}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity
          style={[styles.button,{marginBottom:10}]}
          onPress = {()=>{this.userSignUp(this.state.username, this.state.password)}}
          >
            <Text style = {{color:'ff5722', fontSize:18, fontWeight: 'bold'}}>SignUp</Text>
            </TouchableOpacity>
          </View>
      </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
    loginBox:{
        width:300,
        height:35,
        fontSize:20,
        borderColor:'black',
        borderRadius:10
    },
    button:{
        width:300,
        height:35,
        backgroundColor:'orange',
        borderColor:'black',
        borderRadius:10,
        justifyContent:'center',
        alignItems:'center'
    },
    container:{
        flex:1,
        backgroundColor:'peachpuff'
    },
    subcontainer:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
})
