import React from "react";
import Header from "./components/Header/header";
import Hero from "./components/Hero/hero";
import Body from "./components/Body/Body";
import About from "./components/About/About";
import { createBrowserRouter } from "react-router-dom";


function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <Body />
      </main>
    </div>
  );
}

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />
  }, 
  {
    path: "/about",
    element: <About/>
  },

])

export default App;
