import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';
import { useWishlist } from './WishlistContext';

const MovieCard = ({ movie }) => {
  const { toggleWishlist, isLiked } = useWishlist();
  const liked = isLiked(movie.imdbID);

  return (
    <motion.div
      initial="rest"
      whileHover="hover"
      animate="rest"
      className="relative w-[310px] h-[460px] m-6 rounded-xl overflow-hidden shadow-lg"
    >
      
      <motion.img
        src={movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/400'}
        alt={movie.Title}
        variants={{
          rest: { opacity: 1 },
          hover: { opacity: 0.3 },
        }}
        transition={{ duration: 0.4 }}
        className="w-full h-full object-cover"
      />

      {/* Wishlist Heart */}
      <motion.button
        onClick={() => toggleWishlist(movie)}
        whileHover={{ scale: 1.2 }}
        transition={{ type: 'spring', stiffness: 300 }}
        className="absolute top-3 right-3 z-20"
      >
        <Heart
          className={`w-7 h-7 transition-colors duration-300 ${
            liked ? 'fill-red-500 text-red-500' : 'text-white'
          }`}
        />
      </motion.button>

    
      <motion.div
        variants={{
          rest: { opacity: 0, y: -10 },
          hover: { opacity: 1, y: 0 },
        }}
        transition={{ duration: 0.3 }}
        className="absolute top-3 left-3 z-10 bg-cardBg text-accent text-xs px-2 py-1 rounded-md shadow-md"
      >
        {movie.Year}
      </motion.div>

    
      <motion.div
        variants={{
          rest: { opacity: 0, y: 40 },
          hover: { opacity: 1, y: 0 },
        }}
        transition={{ duration: 0.4 }}
        className="absolute bottom-0 left-0 right-0 bg-cardBg bg-opacity-90 p-4"
      >
        <span className="uppercase text-xs tracking-widest text-yellow-400">
          {movie.Type}
        </span>
        <h3 className="text-accent font-roboto mt-1">{movie.Title}</h3>
      </motion.div>
    </motion.div>
  );
};

export default MovieCard;
