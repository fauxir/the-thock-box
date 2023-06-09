import AlternatingContent from '@/components/altCont'
import Blog from '@/components/blog'
import Footer from '@/components/footer'
import Hero from '@/components/hero'
import NavBar from '@/components/nav'
import Shop from '@/components/shop'
import { shopifyClient,  parseShopifyResponse} from '../lib/shopify'

export default function Home({products}: any) {
  return (
    <div>
      <NavBar/>
      <Hero/>
      <Shop products={products}/>
      <AlternatingContent/>
      <Blog/>
      <Footer/>
    </div>
  )
}

// Fetch all the Shopify products
export const getServerSideProps = async () => {
  const products = await shopifyClient.product.fetchAll();
  return {
   props: {
    products: parseShopifyResponse(products),
  },
 };
};