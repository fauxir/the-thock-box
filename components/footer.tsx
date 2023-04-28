function Footer() {
  interface Footer {
    title: string;
    links: string[];
  }

  const footerLinks: Footer[] = [
    {
      title: "Menu",
      links: ["Home", "Blog", "Shop"],
    },
    {
      title: "Customer Service",
      links: ["Warranity", "Delivery", "Returns"],
    },
  ];

  return (
    <div className="h-40 bg-amber-950 flex flex-row justify-around items-center">
      <div>
        <h1 className="max-w-lg text-2xl font-semibold">The thock box</h1>
      </div>
      <div className="flex flex-row justify-between items-start">
        <div className="flex flex-row">
          {footerLinks.map((section, index) => (
            <div key={index} className="w-40 flex flex-col">
              <h1 className="max-w-lg text-lg font-semibold">
                {section.title}
              </h1>
              <ul>
                {section.links.map((link, index) => (
                  <li
                    key={index}
                    className="hover:cursor-pointer hover:underline w-fit"
                  >
                    {link}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Footer;
