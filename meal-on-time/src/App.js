import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Menu from './components/Menu/Menu';
import Orders from './components/Orders';
import Pricing from './components/Pricing';

function App() {
    return (
        <>
            <Header name="Meal On Time" />

            <Routes>
                <Route path='/' element={<Menu />} />
                <Route path='/pricing' element={<Pricing />} />
                <Route path='/orders' element={<Orders />} />
            </Routes>
        </>
    );
}

export default App;
