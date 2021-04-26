import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { store } from './redux-components/store'
import { App } from './app'

const mountNode = document.getElementById('mountNode')

ReactDOM.hydrate(
    <Provider store={store}>
        <App />
    </Provider>,
    mountNode
)
