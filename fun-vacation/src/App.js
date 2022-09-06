import { Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Offers from './components/Offers';
import Order from './components/Order';

function App() {
    return (
        <>
            <Header />

            <Routes>
                <Route path='/' element={<Offers />} />
                <Route path='/order' element={<Order />} />
            </Routes>
        </>
    );
}

export default App;
