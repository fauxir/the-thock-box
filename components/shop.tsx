import Image from "next/image";

function Shop(products: any) {
  console.log("the products are :", products);
  return (
    <div>
      <p>Shop</p>
      {/* <Image
        src={products.products[0].images[0].src}
        alt="product image"
        width={400}
        height={400}
      /> */}
      <div>
    {products.products.map(product => (
      <div key={product.id}>
        <h2>{product.title}</h2>
        <img src={product.images[0].src} alt={product.title} />
        <p>{product.description}</p>
        <p>${product.variants[0].price.amount}</p>
      </div>
    ))}
  </div>
    </div>
  );
}

export default Shop;
