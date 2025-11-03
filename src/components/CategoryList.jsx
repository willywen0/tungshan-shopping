import { capitalizeFirstLetter } from "../lib/utils"

const CategoryList = ({ categories, category, handleFilterByCategory }) => {

    // const categories = ["electronics", "jewelery", "men's clothing", "women's clothing"]


    // console.log('category==>', category);

    return (
        <div className='flex gap-5'>
            <span>分類:</span>
            <div className='space-x-3'>
                <button  onClick={() => handleFilterByCategory('all')} className={`btn  btn-sm ${category === 'all' ? 'btn-primary' : 'btn-outline'}`}>All</button>
                {categories.map((item, index)=> (
                    <button onClick={() => handleFilterByCategory(item)} className={`btn  btn-sm ${item === category ? 'btn-primary' : 'btn-outline'}`} key={index}>{capitalizeFirstLetter(item)}</button>
                ))}
            </div>
        </div>
    )
}

export default CategoryList