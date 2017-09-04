import React from 'react';
import {NewsItem} from './NewsItem';

export const Main = (props) => {
    const articles = props.articles;
    const isFetching = props.articles.isFetching;

    if (isFetching) {
        return (
            <div>Loading...</div>
        )
    }

    return (
        <div className="content news">
            <ul className="news__list">
                {
                    articles.map(article => {
                        return <NewsItem key={article.id} {...article}/>
                    })}
            </ul>
        </div>
    )
};