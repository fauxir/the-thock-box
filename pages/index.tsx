import AlternatingContent from '@/components/altCont'
import Blog from '@/components/blog'
import Footer from '@/components/footer'
import Hero from '@/components/hero'
import NavBar from '@/components/nav'
import Shop from '@/components/shop'

export default function Home() {
  return (
    <div>
      <NavBar/>
      <Hero/>
      <Shop/>
      <AlternatingContent/>
      <Blog/>
      <Footer/>
    </div>
  )
}
