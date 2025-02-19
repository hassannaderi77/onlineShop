import { useSelector } from "react-redux";
import BasketCard from "../components/BasketCard";
import BasketSideBar from "../components/BasketSideBar";
import styles from "./CheckOutPage.module.css";

function CheckOutPage() {
  const state = useSelector((store) => store.cart);

  if (!state.itemsCounter) {
    return (
      <div className={styles.container}>
        <p>Emty</p>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <BasketSideBar state={state} />
      <div className={styles.products}>
        {state.selectedItems.map((product) => (
          <BasketCard key={product.id} data={product} /> 
        ))}
      </div>
    </div>
  );
}

export default CheckOutPage;
