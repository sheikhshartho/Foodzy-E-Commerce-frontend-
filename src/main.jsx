import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import { Provider } from "react-redux";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import { store } from "./store/store.js";
import Profile from "./pages/Profile.jsx";
import About from "./pages/About.jsx";
import Home from "./pages/Home.jsx";
import Card from "./pages/Card.jsx";
import GetProducts from "./pages/GetProducts.jsx";
import ProductDetails from "./pages/ProductDetails.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/products",
        element: <GetProducts />,
      },
      {
        path: "/card",
        element: <Card />,
      },
      {
        path: "/products/:id",
        element: <ProductDetails />,
      },
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>
  </Provider>
);
