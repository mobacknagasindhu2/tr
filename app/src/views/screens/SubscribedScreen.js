import React from 'react';
import { StatusBar } from 'react-native';
import { SafeAreaView, StyleSheet, TouchableOpacity,View, Text, Image } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';
import homes from '../../constants/homies';

const SubscribedScreen = ({ navigation }) => {
 
  <StatusBar style ="auto"/>
  const CartCard = ({ item }) => {
    return (
      
      <View style={style.cartCard}>
        <Image source={item.images} style={{ height: 60, width: 80,borderRadius:20 }} />
        <View
          style={{
            height: 150,
            marginLeft: 10,
            paddingVertical: 20,
            flex: 1,
          }}>
          <Text style={{ fontWeight: 'bold', fontSize: 16 }}>{item.name}</Text>
          <Text style={{ fontSize: 13, color:"grey" }}>
            {item.location}
          </Text>
          <Text style={{ fontSize: 17, fontWeight: 'bold' }}>${item.price}</Text>
        </View>
        <View style={{ marginRight: 20, alignItems: 'center' }}>
          <Text style={{ fontWeight: 'bold', fontSize: 18 ,paddingBottom:10}}>1</Text>
          <View style={style.actionBtn}>
            <Icon name="remove" size={25} color="white" />
            <Icon name="add" size={25} color="white" />
          </View>
        </View>
      </View>
    );
  };
  return (
    <SafeAreaView style={{ backgroundColor: "#B7E2E9", flex: 1 }}>
      <View style={style.header}>
        <Icon name="arrow-back-ios" size={28} color ="white" onPress={navigation.goBack} />
        <Text style={{ fontSize: 20, fontWeight: 'bold' , color:"white"}}>Cart</Text>
      </View>
      <FlatList
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 80 }}
        data={homes}
        renderItem={({ item }) => <CartCard item={item} />}
        ListFooterComponentStyle={{ paddingHorizontal: 20, marginTop: 20 }}
        ListFooterComponent={() => (
          <View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginVertical: 15,
              }}>
              <Text style={{ fontSize: 18, fontWeight: 'bold' }}>
                Total Price for 3 months
              </Text>
              <Text style={{ fontSize: 18, fontWeight: 'bold' }}>INR 1000</Text>
            </View>
            <View style={{ marginHorizontal: 30 }}>
              <TouchableOpacity activeOpacity={0.8} onPress={() => navigation.navigate("FullySubscribe")} >
                <View style={style.btnContainer}>
                  <Text style={style.title}>Subscribe</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
    </SafeAreaView>
  );
};
const style = StyleSheet.create({
  header: {
    marginTop:50,
    paddingVertical: 20,
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,

  },
  cartCard: {
    height: 200,
    elevation: 15,
    borderRadius: 10,
    backgroundColor: "white",
    marginVertical: 10,
    marginHorizontal: 20,
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  actionBtn: {
    width: 80,
    height: 30,
    backgroundColor: "blue",
    borderRadius: 30,
    paddingHorizontal: 5,
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
  },
  title: { color: "white", fontWeight: 'bold', fontSize: 18 },
  btnContainer: {
    backgroundColor: "blue",
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default SubscribedScreen;