import { Products } from "./components/Products"
import { products as initialProducts } from './mocks/products.json'
import { Header } from "./components/Header.jsx"
import { Footer } from "./components/Footer"
import { useFilters } from "./hooks/useFilters"
import { IS_DEVELOPMENT } from "./config"
import { Cart } from "./components/Cart"
import './components/Cart.css'
import { CartProvider } from "./context/Cart"

function App() {
  const { filterProducts } = useFilters()

  const filteredProducts = filterProducts(initialProducts)

  return (
    <CartProvider>
    <Header />
    <Cart />
    <Products products={filteredProducts}/>
    {IS_DEVELOPMENT && <Footer />}
    
    </CartProvider>
  )
}

export default App
