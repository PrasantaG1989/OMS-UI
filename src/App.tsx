import * as React from "react";

import { PurchaseTable, DeliveryHistoryTable, OrderNotesTable } from "./Tables";
import { useScrollDepth } from "./useScrollDepth";
import { Outlet, useNavigate, useNavigation, useLocation} from 'react-router-dom';
import { request } from "http";

export async function loader({request}) {
  const url = new URL(request.url)
  const add = await url.search;
  console.log("url:", url);
  console.log("add:", add);
  return null;
}
export interface stateObj {
  showActionPane: boolean | false;
}

export type contextObj = {
  state: stateObj ,
  dispatch: (arg: any) => void
} 
const AppContext = React.createContext<contextObj>( {});

// import SEARCH3 from "./images/Search3.png";
// import SEARCH4 from "./images/Search4.png";

// const Screenshots = () => (
//   <>
//     <img src={SEARCH4} style={{ width: "750px" }} className="ml-20" alt="" />
//     <img src={SEARCH3} style={{ width: "600px" }} className="ml-20" alt="" />
//   </>
// );

const FabButton = () => {
  const { state, dispatch } = React.useContext(AppContext);
  const navigate = useNavigate();
  return (
    <button
      className="fixed bottom-5 right-5 bg-blue-500 hover:bg-blue-600 text-white p-4 rounded-full shadow-lg"
      style={{ minWidth: "60px", fontSize: "20px" }}
      onClick={() => {
        dispatch({ showActionPane: !state.showActionPane });
        navigate('/add');
        // Handle fab button click event
      }}
    >
      +{/* Add your fab icon here */}
    </button>
  );
};

interface MenuItem {
  text: React.ReactNode;
  icon: React.ReactNode;
}

const LeftPanel = () => {
  const depth = useScrollDepth();

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
      <FabButton />
    </>
  );
};

const DataColumn = () => {
  return (
    <>
      <div className="text-xl my-4">Order Summary</div>
      <PurchaseTable />
      <div className="text-xl my-4">Packages</div>
      <DeliveryHistoryTable />
      <div className="text-xl my-4">Notes</div>
      <OrderNotesTable />
    </>
  );
};

const Content = () => {
  return (
    <div>
      <div className="w-40 sticky top-0">
        <LeftPanel />
      </div>
      <div className="ml-40">
        <DataColumn />
      </div>
    </div>
  );
};

const AppShell = ({
  menuItems,
  content
}: {
  menuItems: MenuItem[];
  content: React.ReactNode;
}) => {
  const [state, dispatch] = React.useReducer(
    (state: object, next: object) => {
      return {
        ...state,
        ...next
      };
    },
    {
      showActionPane: false
    }
  );
  const navigation = useNavigation();
  const location = useLocation();
  React.useEffect(()=>{
    if(navigation.state == 'submitting' && navigation.formAction == '/add'){
      dispatch({ showActionPane: false });
    }
    if(location.pathname == '/'){
      dispatch({showActionPane: false})
    }
    else if(location.pathname == '/add'){
      dispatch({showActionPane: true})
    }
    console.log("location:",location);
  },[location])

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      <div className="flex bg-gray-300 min-h-screen">
        {/* Left Main Menu */}
        <div
          className={["w-20", SIDEBAR_COLOR].join(" ")}
          style={{ boxShadow: "2px 0px 4px rgba(0,0,0,0.3)" }}
        >
          {/* Add your icon-based menu here */}
          <ul>
            {menuItems.map((p,i) => (
              
              <li key={i} className="flex flex-col items-center opacity-90 py-2 cursor-pointer">
                {p.icon}
                <div className="text-xs text-center text-white opacity-60">
                  {p.text}
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Main Content */}
        <div
          style={{
            boxShadow: state.showActionPane
              ? "rgba(0, 0, 0, 0.7) 0px -2px 4px inset"
              : ""
          }}
          className={[
            "w-1/2 p-4",
            state.showActionPane ? "w-1/2" : "w-3/4"
          ].join(" ")}
        >
          {content}
        </div>
        {state.showActionPane && (
          <div className="w-1/2 bg-white p-4">
            <Outlet />
          </div>
        )}
      </div>
    </AppContext.Provider>
  );
};

const mscMenuItems: MenuItem[] = [
  {
    icon: (
      <img
        alt="logo"
        style={{ height: "50px" }}
        src="https://play-lh.googleusercontent.com/gqOziTbVWioRJtHh7OvfOq07NCTcAHKWBYPQKJOZqNcczpOz5hdrnQNY7i2OatJxmuY=w480-h960-rw"
      />
    ),
    text: <span className="font-bold">MSC</span>
  },
  {
    text: "Order",
    icon: (
      <svg
        viewBox="0 0 24 24"
        width="24"
        height="24"
        stroke="rgba(255,255,255,0.7)"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
      </svg>
    )
  },
  {
    text: "Return",
    icon: (
      <svg
        viewBox="0 0 24 24"
        width="24"
        height="24"
        stroke="rgba(255,255,255,0.7)"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <line x1="22" y1="12" x2="2" y2="12"></line>
        <path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"></path>
        <line x1="6" y1="16" x2="6.01" y2="16"></line>
        <line x1="10" y1="16" x2="10.01" y2="16"></line>
      </svg>
    )
  },
  {
    text: "Item",
    icon: (
      <svg
        className="w-6 h-6 mr-2"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="rgba(255,255,255,0.7)"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4 6h16M4 12h16m-7 6h7"
        />
      </svg>
    )
  },
  {
    text: "Reporting",
    icon: (
      <svg
        viewBox="0 0 24 24"
        width="24"
        height="24"
        stroke="rgba(255,255,255,0.7)"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M21.21 15.89A10 10 0 1 1 8 2.83"></path>
        <path d="M22 12A10 10 0 0 0 12 2v10z"></path>
      </svg>
    )
  }
];

const operationsMenuItems: MenuItem[] = [
  { 
    icon: (
      <img
        alt="logo"
        style={{ height: "50px" }}
        src="https://play-lh.googleusercontent.com/gqOziTbVWioRJtHh7OvfOq07NCTcAHKWBYPQKJOZqNcczpOz5hdrnQNY7i2OatJxmuY=w480-h960-rw"
      />
    ),
    text: <span className="font-bold">Operations</span>
  },
  {
    text: "Order",
    icon: (
      <svg
        viewBox="0 0 24 24"
        width="24"
        height="24"
        stroke="rgba(255,255,255,0.7)"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
      </svg>
    )
  },
  {
    text: "Return",
    icon: (
      <svg
        viewBox="0 0 24 24"
        width="24"
        height="24"
        stroke="rgba(255,255,255,0.7)"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <line x1="22" y1="12" x2="2" y2="12"></line>
        <path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"></path>
        <line x1="6" y1="16" x2="6.01" y2="16"></line>
        <line x1="10" y1="16" x2="10.01" y2="16"></line>
      </svg>
    )
  },
  {
    text: "Maintenence",
    icon: (
      <svg
        viewBox="0 0 24 24"
        width="24"
        height="24"
        stroke="rgba(255,255,255,0.7)"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M21.21 15.89A10 10 0 1 1 8 2.83"></path>
        <path d="M22 12A10 10 0 0 0 12 2v10z"></path>
      </svg>
    )
  },
  {
    text: "Item",
    icon: (
      <svg
        className="w-6 h-6 mr-2"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="rgba(255,255,255,0.7)"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4 6h16M4 12h16m-7 6h7"
        />
      </svg>
    )
  }
];

// const SIDEBAR_COLOR = "bg-blue-700";
const SIDEBAR_COLOR = "bg-gray-900";

export default function App() {
  
  return <AppShell menuItems={operationsMenuItems} content={<Content />} />;
}
