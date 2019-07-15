import { call, select, put, all, takeLatest } from 'redux-saga/effects';
import * as Types from './types';
import { addToMovieSuccess } from './actions';

function* addMovie({ title }) {
  const movieExists = yield select(state =>
    state.movie.find(m => m.title === title)
  );

  if (movieExists) return;

  try {
    const response = yield call(api.get, `?apikey=eebcf44c&t=${title}`);
    yield put(addToMovieSuccess(response.data));
  } catch (error) {
    console.tron('Ocorreu um erro ao buscar um novo filme');
  }
}

export default all([takeLatest(Types.ADD_REQUEST, addMovie)]);
