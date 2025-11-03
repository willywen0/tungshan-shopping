import { Link } from "react-router"
import { AiOutlineSearch } from "react-icons/ai";
import { BsCart3 } from "react-icons/bs";
import { useCart } from "../contexts/CartContext";

const Navbar = () => {

    const { cartItems } = useCart()

    return (
        <nav className="navbar bg-base-100 shadow-sm max-w-6xl mx-auto">
            <div className="flex-1">
                <Link to={'/'} className="btn btn-ghost text-xl">
                    東山購物
                    
                </Link>
            </div>

            {/* <div className="input w-1/5">
                <AiOutlineSearch size={25} />
                <input type="search" required placeholder="Search" />
            </div> */}

            <div className="flex-none">
                <ul className="menu menu-horizontal px-1">
                    <li>
                        <Link to={'/'} className="btn btn-ghost">首頁</Link>
                    </li>
                    <li>
                        <Link to={'/cart'} className="btn btn-ghost px- 4 relative">
                            <BsCart3 size={25}/>
                            <span className="absolute top-0 right-0 bg-rose-200 rounded-full px-1 text-xs">{cartItems.length}</span>
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar