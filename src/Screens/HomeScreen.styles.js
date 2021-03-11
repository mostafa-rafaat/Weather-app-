import {StyleSheet , Dimensions} from 'react-native'

const styles=StyleSheet.create({
    container : {

        flex:1 ,
        width:"100%",
        height:Dimensions.get('window').height


    },
    textInputContainer :{
        backgroundColor:`#f5f5dc`,
        alignSelf:'center',
        alignItems:"center",
        paddingHorizontal:10,
        borderRadius:10,
        width:"80%",
        flexDirection : "row",
        justifyContent : 'space-between',
        margin : 15
        


    },
    textInput :{
        height: 40,
        width:"80%",
        fontWeight:'600'

    },
    locationContainer :{
        margin : 15 ,
        alignSelf : 'center',
        justifyContent : 'space-between',
        width : '80%'
    


    },
    location :{
        color : `#ffebcd`,
        fontWeight:"500",
        fontSize : 50,
        textAlign : "center",
       textShadowColor : "rgba(0,0,0,0.55)",
       textShadowOffset : {width:-1 , height : 1},
       textShadowRadius : 5

    },
    weatherContainer :{

        alignItems : "center"
    },
    temp :{
        
        color : `#ffebcd`,
        fontWeight:"800",
        fontSize : 100,
        backgroundColor:'rgba(255,255,255,0.2)',
        paddingVertical : 20,
        paddingHorizontal : 30 ,
        borderRadius : 30,
        overflow : "hidden",
        marginTop : 15 ,
         textShadowColor : "rgba(0,0,0,0.75)",
        textShadowOffset : {width:-3 , height : 3},
        textShadowRadius : 5


    },
    weather : {

        color : `#ffebcd`,
        fontWeight:"700",
        fontSize : 50,
        textShadowColor : "rgba(0,0,0,0.60)",
        textShadowOffset : {width:-2 , height : 2},
        textShadowRadius : 3,
        marginTop : 5,

        
    }

   
    });
  
    export default styles