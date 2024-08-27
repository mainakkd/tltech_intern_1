import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native'
import React, { useState } from "react";
import ColorList from '../components/ColorList'
import { FontAwesome } from '@expo/vector-icons'
import { Link } from 'expo-router'
import { SelectList } from 'react-native-dropdown-select-list'
import SelectDropdown from 'react-native-select-dropdown'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
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

  const emojisWithIcons = [
    {title: 'Pediatrics'},
    {title: 'Neurology'},
    {title: 'Pathology'},
    {title: 'Dermatology'},
    {title: 'Cardiology'},
    {title: 'Hematology'},
    {title: 'Radiology'},
  ];

  return (
    <View style={styles.container}>
      
      <View style={styles.nearByDoctorContainer}>
      
      <View style={styles.helloContainer}>

        <View style={styles.nameContainer}>
          <Text style={styles.nameText}>Name :</Text>
          <Text style={styles.nameTextValue}>Ramiz Khan</Text>
        </View>

        <View style={styles.nameContainer}>
          <Text style={styles.nameText}>Email :</Text>
          <Text style={styles.nameTextValue}>ramiz@gmail.com</Text>
        </View>

        <View style={styles.nameContainer}>
          <Text style={styles.nameText}>Gender :</Text>
          <Text style={styles.nameTextValue}>Male</Text>
        </View>

        <View style={styles.nameContainer}>
          <Text style={styles.nameText}>DOB :</Text>
          <Text style={styles.nameTextValue}>Oct 12 2020</Text>
        </View>

        <View style={styles.nameContainer}>
          <Text style={styles.nameText}>Mobile :</Text>
          <Text style={styles.nameTextValue}>9988778899</Text>
        </View>

        <View style={styles.nameContainer}>
          <Text style={styles.nameText}>Adhar :</Text>
          <Text style={styles.nameTextValue}>44664455336688</Text>
        </View>

      </View>
      
     
     </View>


     <View style={styles.nearByDoctorContainerEdit}>
      
     <View>
      <Text style={styles.nameText}>Address :</Text>
      <View style={styles.inputContainer}>
        <View>
        <TextInput style={styles.textInputAllSpeciality} placeholder='Address' placeholderTextColor="gray" keyboardType='numeric'/>
        </View>
      </View>
     </View>

     <View>
      <Text style={styles.nameText}>Passport Number :</Text>
      <View style={styles.inputContainer}>
        <View>
        <TextInput style={styles.textInputAllSpeciality} placeholder='Passport Number' placeholderTextColor="gray" keyboardType='numeric'/>
        </View>
      </View>
     </View>

     <View>
      <Text style={styles.nameText}>Spouse Name :</Text>
      <View style={styles.inputContainer}>
        <View>
        <TextInput style={styles.textInputAllSpeciality} placeholder='Spouse Name' placeholderTextColor="gray" keyboardType='numeric'/>
        </View>
      </View>
     </View>

     <View>
      <Text style={styles.nameText}>Spouse Age :</Text>
      <View style={styles.inputContainer}>
        <View>
        <TextInput style={styles.textInputAllSpeciality} placeholder='Spouse Age' placeholderTextColor="gray" keyboardType='numeric'/>
        </View>
      </View>
     </View>

     
     </View>
     <View>
     <TouchableOpacity style={styles.loginButtonWrapper}>
        <Link href={'(drawer)/(tabs)/feed'}>
        
        <Text style={styles.loginText}>Save</Text>
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
  helloContainer: {},
  nameText: {
    textAlign: "left",
    fontSize: 17,
    fontWeight: "500",
    color: "#262626",
    paddingLeft: 20,
    marginTop: 10,

  },
  nameTextValue: {
    textAlign: "left",
    fontSize: 16,
    fontWeight: "400",
    color: "#262626",
    paddingLeft: 20,
    marginTop: 10,
  },
  inputContainer: {
    backgroundColor: "#f1eff2",
    flexDirection: "row",
    borderRadius: 10,
    marginHorizontal: 10,
    marginVertical: 8,
    alignItems: "center",
    height: 35,
    borderColor: 'gray',
    borderWidth: 0.5,
  },
  nameContainer: {
    backgroundColor: "#FFFFFF",
    flexDirection: "row",
    alignItems: "center",
  },
  dropDownView: {
    flexDirection: 'row',
  },
  inputContainerSp: {
    backgroundColor: "#FFFFFF",
    flexDirection: "row",
    borderRadius: 30,
    marginHorizontal: 20,
    elevation: 10,
    marginVertical: 8,
    borderColor: '#86E1F6',
    borderWidth: 2,
    
  },
  inputDoctorContainer: {
    backgroundColor: "#FFFFFF",
    flexDirection: "row",
    borderRadius: 18,
    marginHorizontal: 10,
    elevation: 10,
    marginVertical: 8,
    alignItems: "center",
    height: 50,
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
  iconViewSearch: {
    backgroundColor: "#F2F7F8",
    margin: 5,
    borderRadius: 50,
    height: 30,
    width: 30,
    marginTop:10,
  },
  iconViewDoctor: {
    backgroundColor: "#F2F7F8",
    margin: 5,
    borderRadius: 50,
    height: 40,
    width: 40,
  },
  loginButtonWrapper: {
    backgroundColor: "#437ddb",
    borderRadius: 20,
    marginTop: 20,
    marginHorizontal: 20,
    height: 55,
    elevation: 10,
    alignItems:'center',
    paddingTop: 10,
  },
  doctorViewWrapper: {
    backgroundColor: "#FFFFFFF",
    borderRadius: 20,
    marginTop: 20,
    marginHorizontal: 20,
    height: 55,
    elevation: 10,
  },
  loginText: {
    color: "white",
    fontSize: 25,

  },
  nearByDoctorContainer: {
    backgroundColor: "white",
    padding: 3,
    borderRadius: 10,
    margin: 5,
    elevation: 10,
    marginHorizontal: 10,
  },
  nearByDoctorContainerEdit: {
    backgroundColor: "white",
    padding: 3,
    borderRadius: 10,
    margin: 5,
    elevation: 10,
    marginHorizontal: 10,
  },
  tinyLogo: {
    width: 40,
    height: 40,
    borderRadius: 50,

  },
  dropdownButtonStyle: {
    width: 200,
    height: 26,
    backgroundColor: 'transparent',
    borderRadius: 12,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 5,
  },
  dropdownButtonTxtStyle: {
    flex: 1,
    fontSize: 17,
    fontWeight: '500',
    color: '#151E26',
  },
  dropdownButtonArrowStyle: {
    fontSize: 28,
  },
  dropdownButtonIconStyle: {
    fontSize: 28,
    marginRight: 8,
  },
  dropdownMenuStyle: {
    backgroundColor: '#E9ECEF',
    borderRadius: 8,
  },
  dropdownItemStyle: {
    width: '100%',
    flexDirection: 'row',
    paddingHorizontal: 12,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 8,
  },
  dropdownItemTxtStyle: {
    flex: 1,
    fontSize: 18,
    fontWeight: '500',
    color: '#151E26',
  },
  dropdownItemIconStyle: {
    fontSize: 28,
    marginRight: 8,
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
});