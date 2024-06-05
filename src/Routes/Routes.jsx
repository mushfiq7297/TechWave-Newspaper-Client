import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home/Home";
import AllArticle from "../pages/allArticle/AllArticle";
import ArticleDetails from "../pages/allArticle/ArticleDetails";
import AddArticles from "../pages/addArticles/AddArticles";
import Subscription from "../pages/subscription/Subscription";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";
import Secret from "../shared/secret/Secret";
import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        
      },
      {
        path: "allArticle",
        element: <AllArticle></AllArticle>,
      },
      {
        path: "/articleDetails/:id",
        element: <ArticleDetails></ArticleDetails>,
      },
      {
        path: "/addArticles",
        element: <AddArticles></AddArticles>,
      },
      {
        path: "subscription",
        element: <Subscription></Subscription>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "register",
        element: <Register></Register>,
      },
      {
        path: "secret",
        element:<PrivateRoute><Secret></Secret></PrivateRoute>,
      },
      
    ],
  },
]);
