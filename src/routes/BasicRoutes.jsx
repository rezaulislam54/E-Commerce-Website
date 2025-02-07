import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Homepage from "../pages/clientSide/home-page/Homepage";
import ProductDetails from "../pages/clientSide/product-details/ProductDetails";
import CategoryPage from "../pages/categoryPage/CategoryPage";
import CartPage from "../pages/cartPage/CartPage";
import RegisterPage from "../pages/registerPage/RegisterPage";
import LoginPage from "../pages/loginpage/LoginPage";
import NewArrival from "../pages/clientSide/home-page/NewArrival";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Homepage></Homepage>,
        loader: () => fetch("product.json"),
      },
      {
        path: "/product/:id",
        element: <ProductDetails></ProductDetails>,
        loader: () => fetch("product.json"),
      },
      {
        path: "/category",
        element: <CategoryPage></CategoryPage>,
        loader: () => fetch("category.json"),
      },
      {
        path: "/new",
        element: <NewArrival></NewArrival>,
        loader: () => fetch("category.json"),
      },
      {
        path: "/cart",
        element: <CartPage></CartPage>,
      },
    ],
  },
  {
    path: "/register",
    element: <RegisterPage></RegisterPage>,
  },
  {
    path: "/login",
    element: <LoginPage></LoginPage>,
  },
]);

export default router;
