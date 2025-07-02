// src/components/TopBar.jsx
import { AiOutlineGoogle, AiOutlineLogout } from 'react-icons/ai';
import { useAuth } from '../AuthContext';

export default function TopBar() {
  const { user, login, logout } = useAuth();

  return (
    <header className="h-16 w-full bg-[#1b1d1f] flex items-center justify-between
                       px-6 shadow-md sticky top-0 z-40">
      <h1 className="text-2xl font-extrabold text-[#f9d3b4] select-none">
        RishuTV
      </h1>

      {user ? (
        <button
          onClick={logout}
          className="flex items-center gap-2 text-sm hover:opacity-80 transition"
        >
          <img
            src={user.photoURL}
            alt={user.displayName}
            className="w-8 h-8 rounded-full"
          />
          <span className="hidden sm:inline">Sign out</span>
          <AiOutlineLogout className="sm:hidden text-lg" />
        </button>
      ) : (
        <button
          onClick={login}
          className="flex items-center gap-2 text-sm text-white hover:opacity-80 transition"
        >
          <AiOutlineGoogle className="text-lg" />
          <span className="hidden sm:inline">Sign in</span>
        </button>
      )}
    </header>
  );
}
