import { createContext, useContext, useEffect, useState } from 'react';
import { useAuth } from '../AuthContext';
import { db } from '../config/firebase';
import {
  doc,
  getDoc,
  setDoc,
  onSnapshot
} from 'firebase/firestore';

const WishlistContext = createContext();
export const useWishlist = () => useContext(WishlistContext);

export const WishlistProvider = ({ children }) => {
  const { user } = useAuth();      // <-- must contain uid or email
  const [wishlist, setWishlist] = useState([]);

  /* 📡 Realtime listener */
  useEffect(() => {
    if (!user) { setWishlist([]); return; }

    const ref = doc(db, 'wishlists', user.uid || user.email);
    const unsub = onSnapshot(ref, snap => {
      setWishlist(snap.exists() ? snap.data().items || [] : []);
    });
    return unsub;
  }, [user]);

  /* ❤️ Toggle item */
  const toggleWishlist = async movie => {
    if (!user) return;
    const ref    = doc(db, 'wishlists', user.uid || user.email);
    const snap   = await getDoc(ref);
    const items  = snap.exists() ? snap.data().items : [];
    const exists = items.some(m => m.imdbID === movie.imdbID);
    const next   = exists ? items.filter(m => m.imdbID !== movie.imdbID)
                          : [...items, movie];
    await setDoc(ref, { items: next }, { merge: true });
  };

  const isLiked = id => wishlist.some(m => m.imdbID === id);

  return (
    <WishlistContext.Provider value={{ wishlist, toggleWishlist, isLiked }}>
      {children}
    </WishlistContext.Provider>
  );
};
