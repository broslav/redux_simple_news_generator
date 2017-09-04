import React, {Component} from 'react';
import './App.css';

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import {Provider} from 'react-redux';


import thunkMiddleware from 'redux-thunk'
import {createLogger} from 'redux-logger'
import {createStore, applyMiddleware} from 'redux'
import {rootReducer} from './reducers/reducers'


//components import
import {Sidebar} from './components/Sidebar';
import {Header} from './components/Header';


import {receiveArticles, receiveSources} from './actions';

import {VisibleArticlesList} from './containers/VisibleNews';

import {VisibleSourcesList} from './containers/VisibleSources';


const loggerMiddleware = createLogger();

const store = createStore(
    rootReducer,
    applyMiddleware(
        thunkMiddleware, // lets us dispatch() functions
        loggerMiddleware // neat middleware that logs actions
    )
);

store.dispatch(receiveArticles());
store.dispatch(receiveSources());

export class App extends Component {

    // constructor(props) {
    //     super(props);
    //     this.handleTopicChange = this.handleTopicChange.bind(this);
    // }


    handleTopicChange(topicName) {
        // this.setState({...this.state, topicFilter: topicName});
    }

    render() {
        return (
            <Provider store={store}>
                <Router>
                    <div className="main-wrapper">
                        <Header/>
                        <section className="main-section">
                            <Switch>
                                <Route path="/" render={(match) => {
                                    return (
                                        <Sidebar
                                            // topicList={this.state.topicList}
                                            //      setTopic={this.handleTopicChange}
                                            //      topicFilter={this.state.topicFilter}
                                                 {...match.location}
                                        />
                                    )
                                }}
                                />
                                <Route path="/sources" render={(match) => {
                                    return (
                                        <Sidebar
                                            // topicList={this.state.topicList}
                                            //      setTopic={this.handleTopicChange}
                                            //      topicFilter={this.state.topicFilter}
                                                 {...match.location}
                                        />
                                    )
                                }}
                                />
                            </Switch>
                            <div className="content-wrapper">
                                <Switch>
                                    <Route exact path="/" render={() => <VisibleArticlesList/>}/>
                                    <Route exact path="/sources" render={() => <VisibleSourcesList/>}/>
                                </Switch>
                            </div>
                        </section>
                    </div>
                </Router>
            </Provider>
        )
    }
}

