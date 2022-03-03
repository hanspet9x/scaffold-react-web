import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import Provider from './context/Provider';

const Wrapper = ({children}) => {
    return (
        <Provider>
            <App>
                {children}
            </App>
        </Provider>
    );
};

const nRender = (ui, options) => {
    return render(ui, {wrapper: Wrapper, ...options})
}
export * from '@testing-library/react';
export {nRender as render};