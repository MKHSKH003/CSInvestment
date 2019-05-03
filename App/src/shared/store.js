import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { logger } from 'redux-logger';
import rootReducer from '../root/reducer';
import rootSaga from '../root/saga';

export default function configureStore() {
    const sagaMiddleware = createSagaMiddleware();
   
    const store = createStore(
        rootReducer,
        applyMiddleware(sagaMiddleware, logger),
        );

    sagaMiddleware.run(rootSaga);

    return store;
}




