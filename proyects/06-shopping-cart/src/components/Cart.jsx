import { useId } from 'react'
import { ClearCartIcon, CartIcon } from './Icons.jsx'

export function Cart () {
    const cartCheckBoxId = useId()
    return (
        <>
        <label className='cart-button' htmlFor={cartCheckBoxId}>
            <CartIcon />
            <input id={cartCheckBoxId} type='checkbox' hidden />

            <aside className='cart'>
                <ul>
                    <li>
                        <img
                          src='https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/thumbnail.png'
                          alt='Iphone'
                        />
                        <div>
                            <strong>Iphone</strong> - $1499
                        </div>

                        <footer>
                            <small>
                                Qty: 1
                            </small>
                            <button></button>
                        </footer>
                    </li>
                </ul>

                <button>
                    <ClearCartIcon />
                </button>
            </aside>
        </label>
        </>
    )
}