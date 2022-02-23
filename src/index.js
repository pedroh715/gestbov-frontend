import React from 'react';
import ReactDOM from 'react-dom'
import App from './App';
import { CookiesProvider } from 'react-cookie'
import './index.css'
import {
  ChakraProvider,
  ColorModeScript,
  extendTheme,
  theme,
} from '@chakra-ui/react'

const customTheme = extendTheme({
  config: {
    initialColorMode: 'light',
    useSystemColorMode: false,
  },
  colors: {
    primary: theme.colors.green
  },
})

ReactDOM.render(
  <React.StrictMode>
    <CookiesProvider>
      <ChakraProvider theme={customTheme}>
        <ColorModeScript initialColorMode={customTheme.config.initialColorMode}/>
        <App />
      </ChakraProvider>
    </CookiesProvider>
  </React.StrictMode>,
  document.getElementById('root')
);