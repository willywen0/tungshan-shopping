import { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router';
import { useCart } from '../contexts/CartContext';
import { MdArrowOutward } from "react-icons/md";


const ProductPage = () => {

    const { id } = useParams();
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(true);
    const { addToCart, isInCart } = useCart();
    const navigate = useNavigate()

    const handleAddToCart = (product) => {
        addToCart(product);
    };

    const handleBuyNow = (product) => {
        addToCart(product)
        navigate('/cart')
    }

    const inCart = isInCart(product.id);

    useEffect(() => {
        // console.log('running');
        const fetchProduct = async () => {
            try {
                const response = await fetch(`https://fakestoreapi.com/products/${id}`);
                const results = await response.json();
                // console.log('results==>', typeof results);
                setProduct(results);
            } catch (error) {
                console.log('Error Fetching A Product', error);
            } finally {
                setLoading(false);
            }
        };

        fetchProduct();
    }, []);

    // console.log('id==>', id);
    // console.log('product==>',typeof product, product);
    // console.log(product.id);


    return (
        <div className='max-w-6xl mx-auto px-2'>
            {/* ProductPage */}
            {loading && (
                <div className="border min-h-[80vh] flex justify-center items-center">
                    <span className="loading loading-spinner loading-xl"></span>
                </div>
            )}

            {!loading && product.id && (
                <div className='flex flex-col md:flex-row items-center md:min-h-[65vh] shadow-xl rounded-xl overflow-hidden'>
                    <div className='md:flex-1 grid place-content-center p-10 '>
                        <img
                            className='md:h-[400px] object-contain'
                            src={product.image}
                            alt={product.title}
                        />
                    </div>
                    <div className='md:flex-1 bg-base-300 h-full p-10 space-y-4'>
                        <p>{product.category.toUpperCase()}</p>
                        <h2 className="text-2xl font-bold tracking-wide">{product.title}</h2>
                        <p className='flex gap-2 items-center'>
                            <span>*</span>
                            <span>{product.rating.rate}/5</span>
                            <span>{product.rating.count}</span>
                            <span>review</span>
                        </p>
                        <p className='text-sm text-justify'>{product.description}</p>
                        <div>
                            <p className='font-bold text-xl'>${product.price.toFixed(2)}</p>
                        </div>
                        <div className="card-actions">
                            {inCart ? (
                                <Link to={'/cart'}>
                                    <button className="btn btn-glass uppercase">購物車<MdArrowOutward /></button>
                                </Link>
                            ) : (
                                <button onClick={() => handleAddToCart(product)} className="btn btn-glass">加入購物車</button>
                            )}

                            <button onClick={() => handleBuyNow(product)} className="btn btn-neutral">直接購買</button>
                        </div>
                    </div>
                </div>
            )}

        </div>
    );
};

export default ProductPage;


{/* <div className="card lg:card-side bg-base-100 shadow-lg overflow-hidden">
                    <figure className="p-5 h-[500px] sm:w-1/2">
                        <img
                            className='object-contain'
                            src={product.image}
                            alt="Album" 
                        />
                    </figure>
                    <div className="card-body bg-base-300 p-10 sm:w-1/2">
                        <p>{product.category.toUpperCase()}</p>
                        <h2 className="card-title font-bold tracking-wide">{product.title}</h2>
                        <p className='flex gap-2 items-center'><span>*</span> <span>{product.rating.rate}/5</span> <span>{product.rating.count}</span>  <span>review</span></p>
                        <p>{product.description}</p>
                        <p className='font-bold text-xl'>${product.price.toFixed(2)}</p>
                        <div className="card-actions">
                            <button className="btn ">ADD TO CART</button>
                            <button className="btn btn-neutral">BUY NOW</button>
                        </div>
                    </div>
                </div> */}