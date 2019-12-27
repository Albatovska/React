import React from 'react'
import "./app.sass"
import {Route, Switch} from "react-router-dom";
import CatalogPage from "../pages/catalog-page/catalog-page";
import HomePage from "../pages/home-page/home-page";
import Header from "../header/header";
import CartItemPage from "../pages/card-item-page/card-item-page";
import Modals from "../modals/modals";
import ShopCartPage from "../pages/shop-cart-page/shop-cart-page";

const App = () => {

    return(
        <>
            <Modals />
            <Header/>
            <Switch>
                <Route
                    path={"/"}
                    component={HomePage}
                    exact
                />
                <Route
                    path={"/catalog/:id"}
                    render={({match}) => {
                        return <CatalogPage id = {match.params.id}  />
                    }}
                    exact
                />
                <Route
                    path={"/device/:id"}
                    render={({match}) => {
                        return <CartItemPage id = {match.params.id}  />
                    }}
                    exact
                />
                <Route
                    path={"/shopping-cart"}
                    component={ShopCartPage}
                    exact
                />
                <Route
                    path={"/result-page"}
                    render = {() => {
                        return <div>Success page</div>
                    }}
                    exact
                />
                <Route
                    render={() => {
                        return <div>Not found</div>
                    }}
                />
            </Switch>
        </>
    )
};

export default App