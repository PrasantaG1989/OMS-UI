// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.css';
import * as React from "react";
import { MenuBar} from '@monorepo-react/common-ui';
import { MscMenuItems} from '@monorepo-react/data';
import { Outlet, redirect } from 'react-router-dom';

export function App() {
  
  return (
    <>
      
      <div className="flex bg-gray-300 min-h-screen">
        <MenuBar menuItems={MscMenuItems}/>
        <Outlet/>
      </div>
      
    </>
  );
}


export default App;
