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
import UpdateArticle from "../updateArticle/UpdateArticle";
import Dashboard from "../layouts/Dashboard";
import AllUser from "../pages/Dashboard/AllUser";
import AddPublisher from "../pages/Dashboard/AddPublisher";
import AdminRoute from "./AdminRoute";
import ErrorPage from "../errorpage/ErrorPage";
import Payment from "../pages/Dashboard/payment/Payment";

import AdminHome from "../pages/Dashboard/adminHome/AdminHome";
import AdminAllArticle from "../pages/Dashboard/adminAllArticle/AdminAllArticle";
import PremiumArticles from "../pages/premiumArticles/PremiumArticles";





export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage />,
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
        element: <PrivateRoute><ArticleDetails></ArticleDetails></PrivateRoute>,
        loader: () => fetch('http://localhost:5000/allArticle')
      },
      {
        path: "/addArticles",
        element: <PrivateRoute><AddArticles></AddArticles></PrivateRoute>,
      },
      {
        path: "/subscription",
        element: <PrivateRoute><Subscription></Subscription></PrivateRoute>,
      },
      {
        path: "/premiumArticles",
        element: <PrivateRoute><PremiumArticles></PremiumArticles></PrivateRoute>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/updateArticle/:id",
        element: <UpdateArticle></UpdateArticle>,
        loader:({params}) => fetch(`http://localhost:5000/allArticle/${params.id}`)
      },
      {
        path: "/myArticles",
        element:<PrivateRoute><Secret></Secret></PrivateRoute>,
      },
      
      
    ],
  },
  {
    path: '/dashboard',
    element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
    errorElement: <ErrorPage />,
    children: [
      //normal user
      
      {
        path: "payment",
        element:<Payment></Payment>
      },
      // admin user routes
      {
        path:"adminHome",
        element:<AdminRoute><AdminHome></AdminHome></AdminRoute>
      },
      {
        path:'allUser',
        element:<AdminRoute><AllUser></AllUser></AdminRoute>
      },
      {
        path:'addPublisher',
        element:<AdminRoute><AddPublisher></AddPublisher></AdminRoute>
      },
      {
        path:'adminAllArticle',
        element:<AdminRoute><AdminAllArticle></AdminAllArticle></AdminRoute>

      }
      
    ]
  }
]);
