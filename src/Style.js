import { StyleSheet } from "react-native";

export default Styles = StyleSheet.create({
    text: {
        color:"black",
        marginLeft: 5,
        fontWeight:"bold",
        fontSize: 20,
        marginTop:100,
        padding:20,

    },
    mainCardView: {
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "white",
        borderRadius: 2,
        shadowOffset: {width: 0, height: 0}, 
        shadowOpacity: 1,
        shadowRadius: 2,
        elevation: 8,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: 16,
        paddingRight: 14,
        marginTop: 10,
        marginBottom: 6,
        marginLeft: 16,
        marginRight: 16,
      },
      Container: {
          backgroundColor:"white",
          marginTop:.5,
      },
      buttonImageIconStyle: {
        paddingTop: 4,
        paddingBottom:2,
        margin: 2,
        height: 40,
        width: 40,
        marginBottom:10,
        resizeMode: 'stretch',
        backgroundColor:"#FFFFFF",
       
        
      },
      textinputColor: {
        borderColor: "grey",
        margin: 8,
        marginHorizontal: 15,
        borderRadius: 8,
  
  
      },
      ContinueDesign: {
        // elevation: 8,
        // backgroundColor: "#640000",
        // alignSelf: "center",
        // width: "90%",
        // height:"8%",
        // borderRadius:2,
        elevation: 8,
        backgroundColor: "#640000",
        borderRadius: 2,
        alignSelf: "center",
        width: "90%",
        height: "10%",
        marginVertical: 10,
        marginLeft:2,
  
      },
      error: {
        borderWidth: 3,
        borderColor: "#640000"
      },

})