import React, { useState } from 'react'
import './Login.css'
import { Link, useHistory } from 'react-router-dom'
import { auth } from "../firebase"
const Login = () => {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const singIn = (e) => {
        e.preventDefault();
        auth.signInWithEmailAndPassword(email, password)
            .then(auth => {
                history.push('/')
            }).catch(error => alert(error.message))
    }
    const register = (e) => {
        e.preventDefault();
        auth.createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                if (auth) {
                    history.push('/')
                }
            })
            .catch(error => alert(error.message))
    }
    return (
        <div className="login">
            <Link to="/">
                <img className="login_logo"
                    src="http://pngimg.com/uploads/amazon/small/amazon_PNG24.png" alt="" />
            </Link>
            <div className="login_container">
                <h1>Sign-In</h1>
                <form>
                    <h5>E-mail</h5>
                    <input type='text' value={email}
                        onChange={e => setEmail(e.target.value)} />
                    <h5>Password</h5>
                    <input type='password' value={password}
                        onChange={e => setPassword(e.target.value)} />
                    <button className="login_signinButton"
                        onClick={singIn} type="submit">Sign In</button>


                </form>
                <p>By signing this you agree to
                Amazon conditon of user safety .Please corporate with us and
               we will try to offer you best service.Thnak You</p>
                <button onClick={register}
                    className="login_registerButton">Create your Amazon Account</button>
            </div>

        </div>
    )
}

export default Login
