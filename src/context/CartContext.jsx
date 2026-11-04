import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react'

const CartContext = createContext(null)

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState(() => {
    try {
      const savedCart = localStorage.getItem('nexora-cart')
      return savedCart ? JSON.parse(savedCart) : []
    } catch {
      return []
    }
  })

  useEffect(() => {
    localStorage.setItem('nexora-cart', JSON.stringify(cartItems))
  }, [cartItems])

  function addToCart(product, quantity = 1) {
    setCartItems((currentItems) => {
      const existingItem = currentItems.find(
        (item) => item.id === product.id,
      )

      if (existingItem) {
        return currentItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item,
        )
      }

      return [...currentItems, { ...product, quantity }]
    })
  }

  function removeFromCart(productId) {
    setCartItems((currentItems) =>
      currentItems.filter((item) => item.id !== productId),
    )
  }

  function updateQuantity(productId, quantity) {
    if (quantity < 1) return

    setCartItems((currentItems) =>
      currentItems.map((item) =>
        item.id === productId ? { ...item, quantity } : item,
      ),
    )
  }

  function clearCart() {
    setCartItems([])
  }

  const cartCount = cartItems.reduce(
    (total, item) => total + item.quantity,
    0,
  )

  const cartTotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  )

  const value = useMemo(
    () => ({
      cartItems,
      cartCount,
      cartTotal,
      addToCart,
      removeFromCart,
      updateQuantity,
      clearCart,
    }),
    [cartItems, cartCount, cartTotal],
  )

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext)

  if (!context) {
    throw new Error('useCart must be used inside CartProvider')
  }

  return context
}