import axios from "axios";

export const getVideogames = () => async (dispatch) => {
  try {
    let res = await axios("http://localhost:3001/videogames");
    dispatch({
      type: "GET_VIDEOGAMES",
      payload: res.data,
    });
  } catch (e) {
    console.log(e);
  }
};

export const getGenres = () => async (dispatch) => {
  try {
    let res = await axios("http://localhost:3001/genres");
    dispatch({
      type: "GET_GENRES",
      payload: res.data,
    });
  } catch (e) {
    console.log(e);
  }
};

export const createVideogame = (payload) => async () => {
  let res = await axios.post("http://localhost:3001/videogames", payload);
  return {
    type: "CREATE_VIDEOGAME",
    res,
  };
};

export const getDetail = (id) => async (dispatch) => {
  try {
    let res = await axios("http://localhost:3001/videogame/" + id);
    dispatch({
      type: "GET_DETAIL",
      payload: res.data,
    });
  } catch (e) {
    console.log(e);
  }
};

export const searchName = (name) => async (dispatch) => {
  try {
    let res = await axios(`http://localhost:3001/videogames/?name=${name}`);
    dispatch({
      type: "SEARCH_NAME",
      payload: res.data,
    });
  } catch (e) {
    console.log(e);
  }
};
export const dbFilter = (payload) => {
  return {
    type: "DB_FILTER",
    payload,
  };
};

export const ratingFilter = (payload) => {
  return {
    type: "RATING_FILTER",
    payload,
  };
};

export const nameFilter = (payload) => {
  return {
    type: "NAME_FILTER",
    payload,
  };
};

export const genreFilter = (payload) => {
  return {
    type: "GENRE_FILTER",
    payload,
  };
};

export const clearDetail = () =>{
  return{
    type: "CLEAR_DETAIL"
  }
};