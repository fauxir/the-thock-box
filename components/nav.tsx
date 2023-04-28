import Link from "next/link";

const navLinks: string[] = ["Home", "Shop", "Blog"];

function NavBar() {
  return (
    <div className="flex justify-around pb-6 pt-6 bg-amber-700">
      {navLinks.map((link, index) => (
        <Link
          key={index}
          href="/"
          className="mr-3 max-w-lg text-xl font-semibold leading-loose text-gray-200 hover:text-white"
        >
          <p>{link}</p>
        </Link>
      ))}
    </div>
  );
}

export default NavBar;
