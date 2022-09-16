import styles from "../Shop.module.css";

export function Product(props) {
  const {
    product: { image, title, price, description },
  } = props;

  return (
    <div className={styles.item}>
      <img src={image} alt={title} />
      <div className={styles.info}>
        <p className={styles.title}>{title}</p>
        <p className={styles.description}>{description}</p>
      </div>

      <span className={styles.price}>{price}$</span>
    </div>
  );
}
