import { Reducer } from 'redux';
import * as fromActions from './actions';

export interface ISnippet {
    id: number;
    name: string;
    tags: ReadonlyArray<number>;
}

export interface State {
    items: ReadonlyArray<ISnippet>;
    selectedItem?: number;
}

const initialState: State = {
    items: [
        {
            id: 1,
            name: 'wow 1',
            tags: [1, 2, 3]
        },
        {
            id: 2,
            name: 'wow 2',
            tags: [2]
        },
        {
            id: 3,
            name: 'wow 3',
            tags: [3, 4]
        },
        {
            id: 4,
            name: 'wow 4',
            tags: [2, 3, 4]
        },
        {
            id: 5,
            name: 'wow 5',
            tags: [5, 4]
        },
        {
            id: 6,
            name: 'wow 6',
            tags: [1, 2]
        },
        {
            id: 7,
            name: 'wow 7',
            tags: [7]
        }
    ]
};

export const reducer = (state: State = initialState, action: fromActions.Actions): State => {
    switch (action.type) {
        default: {
            return state;
        }
    }
};
