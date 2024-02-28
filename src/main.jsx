import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import App from './App.jsx'
import {Provider} from "react-redux";
import store from "./config/store.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <div></div>,
    },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <Provider store={store}>
          <App />
      </Provider>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
