import { all, fork } from 'redux-saga/effects';
import users from './responsables/sagas';

export default function* rootSaga() {
  yield all([
    fork(users),
  ]);
}
