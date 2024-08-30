import { useCart } from '../hooks/useCart.js'
import './Products.css'
import { AddToCartIcon } from './Icons.jsx'

export function Products ({ products }) {
    const { AddToCart, cart } = useCart()


    return (
        <main className='products'>
            <ul>
                {products.slice(0, 10).map(product => (
                    <li key={product.id}>
                        <img 
                           src={product.thumbnail}
                           alt={product.title}
                        />
                        <div>
                            <strong>{product.title}</strong> - ${product.price}
                        </div>
                        <div>
                            <button onClick={() => AddToCart(product)}>
                                <AddToCartIcon />
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
        </main>
    )
}