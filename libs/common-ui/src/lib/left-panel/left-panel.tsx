import styles from './left-panel.module.css';
import {createContext} from 'react';
import { UseScrollDepth } from "../use-scroll-depth/use-scroll-depth";
import ContextObj from '../context-obj/context-obj';
import FabButton from '../fab-button/fab-button';
import MenuItem from "@monorepo-oms-ui/data";

/* eslint-disable-next-line */
export interface LeftPanelProps {
  text: String;
  icon: String;
}


export function LeftPanel({showActionPane, updateActionPane}) {
  
  const depth = UseScrollDepth();
  return (
    <>
      <div
        className={["text-lg", depth >= 0 && depth < 70 && "font-bold"].join(
          " "
        )}
      >
        Order Summary
      </div>
      <div
        className={["text-lg", depth > 60 && depth < 90 && "font-bold"].join(
          " "
        )}
      >
        Packages
      </div>
      <div className={["text-lg", depth > 90 && "font-bold"].join(" ")}>
        Notes
      </div>
      <FabButton showActionPane={showActionPane} updateActionPane={updateActionPane}/>
    </>
  );
}


export default LeftPanel;
