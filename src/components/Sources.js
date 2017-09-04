import React from 'react';
import {SourceItem}from './SourceItem';

export const Sources = (props) => {

    const sources = props.sources,
        isFetching = props.isFetching,
        toggleVisibility = props.onClick,
        {disabledSources} = props;

    if (isFetching) {
        return (
            <div>
                Loading...
            </div>
        )
    }

    return (
        <div className="sources">
            <ul className="sources__list">
                {
                    sources.map(source => (
                        <SourceItem key={source.id} {...source} onClick={toggleVisibility}
                                    disabledSources={disabledSources}/>
                    ))}
            </ul>
        </div>
    )
}