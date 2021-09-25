/* eslint-disable no-console */
import {
  takeLatest,
  call,
  put,
} from 'redux-saga/effects';
import * as ACTION_TYPES from './types';
import service, { getResponsables, updateResponsableReq } from './services';
import {
  setSuccessResponsable, setLoadingState, setResponsableList, setSuccesUpdatedResponsable,
} from './actions';

export function* setResponsable({ payload }) {
  try {
    yield put(setLoadingState(true));
    const payloadResponsable = {
      nombreCompleto: payload,
    };
    const responsableReq = yield call(service, payloadResponsable);
    const { status: statusResponse } = responsableReq;
    if (statusResponse === 201) {
      yield put(setSuccessResponsable());
    }
  } catch (e) {
    yield console.log(e);
  } finally {
    yield put(setLoadingState(false));
  }
}

export function* getResponsable() {
  try {
    yield put(setLoadingState(true));
    const { data } = yield call(getResponsables);
    if (data) yield put(setResponsableList({ status: true, data }));
  } catch (e) {
    yield console.log(e);
  } finally {
    yield put(setLoadingState(false));
  }
}

export function* updateResponsable({ payload }) {
  try {
    yield put(setLoadingState(true));
    const { status } = yield call(updateResponsableReq, payload);
    if (status === 204) yield put(setSuccesUpdatedResponsable());
  } catch (e) {
    yield console.log(e);
  } finally {
    yield put(setLoadingState(false));
  }
}

export default function* rootSaga() {
  yield takeLatest(ACTION_TYPES.SET_RESPONSABLE,
    setResponsable);
  yield takeLatest(ACTION_TYPES.GET_RESPONSABLES,
    getResponsable);
  yield takeLatest(ACTION_TYPES.UPDATE_RESPONSABLE,
    updateResponsable);
}
