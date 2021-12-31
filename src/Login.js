import React from 'react';
import { Button, View, Text, StyleSheet, TouchableOpacity , ScrollView, Image } from 'react-native';
import { TextInput as MaterialTextInput } from 'react-native-paper';
import Styles from "./Style"




const Login = () => {

    const [text, setText] = React.useState("");
    const [advalidation, setadvalidation] = React.useState(true)

    const checkAddress = (e, type) => {
        let rjx = /^^[a-zA-Z]+$/
        if (type == "address") {
            if (rjx.test(e)) {
                setadvalidation(true)
            }
            else {
                setadvalidation(false)

            }
        }
    }

    return (


        <ScrollView style={{ flex: 1 }}>
            <View>

            </View>
            <View  >
                <Text style={{ alignSelf: "center", fontWeight: "bold", marginTop: 40, marginBottom: 20, fontSize: 20, color: "#2D333A" }}>Hello!</Text>
            </View>
            <MaterialTextInput
            theme={{colors: {primary: '#640000', underlineColor: 'transparent'}}}


                label="Enter Your Mail"
                mode='outlined'


                value={text}
                style={Styles.textinputColor}  activeUnderlineColor='#640000' maxLength={15} placeholder='Enter Your Email' secureTextEntry={true}
                onChangeText={text => setText(text)}
            />
            <MaterialTextInput

             theme={{colors: {primary: '#640000', underlineColor: 'transparent'}}}
                label="Password"
                mode='outlined'
                activeUnderlineColor='#640000'
                value={text}
                style={Styles.textinputColor} maxLength={15} placeholder='Enter Your password' secureTextEntry={true}
                onChangeText={text => setText(text)}
            />
            {/* <TextInput style={Styles.textinputColor} maxLength={15} placeholder='Enter Your Email' secureTextEntry={true} />
            <TextInput style={[Styles.textinputColor, !advalidation ? Styles.error : null]} placeholder='Enter Your Password' onChangeText={(e) => { checkAddress(e, "address") }} /> */}
            <TouchableOpacity><Text style={{ marginLeft: 16, color: "#640000", fontWeight: "bold", fontSize: 18, marginTop: 10, }}>Forget Password?</Text></TouchableOpacity>


            <View style={{ flex: 1, flexDirection: "row", alignItems: "center", marginHorizontal: 140, marginVertical: 10, }}>





            </View>

            <TouchableOpacity style={Styles.ContinueDesign}  >

                <Text style={{ alignSelf: "center", marginTop: 15, marginBottom: 10, fontSize: 20, color: "white" }} >Continue</Text>

            </TouchableOpacity>
            <View style={{ marginLeft:22 }}>

                <Text style={{  marginTop: 20, marginBottom: 20, fontSize: 20, color: "#2D333A" }} >Already have an account? <TouchableOpacity><Text style={{ color: "#640000", fontWeight: "bold", fontSize: 18 }}>Sign up</Text></TouchableOpacity></Text>
            </View>

            <View style={{ flex: 1, flexDirection: "row", alignItems: "center", marginLeft:8 }}>
                <View style={{ flex: 1, borderWidth: 1, height: 0, borderColor: " solid #C2C8D0", marginLeft: 15, marginRight: 15 }}></View>
                <Text style={{ alignSelf: "center", }}>Or</Text>
                <View style={{ flex: 1, borderWidth: 1, height: 0, borderColor: " #C2C8D0", marginLeft: 15, marginRight: 15 }}></View>
            </View>

            <View style={Styles.Container}>

                <TouchableOpacity style={Styles.mainCardView}><Image style={Styles.buttonImageIconStyle} source={require("../assets/6.png")} />

                    <Text style={{ alignItems: "center", paddingRight: 100, }}   > Continue With Google</Text>
                </TouchableOpacity>
                <TouchableOpacity style={Styles.mainCardView}>
                    <Image style={Styles.buttonImageIconStyle} source={require("../assets/5.png")} />
                    <Text style={{ alignItems: "center", paddingRight: 100, }}  >Continue With Facebok</Text>
                </TouchableOpacity>

            </View>




        </ScrollView>
    )

}




export default Login;
