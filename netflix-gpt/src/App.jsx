import LandingPage from "./components/LandingPage/landingPage";
import { createBrowserRouter, Outlet} from "react-router-dom"
import RegistrationPage from "./components/RegestrationPage/resgistrationPage";
import Browse from "./components/Browse/browse";
import useAuth from "./utils/useAuth";
import ProtectedRoute from "./components/ProtectedRoute/protectedRouter";
function App() {

 useAuth();
  return (
    <>
     <Outlet />
    </>
  )
}


export const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <LandingPage />,
            },
            {
                path: "/registration",
                element: <RegistrationPage />,
            },
            {
                path: "/browse",
                element: <ProtectedRoute><Browse /></ProtectedRoute>,
            },
        ]
    },
  
])

export default App;
