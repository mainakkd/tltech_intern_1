import { DrawerContentScrollView, DrawerItem, DrawerItemList } from "@react-navigation/drawer";
import { useRouter } from "expo-router";
import { View , Text, Image} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function CustomDrawerContent(props:any){
    const router=useRouter();
    const {top, bottom} = useSafeAreaInsets();

    return (
        <View style={{flex: 1,backgroundColor:'yellow'}}>
            <DrawerContentScrollView{...props}
            contentContainerStyle={{backgroundColor:'#40cbb4'}}>
            <View style={{padding:20}}>
                <Image
                source={{ uri:'https://www.pngall.com/wp-content/uploads/5/Profile-Transparent.png'}}
                style={{width:100, height:100, alignSelf:'center'}}
                />
                <Text 
                    style={{
                        alignSelf:'center',
                        fontWeight:500,
                        fontSize:18,
                        paddingTop:10,
                        color:'black',
                    }}>
                    Ramiz Khan
                </Text>
            </View>
            <View style={{backgroundColor:'yellow', paddingTop:10}}>
                <DrawerItemList{...props}/>
                {/* <DrawerItem label={"Logout"} onPress={() => router.replace('/')}/> */}
            </View>
            </DrawerContentScrollView>
            {/*
            <View 
             style={{
                borderTopColor:'#dde3fe',
                borderTopWidth:1,
                padding:20,
                paddingBottom:20 + bottom,
                }}>
                    <Text>Logout</Text>
             
            </View>
            */}
        </View>
    );
}