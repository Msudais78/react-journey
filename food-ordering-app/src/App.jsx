import React from "react";
import Header from "./components/Header/header";
import Hero from "./components/Hero/hero";
import Body from "./components/Body/Body";
import About from "./components/About/About";
import OurJourney from "./components/OurJourney/OurJourney";
import { createBrowserRouter, Outlet } from "react-router-dom";


function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: (
          <>
            <Hero />
            <Body />
          </>
        )
      },
      {
        path: "/about",
        element: <About />
      },
      {
        path: "/our-journey",
        element: <OurJourney />
      }
    ]
  }
]);

export default App;
