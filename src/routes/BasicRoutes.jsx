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
import DashboardLayoutes from "../layouts/DashboardLayoutes";
import UserProfile from "../components/adminSide/UserProfile";
import UpdateProfile from "../components/adminSide/UpdateProfile";
import AddProduct from "../components/adminSide/AddProduct";
import AdminCardProduct from "../components/adminSide/AdminCardProduct";

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
          fetch(
            `https://e-commerce-server-nine-kohl.vercel.app/products/${params.id}`
          ),
      },
      {
        path: "/category",
        element: <CategoryPage></CategoryPage>,
        loader: () =>
          fetch("https://e-commerce-server-nine-kohl.vercel.app/products"),
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
  {
    path: "/dashboard",
    element: <DashboardLayoutes></DashboardLayoutes>,
    children: [
      {
        path: "/dashboard",
        element: <UserProfile></UserProfile>,
      },
      {
        path: "/dashboard/update-user",
        element: <UpdateProfile></UpdateProfile>,
      },
      {
        path: "/dashboard/add-product",
        element: <AddProduct></AddProduct>,
      },
      {
        path: "/dashboard/cart",
        element: <AdminCardProduct></AdminCardProduct>,
      },
    ],
  },
]);

export default router;
