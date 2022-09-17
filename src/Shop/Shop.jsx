import styles from "./Shop.module.css";
import { Loader } from "./Components/Loader";
import { Product } from "./Components/Product";
import { useProducts } from "./Components/products";

function Shop() {
  const { products, loading } = useProducts();

  return (
    <div className={styles.body}>
      <div className={styles.container}>
        <div>{loading && <Loader />}</div>
        {products.map((product) => (
          <Product product={product} key={product.id} />
        ))}
      </div>
    </div>
  );
}

export default Shop;
