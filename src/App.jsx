import { Route, Routes } from "react-router";
import HomePage from "./pages/HomePage"
import CartPage from "./pages/CartPage"
import Navbar from "./components/Navbar";
import ProductPage from "./pages/ProductPage";
import { CartProvider } from "./contexts/CartContext";
import ScrollToTop from "./components/ScrollToTop";


const App = () => {
    return (
        <div>
            <CartProvider>
                <ScrollToTop />
                <Navbar />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/cart" element={<CartPage />} />
                    <Route path="/product/:id" element={<ProductPage />} />
                </Routes>
            </CartProvider>
        </div>
    )
}

export default App