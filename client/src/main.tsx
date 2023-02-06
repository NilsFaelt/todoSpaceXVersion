import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { theme } from "./styles/theme";
import { ThemeProvider } from "styled-components";
import { Auth0Provider } from "@auth0/auth0-react";
import DisplayUser from "./components/displayUser/DisplayUser";
import "./index.css";
import Todos from "./components/todos/Todos";
import CreateTodo from "./components/todos/createTodo/CreateTodo";
import AllTodos from "./components/todos/allTodos/AllTodos";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "displaycard",
        element: <DisplayUser />,
      },
      {
        path: "todos",
        element: <Todos />,
        children: [
          {
            path: "create",
            element: <CreateTodo />,
          },
          {
            path: "alltodos",
            element: <AllTodos />,
          },
        ],
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Auth0Provider
      domain='dev-5a5o36s5yv2aqjuj.us.auth0.com'
      clientId='Ti6GLe9oGTLFoUMQLVej94QX42QJJbdl'
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
    >
      <ThemeProvider theme={theme}>
        <RouterProvider router={router} />
      </ThemeProvider>
    </Auth0Provider>
  </React.StrictMode>
);
