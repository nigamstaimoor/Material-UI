import React from 'react';
import Header from "./ui/Header";
import { ThemeProvider } from "@material-ui/styles";
import { Switch, Route } from "react-router-dom";
import theme from "./ui/Theme";

const App = () => {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Header />
        <Switch>
          <Route exact path="/" component={() => <div>Home</div>} />
          <Route exact path="/services" component={() => <div>services</div>} />
          <Route exact path="/customsoftware" component={() => <div>customsoftware</div>} />
          <Route exact path="/mobileapps" component={() => <div>mobileapps</div>} />
          <Route exact path="/websites" component={() => <div>websites</div>} />
          <Route exact path="/revolution" component={() => <div>revolution</div>} />
          <Route exact path="/about" component={() => <div>about</div>} />
          <Route exact path="/contact" component={() => <div>contact</div>} />
          <Route exact path="/estimate" component={() => <div>estimate</div>} />
        </Switch>
      </ThemeProvider>
    </div>
  );
}

export default App;
