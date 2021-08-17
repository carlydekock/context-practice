import React, { Component } from "react";
import NavBar from "./components/NavBar";
import Form from "./components/Form";
import PageContent from "./components/PageContent";
import { ThemeProvider } from './context/ThemeContext';

class App extends Component {
  render() {
    return (
      <ThemeProvider>
        <PageContent>
          <NavBar />
          <Form />
        </PageContent>
      </ThemeProvider>
    );
  }
}

export default App;
