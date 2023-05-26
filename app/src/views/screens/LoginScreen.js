import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Dimensions,Alert,Image,ImageBackground,Text,View,ScrollView, TouchableOpacity,TextInput} from 'react-native';
import { useState } from 'react';


export default function LoginScreen({navigation}) {
  
   
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');


  const handleEmailChange = (value) => {
    setEmail(value);
    setEmailError('');
  };

  const handlePasswordChange = (value) => {
    setPassword(value);
    setPasswordError('');
  };



  const validateEmail = () => {
    const e = /^\S+@\S+\.\S+$/;
    return e.test(email);
  };

  const validatePassword = () => {
    const pa = /^.{6,}$/;
    return pa.test(password);
  };

  const submit = () => {
    if (!validateEmail()) {
      setEmailError('Please enter a valid email address.');
    }
    if (!validatePassword()) {
      setPasswordError('Password must contain at least 6 characters.');
    }
    if (!validateEmail() && !validatePassword()) {
      navigation.replace("HomeScreen")
    }

  }
  
  return (
    <ScrollView>
    <ImageBackground style= {styles.back} source={require("../../../../assets/s.png")}>
     <StatusBar style="auto" />
    <View style={styles.container}>
  <StatusBar style="auto" />
        <View>
             <Text style = {styles.Text}>Harahara</Text>  
         </View>
         <View>
            <Image
              style={styles.image}
              source={require('../../../../assets/shi.png')}
            />
          </View>
         <View style ={styles.inputField}>
   
      <View style ={styles.inputContainer}>
    

  
    <TextInput style = {styles.inputText}
     placeholder='Email'
       placeholderTextColor="#0DA0D5"
       value={email}
      onChangeText={handleEmailChange}
       />
       </View>
            {emailError ? <Text style = {{color:"red",padding:5,fontWeight:"bold"}}>{emailError}</Text> : null}

         <View style ={styles.inputContainer}>
    <TextInput style = {styles.inputText}
     placeholder='Password' secureTextEntry  
    
      placeholderTextColor="#0DA0D5"
       value={password}
      onChangeText={handlePasswordChange}
      />
          
   
       </View>

            {passwordError ? <Text style={{ color: "red", padding: 5, fontWeight: "bold" }}>{passwordError}</Text> : null}
      <View>
         <Text style = {styles.passwordStyles}>Use 6 Characters with a mix of Letters, numbers and Symbols </Text>
      </View>


       <TouchableOpacity style={styles.button} onPress = {submit}>
                <Text style={styles.LogInText}>LogIn</Text>
      
        </TouchableOpacity>

    
   
      
   </View>
    
       
    </View>

    </ImageBackground>
     <View style= {styles.bottomView}> 
       <TouchableOpacity onPress = {() => navigation.navigate("ForgotPassword")}>
                  <Text style = {styles.ForgotText}>
            Forgot Password
         </Text>
     </TouchableOpacity>

      <View style ={styles.RegisterContent}>
        <Text style = {styles.RegisterText}>New to Travel App 
              </Text>
            <TouchableOpacity onPress = {() => navigation.navigate("Register")}  >
                  <Text style = {styles.SignText}> Sign In
         </Text>
            </TouchableOpacity>
       
     </View>
      
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    alignItems:"center",
    padding:30,
     height:Dimensions.get("window").height/1.00,
  },
  
    Text : {
  fontSize:30,
  textAlign:"center",
  alignSelf:"flex-start",
    color:"black ",
  margin:7,
  fontWeight:"bold",
    
  marginBottom:10
 
  },
  image: {
    width: 50,
    height: 50,
   marginBottom:10,
    borderRadius: 50,

  },

    inputField : {
 flexDirection:"column",
 justifyContent:"space-between",
 textAlign:"center",
    width:"90%",
  },
  inputContainer:{
    color:"#0DA0D5",
    padding:6,
    backgroundColor:"white",
    borderColor:"#fff",
    marginBottom:10,
    borderWidth:1,
    borderRadius:7
  },

  inputText:{
   padding:8,
  color:"#0DA0D5",
    fontSize:18,
  },
  passwordStyles: {
    color:"white",
    fontSize:18,
    fontWeight:"bold"
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
  ForgotText:{
    marginTop:10,
      color: 'white',
    fontWeight: 'bold',
    padding:5,
    textAlign:"center",
    textDecorationLine:"underline"
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
  RegisterContent:{
    flexDirection:'row',
    justifyContent:"center"
  },
  RegisterText:{
    color:"pink",
    fontWeight:"bold",
    fontSize:15
  },
  SignText:{
    color:"white",
    fontWeight:"bold",
    fontSize:16,
    
    textDecorationLine:"underline"
  },


 

})

