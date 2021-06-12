import React from 'react'
import {Switch, BrowserRouter as Router} from "react-router-dom"
import NavTop from "./components/NavTop"
import Routes from './Routes'
import CarritoContextProvider from "./context/carritoContext"

export default function App() {
  return (
    <Router>
      <CarritoContextProvider>
        <NavTop/>
      <Switch>
        <Routes/>
      </Switch>
      </CarritoContextProvider>
    </Router>
  )
}
