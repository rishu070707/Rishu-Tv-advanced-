import { useWishlist } from './WishlistContext';
import MovieCard from './MovieCard';
import Navbar from '../components/Navbar';

const WishlistPage = () => {
  const { wishlist } = useWishlist();

  return (
    <div className="min-h-screen w-full bg-black">
      <Navbar />
      
      <div className="flex flex-col items-center py-10 px-4">
        <h1 className="text-4xl sm:text-5xl font-bold   text-yellow-500 mb-8">
          My Watch List
        </h1>

        {wishlist.length ? (
          <div className="flex flex-wrap justify-center mt-10">
            {wishlist.map(movie => (
              <MovieCard key={movie.imdbID} movie={movie} />
            ))}
          </div>
        ) : (
          <div className="mt-10 text-accent font-raleway text-lg">
            Your wishlist is empty. Start adding some movies!
          </div>
        )}
      </div>
    </div>
  );
};

export default WishlistPage;
