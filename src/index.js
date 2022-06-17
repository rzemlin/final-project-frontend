import React from 'react'
import ReactDOM from 'react-dom'
import thunk from 'redux-thunk'
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import './index.css'
import rootReducer from './reducers/rootReducer'
import App from './App'

const composeEnhancer = window._REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer, composeEnhancer(applyMiddleware(thunk))
);

ReactDOM.render(
< Provider store={store}>
<React.StrictMode>
    <App />
  </React.StrictMode>
</Provider>,
document.getElementById('root')
  
);

