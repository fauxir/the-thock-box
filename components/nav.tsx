import Link from "next/link";

function NavBar() {
    return ( 
        <div  className="flex">
            <Link href='/' className="mr-3">
                <p>Home</p>
            </Link>
            <Link href='/shop' className="mr-3">
                <p>Shop</p>
            </Link>
            <Link href='/blog'className="mr-3">
                <p>Blog</p>
            </Link>
        </div>
     );
}

export default NavBar;