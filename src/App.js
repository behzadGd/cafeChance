import React from "react";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import Header from "./Componenets/Header";
import HomePage from "./Pages/HomePage";
import ProductPage from "./Pages/ProductPage";
import AboutPage from "./Pages/AboutPage";
import UserPage from "./Pages/UserPage";
import Footer from "./Componenets/Footer";
import AdminPage from "./Pages/AdminPage";
import CustomerPage from "./Pages/CustomerPage";

function App() {
  const myNavs = createBrowserRouter([
    {
      element: (
        <div>
          <Header />
          <Outlet />
          <Footer />
        </div>
      ),
      errorElement: <div>Not Found</div>,
      path: "/",
      children: [
        {
          element: <HomePage />,
          path: "/",
        },
        {
          element: <ProductPage />,
          path: "/product",
        },
        {
          element: <AboutPage />,
          path: "/about",
        },
        {
          element: <UserPage />,
          path: "/user",
        },
        {
          element: <AdminPage />,
          path: "/admin",
        },
        {
          element: <CustomerPage />,
          path: "/customer",
        },
      ],
    },
  ]);
  return (
    <div>
      <RouterProvider router={myNavs} />
    </div>
  );
}
export default App;
