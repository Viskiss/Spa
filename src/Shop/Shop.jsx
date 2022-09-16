import { Loader } from "./Components/Loader";
import { Product } from "./Components/Product";
import { useProducts } from "./Components/products";
import styles from "./Shop.module.css";

function Shop() {
  const { products, loading } = useProducts();

  return (
    <div className={styles.body}>
      {loading && <Loader />}
      <div className={styles.container}>
        {products.map((product) => (
          <Product product={product} key={product.id} />
        ))}
      </div>
    </div>
  );
}

export default Shop;
