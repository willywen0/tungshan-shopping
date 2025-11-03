import CartItem from "../components/CartItem"
import CartSummary from "../components/CartSummary";
import { useCart } from "../contexts/CartContext";
import { Link } from "react-router";

const CartPage = () => {

    const { cartItems, addToCart, removeFromCart, removeQuantity } = useCart()

    const handleAddProduct = (product) => {
        addToCart(product)
    }

    const handleRemoveProduct = (productId) => {
        removeFromCart(productId)
    }

    const handleRemoveQuantity = (productId) => {
        removeQuantity(productId)
    }

    return (
        <section>
            {/* CartPage */}
            <div className='cart-container max-w-6xl mx-auto px-2 py-10 '>
                <h2 className="text-xl mb-4">購物車</h2>
                <div className="cart-info lg:flex lg:gap-5">
                    {cartItems && cartItems.length > 0 ? (
                            <div className="cart-items space-y-5 lg:w-3/4">
                                {cartItems.map(item => (
                                    <CartItem 
                                        key={item.id} 
                                        product={item} 
                                        handleAddProduct={handleAddProduct} 
                                        handleRemoveProduct={handleRemoveProduct}
                                        handleRemoveQuantity={handleRemoveQuantity}
                                    />
                                ))}
                                <div className="text-end">
                                    <Link to={'/'}>
                                        <button className=" btn btn-glass btn-block lg:btn-wide">繼續購物</button>
                                    </Link>
                                </div>
                                
                            </div>
                        ) : (
                            <div className="flex justify-center lg:w-3/4 lg:items-center ">
                                <p className="text-xl p-10">購物車中沒有商品</p>
                            </div>
                        )
                    }
                    

                    <div className="cart-summary bg-slate-400 mt-5 rounded-md py-10 px-10 lg:px-5 lg:w-1/4 lg:mt-0">
                        <CartSummary cartItems={cartItems} />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CartPage