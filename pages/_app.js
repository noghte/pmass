// import '../styles/globals.css'
import '../styles/index.scss'
import Header from '../components/Header'
import Footer from '../components/Footer'

function MyApp({ Component, pageProps }) {
  return (
    <div className="antialiased font-sans bg-gray-200">
    <Header />
      <Component {...pageProps} />
    <Footer />
    </div>
  )
}

export default MyApp
