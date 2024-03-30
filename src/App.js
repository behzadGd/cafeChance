import React from "react";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import Header from "./Componenets/Header";
import HomePage from "./Pages/HomePage";
import ProductPage from "./Pages/ProductPage";
import AboutPage from "./Pages/AboutPage";
import UserPage from "./Pages/UserPage";

function App() {
  const myNavs=createBrowserRouter([{
   element: (<div>
    <Header/>
    <Outlet/>
    </div>),
    errorElement: <div>Not Found</div>,
    path:'/',
    children:[{
      element:<HomePage/>,
      path:'/'
    },
  {
    element:<ProductPage/>,
    path:'/product'
  },
  {
    element:<AboutPage/>,
    path:'/about'
  },
  {
    element:<UserPage/>,
    path:'/user'
  }
]
  }])
 return (<div>
    <RouterProvider router={myNavs}/>
 </div>)
}
export default App;
