import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,TextInput,Image, FlatList,ScrollView, SafeAreaView ,TouchableOpacity,Animated, Dimensions} from 'react-native';
import Icon from "react-native-vector-icons/MaterialIcons"

import {React} from 'react';
import homes from '../../constants/homies';
import { useState, useRef } from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
const {width} = Dimensions.get('screen');
const cardWidth = width / 1.5;



export default function HomeScreen({navigation}) {
    const [activeCardIndex, setActiveCardIndex] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;



  const Card = ({homes , index}) => {
     const inputRange = [
      (index - 1) * cardWidth,
      index * cardWidth,
      (index + 1) * cardWidth,
    ];
    const opacity = scrollX.interpolate({
      inputRange,
      outputRange: [0.7, 0, 0.7],
    });
    const scale = scrollX.interpolate({
      inputRange,
      outputRange: [0.8, 1, 0.8],
    });

    return (
    <TouchableOpacity    disabled={activeCardIndex != index}
        activeOpacity={1}
        onPress={() => navigation.navigate('DetailsScreen', homes)}>
    <Animated.View style={{...styles.card, transform: [{scale}]}}>
    <Animated.View style={{...styles.cardOverLay, opacity}} />
    
  
   
  <View style = {styles.heartImage}>
    <MaterialCommunityIcons name ="heart-outline"  size ={28} color= {"black"}/>
  </View>
    <Image source = {homes.images} style = {styles.cardImage}/>
    <View style = {styles.cardDetails}>
    <View style = {{flexDirection :"row", justifyContent:"space-between",}}>
      <View>
        <Text style ={{fontWeight:"bold",fontSize:20}}>{homes.name}</Text>
         <Text style ={{fontWeight:400,fontSize:17}}>{homes.location}</Text>
           <Text style ={{fontWeight:"bold",fontSize:20, color:"blue"}}>{homes.price}</Text>
      </View>
      <View>
      <Icon name="bookmark-border" size={26}/>

      </View>
      </View>
      <View style = {{flexDirection :"row", justifyContent:"space-between", marginTop:10}}>
        <View style = {{flexDirection:"row"}}>
          <Icon name="star" size={15} color = {"orange"}/>
            <Icon name="star" size={15} color = {"orange"}/>
              <Icon name="star" size={15} color = {"orange"}/>
                <Icon name="star" size={15} color = {"orange"}/>
                  <Icon name="star" size={15} color = {"grey"}/>
        </View>
        <Text style = {{fontSize:15, color:"grey"}}>365 reviews</Text>
      </View>
    </View>

  
   </Animated.View>
    </TouchableOpacity>
    )

  };

    const TopHotelCard = ({homes}) => {
    return (
      <View style={styles.topHotelCard}>
        <View
          style={{
            position: 'absolute',
            top: 5,
            right: 5,
            zIndex: 1,
            flexDirection: 'row',
          }}>
          <Icon name="star" size={15} color="orange" />
          <Text style={{color: "white", fontWeight: 'bold', fontSize: 15}}>
            5.0
          </Text>
        </View>
        <Image style={styles.topHotelCardImage} source={homes.images} />
        <View style={{paddingVertical: 5, paddingHorizontal: 10}}>
          <Text style={{fontSize: 10, fontWeight: 'bold'}}>{homes.name}</Text>
          <Text style={{fontSize: 7, fontWeight: 'bold', color: "grey"}}>
            {homes.location}
          </Text>
        </View>
      </View>
    );
  };


  return (
    <SafeAreaView style = {styles.HomeScreenColor}>
 
    <StatusBar  style = 'auto'/>

   
      <View>
        <Text style = {styles.HeadingText}>Explore the beautiful places.  </Text>
      
      </View>
      <View style = {styles.searchInputContainer}>
       <Icon name = "search" size ={28} color= {"black"} style = {{marginLeft:20}} />
      <TextInput placeholder="Search"  style={{fontSize:20,paddingLeft:10}}/>
      </View>
     
<ScrollView showsVerticalScrollIndicator ={false}>
      <View>
       
      
        <Animated.FlatList
            onMomentumScrollEnd={(e) => {
              setActiveCardIndex(
                Math.round(e.nativeEvent.contentOffset.x / cardWidth),
              );
            }}
            onScroll={Animated.event(
              [{nativeEvent: {contentOffset: {x: scrollX}}}],
              {useNativeDriver: true},
            )}
        horizontal
         keyExtractor={homes.id}
        data = {homes}
         contentContainerStyle={{
              paddingVertical: 30,
              paddingLeft: 20,
              paddingRight: cardWidth / 2 - 40,
            }}
            
        showsHorizontalScrollIndicator = {false}
          renderItem={({item,index}) => <Card homes = {item} index ={index}/>}
          snapToInterval={cardWidth}
        />
      </View>
      <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginHorizontal: 20,
          }}>
          <Text style={{fontWeight: 'bold', color: "grey"}}>
            Top places
          </Text>
          <Text style={{color: "grey"}}>Show all</Text>
        </View>
        <FlatList
        keyExtractor={homes.id}
          data={homes}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            paddingLeft: 20,
            marginTop: 20,
            paddingBottom: 30,
          }}
          renderItem={({item}) => <TopHotelCard homes={item} />}
        />

    </ScrollView>
     
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
    HomeScreenColor:{
        flex : 1,
        backgroundColor:"#B7E2E9",
        padding:20
       
    },
    header:{
      marginTop:30,
      paddingVertical:20,
      flexDirection:"row",
      justifyContent:"space-between",
      backgroundColor:"a0b8f9"
    },
  
  
  HeadingText: {
  marginTop:50,     
    fontWeight:'bold',
    fontSize :25,
    color:"#3B278C"
  },
  searchInputContainer:{
    height : 50,
    backgroundColor:"#fff",
    marginTop:15,
    marginBottom:5,
    flexDirection:"row",
    alignItems:"center",
    borderRadius:20

  },
  categoryListContainer:{
    flexDirection:"row",
    justifyContent:"space-between",
    marginHorizontal:20,
    margin:30
  },
  categoryListText : {
    fontSize: 17,
    fontWeight:"bold",

  },
  card : {
    height:380,

    width:cardWidth,
  
    marginBottom:20,
    borderRadius:15,
    backgroundColor:"white"
  },
  cardImage:{
    height:250,
    width:"100%",
    borderTopLeftRadius:15,
borderTopRightRadius:15
  },
  heartImage:{
    height:40,
    width:30,
    backgroundColor:"transparent",
    position:"absolute",
    zIndex:1,
    right:0,
    margin:20
    
  },
  cardDetails:{
    height:180,
    borderRadius:15,
    backgroundColor:"white",
    position:"absolute",
    bottom:0,
    padding:10,
    width:"100%"
  },
    cardOverLay: {
    height: 280,
    backgroundColor: "white",
    position: 'absolute',
    zIndex: 100,
    width: cardWidth,
    borderRadius: 15,
  },
  topHotelCard: {
    height: 120,
    width: 120,
    backgroundColor: "white",
    elevation: 15,
    marginHorizontal: 10,
    borderRadius: 10,
  },
  topHotelCardImage: {
    height: 80,
    width: '100%',
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },
});

