import * as Types from './types';

export function addToMovieRequest(title) {
  return {
    type: Types.ADD_REQUEST,
    title,
  };
}

export function addToMovieSuccess(movie) {
  return {
    type: Types.ADD_SUCCESS,
    movie,
  };
}

export function removeMovie(title) {
  return {
    type: Types.REMOVE,
    title,
  };
}
