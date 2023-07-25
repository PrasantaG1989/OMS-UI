import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';

// import App, {loader as appLoader} from './App';
import {action as returnAction} from './app/return-form/return-form';
import App from './app/app';

const route = createBrowserRouter([
  /*{
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

  },*/
  {
    path:'/',
    element: <App/>,
    action: returnAction

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
