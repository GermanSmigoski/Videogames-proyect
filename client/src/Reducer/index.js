const intialState = {
  videogamesRender: [],
  videogamesFilter: [],
  videogamesAux: [],
  genres: [],
  genresCopy: [],
  detail: [],
};

const rootReducer = (state = intialState, action) => {
  switch (action.type) {
    case "GET_VIDEOGAMES":
      return {
        ...state,
        videogamesRender: action.payload,
        videogamesFilter: action.payload,
        videogamesAux: action.payload,
      };
    case "GET_GENRES":
      return {
        ...state,
        genres: action.payload,
        genresCopy: action.payload,
      };
    case "DB_FILTER":
      let allVideogames = state.videogamesFilter;
      let dbFilter =
        action.payload === "created"
          ? allVideogames.filter((el) => el.createdInDb)
          : allVideogames.filter((el) => !el.createdInDb);
      return {
        ...state,
        videogamesRender:
          action.payload === "All" ? state.videogamesRender : dbFilter,
      };
    case "NAME_FILTER":
      let nameFiltered;
      if (action.payload === "All") {
        nameFiltered = state.videogamesRender;
      }
      if (action.payload === "A-Z") {
        [...nameFiltered] = state.videogamesFilter.sort((a, b) =>
          a.name.localeCompare(b.name)
        );
      } else {
        [...nameFiltered] = state.videogamesFilter.sort((a, b) =>
          b.name.localeCompare(a.name)
        );
      }
      return {
        ...state,
        videogamesRender: [...nameFiltered],
      };
    case "GET_DETAIL":
      return {
        ...state,
        detail: action.payload,
      };
    case "SEARCH_NAME":
      return {
        ...state,
        videogamesRender: action.payload,
      };
    case "RATING_FILTER":
      let ratingFiltered;
      if (action.payload === "Default") {
        if (state.videogamesRender.length)
          ratingFiltered = [...state.videogamesRender];
        else ratingFiltered = [...state.videogamesRender];
      } else {
        ratingFiltered =
          action.payload === "Min"
            ? [...state.videogamesFilter].sort((a, b) => {
                if (a.rating > b.rating) return 1;
                if (b.rating > a.rating) return -1;
                return 0;
              })
            : [...state.videogamesFilter].sort((a, b) => {
                if (a.rating > b.rating) return -1;
                if (b.rating > a.rating) return 1;
                return 0;
              });
        return {
          ...state,
          videogamesRender: ratingFiltered,
        };
      }
    case "GENRE_FILTER":
      let allVideogames1 = state.videogamesFilter;
      let allFilter =
        action.payload === "All"
          ? allVideogames1
          : allVideogames1.filter((el) => el.genres?.includes(action.payload));
      return {
        ...state,
        videogamesRender: [...allFilter],
      };

    case "CLEAR_DETAIL":
      return {
        ...state,
        detail: [],
      };
    default:
      return {
        state,
      };
  }
};

export default rootReducer;
