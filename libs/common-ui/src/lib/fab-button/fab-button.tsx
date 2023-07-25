import styles from './fab-button.module.css';
import React, { useContext} from 'react';
import { useNavigate} from 'react-router-dom';

export function FabButton({showActionPane, updateActionPane}) {
  const navigate = useNavigate();
  return (
    <button
      className="fixed bottom-5 right-5 bg-blue-500 hover:bg-blue-600 text-white p-4 rounded-full shadow-lg"
      style={{ minWidth: "60px", fontSize: "20px" }}
      onClick={() => {
        updateActionPane(!showActionPane );
        //navigate('/add');
        // Handle fab button click event
      }}
    >
      +{/* Add your fab icon here */}
    </button>
  );
}

export default FabButton;
