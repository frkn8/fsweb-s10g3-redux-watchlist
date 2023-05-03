import { movies } from "./movies";
import {
  ADD_FAVORITES,
  REMOVE_FAV,
  SONRAKI_FILM,
  ONCEKI_FILM,
} from "./actions";

const initialState = {
  movies: movies,
  favorites: [],
  sira: 0,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FAVORITES:
      const addToFavMo = action.payload;
      const newMovieList = state.movies.filter((m) => m.id !== addToFavMo.id);

      return {
        ...state,
        favorites: [...state.favorites, addToFavMo],
        movies: newMovieList,
        sira: state.sira === newMovieList.length ? state.sira - 1 : state.sira,
      };
    case REMOVE_FAV:
      const removeToFavMoID = action.payload;
      const newFavList = state.favorites.filter(
        (f) => f.id !== removeToFavMoID
      );
      const favToMovies = state.favorites.find((f) => f.id === removeToFavMoID);

      const movieListAdd = [...state.movies, favToMovies];
      return {
        ...state,
        favorites: newFavList,
        movies: movieListAdd,
      };
    case SONRAKI_FILM:
      return {
        ...state,
        sira: state.sira + 1,
      };
    case ONCEKI_FILM:
      return {
        ...state,
        sira: state.sira - 1,
      };
    default:
      return state;
  }
};

export default reducer;