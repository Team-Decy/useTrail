import Layout from '~~/components/trail/components/Layout';
import SEO from '~~/components/trail/components/SEO'
import '~~/styles/globals.css'

function MyApp({ Component, pageProps }) {

  return (
    <Layout>
      <SEO 
        title={process.env.siteTitle}
      />
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
