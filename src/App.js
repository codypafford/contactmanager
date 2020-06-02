import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Contacts from "./components/contacts/Contacts";
import Header from "./components/layout/Header";
import About from "./components/pages/About";
import NotFound from "./components/pages/NotFound";
import Test from "./components/test/Test";

import AddContact from "./components/contacts/AddContact";
import EditContact from "./components/contacts/EditContact";

import { Provider } from "./context";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <Provider>
      <Router>
        <div className="App">
          <Header branding="Contact Manager!" />
          <div className="container">
            {/* the switch is used like this: everytime app is redirected to 
            one of the paths below, that component will be rendered. 
            Paths are made in Header file*/}
            <Switch>
              <Route exact path="/" component={Contacts} />
              <Route exact path="/contacts/add" component={AddContact} />
              <Route exact path="/contacts/edit/:id" component={EditContact} />

              <Route exact path="/about/" component={About} />

              {/*this is how to pass props with the router*/}
              <Route
                exact
                path="/test"
                render={() => <Test testProp="prop1" />}
              />

              <Route component={NotFound} />
            </Switch>
          </div>
        </div>
      </Router>
    </Provider>
  );
}
console.log(`${1 + 1}`);

export default App;
