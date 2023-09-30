import React from "react";
import ReactDOM from "react-dom/client";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Header from "./components/Header";
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
const AppLayout = () => {
    return (
      <>
        <Header />
        <Body />
        <Footer />
      </>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);
