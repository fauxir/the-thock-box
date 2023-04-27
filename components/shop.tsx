import Image from "next/image";

interface Produts {}

function Shop(products: any) {
  console.log("the products are :", products);
  return (
    <div>
      <div className="flex flex-row my-6 mx-6 justify-around">
        {products.products.map((product: any) => (
          <div key={product.id} className="w-fit flex flex-col">
            <Image
              className="w-60 "
              src={product.images[0].src}
              alt={product.title}
              width={240}
              height={240}
            />
            <h2 className="w-fit my-6 font-semibold" aria-label={product.title}>
              {product.title}
            </h2>
            <p className="w-60 mb-6" aria-label="product description">
              {product.description}
            </p>
            <p
              className="w-fit"
              aria-label={"price:" + product.variants[0].price.amount}
            >
              ${product.variants[0].price.amount}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Shop;
