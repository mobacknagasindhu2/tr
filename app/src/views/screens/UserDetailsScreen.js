import React from 'react';
import { SafeAreaView, TouchableOpacity } from 'react-native';
import { View, StyleSheet,Text,Image, StatusBar} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
export default function UserDetailsScreen({navigation}) {
    return(
      <SafeAreaView style = {styles.container}>
 
    <StatusBar  style = 'auto'/>
          
           
                <View style={styles.drawerContent}>
                   
                       
                        <View>
                            <Image 
                                source = {require("../../../../assets/profile.png")}
                               style = {styles.image}
                            />
                        <Text style={styles.text}>nagasindhu@gmail.com</Text>
           
                            <Text style = {styles.text}>Sindhu</Text>
                            <Text style = {styles.text}>+9121550729</Text>
                            </View>



                      <View>
                      <View style={styles.lineWidth}>
                        <Text ></Text>
                      </View>


     
                      
                      </View>
          <TouchableOpacity onPress={() => navigation.navigate("HomeScreen")}>
                        <View style ={{flexDirection : "row", marginBottom:30}}>
                       
                          <Icon name="home" size= {28} color="black"/>
                          <Text style={{paddingLeft:20, fontWeight:"bold",fontSize:18,}}>Home</Text>
          

                        </View>
                        </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("Subscribe")}>
                           <View style ={{flexDirection : "row",  marginBottom:30}}>
         
                          <Icon name="heart" size= {28} color="black"/>
                          <Text style={{paddingLeft:20, fontWeight:"bold",fontSize:18}}>Favourite</Text>
            </View>
        </TouchableOpacity>

                       
{/*                         
                           <View style ={{flexDirection : "row",  marginBottom:30}}>
                          <MaterialCommunityIcons name="bell" size= {28} color="white"/>
                          <Text style={{paddingLeft:20, fontWeight:"bold",fontSize:18}}>Home</Text>
                          

                        </View> */}


            


            </View>
                <View style={{flexDirection :"column",justifyContent:"flex-end", alignItems:"flex-start",padding:20}}>
                <View style ={{flexDirection:"row"}}>
            <Icon
              name="arrow-left"
              size={30}
              color="white"


            />
            <Text style ={{fontWeight:"bold",size:35, paddingLeft:20}}>Logout</Text>
                </View>
      
                </View>

          
          
          
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
  container:{flex:1, backgroundColor:"#B7E2E9"},
    drawerContent: {
      flex: 1,
      flexDirection:"column",
      justifyContent:"flex-start",
     padding:20,
      marginTop:50
    },
    borderWidth:{
        height:3,
        backgroundColor:"black",
        borderWidth:6,
        
    },

    text:{
      fontWeight:"bold",
      fontSize:23,
      padding:3
    },
    image:{
      height:50,
      width:50,borderRadius:30
    },
    userInfoSection: {
      paddingLeft: 20,
    },
    title: {
      fontSize: 16,
      marginTop: 3,
      fontWeight: 'bold',
    },
    caption: {
      fontSize: 14,
      lineHeight: 14,
    },
    row: {
      marginTop: 20,
      flexDirection: 'row',
      alignItems: 'center',
    },
    section: {
      flexDirection: 'row',
      alignItems: 'center',
      marginRight: 15,
    },
    paragraph: {
      fontWeight: 'bold',
      marginRight: 3,
    },
    drawerSection: {
      marginTop: 15,
    },
    bottomDrawerSection: {
        marginBottom: 15,
        borderTopColor: '#f4f4f4',
        borderTopWidth: 1
    },
    preference: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingVertical: 12,
      paddingHorizontal: 16,
    },
  });