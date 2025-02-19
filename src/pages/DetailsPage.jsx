import { Link, useParams } from "react-router-dom";
import { SiOpenproject } from "react-icons/si";
import { IoMdPricetag } from "react-icons/io";
import { FaArrowLeft } from "react-icons/fa";

import Loader from "../components/Loader";

import styles from "./DetailsPage.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchProducts } from "../features/product/productSlice";

function DetailsPage() {
  const { id } = useParams();

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchProducts())
  },[])

  const ProductDetails = useSelector((store) =>
    store.product.products.find((i) => i.id == +id)
  );
 
  if (!ProductDetails) return <Loader />;

  return (
    <div className={styles.container}>
      <img src={ProductDetails.image} alt={ProductDetails.title} />
      <div className={styles.information}>
        <h3 className={styles.title}>{ProductDetails.title}</h3>
        <p className={styles.description}>{ProductDetails.description}</p>
        <p className={styles.category}>
          <SiOpenproject />
          {ProductDetails.category}
        </p>
        <div>
          <span className={styles.price}>
            <IoMdPricetag />
            {ProductDetails.price} $
          </span>
          <Link to="/products">
            <FaArrowLeft />
            <span>Back To Shop</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default DetailsPage;
