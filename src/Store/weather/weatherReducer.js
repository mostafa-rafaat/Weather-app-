import { weatherActions } from "./weatherActions";

export class weatherReducer {
  static INITIAL_STATE = {
    city:" ",
    weather:{}
  };

  static reduce = (state = weatherReducer.INITIAL_STATE, action) => {
    switch (action.type) {
      case weatherActions.SET_WEATHER_DATA: {
        return {
          ...state,
          weather:action.data
        };
      }

      case weatherActions.SET_CITY_NAME: {
        return {
          ...state,
          city:action.name
        };
      }

      default:
        return state;
    }
  };
  
}



