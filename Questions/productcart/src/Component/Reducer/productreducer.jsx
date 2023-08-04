export function productReducer(state, action) {
    const { type, payload } = action;

    switch (type) {
      case "LOADING":
        return {
          ...state,
          loading: true,
        };
      case "SUCCESS":
        return {
          ...state,
          loading: false,
          data: payload,
        };
      case "FAIL":
        return {
          ...state,
          loading: false,
          error: payload,
        };
        default: return state;
    }
  }
