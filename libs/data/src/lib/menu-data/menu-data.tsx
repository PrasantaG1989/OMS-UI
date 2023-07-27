import * as React from "react";

export interface MenuItem {
  text: React.ReactNode;
  icon: React.ReactNode;
}

export const OperationsMenuItems: MenuItem[] = [
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
export const MscMenuItems: MenuItem[] = [
  {
    icon: (
      <img
        alt="logo"
        style={{ height: "50px" }}
        src="https://play-lh.googleusercontent.com/gqOziTbVWioRJtHh7OvfOq07NCTcAHKWBYPQKJOZqNcczpOz5hdrnQNY7i2OatJxmuY=w480-h960-rw"
      />
    ),
    text: "MSC"
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