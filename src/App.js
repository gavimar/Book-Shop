import React from 'react';
import './App.css';
import {ThemeProvider} from '@material-ui/core/styles'
import theme from './themeConfig'
import Home from './components/home/home'
import generateStore from './redux/store'
import { Provider } from 'react-redux';

function App() {

  const store = generateStore()

  return (

    <Provider store={store}>
    <ThemeProvider theme={theme}>
      
      <Home />

    </ThemeProvider>
    </Provider>
  );
}

export default App;

