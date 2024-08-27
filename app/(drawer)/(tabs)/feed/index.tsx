import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  FlatList,
} from "react-native";
import React, { useState } from "react";
import { Stack } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';
import { Link } from 'expo-router'

const Explore = () => {

  const state = {
    tableHead: ['Date', 'Appo. Type', 'Doctor'],
    tableData: [
      ['2024-02-26', 'First Consult.', 'Dr. Sanjay'],
      ['2024-02-24', 'Reporting', 'Dr. Sanjay'],
      ['2024-02-26', 'Reporting', 'Dr. Sanjay'],
      ['2024-02-29', 'Reporting', 'Dr. Sanjay']
    ]
  }

  return (
    <View style={[styles.container]}>
        <ScrollView showsVerticalScrollIndicator={false}>
         <Text style={styles.headingTxt}>Welcome to IVF Solution!</Text>

          <View style={styles.cardContainer}>

            <View>
              <TouchableOpacity>
                <View style={styles.item}>
                  <Image 
                   source={{ uri: "https://png.pngtree.com/png-vector/20220728/ourmid/pngtree-blood-logo-template-vector-icon-illustration-design-png-image_5688354.png" }} 
                   style={styles.image} 
                  />
                  <Text style={styles.itemTxt} numberOfLines={1} ellipsizeMode="tail">
                  Blood Status
                  </Text>
                  <Text style={styles.itemPriceTxt} numberOfLines={1} ellipsizeMode="tail">
                  100/70
                  </Text>
                </View>
              </TouchableOpacity>
            </View>

            <View>
              <TouchableOpacity>
                <View style={styles.item}>
                  <Image 
                    source={require('@/assets/images/heart.png')}
                    style={styles.image} />
                  
                  <Text style={styles.itemTxt} numberOfLines={1} ellipsizeMode="tail">
                  Heart Rate
                  </Text>
                  <Text style={styles.itemPriceTxt} numberOfLines={1} ellipsizeMode="tail">
                  78bmp
                  </Text>
                </View>
              </TouchableOpacity>
            </View>

            <View>
              <TouchableOpacity>
                <View style={styles.item}>
                  <Image 
                   source={require('@/assets/images/glu.png')}
                   style={styles.image} />
                  
                  <Text style={styles.itemTxt} numberOfLines={1} ellipsizeMode="tail">
                  Glucose Level
                  </Text>
                  <Text style={styles.itemPriceTxt} numberOfLines={1} ellipsizeMode="tail">
                  78-92
                  </Text>
                </View>
              </TouchableOpacity>
            </View>

            <View>
              <TouchableOpacity>
                <View style={styles.item}>
                  <Image 
                    source={require('@/assets/images/bp.jpg')}
                    style={styles.image} />
                  
                  <Text style={styles.itemTxt} numberOfLines={1} ellipsizeMode="tail">
                  Blood Pressure
                  </Text>
                  <Text style={styles.itemPriceTxt} numberOfLines={1} ellipsizeMode="tail">
                  100mg/dl
                  </Text>
                </View>
              </TouchableOpacity>
            </View>

          </View>

          <View style={styles.visitHistoryView}>
            <Text style={styles.historyHedingTxt}>Visit History</Text>
          </View>
          <View style={styles.tblView} >
            <Table borderStyle={{borderWidth: 2, borderColor: 'green'}} style={styles.tbl} >
            <Row data={state.tableHead} style={styles.head} textStyle={styles.textHead} />
            <Rows data={state.tableData} style={styles.body} textStyle={styles.textBody} />
            </Table>
            </View>

        </ScrollView>
      </View>
  )
}

export default Explore

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: "#E8FBFA",
  },
  headingTxt: {
    fontSize: 28,
    fontWeight: "800",
    color: "#40cbb4",
    marginTop: 10,
  },
  searchSectionWrapper: {
    flexDirection: "row",
    marginVertical: 20,
  },
  searchBar: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "white",
    padding: 16,
    borderRadius: 10,
  },
  filterBtn: {
    backgroundColor: "#40cbb4",
    padding: 12,
    borderRadius: 10,
    marginLeft: 20,
  },
  head: { 
    height: 40, 
    backgroundColor: '#40cbb4',
    textAlign:'center', 
  },
  body: { 
    height: 40, 
    backgroundColor: '#fff' 
  },
  textHead: { 
    margin: 6,
    textAlign: 'center',
    color:'white',
    fontWeight: "600",

  },
  textBody: { 
    margin: 6,
    textAlign: 'center' 
  },
  visitHistoryView: { 
    margin: 4,
    marginTop:40,
    borderRadius: 8,
    borderColor:'black',
    height:50,
    backgroundColor: '#40cbb4',
  },
  tblView: { 
    margin: 4,
    borderRadius: 8,
    borderColor:'black',
    backgroundColor: '#40cbb4',
  },
  tbl: { 
    margin: 6,
    borderColor:'black',
    backgroundColor: '#40cbb4',
  },
  historyHedingTxt: {
    fontSize: 22,
    fontWeight: "700",
    color: "#fff",
    marginTop: 10,
    borderRadius: 8,
    textAlign:'center', 
  },
  loginButtonWrapper: {
    backgroundColor: "#437ddb",
    borderRadius: 20,
    marginTop: 20,
    marginHorizontal: 5,
    height: 55,
    elevation: 10,
    alignItems:'center',
    paddingTop: 10,
  },
  cardContainer: {
    flexDirection: "row",
    marginTop: 20,
  },
  item: {
    backgroundColor: "white",
    padding: 3,
    borderRadius: 10,
    margin: 5,
    width: 70,
    elevation: 5,
  },
  image: {
    width: 65,
    height: 65,
    borderRadius: 10,
    marginBottom: 5,
  },
  itemTxt: {
    fontSize: 9,
    fontWeight: "600",
    color:"black",
    marginBottom: 3,
    textAlign: 'center',
  },
  itemLocationTxt: {
    fontSize: 12,
    marginLeft: 5,
  },
  itemPriceTxt: {
    fontSize: 12,
    fontWeight: "600",
    color: "#40cbb4",
    textAlign: 'center',
    marginBottom: 5,
  },
  tinyLogo: {
    width: 40,
    height: 40,
    borderRadius: 50,

  },
});