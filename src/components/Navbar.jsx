import { Link, useNavigate } from 'react-router-dom';
import { Film, Heart, LogOut } from 'lucide-react';
import { useAuth } from '../AuthContext';
import { useWishlist } from '../pages/WishlistContext';

const Navbar = () => {
  const { user, logout } = useAuth();
  const { wishlist } = useWishlist();
  const navigate = useNavigate();

  return (
    <nav className="w-full flex items-center justify-between px-6 py-4 bg-[#1f2123] shadow-md">
      <Link to="/movies" className="flex items-center gap-2">
        <Film className="w-6 h-6" />
        <span className="text-2xl font-bold bg-gradient-to-r from-accent to-transparent bg-clip-text text-transparent">
          RishuTV
        </span>
      </Link>

      <div className="flex items-center gap-6">
        <Link to="/wishlist" className="relative">
          <Heart
            className={`w-7 h-7 transition-colors ${
              wishlist?.length ? 'fill-red-500 text-red-500' : 'text-gray-300'
            }`}
          />
          {wishlist?.length > 0 && (
            <span className="absolute -top-2 -right-3 w-5 h-5 text-xs flex items-center justify-center bg-red-600 rounded-full">
              {wishlist.length}
            </span>
          )}
        </Link>

        {user && (
          <button
            onClick={() => {
              logout();
              navigate('/');
            }}
            className="flex items-center gap-1 text-red-500 hover:text-accent transition-colors"
          >
            <LogOut className="w-5 h-5" />
            <span className="hidden sm:inline ">Logout</span>
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;