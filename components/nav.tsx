import Link from "next/link";

function NavBar() {
    return ( 
        <div  className="flex justify-around mb-10 mt-5">
            <Link href='/' className="mr-3 max-w-lg text-xl font-semibold leading-loose text-gray-900 dark:text-white">
                <p>Home</p>
            </Link>
            <Link href='/shop' className="mr-3 max-w-lg text-xl font-semibold leading-loose text-gray-900 dark:text-white">
                <p>Shop</p>
            </Link>
            <Link href='/blog'className="mr-3 max-w-lg text-xl font-semibold leading-loose text-gray-900 dark:text-white">
                <p>Blog</p>
            </Link>
        </div>
     );
}

export default NavBar;