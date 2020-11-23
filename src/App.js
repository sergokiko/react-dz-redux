import Layout from "./hoc/Layout/Layout";
import Shop from "./components/shop/Shop";
import React from "react";
import {Route, Switch} from "react-router";
import {WishList} from "./components/wishList/WishList";



function App() {


  return (
      <Layout>
          <Switch>
          <Route exact path="/">
              <Shop/>
          </Route>
          <Route path='/wishlist'>
              <WishList/>
          </Route>
          </Switch>

      </Layout>
  );
}

export default App;
