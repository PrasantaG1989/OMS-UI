import styles from './menu-bar.module.css';

import MenuItem from "@monorepo-oms-ui/data";

/* eslint-disable-next-line */

export function MenuBar(props: any) {
  const menuItems: MenuItem[] = props.menuItems;
  const SIDEBAR_COLOR = "bg-gray-900";
  return (
    
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
  );
}

export default MenuBar;
