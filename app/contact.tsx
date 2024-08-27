import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { FontAwesome } from '@expo/vector-icons'
import { Link } from 'expo-router'

const Explore = () => {
  return (
    <View style={styles.container}>

     <View style={styles.logoView}>
      <Image
        style={styles.logo}
        source={require('./asset/img/med.png')}
      />
     </View>
      
     <View style={styles.inputContainer}>
      <View style={styles.iconView}>
      <FontAwesome
       name={"user"} 
       size={20} 
       color={"#86E1F6"} 
       style= {styles.inputIcon}
       />
      </View>
      <View>
      <TextInput style={styles.textInputAllSpeciality} placeholder='Username' placeholderTextColor="gray"/>
      </View>
     </View>

     <View style={styles.inputContainer}>
      <View style={styles.iconView}>
      <FontAwesome
       name={"lock"} 
       size={23} 
       color={"#86E1F6"} 
       style= {styles.inputIconLocation}
       />
      </View>
      <View>
      <TextInput style={styles.textInputAllSpeciality} placeholder='Password' placeholderTextColor="gray"/>
      </View>
     </View>

     
     <View>
     <TouchableOpacity style={styles.loginButtonWrapper}>
     <Text style={styles.loginText}>LOGIN</Text>
      </TouchableOpacity>
     </View>

     <View style={styles.footerContainer}>
      <Text style={styles.accountText}>Don’t have an account?</Text>
      <TouchableOpacity>
        <Link href={'signup'}>
          <Text style={styles.signupText}>Sign up</Text>
        </Link>
      </TouchableOpacity>
     </View>

     <View style={styles.logoViewBg}>
      <Image
        style={styles.logoBg}
        source={require('./asset/img/bg.png')}
      />
     </View>

   </View>
  )
}

export default Explore

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#E8FBFA",
    flex: 1,
    paddingTop:10,
  },
  inputContainer: {
    backgroundColor: "#FFFFFF",
    flexDirection: "row",
    borderRadius: 20,
    marginHorizontal: 20,
    elevation: 10,
    marginVertical: 8,
    alignItems: "center",
    height: 55,
    borderColor: '#86E1F6',
    borderWidth: 2,
    marginTop:20,
  },
  inputDoctorContainer: {
    backgroundColor: "#FFFFFF",
    flexDirection: "row",
    borderRadius: 24,
    marginHorizontal: 10,
    elevation: 10,
    marginVertical: 8,
    alignItems: "center",
    height: 65,
    marginTop:20,
  },
  inputIcon: {
    marginLeft: 5,
    marginTop: 4,
  },
  inputIconLocation: {
    marginLeft: 8,
    marginTop: 4,
  },
  textInput: {
    flex: 1,
    marginLeft: 5,
    marginTop: 4,
    fontWeight: "440",
  },
  textInputDoctorname: {
    flex: 1,
    marginLeft: 5,
    marginTop: 10,
    fontWeight: "500",
    fontSize: 17,
    width:150,
  },
  textInputAllSpeciality: {
    flex: 1,
    marginLeft: 5,
    marginBottom: 5,
    fontWeight: "500",
    fontSize: 16,
    width:150,
  },
  textInputDoctorSpeciality: {
    flex: 1,
    marginLeft: 5,
    marginBottom: 10,
    fontWeight: "500",
    fontSize: 12,
  },
  iconView: {
    backgroundColor: "#F2F7F8",
    margin: 5,
    borderRadius: 50,
    height: 30,
    width: 30,
  },
  iconViewDoctor: {
    backgroundColor: "#F2F7F8",
    margin: 5,
    borderRadius: 50,
    height: 40,
    width: 40,
  },
  loginButtonWrapper: {
    backgroundColor: "#86E1F6",
    borderRadius: 20,
    marginTop: 50,
    marginHorizontal: 20,
    height: 55,
    elevation: 10,
  },
  loginText: {
    color: "black",
    fontSize: 23,
    textAlign: "center",
    
    fontWeight: "600",
    padding: 10,
  },
  iconViewDoctor: {
    backgroundColor: "#F2F7F8",
    margin: 5,
    borderRadius: 50,
    height: 40,
    width: 40,
  },
  logo: {
    width: 150,
    height: 150,
  },
  footerContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 20,
    gap: 5,
  },
  accountText: {
    color: 'black',
  },
  signupText: {
    color: "#40cbb4",
  },
  logoView: {
    margin: 5,
    borderRadius: 50,
    height: 60,
    width: 60,
    marginBottom: 80,
    marginLeft: 100,
  },
  logoViewBg: {
    margin: 5,
    height: 120,
    width: 160,
    marginBottom: 80,
    marginLeft: 100,
  },
  logoBg: {
    width: 260,
    height: 180,
  },
});