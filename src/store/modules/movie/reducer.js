import produce from 'immer';
import * as Types from './types';

const INITIAL_STATE = {
  data: [],
  loading: false,
};

export default function movie(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.ADD_REQUEST:
      return produce(state, draft => {
        draft.loading = true;
      });

    case Types.ADD_SUCCESS:
      return produce(state, draft => {
        const { movie } = action;
        draft.data.push(movie);
        draft.loading = false;
      });

    case Types.ADD_FAILED:
      return produce(state, draft => {
        draft.loading = false;
      });

    case Types.REMOVE:
      return produce(state, draft => {
        const movieIndex = draft.data.findIndex(m => m.Title === action.title);

        if (movieIndex >= 0) {
          draft.data.splice(movieIndex, 1);
        }
      });

    default:
      return state;
  }
}
