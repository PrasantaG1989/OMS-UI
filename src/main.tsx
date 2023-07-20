import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import {createBrowserRouter, RouterProvider,BrowserRouter, Routes, Route} from 'react-router-dom';

import App, {loader as appLoader} from './App';
import Demo from './Demo';
import ReturnForm, {action as returnAction} from './ReturnForm';

const route = createBrowserRouter([
  {
    path:'/',
    element: <App/>,
    loader: appLoader,
    children:[
      {
        path:'add',
        element: <ReturnForm />,
        action: returnAction
      }
    ]

  },
  {
    path:'demo',
    element:<Demo/>
  }
])
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={route}/>
  </React.StrictMode>
);
