import { Injectable } from '@angular/core';
import { createStore, Store, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { MysagaService } from './mysaga.service';
import { counter } from './redux/reducers';
import logger from 'redux-logger';

@Injectable({
  providedIn: 'root'
})
export class ReduxServiceService {
  store: Store;
  constructor(sagaService: MysagaService) {

    const sagaMiddleware = createSagaMiddleware();

    this.store = createStore(counter, applyMiddleware(sagaMiddleware, logger));
    sagaMiddleware.run(sagaService.rootSaga);
  }

  connect<T>(getState: (state) => T) {
    this.store.subscribe(() => {
      const state = this.store.getState();
      getState(state);
    });
  }
}
