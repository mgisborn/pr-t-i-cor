import Home from "./components/Home";
import Login from "./components/Login";
import { AuthManagerProvider } from "./components/AuthManager";
import React, { createContext, useReducer } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <AuthManagerProvider>
      <Router>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/" component={Home} />
        </Switch>
      </Router>
    </AuthManagerProvider>
  );
}

export default App;
