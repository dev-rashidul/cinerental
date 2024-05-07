import { useContext, useState } from "react";
import { toast } from "react-toastify";
import { MovieContext } from "../../../context/MovieContext/MovieContext";
import { getImgUrl } from "../../../utils/CineUtils/CineUtils";
import MovieDetailsModal from "../../MovieDetailsModal/MovieDetailsModal";
import Rating from "../Rating/Rating";

const MovieCard = ({ movie }) => {
  // Destructuring
  const { title, description, cover, genre, rating, price } = movie;

  // State for Modal
  const [showModal, setShowModal] = useState(false);

  // State for get the selected Movie
  const [selectedMovie, setSelectedMovie] = useState(null);

  // Function for Movie Selection
  function handleMovieSelection(movie) {
    setSelectedMovie(movie);
    setShowModal(true);
  }

  // Fuction for close the Modal
  function handleOnClose() {
    setSelectedMovie(null);
    setShowModal(false);
  }

  // Get the Cart Data Object
  const { state, dispatch } = useContext(MovieContext);

  // Function for handleAddToCart
  function handleAddToCart(e, movie) {
    e.stopPropagation();

    const found = state.cartData.find((item) => item.id === movie.id);

    if (!found) {
      dispatch({
        type: "add_to_cart",
        payload: {
          ...movie,
        },
      });
      toast.success(`Movie ${movie.title} Added to Cart successfuly!`);
    } else {
      toast.error(`${movie.title} is already exists in Cart`);
    }
  }

  return (
    <>
      {showModal && (
        <MovieDetailsModal
          movie={selectedMovie}
          onAddToCart={handleAddToCart}
          onClose={handleOnClose}
        />
      )}

      <figure className="p-4 border border-black/10 shadow-sm dark:border-white/10 rounded-xl">
        <a onClick={() => handleMovieSelection(movie)}>
          <img className="w-full object-cover" src={getImgUrl(cover)} alt="" />
          <figcaption className="pt-4">
            <h3 className="text-xl mb-1">{title}</h3>
            <p className="text-[#575A6E] text-sm mb-2">{genre}</p>
            <div className="flex items-center space-x-1 mb-5">
              <Rating value={rating}></Rating>
            </div>
            <button
              onClick={(e) => handleAddToCart(e, movie)}
              className="bg-primary rounded-lg py-2 px-5 flex items-center justify-center gap-2 text-[#171923] font-semibold text-sm"
            >
              <img src="./assets/tag.svg" alt="" />
              <span>${price} | Add to Cart</span>
            </button>
          </figcaption>
        </a>
      </figure>
    </>
  );
};

export default MovieCard;
