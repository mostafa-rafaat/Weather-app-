import axios from 'axios';
import {call, put} from 'redux-saga/effects';
import { weatherActions } from './weatherActions';

const reformattingData =(weatherData)=>{
  const isDataExist=weatherData.list&&weatherData.list.length>0&&weatherData.list[0]
  if(isDataExist){
      const countryWeatherData={
          countryName:isDataExist.name,
          countryCode:isDataExist.sys.country,
          temp:convertKeToC(isDataExist.main.temp),
          statue:isDataExist.weather&&isDataExist.weather.length>0&&isDataExist.weather[0].main
        
      } 
      return countryWeatherData
          
  }
  else {
      alert('تأكد من اسم مدينتك ');  

  }


}

const convertKeToC=(fhtmp)=>{
  const ctmp=Math.round( fhtmp - 273.15 )
  return ctmp
}

export function* getWeatherDataSaga(action) {
  const resp = yield axios.get(`http://api.openweathermap.org/data/2.5/find?q=${action.params.city}&units=metric
            &appid=b8d2a2008c5e10c858e546686ace9ab7`)
  

  console.log('weatherData',resp)
  if (resp.status===200) {
    const reformattedData=reformattingData(resp.data)
    yield put(weatherActions.setWeatherData(reformattedData))

 
  } else {
    
  }
}
