import logo from './logo.svg';
import './App.css';
import Home from './assets/Home'
import About from './assets/About'
import Contact from './assets/Contact'
import Services from './assets/Services'
import Navbar from './assets/pieces/Navbar'
import Footer from './assets/pieces/Footer'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";

function App() {
  return (
    <>
    <Navbar/>
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/about" component={About}/>
      <Route exact path="/contact" component={Contact}/>
      <Route exact path="/services" component={Services}/>
      <Redirect to="/"/>

    </Switch>
    <Footer/>

    </>
  );
}

export default App;
