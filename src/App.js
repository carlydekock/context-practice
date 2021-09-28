import React from "react";
import NavBar from "./components/NavBar";
import Form from "./components/Form";
import PageContent from "./components/PageContent";
import { ThemeProvider } from './context/ThemeContext';
import { LanguageProvider } from './context/LanguageContext';

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <PageContent>
          <NavBar />
          <Form />
        </PageContent>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
