import {getArticles, getSources} from '../api/api';
//articles actions
export const FETCHING_ARTICLES_REQUEST = 'FETCHING_ARTICLES_REQUEST';
export const FETCHING_ARTICLES_SUCCESS = 'FETCHING_ARTICLES_SUCCESS';
export const CHANGE_ARTICLES_FILTER = 'CHANGE_ARTICLES_FILTER';
//sources actions
export const FETCHING_SOURCES_REQUEST = 'FETCHING_SOURCES_REQUEST';
export const FETCHING_SOURCES_SUCCESS = 'FETCHING_SOURCES_SUCCESS';
export const CHANGE_SOURCES_FILTER = 'CHANGE_SOURCES_FILTER';

export const fetchArticles = () => {
    return {
        type: FETCHING_ARTICLES_REQUEST
    }
};

export const fetchArticlesSuccess = (articles) => {
    return {
        type: FETCHING_ARTICLES_SUCCESS,
        articles
    }
};

export const receiveArticles = () => {
    return (dispatch) => {
        dispatch(fetchArticles());
        return (
            getArticles().then(data => {
                dispatch(fetchArticlesSuccess(data));
            })
        )
    }
};

export const ArticlesFilter = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_LIFE: 'SHOW_LIFE',
    SHOW_SOCIETY: 'SHOW_SOCIETY',
    SHOW_YELLOW: 'SHOW_YELLOW'
};



export const changeArticlesFilter = (filter) => {
    return {
        type: CHANGE_ARTICLES_FILTER,
        filter
    }
};


//SOURCES stuff



export const changeSourcesFilter = (id) => {
  return {
      type: CHANGE_SOURCES_FILTER,
      id
  }
};

export const fetchSources = () => {
    return {
        type: FETCHING_SOURCES_REQUEST
    }
};

export const fetchSourcesSuccess = (sources) => {
    return {
        type: FETCHING_SOURCES_SUCCESS,
        sources
    }
};

export const receiveSources = () => {
    return (dispatch) => {
        dispatch(fetchSources());
        return (
            getSources().then(data => {
                dispatch(fetchSourcesSuccess(data));
            })
        )
    }
};


export const sourceVisibilityToggle = (id) => {
    return {
        type: CHANGE_SOURCES_FILTER,
        id
    }
};