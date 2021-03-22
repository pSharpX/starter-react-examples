import React from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import Header from "../common/header/Header";
import Footer from "../common/footer/Footer";
import About from "../landing/about/About";
import Home from "../landing/home/Home";
import Contact from "../landing/contact/Contact";

import ItemDetail from "../shop/detailItem/ItemDetail";
// import Checkout from "../../shop/Checkout";
import CreateItemPage from "../shop/createItem/CreateItemPage";
import UpdateItemPage from "../shop/editItem/UpdateItemPage";
// import RemoveItemPage from "../../pages/item/RemoveItemPage";

import PrivateRoute from "../auth/secure/PrivateRoute";
import NotFound from "../common/error/NotFound";

const AdminRoutes = ({ match }) => {
  const { path } = useRouteMatch();
  return (
    <div className="App">
      <Header />
      <main className="container">
        <Switch>
          <PrivateRoute path={`${match.url}/`} component={Home} />
          <Route path={`/about`} component={About} />
          <Route path={`/contact`} component={Contact} />
          <PrivateRoute
            path={`${match.url}item/create`}
            component={CreateItemPage}
          />
          <PrivateRoute
            path={`${match.url}item/edit/:id`}
            component={UpdateItemPage}
          />
          {/* <Route
          path={`${match.url}item/delete/:id`}
          component={RemoveItemPage}
        /> */}
          <PrivateRoute path={`${match.url}item/:id`} component={ItemDetail} />
          {/* <Route path={`${match.url}checkout`} component={Checkout} /> */}
          <Route path="*" component={NotFound} />
        </Switch>
      </main>
      <Footer />
    </div>
  );
};

export default AdminRoutes;
