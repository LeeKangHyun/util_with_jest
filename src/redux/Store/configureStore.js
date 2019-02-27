import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import rootReducer from '@/redux/Reducers'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export default function configureStore() {
  const sagaMiddleware = createSagaMiddleware()
  return {
    ...createStore(
      rootReducer,
      composeEnhancers(applyMiddleware(sagaMiddleware)),
    ),
    runSaga: sagaMiddleware.run,
  }
}
