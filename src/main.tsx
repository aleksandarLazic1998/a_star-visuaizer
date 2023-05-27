import React from 'react'
import ReactDOM from 'react-dom/client'
import './sass/main.scss'
import { Provider } from 'react-redux'
import RoutesApp from './layout/Routes'
import store from './store/store'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <Provider store={store}>
            <RoutesApp />
        </Provider>
    </React.StrictMode>
)
