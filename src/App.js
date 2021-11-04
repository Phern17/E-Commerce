import "./App.css";
import HomeScreen from "./Screens/HomeScreen";
import LoginScreen from "./Screens/LoginScreen";
import ProductDetailsScreen from "./Screens/ProductDetailsScreen";
import ProductListScreen from "./Screens/ProductListScreen";
import RegisterScreen from "./Screens/RegisterScreen";
import ShopingCartScreen from "./Screens/ShopingCartScreen";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/product-list/product">
          <ProductDetailsScreen />
        </Route>
        <Route path="/product-list">
          <ProductListScreen />
        </Route>
        <Route path="/register">
          <RegisterScreen />
        </Route>
        <Route path="/login">
          <LoginScreen />
        </Route>
        <Route path="/checkout">
          <ShopingCartScreen />
        </Route>
        <Route path="/">
          <HomeScreen />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
