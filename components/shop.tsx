import Image from "next/image";

interface Produts {}

function Shop(products: any) {
  return (
    <div>
      <div className="flex flex-row py-6 px-6 justify-around bg-orange-200">
        {products.products.map((product: any) => (
          <div key={product.id} className="w-fit flex flex-col bg-orange-100 px-4 py-4">
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
              className="w-fit font-semibold"
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
