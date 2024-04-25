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
import Layout from "./routes/layout/layout.jsx";
import ListPage from "./routes/listPage/listPage.jsx";
import SinglePage from "./routes/singlePage/SinglePage.jsx";
import ProfilePage from "./routes/profilePage/profilePage.jsx";

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
        },
        {
          path: "/:id",
          element: <SinglePage />,
        },
        {
          path: "/profile",
          element: <ProfilePage />,
        },
        // {
        //   path:"/login",
        //   element:<Login/>
        // },
        // {
        //   path:"/register",
        //   element:<Register/>
        // }
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
