import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { composeWithDevTools } from 'redux-devtools-extension'

import rootReducer from '@/redux/Reducers'

export default function configureStore() {
  const sagaMiddleware = createSagaMiddleware()
  return {
    ...createStore(
      rootReducer,
      composeWithDevTools(applyMiddleware(sagaMiddleware)),
    ),
    runSaga: sagaMiddleware.run,
  }
}
