import { Products } from "./compontents/Products"
import { products as initialProducts } from './mocks/products.json'
import { Header } from "./compontents/header"
import { Footer } from "./compontents/Footer"
import { useFilters } from "./hooks/useFilters"
import { IS_DEVELOPMENT } from "./config"


function App() {
  const { filterProducts } = useFilters()

  const filteredProducts = filterProducts(initialProducts)

  return (
    <>
    <Header />
    <Products products={filteredProducts}/>
    {IS_DEVELOPMENT && <Footer />}
    
    </>
  )
}

export default App
