import { createContext, useContext, useEffect, useState } from 'react';
import { useAuth } from '../AuthContext';

const WishlistContext = createContext();
export const useWishlist = () => useContext(WishlistContext);

export const WishlistProvider = ({ children }) => {
  const { user } = useAuth();
  const [wishlist, setWishlist] = useState([]);

  // load for current user
  useEffect(() => {
    if (user) {
      setWishlist(JSON.parse(localStorage.getItem(`wishlist_${user.id||user.email}`)) || []);
    } else {
      setWishlist([]);
    }
  }, [user]);

  // persist
  useEffect(() => {
    if (user) {
      localStorage.setItem(`wishlist_${user.id||user.email}`, JSON.stringify(wishlist));
    }
  }, [wishlist, user]);

  const toggleWishlist = movie =>
    setWishlist(prev =>
      prev.some(m => m.imdbID === movie.imdbID)
        ? prev.filter(m => m.imdbID !== movie.imdbID)
        : [...prev, movie],
    );

  const isLiked = id => wishlist.some(m => m.imdbID === id);

  return (
    <WishlistContext.Provider value={{ wishlist, toggleWishlist, isLiked }}>
      {children}
    </WishlistContext.Provider>
  );
};
