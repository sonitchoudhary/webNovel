import React from 'react'
import {
    SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, useCoorScheme, View, TouchableOpacity, Image} from "react-native"
    import Styles from "./Style"
    const Card = () =>{
        return(
            <View style = {Styles.Container}>
                <Text style={Styles.text}>Choose a Type</Text>
                <TouchableOpacity style ={Styles.mainCardView}><Text>Male Novel</Text>
                <Image style = {Styles.buttonImageIconStyle} source={require("../assets/2.png")}/>
                </TouchableOpacity>
                <TouchableOpacity style ={Styles.mainCardView}><Text>Female Novel</Text>
                <Image style = {Styles.buttonImageIconStyle} source={require("../assets/4.png")}/>

                </TouchableOpacity>

            </View>
        )
    }
    export default Card;

