import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Dimensions,Alert,ImageBackground,Text,View,ScrollView, TouchableOpacity,TextInput} from 'react-native';
import { useState } from 'react';


export default function ForgotPasswordScreen({navigation}) {
  
   
   const [email, SetEmail] = useState("");
   
  
  return (
    <ScrollView>
    <ImageBackground style= {styles.back} source={require("../../../../assets/loard.png")}>
     <StatusBar style="auto" />
    <View style={styles.container}>
   
        <View style={styles.wFull}>
  <StatusBar style="auto" />
        <View>
             <Text style = {styles.Text}>Forgot Password</Text>
         </View>
       
   
  
    

  
    <TextInput style = {styles.inputText}
     placeholder='Email'
       placeholderTextColor="#0DA0D5"
       value={email}
         onChangeText={(text) => SetEmail(text)}
       />
     


       <TouchableOpacity style={styles.button} onPress = {() => navigation.goBack("HomeScreen")}>
                <Text style={styles.LogInText}>Submit</Text>
      
        </TouchableOpacity>

    
     
      

    

    </View>
       
    </View>

    </ImageBackground>
     <View style= {styles.bottomView}> 
    
      
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    
    padding:16,
     height:Dimensions.get("window").height/1.00,
  },
  
    Text : {
  fontSize:30,
  textAlign:"center",
  alignSelf:"flex-start",
    color:"#3B278C",
  margin:7,
  fontWeight:"bold",
  fontFamily:"Fantasy",
  marginBottom:40
 
  },



  inputText:{
    
    borderWidth: 1,
    backgroundColor:"white",
    borderColor: "gray",
    padding: 15,
    marginVertical: 10,
    borderRadius: 5,
    height: 55,
    paddingVertical: 0,
      padding:8,
  color:"#0DA0D5",
    fontSize:18,
  },
 
  
  
   button: {
    backgroundColor: '#D8CC1C',
    padding: 13,
    borderRadius: 6,
    width:125,
    alignSelf:"center",
    marginTop:50
  },
 
  LogInText: {
    color: 'black',
    fontWeight: 'bold',
    textAlign:"center",
  },
 
  



  bottomView : {
    flex:1,
    backgroundColor:"#21274B",
    alignItems: 'center',
    padding: 20,
    height:Dimensions.get("window").height/3.36,
  
  },

  back:{
    flex :1,
     alignItems: 'center',
  justifyContent: 'center',
    flexDirection:'column',
    height:Dimensions.get("window").height/1.23,

  },


 

})

