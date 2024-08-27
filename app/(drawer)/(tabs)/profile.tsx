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
      
     <View style={styles.helloContainer}>
       <Text style={styles.helloText}>Search Doctor</Text>
     </View>


     <View style={styles.inputContainer}>
      <View style={styles.iconView}>
      <FontAwesome
       name={"search"} 
       size={20} 
       color={"#86E1F6"} 
       style= {styles.inputIconLocation}
       />
      </View>
      <View>
      <TextInput style={styles.textInput} placeholder='Speciality' placeholderTextColor="#000" />
      <SelectDropdown
        data={emojisWithIcons}
        onSelect={(selectedItem, index) => {
          console.log(selectedItem, index);
        }}
        renderButton={(selectedItem, isOpened) => {
          return (
            <View style={styles.dropdownButtonStyle}>
              
              <Text style={styles.dropdownButtonTxtStyle}>
                {(selectedItem && selectedItem.title) || 'Select Speciality'}
              </Text>
              
            </View>
          );
        }}
        renderItem={(item, index, isSelected) => {
          return (
            <View style={{...styles.dropdownItemStyle, ...(isSelected && {backgroundColor: '#D2D9DF'})}}>
              
              <Text style={styles.dropdownItemTxtStyle}>{item.title}</Text>
            </View>
          );
        }}
        showsVerticalScrollIndicator={false}
        dropdownStyle={styles.dropdownMenuStyle}
      />
      </View>
     </View>

     <View style={styles.inputContainer}>
      <View style={styles.iconView}>
      <FontAwesome
       name={"map-marker"} 
       size={23} 
       color={"#86E1F6"} 
       style= {styles.inputIconLocation}
       />
      </View>
      <View>
      <TextInput style={styles.textInput} placeholder='Location' placeholderTextColor="#000" />
      <TextInput style={styles.textInputAllSpeciality} placeholder='New York, USA' placeholderTextColor="#000"/>
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
      <TextInput style={styles.textInput} placeholder='Availability' placeholderTextColor="#000" />
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleDate}
        onCancel={hideDatePicker}
        minimumDate={new Date()}
      />
      <TextInput
       onPress={showDatePicker}
        style={styles.textInputAllSpeciality}
         placeholder='Select Date'
          placeholderTextColor="black"
           value={selectedDate}
           />
            
      </View>
     </View>
     <View>
     <TouchableOpacity style={styles.loginButtonWrapper}>
        <Link href={'(drawer)/(tabs)/feed'}>
        
        <Text style={styles.loginText}>Find Doctor</Text>
      </Link>
      </TouchableOpacity>
     </View>

     <View style={styles.nearByDoctorContainer}>
      <View style={styles.helloContainer}>
        <Text style={styles.helloText}>Nearby Doctor</Text>
      </View>
      <View style={styles.inputDoctorContainer}>
      <View style={styles.iconViewDoctor}>
      <Image
        style={styles.tinyLogo}
        source={{
              uri: 'https://w7.pngwing.com/pngs/358/473/png-transparent-computer-icons-user-profile-person-child-heroes-public-relations.png',
            }}
      />
      </View>
      <View>
      <TextInput style={styles.textInputDoctorname} placeholder='Dr. Vijay Kumar' placeholderTextColor="#000" />
      <TextInput style={styles.textInputDoctorSpeciality} placeholder='Cardiologist, 6 years of exp.' placeholderTextColor="#000"/>
      </View>
     </View>
     <View style={styles.inputDoctorContainer}>
      <View style={styles.iconViewDoctor}>
      <Image
        style={styles.tinyLogo}
        source={{
              uri: 'https://w7.pngwing.com/pngs/358/473/png-transparent-computer-icons-user-profile-person-child-heroes-public-relations.png',
            }}
      />
      </View>
      <View>
      <TextInput style={styles.textInputDoctorname} placeholder='Dr. Vijay Kumar' placeholderTextColor="#000" />
      <TextInput style={styles.textInputDoctorSpeciality} placeholder='Cardiologist, 6 years of exp.' placeholderTextColor="#000"/>
      </View>
     </View>
     
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
  helloText: {
    textAlign: "left",
    fontSize: 27,
    fontWeight: "500",
    color: "#262626",
    paddingLeft: 20,
    marginTop: 10,
  },
  inputContainer: {
    backgroundColor: "#FFFFFF",
    flexDirection: "row",
    borderRadius: 30,
    marginHorizontal: 20,
    elevation: 10,
    marginVertical: 8,
    alignItems: "center",
    height: 55,
    borderColor: '#86E1F6',
    borderWidth: 2,
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
    backgroundColor: "#F3F3EC",
    flex: 1,
    marginTop: 30,
    marginHorizontal: 10,
    borderRadius: 20,
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
});