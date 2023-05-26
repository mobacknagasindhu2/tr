import React from 'react';
import { StatusBar } from 'react-native';
import { SafeAreaView, TextInput, TouchableOpacity, FlatList, StyleSheet, View, Text, Image, Platform, DatePickerIOS, DatePickerAndroid,} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useRef, useState } from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import DateTimePicker from "@react-native-community/datetimepicker"
const temples = [
    { te: 'Somnath Jyotirlinga' },
    { te: 'Mallikarjuna Jyotirlinga' },
    { te: 'Mahakaleshwar Jyotirlinga' },
    { te: 'Omkareshwar Jyotirlinga' },
    { te: 'Baidyanath Jyotirlinga' },
    { te: 'Bhimashankar Jyotirlinga' },
    { te: 'Rameshwar Jyotirlinga' },
    { te: 'Nageshwar Jyotirlinga' },
    { te: 'Vishwanath Jyotirlinga' },
    { te: 'Trimbakeshwar Jyotirlinga' },
    { te: 'Kedarnath Jyotirlinga' },
    { te:"Ghrishneshwar Jyotirlinga"}
   
   
];
const GiftScreen = ({ navigation }) => {

    const [date, setDate] = useState(new Date());
    const [showPicker, setShowPicker] = useState(false);
    const toggleDatepicker = () => {
        setShowPicker(!showPicker)
    }
    const onChange = ({type} , selectedDate) => {
        if (type == "set"){
            const currentDate = selectedDate
            setDate(currentDate)
            if (Platform.OS === "android"){
                toggleDatepicker()
                setDate(currentDate.toDateString())
            }

        }
        else {
            toggleDatepicker()
        }

    }

    const [search, setSearch] = useState('');
    const [clicked, setClicked] = useState(false);
    const [data, setData] = useState(temples);
    const [selectTemple, setselectTemple] = useState('');
    const searchRef = useRef();
    const onSearch = search => {
        if (search !== '') {
            let tempData = data.filter(item => {
                return item.te.toLowerCase().indexOf(search.toLowerCase()) > -1;
            });
            setData(tempData);
        } else {
            setData(temples);
        }
    };


    return (
        <SafeAreaView style={{ backgroundColor: "#B7E2E9", flex: 1, padding: 20 }}>

            <StatusBar style="auto" />
            <View style={styles.header}>
                <Icon name="arrow-back-ios" size={28} color="black" onPress={navigation.goBack} />
                <Text style={{ fontSize: 25, fontWeight: 'bold', color: "black", marginBottom: 5 }}>Gifts</Text>
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View>
                    <Text style={{ fontSize: 18, fontWeight: "bold", marginBottom: 10,marginTop:20 }}>
                        Name 
                    </Text>
                    <View style={styles.inputContainer}>
                        <TextInput style={styles.inputText} placeholder='Name ' placeholderTextColor="#0DA0D5" />
                    </View>
                </View>
                <View>

                    <Text style={{ fontSize: 18, fontWeight: "bold", marginBottom: 10 }}>
                        Date
                    </Text>
                 {showPicker && (
                        <DateTimePicker
                            mode="date"
                            display="spinner"
                            value={date}
                            onChange={onChange}

                        />
                 )}   
                    {!showPicker && (<View style={styles.inputContainer}>

                        <TouchableOpacity onPress={toggleDatepicker}>
                            <TextInput style={styles.inputText} placeholder='Fri May 24 2023 ' placeholderTextColor="#0DA0D5" editable={false} />
                        </TouchableOpacity>
                    </View>)}
                   
                </View>
                <View>
                    <Text style={{ fontSize: 18, fontWeight: "bold", marginBottom: 10 }}>
                        Occasion
                    </Text>
                    <View style={styles.inputContainer}>
                        <TextInput style={styles.inputText} placeholder='Birthday/Wedding' placeholderTextColor="#0DA0D5" />
                    </View>
                </View>

                <View style={{ flexDirection: "row", justifyContent: "space-between", margin: 15 }}>
                    <Text style={{ fontSize: 20, fontWeight: "bold" }}>Temple</Text>
                    <Text style={{ fontSize: 20 }}>Required</Text>
                </View>

                <TouchableOpacity
                    style={{
                        backgroundColor: "white",
                        width: '90%',
                        height: 50,
                        borderRadius: 10,
                        borderWidth: 0.5,
                        alignSelf: 'center',
                        marginBottom: 20,
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        paddingLeft: 15,
                        paddingRight: 15,
                    }}
                    onPress={() => {
                        setClicked(!clicked);
                    }}>
                    <Text style={{ fontWeight: '600' }}>
                        {selectTemple == '' ? 'Select Temple' : selectTemple}
                    </Text>
                    {clicked ? (
                        <Image
                            source={require("../../../../assets/dropdown.png")}
                            style={{ width: 20, height: 20 }}
                        />
                    ) : (
                        <Image
                            source={require("../../../../assets/dropdown.png")}
                            style={{ width: 20, height: 20 }}
                        />
                    )}
                </TouchableOpacity>
                {clicked ? (
                    <View
                        style={{
                            elevation: 5,
                            marginTop: 20,
                            height: 300,
                            alignSelf: 'center',
                            width: '90%',
                            backgroundColor: '#fff',
                            borderRadius: 10,
                        }}>
                        <TextInput
                            placeholder="Search.."
                            value={search}
                            ref={searchRef}
                            onChangeText={txt => {
                                onSearch(txt);
                                setSearch(txt);
                            }}
                            style={{
                                width: '90%',
                                height: 50,
                                alignSelf: 'center',
                                borderWidth: 0.2,
                                borderColor: '#8e8e8e',
                                borderRadius: 7,
                                marginTop: 20,
                                paddingLeft: 20,
                            }}
                        />

                        <FlatList
                            data={data}
                            renderItem={({ item, index }) => {
                                return (
                                    <TouchableOpacity
                                        style={{
                                            width: '85%',
                                            alignSelf: 'center',
                                            height: 50,
                                            justifyContent: 'center',
                                            borderBottomWidth: 0.5,
                                            borderColor: '#8e8e8e',

                                        }}
                                        onPress={() => {
                                            setselectTemple(item.te);
                                            setClicked(!clicked);
                                            onSearch('');
                                            setSearch('');
                                        }}>
                                        <Text style={{ fontWeight: "bold" }}>{item.te}</Text>
                                    </TouchableOpacity>
                                );
                            }}
                        />
                    </View>
                ) : null}



               


                <TouchableOpacity activeOpacity={0.8} onPress={() => navigation.navigate("FullySubscribe")} >
                    <View style={styles.btnContainer}>
                        <Text style={styles.title}>Submit</Text>
                    </View>
                </TouchableOpacity>




            </ScrollView>
        </SafeAreaView>
    );
};
const styles = StyleSheet.create({
    header: {
        marginTop: 50,

        flexDirection: 'row',
        alignItems: 'center',


    },

    textInput: {
        flex: 3,
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
    },
    dropdown: {
        flex: 1,
        height: 50,
        borderWidth: 1,
        borderColor: '#ccc',
    },
    addressText: {
        marginTop: 20,


    },
    card: {
        height: 500,
        elevation: 15,
        borderRadius: 10,
        backgroundColor: "white",
        marginVertical: 10,
        borderWidth: 2,
        borderColor: "grey"
    },
    creditText: {
        flexDirection: 'row',
        padding: 10,
        backgroundColor: "#f5f0f4"
    },
    inputField: {
        flexDirection: "column",
        justifyContent: "space-between",
        textAlign: "center",
        width: "90%",
    },
    inputContainer: {
        color: "#0DA0D5",
        padding: 6,
        backgroundColor: "white",
        borderColor: "grey",
        marginBottom: 10,
        borderWidth: 1,
        borderRadius: 7
    },

    inputText: {
        padding: 2,
        color: "#0DA0D5",
        fontSize: 18,
    },
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

});

export default GiftScreen;