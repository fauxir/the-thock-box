function Footer() {

    interface Footer{
        name: string,
        items: string[]
    }

  const footerLinks: Footer[] = [
    {
      name: "Menu",
      items: ["Home", "Blog", "Shop"],
    },
    { 
        name: "Customer Service", 
        items: ["Warranity", "Delivery", "Returns"] 
    }];

  return (
    <div className="h-40 bg-amber-950 flex flex-row justify-around items-center">
      <div>
        <h1 className="max-w-lg text-2xl font-semibold">The thock box</h1>
      </div>
      <div className="flex flex-row justify-between items-start">
        <div className="w-40">
          <h1 className="max-w-lg text-lg font-semibold">Menu</h1>
          <ul>
            <li className="hover:cursor-pointer hover:underline w-fit">Home</li>
            <li className="hover:cursor-pointer hover:underline w-fit">Blog</li>
            <li className="hover:cursor-pointer hover:underline w-fit">Shop</li>
          </ul>
        </div>
        <div className="w-40">
          <h1 className="max-w-lg text-lg font-semibold">Customer service</h1>
          <ul>
            <li className="hover:cursor-pointer hover:underline w-fit">
              Warranity
            </li>
            <li className="hover:cursor-pointer hover:underline w-fit">
              Delivery
            </li>
            <li className="hover:cursor-pointer hover:underline w-fit">
              Returns
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
