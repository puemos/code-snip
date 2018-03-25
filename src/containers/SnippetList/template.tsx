import * as React from 'react';
import { connect } from 'react-redux';
import { RootState } from '../../store/rootReducer';
import { ISnippet } from '../../modules/snippets/reducer';
import { ITag } from '../../modules/tags/reducer';

interface SnippetListProps {
    snippets: ReadonlyArray<ISnippet>;
    tags: ReadonlyArray<ITag>;
}

interface SnippetListState {}

export default class SnippetList extends React.Component<SnippetListProps, SnippetListState> {
    private renderTagsList(): JSX.Element {
        const { tags } = this.props;
        return <div>{tags.map(item => <div>{item.name}</div>)}</div>;
    }
    private renderSnippetsList(): JSX.Element {
        const { snippets } = this.props;
        return <div>{snippets.map(item => <div>{item.name}</div>)}</div>;
    }
    public render(): JSX.Element {
        return (
            <div>
                {this.renderSnippetsList()}
                {this.renderTagsList()}
            </div>
        );
    }
}
