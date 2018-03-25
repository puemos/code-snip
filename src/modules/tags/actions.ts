import { createAction, ActionUnion } from '../../utils/createAction';

export const GET_ALL_TAGS = 'GET_ALL_TAGS';
export const SELECT_TAG = 'GET_TAG_BY_ID';

export const Actions = {
    getAllTags: () => createAction(GET_ALL_TAGS),
    selectTag: (id: number) => createAction(SELECT_TAG, { id })
};

export type Actions = ActionUnion<typeof Actions>;
