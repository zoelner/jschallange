import { call, select, put, all, takeLatest } from 'redux-saga/effects';
import * as Types from './types';
import { toast } from 'react-toastify';
import api from '../../../services/api';
import { addMovieSuccess, addMovieFinally } from './actions';

function* addMovie({ title }) {
  const movieExists = yield select(state =>
    state.movie.data.find(m => m.Title === title)
  );

  if (movieExists) {
    toast.info('Você já possui este filme em sua lista!');
  } else {
    try {
      const response = yield call(api.get, `?apikey=eebcf44c&t=${title}`);
      if (response.data.Error) {
        toast.warning('Filme não encontrado!');
      } else {
        yield put(addMovieSuccess(response.data));
      }
    } catch (e) {
      toast.error('Oopps... Alguma coisa deu errado.');
    }
  }
  yield put(addMovieFinally());
}

export default all([takeLatest(Types.ADD_REQUEST, addMovie)]);
