import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './pages/Home/Home/Home';
import Login from './pages/Login/Login/Login';
import Register from './pages/Login/Register/Register';
import AuthProvider from './contexts/AuthProvider';
import PrivateRoute from './pages/Login/PrivateRoute/PrivateRoute';
import NotFound from './pages/NotFound/NotFound'
import Dashboard from './pages/Dashboard/Dashboard/Dashboard';
import AllFeature from './pages/AllFeatureCars/AllFeature/AllFeature';
import OrderHome from './pages/Home/OrderPage/OrderHome';
import About from './pages/About/About';
import AboutHome from './pages/About/AboutHome';
import Contact from './pages/Contact/Contact';
import ContactHome from './pages/Contact/ContactHome';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/home">
            <Home></Home>
          </Route>
          <Route exact path="/login">
            <Login></Login>
          </Route>
          <Route path="/about">
            <AboutHome></AboutHome>
          </Route>
          <Route exact path="/register">
            <Register></Register>
          </Route>
          <PrivateRoute exact path="/cars">
            <AllFeature></AllFeature>
          </PrivateRoute>
          <PrivateRoute exact path="/orderPage/:id">
            <OrderHome></OrderHome>
          </PrivateRoute>
          <PrivateRoute path="/dashboard">
            <Dashboard></Dashboard>
          </PrivateRoute>
          <Route path="/contact">
            <ContactHome></ContactHome>
          </Route>
          <Route exact path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;
