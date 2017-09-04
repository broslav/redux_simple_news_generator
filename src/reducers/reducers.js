import {combineReducers} from 'redux';
import {
    FETCHING_ARTICLES_REQUEST,
    FETCHING_ARTICLES_SUCCESS,
    CHANGE_ARTICLES_FILTER,
    ArticlesFilter,
    CHANGE_SOURCES_FILTER,
    FETCHING_SOURCES_REQUEST,
    FETCHING_SOURCES_SUCCESS,
} from '../actions';

const {SHOW_ALL} = ArticlesFilter;

const news = (state = {
    isFetching: false,
    items: []
}, action) => {
    switch (action.type) {
        case FETCHING_ARTICLES_REQUEST:
            return {...state, isFetching: true};

        case FETCHING_ARTICLES_SUCCESS:
            return {
                ...state,
                isFetching: false,
                items: action.articles
            };

        default:
            return state;
    }
};

const articlesFilter = (state = SHOW_ALL, action) => {
    switch (action.type) {
        case CHANGE_ARTICLES_FILTER:
            return action.filter;
        default:
            return state;
    }
};


// ##############                SOURCES stuff


const sources = (state = {
    isFetching: false,
    items: []
}, action) => {
    switch (action.type) {
        case FETCHING_SOURCES_REQUEST:
            return {...state, isFetching: true};

        case FETCHING_SOURCES_SUCCESS:
            return {
                ...state,
                items: action.sources,
                isFetching: false
            };

        default:
            return state;
    }
};

const sourcesFilter = (state = [], action) => {
        switch (action.type) {
            case CHANGE_SOURCES_FILTER:
                if (state.indexOf(action.id) === -1) {
                    return [...state, action.id];
                } else {
                    return [
                        ...state.slice(0, state.indexOf(action.id)),
                        ...state.slice(state.indexOf(action.id) + 1)
                    ];

                }
            default:
                return state;

        }
    }
;


export const rootReducer = combineReducers({
    news,
    articlesFilter,
    sources,
    sourcesFilter
});
