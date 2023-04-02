import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Second from './second';
import Third from './third';




const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

function Wrapper() {
  const [count, setCount] = useState(0);
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>
    },
    {
      path: "/secondPage",
      element: <Second count = {count} setCount = {setCount}/>
    },
    {
      path: "/thirdPage",
      element: <Third count = {count} setCount = {setCount}/>
    }
  ]);
  return <RouterProvider router={router} />
}



root.render(
  <React.StrictMode>
    <Wrapper/>
  </React.StrictMode>
);


