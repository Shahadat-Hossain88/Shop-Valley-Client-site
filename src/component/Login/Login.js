import React, { useContext, useState } from 'react';
import './Login.css';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from '../firebase.config';
import CheckOut from '../CheckOut/CheckOut';
import { useHistory, useLocation } from 'react-router';
import { userContext } from '../../App';



if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
} else {
    firebase.app();
}




const Login = () => {


    const [newUser, setNewUser] = useState(false);

    const [user, setUser] = useState({
        isSignIn: false,
        name: '',
        email: '',
        password: '',
        photo: '',
        error: '',
        success: false
    })


   // handling Google login
    var provider = new firebase.auth.GoogleAuthProvider();
    const history = useHistory();
    const handleGoogleSignIn = () => {

        firebase.auth()
            .signInWithPopup(provider)
            .then((result) => {
                /** @type {firebase.auth.OAuthCredential} */
                var credential = result.credential;
                var token = credential.accessToken; var user = result.user;
                console.log(user);
                setUser(user);

                const { displayName, email } = result.user;

                // const signedInUser = { name: displayName, email: email };
                // ...
            }).catch((error) => {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                // The email of the user's account used.
                var email = error.email; var credential = error.credential;
            });

            history.push('/checkOut');

    };

    
  const [loggedInUser, setLoggedInUser] = useContext(userContext);

    // handling login
    const history1 = useHistory();
    const location = useLocation();
    const handleLogin = (e) => {
        e.preventDefault();
        firebase
            .auth()
            .signInWithEmailAndPassword(user.email, user.password)
            .then((res) => {
                const newUserInfo = { ...res.user };
                newUserInfo.error = "";
                setUser(newUserInfo);
                setLoggedInUser(newUserInfo);
                // updateUserName(loggedInUser.name);
                // console.log("name", loggedInUser.name);
                // console.log("logged in", loggedInUser);
                // history.replace(form);
            })
            .catch((error) => {
                var errorMessage = error.message;
                const newUserInfo = { ...user };
                newUserInfo.error = errorMessage;
                console.log(errorMessage);
                setUser(newUserInfo);
                setLoggedInUser(newUserInfo);
            });
            history.push('/checkOut')
    };

    const handleBlur = (e) => {
        // console.log(e.target.name, e.target.value);
        let isFormValid = true;
        if (e.target.name === 'email') {
            isFormValid = /\S+@\S+\.\S+/.test(e.target.value);
            // const isEmailValid = /\S+@\S+\.\S+/.test(e.target.value);
            // console.log(isEmailValid);
        }

        if (e.target.name === 'password') {
            const isPasswordValid = e.target.value.length > 6;
            const passwordHasNumber = /\d{1}/.test(e.target.value);
            // console.log(isPasswordValid && passwordHasNumber);
            isFormValid = isPasswordValid && passwordHasNumber;

        }
        if (isFormValid) {

            const newUserInfo = { ...user };
            newUserInfo[e.target.name] = e.target.value;
            setUser(newUserInfo);
            setNewUser(newUserInfo);
        }
    }



    return (
        <div className="login-container">
            <h1>{user.displayName}</h1>
            <form  >
                <h1>Login</h1>
                <input type="text" name="email" onBlur={handleBlur} placeholder={"Username or Email"} required></input>
                <br />
                <input type="Password" name="password" onBlur={handleBlur} placeholder={" Password"} required></input>
                <br />

                <button onClick={handleLogin} >Login</button>
                <br />
                <h1>Or</h1>
                <br />
                <button onClick={handleGoogleSignIn} >  Continue with Google  </button>

            </form>
        </div>
    );
};

export default Login;