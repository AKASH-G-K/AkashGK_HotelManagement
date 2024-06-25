import React from "react";
import NavigationMenu from "./NavigationMenu";
import { Container } from "react-bootstrap";

import { Route, Switch } from "react-router-dom"; // Import Switch and Route

import Home from "./Home";
import About from "./About";
import REstaurantListItem from "./restaurants-list/RestaurantListItem";
import IRestaurant from "../models/IRestaurant";
import RestaurantsList from "./restaurants-list/RestaurantList";
import RestaurantDetails from "./restaurants-details/RestaurantDetails";
import { BrowserRouter as Router } from "react-router-dom";
import AddMenuItem from "./add-menu-item/AddMenuItem";





const App = () => {
    return (
        <>
        <Router>
        <NavigationMenu />
       <Container>
          <Switch>
          <Route exact path="/restaurants/:id/add" component={AddMenuItem}/>
          <Route exact path="/restaurants/:id" component={RestaurantDetails}/>
          <Route path="/restaurants" component={RestaurantsList} />
          <Route path="/about" component={About} />
          <Route path="/" component={Home}/>
          </Switch>       
       </Container>
       </Router>
       </>
    );
};

export default App;