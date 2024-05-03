import logo from "./logo.svg";
// import "./App.css";
import "./layout.scss";
import Navbar from "./components/navbar/Navbar.js";
import {
  BrowserRouter,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import HomePage from "./routes/homePage/homePage.jsx";
import { Layout, RequiredAuth } from "./routes/layout/layout.jsx";
import ListPage from "./routes/listPage/listPage.jsx";
import Login from "./routes/login/login.jsx";
import Register from "./routes/Regioster/register.jsx";
import SinglePage from "./routes/singlePage/SinglePage.jsx";
import ProfilePage from "./routes/profilePage/profilePage.jsx";
import ProfileUpdatePage from "./routes/profileUpdatePage/profileUpdatePage.jsx";
import NewPostPage from "./routes/newPostPage/newPostPage.jsx";
import { listPageLoader, profilePageLoader, singlePageLoader } from "./lib/loaders.js";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <HomePage />,
        },
        {
          path: "/list",
          element: <ListPage />,
          loader:listPageLoader
        },
        {
          path: "/:id",
          element: <SinglePage />,
          loader:singlePageLoader
        },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/register",
          element: <Register />,
        },
      ],
    },
    {
      path: "/",
      element: <RequiredAuth />,
      children: [
        {
          path: "/profile",
          element: <ProfilePage />,
          // loader:profilePageLoader
        },

        {
          path: "/profile/update",
          element: <ProfileUpdatePage />,
        },
        {
          path: "/add",
          element: <NewPostPage />,
        },
      ],
    },
  ]);
  return (
    // <div className="layout">
    //   <BrowserRouter>
    //     <div className="navbar">
    //       <Navbar />
    //     </div>
    //     <div className="content">
    //       <HomePage />
    //     </div>
    //   </BrowserRouter>
    // </div>
    <RouterProvider router={router} />
  );
}

export default App;
