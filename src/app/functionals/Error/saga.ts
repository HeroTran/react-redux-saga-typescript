import { takeEvery } from 'redux-saga/effects'

function bubbleErrors(error) {
  if (process.env.NODE_ENV === 'development') {
    console.error(error)
  }

  throw error;
}

export default function* root() {
  yield takeEvery('ERROR', bubbleErrors)
}