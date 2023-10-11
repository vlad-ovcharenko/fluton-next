import '@/styles/index.css'
import type {AppProps} from 'next/app'
import Link from 'next/link'

export default function App({Component, pageProps}: AppProps) {
  return (
    <>
      <header className="header">
        <section className="header__line">
          <div className="gb-page-container">
            <span>FREE SHIPPING OVER $60</span>
            <span>SHOP NOW</span>
          </div>
        </section>
        <div className="header__content gb-page-container">
          <div className="header__container">
            <button className="header__burger">
              <img src="/icons/burger.svg" alt="" />
            </button>
            <Link href="/">
              <img className="header__logo" src="/logo.svg" alt="FLUTON" />
            </Link>
            <nav className="header__nav">
              <Link href="/shop">
                <span>Shop</span>
                <img src="/icons/arrow.svg" alt="" />
              </Link>
              <Link href="/about">
                <span>About</span>
                <img src="/icons/arrow.svg" alt="" />
              </Link>
              <Link href="/learn">
                <span>Learn</span>
                <img src="/icons/arrow.svg" alt="" />
              </Link>
            </nav>
            <button className="header__quiz gb-hover">take your quiz</button>
            <button className="header__cart">
              <img src="/icons/cart.svg" alt="cart" />
            </button>
          </div>
        </div>
      </header>
      <Component {...pageProps} />
      <footer className="footer gb-page-container">
        <div className="footer__item">
          <div>
            <img src="/images/values/fingerprint.png" alt="" />
          </div>
          <p>
            Custom molding <br />
            technology
          </p>
        </div>
        <div className="footer__item">
          <div>
            <img src="/images/values/cloud.png" alt="" />
          </div>
          <p>
            Supreme <br />
            comfort
          </p>
        </div>
        <div className="footer__item">
          <div>
            <img src="/images/values/doctor.png" alt="" />
          </div>
          <p>
            Designed by <br />
            doctors
          </p>
        </div>
        <div className="footer__item">
          <div>
            <img src="/images/values/earth.png" alt="" />
          </div>
          <p>
            Certified carbon <br />
            negative
          </p>
        </div>
      </footer>
    </>
  )
}
