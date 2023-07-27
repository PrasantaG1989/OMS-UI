import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';

// import App, {loader as appLoader} from './App';
import {action as returnAction} from './app/return-form/return-form';
import App from './app/app';
import AddNewReturnForm, {action as newReturnAction} from './app/add-new-return-form/add-new-return-form';
import MscSummary from "./app/msc-summary/msc-summary";
import ErrorPage from "@monorepo-react/common-ui";
const route = createBrowserRouter([
  {
    path:'/',
    element: <App/>,
    children:[
      { index: true, 
        element: <MscSummary /> ,
        action: returnAction
      },
      {
        path:"msc",
        element: <MscSummary/>,
        action: returnAction,
      },
      {
        path:'return',
        element: <AddNewReturnForm/>,
        action: newReturnAction
      }
    ]

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
