import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native'
import React, { useState } from "react";
import { FontAwesome } from '@expo/vector-icons'
import { Link } from 'expo-router'
import DateTimePickerModal from "react-native-modal-datetime-picker";

const Explore = () => {

  const [selectedDate, setselectedDate] = useState("");
  const [selectedTime, setselectedTime] = useState("");
 
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [isTimePickerVisible, setTimePickerVisibility] = useState(false);
 
  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };
 
  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };
 
  const showTimePicker = () => {
    setTimePickerVisibility(true);
  };
 
  const hideTimePicker = () => {
    setTimePickerVisibility(false);
  };
 
  const handleDate = (date) => {
    setselectedDate(date.toDateString());
    hideDatePicker();
  };
 
 
  const handleTime = (time) => {
    setselectedTime(time.toLocaleTimeString());
    hideTimePicker();
  };

  return (
    <View style={styles.container}>

<View style={styles.logoView}>
      <Image
        style={styles.logo}
        source={require('./asset/img/bglogo.png')}
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
      <TextInput style={styles.textInputAllSpeciality} placeholder='Name' placeholderTextColor="gray"/>
      </View>
     </View>

     <View style={styles.inputContainer}>
      <View style={styles.iconView}>
      <FontAwesome
       name={"envelope"} 
       size={20} 
       color={"#86E1F6"} 
       style= {styles.inputIcon}
       />
      </View>
      <View>
      <TextInput style={styles.textInputAllSpeciality} placeholder='Email' placeholderTextColor="gray"/>
      </View>
     </View>

     <View style={styles.inputContainer}>
      <View style={styles.iconView}>
      <FontAwesome
       name={"calendar"} 
       size={20} 
       color={"#86E1F6"} 
       style= {styles.inputIcon}
       />
      </View>
      <View>
      
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleDate}
        onCancel={hideDatePicker}
        maximumDate={new Date()}
      />
      <TextInput
       onPress={showDatePicker}
        style={styles.textInputAllSpeciality}
         placeholder='Date Of Birth'
          placeholderTextColor="gray"
           value={selectedDate}
           />
            
      </View>
     </View>

     <View style={styles.inputContainer}>
      <View style={styles.iconViewMobile}>
      <FontAwesome
       name={"mobile"} 
       size={25} 
       color={"#86E1F6"} 
       style= {styles.inputIcon}
       />
      </View>
      <View>
      <TextInput style={styles.textInputAllSpeciality} placeholder='Mobile' placeholderTextColor="gray" keyboardType='numeric'/>
      </View>
     </View>

     <View style={styles.inputContainer}>
      <View style={styles.iconView}>
      <FontAwesome
       name={"id-card"} 
       size={20} 
       color={"#86E1F6"} 
       style= {styles.inputIcon}
       />
      </View>
      <View>
      <TextInput style={styles.textInputAllSpeciality} placeholder='Adhaar No.' placeholderTextColor="gray" keyboardType='numeric'/>
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
      <TextInput style={styles.textInputAllSpeciality} placeholder='Password' placeholderTextColor="gray" secureTextEntry={true}/>
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
      <TextInput style={styles.textInputAllSpeciality} placeholder='Confirm Password' placeholderTextColor="gray" secureTextEntry={true}/>
      </View>
     </View>

     
     <View>
     <TouchableOpacity style={styles.loginButtonWrapper}>
     <Text style={styles.loginText}>SIGN UP</Text>
      </TouchableOpacity>
     </View>

     <View style={styles.footerContainer}>
          <Text style={styles.accountText}>Already have an account?</Text>
          <TouchableOpacity>
          <Link href={'contact'}>
          <Text style={styles.signupText}>Login</Text>
      </Link>
            
          </TouchableOpacity>
        </View>

     

   </View>
  )
}

export default Explore

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#E8FBFA",
    flex: 1,
  },
  inputContainer: {
    backgroundColor: "#FFFFFF",
    flexDirection: "row",
    borderRadius: 15,
    marginHorizontal: 20,
    elevation: 10,
    marginVertical: 8,
    alignItems: "center",
    height: 45,
    borderColor: '#86E1F6',
    borderWidth: 2,
    marginTop:7,
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
  iconViewMobile: {
    backgroundColor: "#F2F7F8",
    margin: 5,
    borderRadius: 50,
    height: 30,
    width: 30,
    alignItems: 'center',
    paddingRight: 5,
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
    marginTop: 25,
    marginHorizontal: 20,
    height: 45,
    elevation: 10,
  },
  loginText: {
    color: "black",
    fontSize: 20,
    fontWeight: "600",
    textAlign: "center",
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
    width: 250,
    height: 100,
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
    height: 20,
    width: 160,
    marginBottom: 80,
    marginLeft: 50,
  },
});