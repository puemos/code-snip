import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';

const snippetsSelector = (state: RootState) => state.snippets.items;
const tagsSelector = (state: RootState) => state.tags.items;
const selectedTagsSelector = (state: RootState) => state.tags.selected;

const snippetsByTagSelector = createSelector(
    snippetsSelector,
    selectedTagsSelector,
    (snippets, selectedTags) => snippets
);

import template from './template';
import { RootState } from '../../store/rootReducer';
import { Actions } from '../../modules/snippets/actions';

const mapStateToProps = (state: RootState) => ({
    snippets: snippetsSelector(state),
    tags: tagsSelector(state)
});

const mapDispatchToProps = (dispatch: Dispatch<Actions>) => bindActionCreators({}, dispatch);

export const SnippetList = connect(mapStateToProps, mapDispatchToProps)(template);
