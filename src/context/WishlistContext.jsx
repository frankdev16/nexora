import {
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react'

const WishlistContext = createContext(null)

export function WishlistProvider({ children }) {
  const [wishlistItems, setWishlistItems] = useState(() => {
    try {
      const savedWishlist = localStorage.getItem('nexora-wishlist')
      return savedWishlist ? JSON.parse(savedWishlist) : []
    } catch {
      return []
    }
  })

  useEffect(() => {
    localStorage.setItem(
      'nexora-wishlist',
      JSON.stringify(wishlistItems),
    )
  }, [wishlistItems])

  function toggleWishlist(product) {
    setWishlistItems((currentItems) => {
      const alreadySaved = currentItems.some(
        (item) => item.id === product.id,
      )

      return alreadySaved
        ? currentItems.filter((item) => item.id !== product.id)
        : [...currentItems, product]
    })
  }

  function isInWishlist(productId) {
    return wishlistItems.some((item) => item.id === productId)
  }

  function removeFromWishlist(productId) {
    setWishlistItems((currentItems) =>
      currentItems.filter((item) => item.id !== productId),
    )
  }

  return (
    <WishlistContext.Provider
      value={{
        wishlistItems,
        toggleWishlist,
        isInWishlist,
        removeFromWishlist,
      }}
    >
      {children}
    </WishlistContext.Provider>
  )
}

export function useWishlist() {
  const context = useContext(WishlistContext)

  if (!context) {
    throw new Error('useWishlist must be used inside WishlistProvider')
  }

  return context
}