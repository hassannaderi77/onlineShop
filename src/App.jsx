import { Navigate, Route, Routes } from "react-router-dom";
import ProductsPage from "./pages/ProductsPage";
import DetailsPage from "./pages/DetailsPage";
import CheckOutPage from "./pages/CheckOutPage";
import PageNotFound from "./pages/PageNotFound";
import LayOut from "./layout/LayOut";

function App() {
  return (
        <LayOut>
          <Routes>
            <Route path="/" element={<ProductsPage />} />
            <Route path="/products/:id" element={<DetailsPage />} />
            <Route path="/checkout" element={<CheckOutPage />} />
            <Route path="/*" element={<PageNotFound />} />
          </Routes>
        </LayOut>
  );
}

export default App;
