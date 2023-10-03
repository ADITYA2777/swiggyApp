import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { Outlet, RouterProvider, createBrowserRouter, } from "react-router-dom";
import Error from "./components/Error";
import Contact from "./components/Contact";
import Body from "./components/Body";
import RestaurantsMenu from "./components/RestaurantsMenu";
import ShimmerUi from "./components/ShimmerUI";


const Insert = lazy(() => import("./components/InsertMart"));
const About = lazy(() => import("./components/About"));

//chunking
//LazyLoading
//dynamic Bundling
//Code Splitting
//On Demand Loading
//Import loading


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
        element: <Body />,
      },
      {
        path: "/About",
        element: (
          <Suspense fallback={<ShimmerUi/>}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/Restaurant/:resId",
        element: <RestaurantsMenu />,
      },
      {
        path: "/Insmart",
        element: (
          <Suspense fallback={<ShimmerUi />}>
            <Insert/>
          </Suspense>
        ),
      },
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
