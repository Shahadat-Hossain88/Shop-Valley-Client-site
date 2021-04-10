import { Router } from 'express';
import React from 'react';
import { Route, Switch } from 'react-router';
import AddProduct from '../AddProduct/AddProduct';
import AdminHeader from '../AdminHeader/AdminHeader';
import EditProduct from '../EditProduct/EditProduct';
import ManageProduct from '../ManageProduct/ManageProduct';

const Admin = () => {
    return (
        <div>
            <Router>
                <AdminHeader></AdminHeader>
                <Switch>
                    <Route path="/manage">
                        <ManageProduct></ManageProduct>
                    </Route>
                    <Route path="/addProduct">
                        <AddProduct></AddProduct>
                    </Route>
                    <Route path="/editProduct">
                        <EditProduct></EditProduct>
                    </Route>
                    {/* <Route path="/">
                        <EditProduct></EditProduct>
                    </Route> */}
                </Switch>
            </Router>

        </div>
    );
};

export default Admin;