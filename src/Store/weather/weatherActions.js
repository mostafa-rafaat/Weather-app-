export class weatherActions {
    static GET_WEATHER_DATA = 'GET_WEATHER_DATA';
    static getWeatherData = (params) => {
      return {
        type: weatherActions.GET_WEATHER_DATA,
        params:params
      };
    };

    static SET_WEATHER_DATA = 'SET_WEATHER_DATA';
    static setWeatherData = (data) => {
      return {
        type: weatherActions.SET_WEATHER_DATA,
        data:data
      };
    };


    static SET_CITY_NAME = 'SET_CITY_NAME';
    static setCityName = (name) => {
      return {
        type: weatherActions.SET_CITY_NAME,
        name:name
      };
    }; 
  }


