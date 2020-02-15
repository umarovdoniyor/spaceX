import React from "react";
import "./App.css";

import ApolloClient from "apollo-boost";
import {ApolloProvider} from "react-apollo";
import logo from "./spaceXLogo.png";
import Launches from "./components/Launches";
import Launch from "./components/Launch";
import {BrowserRouter as Router, Route} from "react-router-dom";

const client = new ApolloClient({
  uri: "http://localhost:5000/graphql"
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="container">
          <img
            src={logo}
            alt="There should be logo"
            style={{width: 300, height: 50, display: "block", margin: "auto"}}
          />
          {/* <Launches /> */}
          <Route exact path="/" component={Launches} />
          <Route exact path="/launch/:flight_number" component={Launch} />
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
