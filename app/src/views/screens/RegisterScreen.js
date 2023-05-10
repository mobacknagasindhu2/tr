import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Dimensions,Alert,ImageBackground,Text,View,ScrollView, TouchableOpacity,TextInput} from 'react-native';
import { useState } from 'react';
import Checkbox from "expo-checkbox";

export default function RegisterScreen({navigation}) {
    const [name, setName] = useState("");
  const [firstNameError, setFirstNameError] = useState('');
   const [lastName, setLastName] = useState("");
  const [lastNameError, setLastNameError] = useState('');
    const [phone, setPhone] = useState("");

  const [mobileNumberError, setMobileNumberError] = useState('');
  const [email, setEmail] = useState('');
  const [emailValidError, setEmailValidError] = useState('');
   const[password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState('');
  const [sign,setSign] = useState(false);


  const validateFirstName = (e) =>{
    let name = /^[a-zA-Z ]+$/;
   
     if (name.test(e) === false) {
      setFirstNameError('enter valid name');
    } else if (name.test(e) === true) {
      setFirstNameError('');
    }
    return name.test(name);

  }

  const validateName = (e) => {
    let name = /^[a-zA-Z ]+$/;
  
   if (name.test(e) === false) {
      setLastNameError('enter valid name');
    } else if (name.test(e) === true) {
      setLastNameError('');
    }
    return name.test(lastName);
  };

  const validateMobileNumber = e => {
    let mobile = /^[0-9]{10}$/;
   
     if (mobile.test(e) === false) {
      setMobileNumberError('enter valid mobile number');
    }  else if (mobile.test(e) === true) {
      setMobileNumberError("");
    }

   return mobile.test(phone);
  };



  const handleValidEmail = e => {
    
      const valid = /^\S+@\S+\.\S+$/;
    if (valid.test(e) === false) {
      setEmailValidError("Enter a valid email")
    }
    else if (valid.test(e) === true) {
      setEmailValidError("")
    }
    return valid.test(email);

  };
  const validatePassword = e => {
    let pa = /^.{6,}$/;
  
  
     if (pa.test(e) === false){
      setPasswordError("Enter a valid Password")
    }
    else if (pa.test(e) === true){
      setPasswordError("")
    }
    return pa.test(password);
  };


const cancel = () => {
  if (!name && !lastName && phone && !email && !password) {
    setName("");
    setLastName("");
    setPhone("");
    setEmail("");
    setPassword("")
    setSign("")
  }


};
  




    const submit = () => {
      if (!name){
          setFirstNameError("please enter a name")
      }  
      if (!lastName){
        setLastNameError("please enter a name")
      } 
      if (!phone){
        setMobileNumberError("please enter a mobile Number")
      }if (!email){
        setEmailValidError("please enter a email")

      }
       if (!password){
        setPasswordError("password must contain at least 6 characters.")
      
    }
      if (name && lastName && phone && email && password )  {
        navigation.replace("LogIn")
      }
   
  };




  return (
    <ScrollView>
    <ImageBackground style= {styles.back} source={require("../../../../assets/loard.png")}>
    <View style={styles.container}>
  <StatusBar style="auto" />
        <View>
             <Text style = {styles.Text}>Create Your Account</Text>   
         </View>
         <View style ={styles.inputField}>
   
   <View style ={styles.inputContainer}>
    <TextInput style = {styles.inputText} 
    placeholder='First Name' 
        placeholderTextColor="#0DA0D5"
        value = {name}
        onChangeText={(text) => { setName(text), validateFirstName(text)}}
        />
       </View>
            {firstNameError ? <Text style={{ color: "red", padding: 5, fontWeight: "bold" }}>{firstNameError}</Text> : null}
      <View style ={styles.inputContainer}>
          <TextInput style = {styles.inputText}
          placeholder='Last Name'
          placeholderTextColor="#0DA0D5"
          value={lastName}
           onChangeText={(text) => {setLastName(text), validateName(text)}}
        />
       </View>
            {lastNameError ? <Text style={{ color: "red", padding: 5, fontWeight: "bold" }}>{lastNameError}</Text> : null}
       <View style ={styles.inputContainer}>
          <TextInput style = {styles.inputText}
          placeholder='Phone Number'
          placeholderTextColor="#0DA0D5"
          value={phone}
                onChangeText={(value) => { setPhone(value), validateMobileNumber(value)}}
        />
       </View>
            {mobileNumberError ? <Text style={{ color: "red", padding: 5, fontWeight: "bold" }}>{mobileNumberError}</Text> : null}

  <View style ={styles.inputContainer}>
    <TextInput style = {styles.inputText}
     placeholder='Email'
       placeholderTextColor="#0DA0D5"
       value={email}
       autoCorrect = {false}
       autoCapitalize = "none"
         onChangeText={(value) => {setEmail(value); handleValidEmail(value)}}
       />

       </View>
            {emailValidError ? <Text style={{ color: "red", padding: 5, fontWeight: "bold" }}>{emailValidError}</Text> : null}


         <View style ={styles.inputContainer}>
    <TextInput style = {styles.inputText}
     placeholder='Password' secureTextEntry  
    
      placeholderTextColor="#0DA0D5"
       value={password}
                onChangeText={(text) => { setPassword(text), validatePassword(text)}}
      />
   
       </View>
            {passwordError ? <Text style={{ color: "red", padding: 5, fontWeight: "bold" }}>{passwordError}</Text> : null}
      <View>
         <Text style = {styles.passwordStyles}>Use 6 Characters with a mix of Letters, numbers and Symbols </Text>
      </View>

       <View style = {styles.checkbox}>
        
        <Checkbox
       value = {sign}
         onValueChange= { () => setSign(!sign)}
         color={sign ? "#4630EB" : undefined}
        /> 
        <Text style = {styles.checkboxText}>By signing up, you agree to Bank's Term of Use & Privacy Policy</Text>
   </View>
      
        <View  style = {styles.signText}>
           <TouchableOpacity  activeOpacity={0.8}  style={[styles.button, {
             backgroundColor : sign ? "#4630EB" : "grey"
            }, 
            ]}
            disabled = {!sign}
            onPress={submit}>
               <Text style={styles.SignText}>Sign UP</Text>
      
           </TouchableOpacity>
   
     <Text style = {styles.orText}>or</Text>
        <TouchableOpacity activeOpacity={0.8} style={styles.CancelButton} onPress={cancel}>
                <Text style={styles.CancelText}>Cancel</Text>
      
        </TouchableOpacity>

   </View>
       
      
   </View>
     <View style ={styles.RegisterContent}>
        <Text style = {styles.RegisterText}>
            Already Signed up?  </Text>
            <TouchableOpacity activeOpacity={0.8}  onPress = {() => navigation.navigate("LogIn")}  >
                  <Text style = {styles.LoginText}>
            Log In
         </Text>
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
    justifyContent: 'flex-start',
    padding:30,
     height:Dimensions.get("window").height/1.80,
  },

  
    Text : {
  fontSize:30,
  textAlign:"center",
  alignSelf:"flex-start",
    color:"#3B278C",
  margin:7,
  fontWeight:"bold",
 
  marginBottom:40
 
  },

    inputField : {
 flexDirection:"column",
 justifyContent:"center",
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
    color:"black",
    fontSize:15,
    fontWeight:"bold"
  },
   signText: {
     
    flexDirection:"row",
    justifyContent:"center",
    alignItems:'center' ,   
    padding:20,
  },
    orText: {
    margin:8,
    fontSize:14,
    
},
   button: {
    backgroundColor: '#D8CC1C',
    padding: 13,
    borderRadius: 6,
    width:125,
  },
  CancelButton:{
     backgroundColor: '#CFE8F1',
    padding: 13,
    borderRadius: 6,
    width:125,
     borderColor:"#D8CC1C",
    borderWidth:1,
  },
  SignText: {
    color: 'black',
    fontWeight: 'bold',
    textAlign:"center"
  },
  CancelText: {
    color: 'black',
    fontWeight: 'bold',
    textAlign:"center",
  },
   checkboxContainer: {
    backgroundColor: '#fff', 
    borderWidth: 0,
  },
    checkbox: {
    
    width:"80%",
    flexDirection:"row",
    justifyContent:"center",
     alignItems:'center' ,   
   
  margin:10

  },
  checkboxText: {
    fontSize:15,
    padding:5,
    marginLeft:5,
    fontWeight:'bold',
    color:"white"
  },



  bottomView : {
    flex:1,
    backgroundColor:"#21274B",
    alignItems: 'center',
    padding: 20,
    height:Dimensions.get("window").height/4.30,
  
  },

  back:{
    flex :1,
     alignItems: 'center',
  justifyContent: 'center',
    flexDirection:'column',
    height:Dimensions.get("window").height/0.98,

  },
  RegisterContent:{
    flexDirection:'row',
    justifyContent:"center"
  },
  RegisterText:{
    color:"blue",
    fontWeight:"bold",
    fontSize:15
  },
  LoginText:{
    color:"white",
    fontWeight:"bold",
    fontSize:16,
    textDecorationLine:"underline"
  },


 

})

