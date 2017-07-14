import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import firebase from 'firebase';
import reducers from './reducers';
import Router from './Router';

class App extends Component {
    componentWillMount() {
        const config = {
            apiKey: 'AIzaSyD1hN_wPTnssuTlDFWrtRvOLxFhCfJ8Bm4',
            authDomain: 'mobilecontroll-d0f29.firebaseapp.com',
            databaseURL: 'https://mobilecontroll-d0f29.firebaseio.com',
            projectId: 'mobilecontroll-d0f29',
            storageBucket: 'mobilecontroll-d0f29.appspot.com',
            messagingSenderId: '947958631125'
        };

        firebase.initializeApp(config);
    }

    render() {
        const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
        return (
            <Provider store={store}>
                <Router />
            </Provider>

        );
    }
}

export default App;
