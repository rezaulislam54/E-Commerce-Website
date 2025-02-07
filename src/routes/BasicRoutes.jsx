import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Homepage from "../pages/clientSide/home-page/Homepage";
import ProductDetails from "../pages/clientSide/product-details/ProductDetails";
import CategoryPage from "../pages/categoryPage/CategoryPage";
import CartPage from "../pages/cartPage/CartPage";
import RegisterPage from "../pages/registerPage/RegisterPage";
import LoginPage from "../pages/loginpage/LoginPage";
import NewArrival from "../pages/clientSide/home-page/NewArrival";
import PrivateRoutes from "./PrivateRoutes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Homepage></Homepage>,
      },
      {
        path: "/product/:id",
        element: <ProductDetails></ProductDetails>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/products/${params.id}`),
      },
      {
        path: "/category",
        element: <CategoryPage></CategoryPage>,
        loader: () => fetch("http://localhost:5000/products"),
      },
      {
        path: "/new",
        element: <NewArrival></NewArrival>,
      },
      {
        path: "/cart",
        element: (
          <PrivateRoutes>
            <CartPage></CartPage>
          </PrivateRoutes>
        ),
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
