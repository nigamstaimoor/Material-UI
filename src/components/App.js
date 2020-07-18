import React from 'react';
import Header from "./ui/Header";
import { ThemeProvider } from "@material-ui/styles";

import Theme from "./ui/Theme";

const App = () => {
  return (
    <div className="App">
      <ThemeProvider theme={Theme}>
        <Header/>
        Hello!
      </ThemeProvider>
    </div>
  );
}

export default App;
