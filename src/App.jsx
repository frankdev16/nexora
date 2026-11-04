import { Routes, Route } from 'react-router-dom'

import AnnouncementBar from './components/layout/AnnouncementBar'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import WhatsAppButton from './components/common/WhatsAppButton'

import HomePage from './pages/HomePage'
import ShopPage from './pages/ShopPage'
import CategoryPage from './pages/CategoryPage'
import ProductPage from './pages/ProductPage'
import CartPage from './pages/CartPage'
import WishlistPage from './pages/WishlistPage'
import CheckoutPage from './pages/CheckoutPage'
import OrderSuccessPage from './pages/OrderSuccessPage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import FAQPage from './pages/FAQPage'
import AccountPage from './pages/AccountPage'
import PolicyPage from './pages/PolicyPage'
import NotFoundPage from './pages/NotFoundPage'

function App() {
  return (
    <>
      <AnnouncementBar />
      <Header />

      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/category/:slug" element={<CategoryPage />} />
          <Route path="/product/:slug" element={<ProductPage />} />

          <Route path="/wishlist" element={<WishlistPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/order-success" element={<OrderSuccessPage />} />

          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/account" element={<AccountPage />} />
          <Route path="/policies/:type" element={<PolicyPage />} />

          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>

      <WhatsAppButton />
      <Footer />
    </>
  )
}

export default App