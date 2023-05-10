import  React from "react";
import { SafeAreaView } from "react-native";
import {View, Text,StyleSheet} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function SuccessfullyScreen({navigation}){
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "#B7E2E9", justifyContent: "center", alignItems: "center" }}>
      
        <View>
            <Text style={{ fontWeight: "bold",fontSize:19,alignSelf:"center"}}>
                Congratulations
            </Text>
            <Text style={{ fontWeight: "bold", fontSize: 19, }}>
                Your Payment is Successfully completed
            </Text>

                <TouchableOpacity activeOpacity={0.8} onPress={() => navigation.replace("HomeScreen")} >
                    <View style={styles.btnContainer}>
                        <Text style={styles.title}>Ok</Text>
                    </View>
                </TouchableOpacity>
        </View>
          
        </SafeAreaView>
    )
    }

const styles = StyleSheet.create({
    title: { color: "white", fontWeight: 'bold', fontSize: 18 },
    btnContainer: {
        padding: 20,
        margin: 40,
        backgroundColor: "blue",
        height: 60,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
    },
})
