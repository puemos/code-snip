import { createAction, ActionUnion } from '../../utils/createAction';

export const GET_ALL_SNIPPETS = 'GET_ALL_SNIPPETS';
export const GET_SNIPPET_BY_ID = 'GET_SNIPPET_BY_ID';

export const Actions = {
    getAllSnippets: () => createAction(GET_ALL_SNIPPETS),
    getSnippetById: (id: number) => createAction(GET_SNIPPET_BY_ID, { id })
};

export type Actions = ActionUnion<typeof Actions>;
