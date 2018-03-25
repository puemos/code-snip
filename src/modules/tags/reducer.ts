import { Reducer } from 'redux';
import * as fromActions from './actions';

export interface ITag {
    id: number;
    name: string;
}

export interface State {
    items: ReadonlyArray<ITag>;
    selected: ReadonlySet<number>;
}

const initialState: State = {
    items: [
        {
            id: 1,
            name: 'tag 1'
        },
        {
            id: 2,
            name: 'tag 2'
        },
        {
            id: 3,
            name: 'tag 3'
        },
        {
            id: 4,
            name: 'tag 4'
        },
        {
            id: 5,
            name: 'tag 5'
        },
        {
            id: 6,
            name: 'tag 6'
        },
        {
            id: 7,
            name: 'tag 7'
        }
    ],
    selected: new Set()
};

export const reducer = (state: State = initialState, action: fromActions.Actions): State => {
    switch (action.type) {
        case fromActions.SELECT_TAG: {
            const { payload: { id } } = action;
            const selected = new Set(state.selected).add(id);
            return {
                ...state,
                selected
            };
        }
        default: {
            return state;
        }
    }
};
