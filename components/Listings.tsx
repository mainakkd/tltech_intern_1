import {
    FlatList,
    Image,
    ListRenderItem,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
  } from "react-native";
  import React, { useEffect, useState } from "react";
  import { ListingType } from "@/types/listingType";
  import Colors from "@/constants/Colors";
  import { FontAwesome5, Ionicons } from "@expo/vector-icons";
  import { Link } from "expo-router";
import { ScrollView } from "react-native-gesture-handler";
  
  type Props = {
    listings: any[];
    category: string;
  };
  
  const Listings = ({ listings, category }: Props) => {
    const [loading, setLoading] = useState(false);
  
    useEffect(() => {
      console.log('Update Listing');
      setLoading(true);
  
      setTimeout(() => {
        setLoading(false)
      }, 200);
    }, [category]);
  
    const renderItems: ListRenderItem<ListingType> = ({ item }) => {
      return (
        <ScrollView href={`/listing/${item.id}`} asChild>
          <TouchableOpacity>
            <View style={styles.item}>
              <Image source={{ uri: item.image }} style={styles.image} />
              
              <Text style={styles.itemTxt} numberOfLines={1} ellipsizeMode="tail">
                {item.name}
              </Text>
              <Text style={styles.itemPriceTxt} numberOfLines={1} ellipsizeMode="tail">
                {item.price}
              </Text>
             
            </View>
          </TouchableOpacity>
        </ScrollView>
      );
    };
  
    return (
      <View>
        <FlatList
          data={loading ? [] : listings}
          renderItem={renderItems}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </View>
    );
  };
  
  export default Listings;
  
  const styles = StyleSheet.create({
    item: {
      backgroundColor: Colors.white,
      padding: 5,
      borderRadius: 10,
      margin: 5,
      width: 70,
    },
    image: {
      width: 60,
      height: 60,
      borderRadius: 10,
      marginBottom: 5,
    },
    itemTxt: {
      fontSize: 8,
      fontWeight: "600",
      color: Colors.black,
      marginBottom: 2,
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
    },
  });