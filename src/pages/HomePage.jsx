import { useEffect, useState } from "react";
import ProductsList from "../components/ProductsList";
import CategoryList from "../components/CategoryList";

const HomePage = () => {

    const [products, setProducts] = useState([])
    const [categoryList, setCategoryList] = useState([])
    const [category, setCategory] = useState('all')
    const [loading, setLoading] = useState(true)

    const handleFilterByCategory = (param) => {
        // console.log(param);
        setCategory(param)
    }

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                let url;

                if (category !== 'all') {
                    url = `https://fakestoreapi.com/products/category/${category}`
                } else {
                    url = 'https://fakestoreapi.com/products'
                }
                const response = await fetch(url)
                const results = await response.json()
                // console.log('results==>', results.length);
                setProducts(results)
            } catch (error) {
                console.log('Error Fetching All Products', error);
            } finally {
                setLoading(false)
            }
        }
        
        fetchProducts()
    }, [category])

    useEffect(() => {
        const fetchCategoryList = async () => {
            try {
                const response = await fetch('https://fakestoreapi.com/products/categories')
                const results = await response.json()
                // console.log(results);
                setCategoryList(results)
            } catch (error) {
                console.log(error);
            }
        }

        fetchCategoryList()
    }, [])


    // console.log(products);

    return (
        <div className="max-w-6xl mx-auto px-2 py-10">
            {/* Homepage */}
            {loading && (
                <div className="border min-h-[80vh] flex justify-center items-center">
                    <span className="loading loading-spinner loading-xl"></span>
                </div>
            )}

            <CategoryList categories={categoryList} category={category} handleFilterByCategory={handleFilterByCategory} />

            <div className="grid grid-cols-1 gap-10 mt-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {products.length > 0 && (
                    products.map(product => (
                        <ProductsList key={product.id} product={product} />
                    ))
                )}
            </div>
        </div>
    )
}

export default HomePage