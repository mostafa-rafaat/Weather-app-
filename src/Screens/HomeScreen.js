import React ,{useState,useEffect}from 'react'
import { View, Text , ImageBackground ,TextInput,Button} from 'react-native'
import styles from './HomeScreen.styles'
import One from '../../assets/5.jpg'
import Two from '../../assets/3.jpg'
import Three from '../../assets/6.jpg'
import axios from 'axios'
import { weatherActions } from '../Store/weather/weatherActions'
import { useDispatch, useSelector } from 'react-redux'

const images = [ One , Two , Three ]


const HomeScreen = () => {

    const [city, setcity] = useState(" ");
    const {weather}=useSelector((state) => state.weatherReducer)
    const [randomImage, setrandomImage] = useState(images[0])
    const dispatch = useDispatch()


     useEffect(()=>{
            ImagRandoum()

      },[weather])

    const ImagRandoum =()=>{
        const n = Math.floor(Math.random()* images.length)
        console.log('n',n)

        setrandomImage(images[n])

    }

    const handlEnter = async ()=>{

        if(!city.trim())return   
        try {
             
            dispatch(weatherActions.getWeatherData({city:city}))
          

            // ImagRandoum()

        } catch (error) {
        
            alert('تأكد من اسم مدينتك ');  

        }
        
      
      }


 


    return (

        <ImageBackground  source = {randomImage} style={styles.container}>
                <View style={styles.textInputContainer}>  
                    <TextInput style={styles.textInput}
                    value = {city}
                    placeholder="اكتب اسم مدينتك "
                    onChangeText={(text)=>setcity(text)}
                    
                    />
                    <Button
                   onPress={handlEnter}
                   title="GO"
                />

               </View>
                       {Object.keys(weather).length > 0 ?  <>
                 <View style={styles.locationContainer}>
                       <Text style={styles.location}>
                        {weather.countryName} , {weather.countryCode}
                        </Text>
                  </View>
                  <View style={styles.weatherContainer}>
                         <Text style={styles.temp}>
                          {weather.temp} °C
                          </Text>
                             <Text style={styles.weather}> {weather.statue} </Text>
                      </View>
                   </>

                   : null}
     
        </ImageBackground>

    )
}

export default HomeScreen
