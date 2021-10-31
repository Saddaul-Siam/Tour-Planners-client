import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Header from './components/Shared/Header/Header';
import Home from './components/Home/Home/Home';
import Tours from './components/Home/Tours/Tours';
import NotFound from './components/Home/NotFound/NotFound';
import AddTours from './components/Home/AddTours/AddTours';
import BookingDetails from './components/Home/BookingDetails/BookingDetails';
import AuthProvider from './Context/authProvider';
import Login from './components/Home/Login/Login';
import PrivetRoute from './components/PrivetRoute/PriverRoute';
import Shipping from './components/Home/Shipping/Shipping';
import MyOrders from './components/Home/MyOrders/MyOrders';
import Dashboard from './components/Home/Dashboard/Dashboard';
import Footer from './components/Shared/Footer/Footer';
import Register from './components/Home/Register/Register';
import UpdateStatus from './components/Home/UpdateStatus/UpdateStatus';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/tours">
              <Tours></Tours>
            </Route>
            <PrivetRoute path="/addTours">
              <AddTours></AddTours>
            </PrivetRoute>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
            <PrivetRoute path="/bookingDetails">
              <BookingDetails />
            </PrivetRoute>
            <Route path="/shipping">
              <Shipping></Shipping>
            </Route>
            <PrivetRoute path="/myOrders">
              <MyOrders></MyOrders>
            </PrivetRoute>
            <PrivetRoute path="/dashboard">
              <Dashboard></Dashboard>
            </PrivetRoute>
            <Route path="/updateStatus/:statusId">
              <UpdateStatus></UpdateStatus>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router >
      </AuthProvider>
    </div >
  );
}

export default App;
