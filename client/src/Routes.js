import React from 'react';
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import Signin from "./user/Signin";
import Signup from "./user/Signup";
import Dashboard from "./user/UserDashboard";
import PrivateRoute from "./auth/PrivateRoute";
import MyCard from './core/MyCard';
import AddBook from './user/AddBook';
import SearchBook from './user/SearchBook';
import Market from './core/Market';
import Product from './core/Product';



const Routes=()=>{
    return(
    <BrowserRouter>
        <Switch>
            <Route path="/signin" exact component={Signin} />
            <Route path="/signup" exact component={Signup} />
            <Route path="/" exact component={Signin} />            
            <Route path="/card" exact component={MyCard} />            
            <PrivateRoute path="/user/dashboard" exact component={Dashboard} />            
            <PrivateRoute path="/transferMarket" exact component={Market} />            
            <PrivateRoute path="/user/addBook" exact component={AddBook} />
            <PrivateRoute path="/user/searchBook" exact component={SearchBook} /> 
            <PrivateRoute path="/product/:isbn" exact component={Product} /> 
                       
        </Switch>
    </BrowserRouter>
    )
}

export default Routes;
