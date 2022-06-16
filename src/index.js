import React from 'react'
import ReactDOM from 'react-dom'
import thunk from 'react-thunk'
import { configureStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { composewithDevTools } from 'redux-devTools-extension'
import './index.css'
import App from './App'

const store = configureStore(
  rootReducer, composewithDevTools(applyMiddleware(thunk))
)

ReactDOM.render(
< Provider store={store}>
<React.StrictMode>
    <App />
  </React.StrictMode>
</Provider>,
document.getElementById('root')
  
);

