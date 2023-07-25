// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.css';
import * as React from "react";
import { Header, LeftPanel, Tables, MenuBar} from '@monorepo-oms-ui/common-ui';
import { PurchaseData, OrderNoteData, DeliveryHistoryData, MscMenuItems} from '@monorepo-oms-ui/data';

import ReturnForm from "./return-form/return-form";



export function App() {
  const [showActionPane, setShowactionPane] = React.useState(false);
  const orderData = {
    header: [
      {key: "timestamp", value: "Timestamp"},
      {key: "manager", value: "Manager"},
      {key: "note", value: "Notes"}
    ],
    dataBody: OrderNoteData
  }
  const purchaseData = {
    header: [
      {key: "product", value: "Product"},
      {key: "price", value: "Price"},
      {key: "quantity", value: "Quantity"},
      {key: "total", value: "Total"}
    ],
    dataBody: PurchaseData
  }
  const deliveryData = {
    header: [
      {key: "date", value: "Date"},
      {key: "status", value: "Status"},
      {key: "location", value: "Location"}
    ],
    dataBody: DeliveryHistoryData
  }
  return (
    <>
      
      <div className="flex bg-gray-300 min-h-screen">
        <MenuBar menuItems={MscMenuItems}/>
        <div
          style={{
            boxShadow: showActionPane
              ? "rgba(0, 0, 0, 0.7) 0px -2px 4px inset"
              : ""
          }}
          className={[
            "w-1/2 p-4",
            showActionPane ? "w-1/2" : "w-3/4"
          ].join(" ")}
        >
            <div>
              <div className="w-40 sticky top-0">
                <LeftPanel showActionPane={showActionPane} updateActionPane={setShowactionPane}/>
              </div>
              <div className="ml-40">
                <div className="text-xl my-4">Order Summary</div>
                <Tables  tableData={purchaseData}/>
                <div className="text-xl my-4">Packages</div>
                <Tables tableData={deliveryData}/>
                <div className="text-xl my-4">Notes</div>
                <Tables tableData={orderData}/>
              </div>
            </div>
        </div>
        {showActionPane && (
          <div className="w-1/2 bg-white p-4">
            <ReturnForm  showActionPane={showActionPane} updateActionPane={setShowactionPane}/>
          </div>
        )}
      </div>
      
    </>
    // <div>
    //   <NxWelcome title="oms-ui" />
    // </div>
  );
}


export default App;
