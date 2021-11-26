import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Product from "./components/Product"
import Clothing from "./components/Clothing";
import Bags from "./components/Bags";
import Shoes from "./components/Shoes"
import Hats from "./components/Hats"
import Accessories from "./components/Accessories";
import Login from "./components/Login";
import Registration from "./components/Registration";
function App() {
  return (
    <Router >
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/home" exact component={Product } />
        <Route path="/registration" exact component={Registration}/>
        <Route path="/bags" exact component={Bags} />
        <Route path="/shoes" exact component={Shoes} />
        <Route path="/clothing" exact component={Clothing} />
        <Route path="/hats" exact component={Hats} />
        <Route path="/accessories" exact component={Accessories } />
      </Switch>
    </Router>
  )
}
export default App;