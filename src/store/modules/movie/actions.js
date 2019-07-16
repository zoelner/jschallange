import * as Types from './types';

export function addMovieRequest(title) {
  return {
    type: Types.ADD_REQUEST,
    title,
  };
}

export function addMovieSuccess(movie) {
  return {
    type: Types.ADD_SUCCESS,
    movie,
  };
}

export function addMovieFinally(movie) {
  return {
    type: Types.ADD_FINALLY,
    movie,
  };
}

export function removeMovie(title) {
  return {
    type: Types.REMOVE,
    title,
  };
}
