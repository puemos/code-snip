import { Reducer, combineReducers } from 'redux';
import * as snippets from '../modules/snippets/reducer';
import * as tags from '../modules/tags/reducer';

export interface RootState {
    snippets: snippets.State;
    tags: tags.State;
}

export const rootReducer = combineReducers<RootState | undefined>({
    snippets: snippets.reducer,
    tags: tags.reducer
});
