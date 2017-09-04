import {connect} from 'react-redux';
import {Main} from '../components/Main';

const filterArticlesBySources = (articles, sourcesFilter) => {
    return articles.filter(article => sourcesFilter.indexOf(article.publisher_id) === -1);
};

const getVisibleArticles = (articles, articlesFilter = 'SHOW_ALL') => {
    switch (articlesFilter) {
        case 'SHOW_ALL' :
            return articles;
        case 'SHOW_LIFE':
            return articles.filter((article) => article.topic_name === 'Жизнь');
        case 'SHOW_SOCIETY':
            return articles.filter((article) => article.topic_name === 'Общество');
        case 'SHOW_YELLOW':
            return articles.filter((article) => article.topic_name === 'Жёлтые');
    }
};

const mapStateToProps = state => {
    return {
        articles: getVisibleArticles(filterArticlesBySources(state.news.items, state.sourcesFilter), state.articlesFilter),
        isFetching: state.news.isFetching
    }
};


export const VisibleArticlesList = connect(
    mapStateToProps
)(Main);