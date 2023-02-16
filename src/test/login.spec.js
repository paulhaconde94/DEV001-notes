import App from '../App';
import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import { render, screen } from '@testing-library/react';

it ("login", ()=>{
    render(<BrowserRouter>
        <App/>
        </BrowserRouter>);
})