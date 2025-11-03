import { useContext, createContext, useState, useEffect } from "react";

const CartContext = createContext()

export const CartProvider = ({ children }) => {

    const [cartItems, setCartItems] = useState(
        JSON.parse(localStorage.getItem('cartItems')) || []
    )


    // Add item(whole product) to Cart
    const addToCart = (product) => {
        const existingItemIndex = cartItems.findIndex(item => item.id === product.id)

        product.quantity = product.quantity || 1

        if (existingItemIndex !== -1) {
            const updatedItems = [...cartItems]
            updatedItems[existingItemIndex].quantity += 1
            setCartItems(updatedItems)
        } else {
            setCartItems([...cartItems, product])
        }
    }

    // Remove item from cart
    const removeFromCart = (productId) => {
        setCartItems(cartItems.filter(item => item.id !== productId))
    }

    // Remove quantity
    const removeQuantity = (productId) => {
        const existingItemIndex = cartItems.findIndex(item => item.id === productId)

        if (existingItemIndex !== -1) {
            const updatedItems = [...cartItems]
            updatedItems[existingItemIndex].quantity -= 1
            
            if (updatedItems[existingItemIndex].quantity === 0) {
                removeFromCart(productId)
            } else {
                setCartItems(updatedItems)
            }
        }
    }

    const isInCart = (productId) => {
        return cartItems.some(product => product.id === productId)
    }

    // console.log('cartItems==>', cartItems);

    useEffect(() => {
        localStorage.setItem('cartItems', JSON.stringify(cartItems))
    }, [cartItems])

    const value = {
        cartItems,
        addToCart,
        removeFromCart,
        removeQuantity,
        isInCart
    }

    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    )
}

export const useCart = () => useContext(CartContext)