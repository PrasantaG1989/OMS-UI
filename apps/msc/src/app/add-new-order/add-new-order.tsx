import styles from './add-new-order.module.css';

/* eslint-disable-next-line */
export interface AddNewOrderProps {}

export function AddNewOrder(props: AddNewOrderProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to AddNewOrder!</h1>
    </div>
  );
}

export default AddNewOrder;
