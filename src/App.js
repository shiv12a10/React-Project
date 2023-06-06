import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Navigation from './components/Navigation';
import ProductsPage from './pages/ProductsPage';
import Cart from './pages/Cart';
import SingleProduct from './pages/SingleProduct';

const App = () => {
    return (
        <BrowserRouter>
        <Navigation />
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/products/single-product' Component={SingleProduct} />
                <Route path='/products' Component={ProductsPage}></Route>
                <Route path='/cart' Component={Cart}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App;