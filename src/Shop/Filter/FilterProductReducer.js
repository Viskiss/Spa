export const initialProducts = {
  filtered: [],
};

const filterProductReducer = (state = initialProducts.filtered, action) => {

  switch (action.type) {
    case "SHOW_ALL":
      return "ALL";
    case "SHOW_ELECTRONICS":
      return "ELECTRONICS";
    case "SHOW_JEWELERY":
      return "JEWELERY";
    case "SHOW_MENS_CLOTHING":
      return "MENS_CLOTHING";
    case "SHOW_WOMENS_CLOTHING":
      return "WOMENS_CLOTHING";

    default:
      throw new Error();
  }
};

export default filterProductReducer;
