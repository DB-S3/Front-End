import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';
import Home from './Components/Home Page/home';
import { ThemeProvider, PartialTheme, createTheme } from '@fluentui/react';
import { Toggle } from '@fluentui/react/lib/Toggle';
import CMSComponent from './Components/cms/CMSComponent';

const lightTheme = createTheme({
  palette: {
    themePrimary: '#e88923',
    themeLighterAlt: '#090501',
    themeLighter: '#251606',
    themeLight: '#46290a',
    themeTertiary: '#8b5215',
    themeSecondary: '#cc781f',
    themeDarkAlt: '#ea9437',
    themeDark: '#eea354',
    themeDarker: '#f2ba7f',
    neutralLighterAlt: '#f8f8f8',
    neutralLighter: '#f4f4f4',
    neutralLight: '#eaeaea',
    neutralQuaternaryAlt: '#dadada',
    neutralQuaternary: '#d0d0d0',
    neutralTertiaryAlt: '#c8c8c8',
    neutralTertiary: '#595756',
    neutralSecondary: '#373634',
    neutralPrimaryAlt: '#2f2e2d',
    neutralPrimary: '#000000',
    neutralDark: '#151414',
    black: '#0b0b0a',
    white: '#ffffff',
  }});

  const darkTheme = createTheme({
    palette: {
      themePrimary: '#e88923',
      themeLighterAlt: '#090501',
      themeLighter: '#251606',
      themeLight: '#46290a',
      themeTertiary: '#8b5215',
      themeSecondary: '#cc781f',
      themeDarkAlt: '#ea9437',
      themeDark: '#eea354',
      themeDarker: '#f2ba7f',
      neutralLighterAlt: '#000000',
      neutralLighter: '#000000',
      neutralLight: '#000000',
      neutralQuaternaryAlt: '#000000',
      neutralQuaternary: '#000000',
      neutralTertiaryAlt: '#000000',
      neutralTertiary: '#c8c8c8',
      neutralSecondary: '#d0d0d0',
      neutralPrimaryAlt: '#dadada',
      neutralPrimary: '#ffffff',
      neutralDark: '#f4f4f4',
      black: '#f8f8f8',
      white: '#000000',
    }});
function App() {
  const [theme, setTheme] = useState(false);

  return (
    <div className="App">
      <ThemeProvider theme={theme ? darkTheme : lightTheme}>
        
        <header className="App-header">
          <Toggle inlineLabel onChange={() => setTheme(!theme)} />
          <CMSComponent content={'<div>test</div>'} children={[<p>test3</p>, <p>test2</p>]}/>
        </header>
      </ThemeProvider>
    </div>
  );
}

export default App;
