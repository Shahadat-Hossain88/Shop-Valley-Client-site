import logo from './logo.svg';
// import './App.css';
// import firebase from "firebase/app";
// import "firebase/auth";
import firebaseConfig from './component/firebase.config';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import Login from './component/Login/Login';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './component/Header/Header';
import AddProduct from './component/AddProduct/AddProduct';
import Home from './component/Home/Home';
import CheckOut from './component/CheckOut/CheckOut';
import { createContext, useState } from 'react';
import PrivateRoute from './component/PrivateRoute/PrivateRoute';
import AdminHeader from './component/AdminHeader/AdminHeader';
import ManageProduct from './component/ManageProduct/ManageProduct';
import NotFound from './component/NotFound/NotFound';
import EditProduct from './component/EditProduct/EditProduct';

export const userContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <userContext.Provider value = {[loggedInUser, setLoggedInUser]} className="">
      <Router>
        <h3>email:{loggedInUser.email}</h3>
        <Header></Header>
        <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/addProduct">
            <AdminHeader></AdminHeader>
            <AddProduct></AddProduct>
          </Route>
          <Route path="/manage">
            <AdminHeader></AdminHeader>
            <ManageProduct></ManageProduct>
          </Route>
          <Route path="/editProduct">
            <AdminHeader></AdminHeader>
            <EditProduct></EditProduct>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <PrivateRoute path="/checkOut">
            <CheckOut></CheckOut>
          </PrivateRoute>
          {/* <Route path="/checkOut">
            <CheckOut></CheckOut>
          </Route> */}
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>

        </Switch>

      </Router>

    </userContext.Provider>
  );
}

export default App;
