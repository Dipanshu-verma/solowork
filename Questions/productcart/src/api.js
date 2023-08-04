import axios from "axios";
export const getProduct = (dispatch) => {
  dispatch({
    type: "LOADING",
  });
  setTimeout(() => {
    axios
      .get("http://localhost:3000/products")
      .then((res) => {
        dispatch({
          type: "SUCCESS",
          payload: res.data,
        });
      })
      .catch((err) => {
        console.log(err);

        dispatch({
          type: "FAIL",
          payload: err,
        });
      });
  }, 2000);
};

export const getCartItem = (dispatch) => {
  dispatch({
    type: "CART_LOADING",
  });
  axios
    .get("http://localhost:3000/cart")
    .then((res) => {
      dispatch({
        type: "CART_SUCCESS",
        payload: res.data,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

export const addCart = (product) => {
  axios.post("http://localhost:3000/cart", product).then(() => {
   
  }).catch((err) => {
    console.log(err);
  });
};

export const removeitem = (id, dispatch) => {
  axios.delete(`http://localhost:3000/cart/${id}`).then((res) => {
    getCartItem(dispatch);
  }).catch((err) => {
    console.log(err);
  });
};
