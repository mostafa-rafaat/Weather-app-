import { all, takeLatest, takeEvery } from 'redux-saga/effects'
import { weatherActions } from './weather/weatherActions'
import { getWeatherDataSaga } from './weather/weatherSaga'

function* rootSaga() {
  yield all([
    takeLatest(
   weatherActions.GET_WEATHER_DATA,
   getWeatherDataSaga
      ),
  ])
}

export default rootSaga
