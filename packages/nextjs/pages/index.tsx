import StoreHeading from '~~/components/trail/components/StoreHeading'
import ProductListings from '~~/components/trail/components/ProductListings'
import { getAllProductsInCollection } from '~~/lib/shop'

function IndexPage({ products }) {

  return (
    <div className="mx-auto max-w-6xl">
      <StoreHeading />
      <ProductListings products={products} />      
    </div>
  )
}

export async function getStaticProps() {
  const products = await getAllProductsInCollection()

  return {
    props: {
      products
    },
  }
}

export default IndexPage;
