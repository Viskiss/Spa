import styles from "./Shop.module.css";
import { Loader } from "./Components/Loader";
import { Product } from "./Components/Product";
import { useContext } from "react";
import { ShopContext } from "./Context/contextShop";

function Shop() {
  const {
    loading,
    products,
    filterProduct,
    dispatchFilterProducts,
  } = useContext(ShopContext);

  const filteredProducts = products.filter((product) => {
    if (filterProduct === "ALL") {
      return true;
    }

    if (filterProduct === "ELECTRONICS" &&product.category === "electronics") {
      return true;
    }

    if (filterProduct === "JEWELERY" && product.category === "jewelery") {
      return true;
    }

    if (filterProduct === "MENS_CLOTHING" && product.category === "men's clothing") {
      return true;
    }

    if (filterProduct === "WOMENS_CLOTHING" && product.category === "women's clothing") {
      return true;
    }
    return false;
  });

  const handleShowAllProducts = () => {
    dispatchFilterProducts({ type: "SHOW_ALL" });
  };

  const handleShowElectronics = () => {
    dispatchFilterProducts({ type: "SHOW_ELECTRONICS" });
  };

  const handleShowJewelery = () => {
    dispatchFilterProducts({ type: "SHOW_JEWELERY" });
  };

  const handleShowMensClothing = () => {
    dispatchFilterProducts({ type: "SHOW_MENS_CLOTHING" });
  };

  const handleShowWomensClothing = () => {
    dispatchFilterProducts({ type: "SHOW_WOMENS_CLOTHING" });
  };

  return (
    <div className={styles.body}>
      <div className={styles.container}>
        <div>{loading && <Loader />}</div>
        <div>
          <button onClick={handleShowAllProducts}>All</button>
          <button onClick={handleShowElectronics}>Electronics</button>
          <button onClick={handleShowJewelery}>Jewelery</button>
          <button onClick={handleShowMensClothing}>Men's clothing</button>
          <button onClick={handleShowWomensClothing}>Women's clothing</button>
        </div>
        {filteredProducts.map((product) => (
          <Product product={product} key={product.id} />
        ))}
      </div>
    </div>
  );
}

export default Shop;
