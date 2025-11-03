import { capitalizeFirstLetter } from "../lib/utils"
import { AiOutlinePlus } from "react-icons/ai";
import { Link } from "react-router";
import { useCart } from "../contexts/CartContext";
import { MdArrowOutward } from "react-icons/md";

const ProductsList = ({ product }) => {

    const { addToCart, isInCart } = useCart()

    const handleAddProduct = (product) => {
        // console.log('clicked');
        addToCart(product)
    }

    const inCart = isInCart(product.id)
    // console.log(inCart);

    return (
        <div className="card bg-base-100 shadow-lg p-2">
            <Link to={`/product/${product.id}`} className="p-10 h-[350px]">
                <img 
                    className="object-contain w-full h-full"
                    src={product.image} 
                    alt={product.title} 
                />
            </Link>
            <div className="card-body bg-base-300 rounded-md">
                <h2 className=" card-title text-ellipsis overflow-hidden whitespace-nowrap w-full">{product.title}</h2>
                <p className="text-md text-slate-500">{capitalizeFirstLetter(product.category)}</p>
                <div className="card-actions justify-between items-center duration-300">
                    <span className="text-lg tracking-wide">${product.price}</span>
                    {inCart ? (
                        <Link to={'/cart'}>
                            <button className="btn btn-glass">購物車<MdArrowOutward /></button>
                        </Link>
                    ) : (
                        <button onClick={() => handleAddProduct(product)} className="btn btn-ghost btn-circle btn-md bg-white">
                            <AiOutlinePlus size={25} />
                        </button>
                    )}
                    
                </div>
            </div>
        </div>
    )
}

export default ProductsList


