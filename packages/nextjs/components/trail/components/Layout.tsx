import { CartProvider } from '~~/components/trail/components/Layout';
import Nav from '~~/components/trail/components/Nav';
import Footer from '~~/components/trail/components/Footer';

function Layout({ children }:{children :any}) {
  
  return (
    <CartProvider>
      <div className="flex flex-col justify-between min-h-screen">
        <Nav />

        <main>
          {children}
        </main>

        <Footer />
      </div>
    </CartProvider>
  )
}

export default Layout
