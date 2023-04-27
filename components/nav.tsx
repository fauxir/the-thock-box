import Link from "next/link";

function NavBar() {
    return ( 
        <div  className="flex justify-around pb-6 pt-6 bg-amber-700">
            <Link href='/' className="mr-3 max-w-lg text-xl font-semibold leading-loose text-gray-200 hover:text-white">
                <p>Home</p>
            </Link>
            <Link href='/shop' className="mr-3 max-w-lg text-xl font-semibold leading-loose text-gray-200 hover:text-white">
                <p>Shop</p>
            </Link>
            <Link href='/blog'className="mr-3 max-w-lg text-xl font-semibold leading-loose text-gray-200 hover:text-white">
                <p>Blog</p>
            </Link>
        </div>
     );
}

export default NavBar;