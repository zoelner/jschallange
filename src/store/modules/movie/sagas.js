import { call, select, put, all, takeLatest } from 'redux-saga/effects';
import * as Types from './types';
import { toast } from 'react-toastify';
import api from '../../../services/api';
import { addMovieSuccess, addMovieFailed } from './actions';

function* addMovie({ title }) {
  const movieExists = yield select(state =>
    state.movie.data.find(m => m.title === title)
  );

  if (movieExists) return;
  try {
    const response = yield call(api.get, `?apikey=eebcf44c&t=${title}`);
    if (response.data.Error) {
      toast.warning('Filme não encontrado!');
      return;
    }

    yield put(addMovieSuccess(response.data));
  } catch (e) {
    toast.error('Oopps... Alguma coisa deu errado.');
  } finally {
    yield put(addMovieFailed());
  }
}

export default all([takeLatest(Types.ADD_REQUEST, addMovie)]);
