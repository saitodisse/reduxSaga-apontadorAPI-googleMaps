import { takeEvery } from 'redux-saga';
import { put, call } from 'redux-saga/effects';
import { delay } from 'redux-saga';
import axios from 'axios';

export function* incrementAsync() {
  yield put({type: 'SHOW_LOADING'});
  yield call(delay, 1000);
  yield put({type: 'INCREMENT'});
  yield put({type: 'HIDE_LOADING'});
}

function getMapLinkToken() {
  return axios({
    method: 'post',
    url: 'https://api.apontador.com.br/v2/oauth/token',
    headers: {'Content-Type': 'application/x-www-form-urlencoded'},
    params: {
      client_id: process.env.CLIENT_ID,
      client_secret: process.env.CLIENT_SECRET,
      grant_type: 'client_credentials',
    }
  });
}

export function* fetchToken() {
  yield put({type: 'FETCH_TOKEN_isRequesting'});
  const result = yield call(getMapLinkToken);
  yield put({type: 'FETCH_TOKEN_RESULT', data: result.data});
}

export default function* rootSaga() {
  yield [
    takeEvery('INCREMENT_ASYNC', incrementAsync),
    takeEvery('FETCH_TOKEN_ASYNC', fetchToken),
  ];
}
