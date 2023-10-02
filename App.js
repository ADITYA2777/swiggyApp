import React from "react";
import ReactDOM from "react-dom/client";
import Footer from "./components/Footer";
import Header from "./components/Header";

import { Outlet, RouterProvider, createBrowserRouter, } from "react-router-dom";
import About from "./components/About";
import Error from "./components/Error";
import Contact from "./components/Contact";
import Body from "./components/Body";
import RestaurantsMenu from "./components/RestaurantsMenu";

const AppLayout = () => {
    return (
      <>
        <Header />
         <Outlet/>
        <Footer />
      </>
    );
}

const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element:<Body/>,
      },
      {
        path: "/About",
        element:<About />,
      },
      {
        path: "/contact",
        element:<Contact />,
      },
      {
        path: "/restarants/:resId",
        element:<RestaurantsMenu/>
      }
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={AppRouter}/>);

/**
 *
 * header
 *   -logo
 *    -nav(righthand)
 *    - Cart
 *  Body
 *    _search_bar
 *     -RestaurantsLists
 *      -RestaurantsCards
 *       -imge
 *        -name
 *         -rataing
 *          -cusines
 *     Footer
 *        -Links
 *         -CopyRight
 *
 */
