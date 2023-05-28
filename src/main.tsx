import React from 'react'
import ReactDOM from 'react-dom/client'
import './sass/main.scss'
import { Provider } from 'react-redux'
import RoutesApp from './layout/Routes'
import setupStore from './store/store'
import ErrorBoundary from './component/ErrorBoundaries/ErrorBoundaries'
import Notification from './component/Notification/Notification'
import Modal from './component/Modal/Modal'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <ErrorBoundary>
            <Provider store={setupStore()}>
                <Notification />
                <Modal />
                <RoutesApp />
            </Provider>
        </ErrorBoundary>
    </React.StrictMode>
)
