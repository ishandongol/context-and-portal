import React from 'react';

//? context for theme
const ThemeContext = React.createContext<string>('light');
ThemeContext.displayName = "Theme"

const ThemeProvider = ThemeContext.Provider

const ThemeConsumer = ThemeContext.Consumer
////


//? context for portal
const ProtalContext = React.createContext<boolean>(true);
ProtalContext.displayName = "Portal"

const ProtalProvider = ProtalContext.Provider

const PortalConsumer = ProtalContext.Consumer
////

export { ThemeProvider, ThemeConsumer, ProtalProvider, PortalConsumer }