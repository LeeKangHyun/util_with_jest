import { delay, takeEvery } from 'redux-saga/effects'
import { INCREMENT, DECREMENT } from '@/redux/Actions/Counter'

function* asyncFunction() {
  yield delay(1000)
}

export default function* watchFetchCounter() {
  yield takeEvery([INCREMENT, DECREMENT], asyncFunction)
}
