// definimos INITIAL STATE con  dos propiedades con las que vamos a estar trabajando. El array de los posts es lo principal y sobre el que vamos a ir trabajando. De la mano de actions lo vamos actualizando.

const INITIAL_STATE = {
  posts: [],
  loading: false,
};

export const postsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "LOADING":
      return { ...state, loading: true };
    case "GET_POSTS":
      return { ...state, loading: false, posts: [...action.contenido] };
    case "SEND_POST":
      return {
        ...state,
        loading: false,
        posts: [...state.posts, action.contenido],
      };
    case "DELETE_POST":
      return {
        ...state,
        loading: false,
        posts: state.posts.filter((post) => post.id !== action.contenido),
      };
    default:
      return state;
  }
};
