import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter, { history } from './routers/AppRouter';
import { firebase, googleAuthProvider } from './firebase/firebase';
import { login, logout } from './actions/auth'
import { startGetData } from './actions/userData'
import { Provider } from 'react-redux'
import store from './store/configureStore'
import Loader from './components/LoadingPage'
import 'normalize.css/normalize.css';  
import './styles/styles.scss';

//Provide the store to all components. Components can now connect to access store state or dispatch.

const jsx = (
    <Provider store={store} >
        <AppRouter />
    </Provider>
)

//So the app only renders once.

let hasRendered = false;
const renderApp = () => {
  if (!hasRendered) {
    ReactDOM.render(jsx, document.getElementById('app'));
    hasRendered = true;
  }
};

ReactDOM.render(<Loader />, document.getElementById('app'));


//When the auth state changes, if user exists then you have logged in. Dispatch the user id to the store. We will use this uid information to determine if logged in or not when rendering certain private content.
//When you log in, get the data from firebase and dispatch it to the state. Access this state in components using mapStateToProps.

firebase.auth().onAuthStateChanged((user) => {
    if(user) {
        store.dispatch(login(user.uid))
        store.dispatch(startGetData()).then(() => {
        renderApp()
        console.log('Auth state: Logged in')
        if (history.location.pathname === '/') {
            history.push('/about');
          }
        })
    }
    else {
        store.dispatch(logout())
        renderApp()
        console.log('Auth state: Logged out')
        history.push('/')
    }
})


