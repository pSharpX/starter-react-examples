import React from "react";
import { Switch, Route } from "react-router-dom";
import Header from "../common/header/Header";
import Footer from "../common/footer/Footer";
import About from "../landing/about/About";
import Contact from "../landing/contact/Contact";
import Home from "../landing/home/Home";

// import ItemDetail from "../../item/ItemDetail";
// import Checkout from "../../shop/Checkout";
// import CreateItemPage from "../../pages/item/CreateItemPage";
// import UpdateItemPage from "../../pages/item/UpdateItemPage";
// import RemoveItemPage from "../../pages/item/RemoveItemPage";

import PrivateRoute from "../auth/secure/PrivateRoute";
import NotFound from "../common/error/NotFound";

const AdminRoutes = ({ match }) => (
  <div className="App">
    <Header />
    <main className="container">
      <Switch>
        <PrivateRoute path={`${match.url}/`} component={Home} />
        <Route path={`${match.url}about`} component={About} />
        <Route path={`${match.url}contact`} component={Contact} />
        {/* <PrivateRoute
          path={`${match.url}item/create`}
          component={CreateItemPage}
        />
        <Route path={`${match.url}item/edit/:id`} component={UpdateItemPage} />
        <Route
          path={`${match.url}item/delete/:id`}
          component={RemoveItemPage}
        />
        <Route path={`${match.url}item/:id`} component={ItemDetail} />
        <Route path={`${match.url}checkout`} component={Checkout} /> */}
        <Route path="*" component={NotFound} />
      </Switch>
    </main>
    <Footer />
  </div>
);

export default AdminRoutes;
