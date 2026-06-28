import LandingPage from "./components/LandingPage/landingPage";
import { createBrowserRouter, Outlet} from "react-router-dom"
import RegistrationPage from "./components/RegestrationPage/resgistrationPage";
import Browse from "./components/Browse/browse";
import useAuth from "./utils/useAuth";
import ProtectedRoute from "./components/ProtectedRoute/protectedRouter";
import TvShows from "./components/TvShows/tvShows";
import NewPopular from "./components/NewPopular/newPopular";
import Movies from "./components/Movies/movies";
import Header from "./components/common/Header";
function App() {    

 useAuth();
  return (
    <>
    <Header />
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
            {
                path: '/movies',
                element: <Movies />
            },
            {
                path: "/tvshows",
                element: <TvShows />
            },
            {
                path: "/newpopular",
                element: <NewPopular />
            }
        ]
    },
  
])
        
export default App;
