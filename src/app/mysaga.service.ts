import { Injectable } from '@angular/core';
import { put, takeEvery, all } from 'redux-saga/effects';
import { delay } from 'redux-saga';

@Injectable({
  providedIn: 'root'
})
export class MysagaService {

  constructor() {
    this.rootSaga = this.rootSaga.bind(this);
  }

  *incrementAsync() {
    yield delay(1000);
    yield put({ type: 'INCREMENT' });
  }

  *watchIncrementAsync() {
    yield takeEvery('INCREMENT_ASYNC',  this.incrementAsync);
  }

  *rootSaga() {
    yield   all([
      this.watchIncrementAsync()
    ]);
  }
}
