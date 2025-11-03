import { Link } from 'react-router';
import { TbPlus, TbMinus, TbX } from 'react-icons/tb';
import { IoTrashOutline } from "react-icons/io5";

const CartItem = ({ product, handleAddProduct, handleRemoveProduct, handleRemoveQuantity }) => {

    return (
        <div className='flex gap-5 items-center border py-3 px-5 rounded-md'>
            <div className='flex items-center'>
                <Link to={`/product/${product.id}`}>
                    <img src={product.image} width="70px" height="80px" alt={product.title} />
                </Link>
            </div>

            <div className='flex-1 py-2 px-5 space-y-2 md:px-0 md:flex md:items-center md:justify-between md:space-y-0'>
                <div className='md:w-xs'>{product.title}</div>
                <div className='flex justify-between items-center flex-wrap md:gap-5'>
                    <p className=''>{product.price}</p>
                    <div className='flex items-center gap-1'>
                        <button onClick={() => handleRemoveQuantity(product.id)} className='btn btn-ghost btn-xs'><TbMinus size={20} /> </button>
                        <span className='bg-base-300 px-1'>{product.quantity}</span> 
                        <button onClick={() => handleAddProduct(product)} className='btn btn-ghost btn-xs'><TbPlus size={20} /></button>
                    </div>
                    <button onClick={() => handleRemoveProduct(product.id)} className='text-red-500 btn btn-ghost btn-xs md:hidden'>
                        <IoTrashOutline size={20} />
                    </button>
                </div>
                <div>
                    <p>${(product.price * product.quantity).toFixed(2)}</p>
                </div>
                <button onClick={() => handleRemoveProduct(product.id)} className='text-red-500 btn btn-ghost btn-xs hidden md:inline'>
                    <IoTrashOutline size={20} />
                </button>
            </div>
        </div>
    )
}

export default CartItem