import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Home from './pages/Home';
import { PrivateRoute } from './helpers/PrivateRoute';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from "./helpers/theme/theme"
import { GlobalStyles } from "./helpers/theme/global"
import ThemeSwitcher from "./helpers/ThemeSwitcher";
import { useDarkMode } from './helpers/theme/useDarkMode';
function App() {
    const [theme, toggleTheme,componentMounted] = useDarkMode();
    const themeMode = theme === 'light' ? lightTheme : darkTheme;

    if (!componentMounted) {
        return <div />
    };

    return (
   <ThemeProvider theme={themeMode}>
    <GlobalStyles />
       <ThemeSwitcher  theme={theme} toggleTheme={toggleTheme} />
      <Router>
        <Switch>
          <Route  component={Login} path="/login" />
          <Route  component={Signup} path="/signup" />
          <Route  component={Home} path="/"  />
        </Switch>
      </Router>
      </ThemeProvider>
  );
}

export default App;
