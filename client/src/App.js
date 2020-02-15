import React from "react";
import "./App.css";

import ApolloClient from "apollo-boost";
import {ApolloProvider} from "react-apollo";
import logo from "./spaceXLogo.png";
import Launches from "./components/Launches";

const client = new ApolloClient({
  uri: "http://localhost:5000/graphql"
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="container">
        <img
          src={logo}
          alt="There should be logo"
          style={{width: 300, height: 50, display: "block", margin: "auto"}}
        />
        <Launches />
      </div>
    </ApolloProvider>
  );
}

export default App;
