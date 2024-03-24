
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import { Switch, Route } from "react-router-dom";
import Products from "./components/Products";
import Product from "./components/Product";
import Cart from "./components/Cart"

function App() {
  return (
    <>
       <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/products" component={Products} />
        <Route exact path="/products/:id" component={Product} />
        <Route path='/cart' component={Cart}/>
        
      </Switch>
    </>
    
  );
}

export default App;
