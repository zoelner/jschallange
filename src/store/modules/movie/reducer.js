import produce from 'immer';
import * as Types from './types';

export default function movie(state = [], action) {
  switch (action.type) {
    case Types.ADD_SUCCESS:
      return produce(state, draft => {
        const { movie } = action;
        draft.push(movie);
      });
    case Types.REMOVE:
      return produce(state, draft => {
        const movieIndex = draft.findIndex(m => m.title === action.title);

        if (movieIndex >= 0) {
          draft.splice(movieIndex, 1);
        }
      });

    default:
      return state;
  }
}
