import React, { Component } from "react";

import ErrorBoundry from "../error-boundry";
import SwapiService from "../../services/swapi-service";

import Header from "../header";
import RandomPlanet from "../random-planet";

import { SwapiServiceProvider } from "../swapi-service-context";

import { PeoplePage, PlanetsPage, StarshipsPage } from "../pages";

import "./app.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";

export default class App extends Component {
  state = {
    swapiService: new SwapiService(),
  };
  render() {
    return (
      <ErrorBoundry>
        <SwapiServiceProvider value={this.state.swapiService}>
          <BrowserRouter>
            <div className="stardb-app">
              <Header />
              <RandomPlanet />
              <Switch>
                <Route path="/" render={() => <h2>Welcome </h2>} exact />
                <Route path="/people/:id?" component={PeoplePage} />
                <Route path="/planets/:id?" component={PlanetsPage} />
                <Route path="/starships/:id?" component={StarshipsPage} />
                <Route render={() => <h2>Page not found</h2>} />
              </Switch>
            </div>
          </BrowserRouter>
        </SwapiServiceProvider>
      </ErrorBoundry>
    );
  }
}
