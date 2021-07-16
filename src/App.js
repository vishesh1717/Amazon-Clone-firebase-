import './App.css';
import Header from './components/Header'
import Home from './components/Home';
import { BrowserRouter as Router, Switch, Route }
  from "react-router-dom"
import { useEffect } from 'react'
import Checkout from './components/Checkout';
import Login from './components/Login';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';
import Payment from './components/Payment';
import { loadStripe } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js'
import Orders from './components/Orders';

const promise = loadStripe('pk_test_51If1A9SAGLiqhrvriDxyWcIpz0B6rpq8ycaSk5vJicivz0uDo6sH8Ae91o7t1ynWzBbJoVVszwJnAu7t5Dq0jisb00q0Kz32UV')




function App() {
  const [{ }, dispatch] = useStateValue();


  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      console.log("the current user", authUser);
      if (authUser) {
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      } else {
        dispatch({
          type: 'SET_USER',
          user: null
        })

      }
    })
  }, [])
  return (
    <Router>

      <div className="App">
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/orders">
            <Header />
            <Orders />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/payment">
            <Header />
            <Elements stripe={promise} >
              <Payment />
            </Elements>

          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
