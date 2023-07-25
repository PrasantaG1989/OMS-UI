interface Purchase {
  id: number;
  product: string;
  price: number;
  quantity: number;
  total: number;
}

// Mock data for the purchase
export const PurchaseData: Purchase[] = [
  { id: 1, product: "Fresh Apples", price: 2.99, quantity: 4, total: 11.96 },
  { id: 2, product: "Organic Eggs", price: 3.49, quantity: 2, total: 6.98 },
  { id: 3, product: "Grass-Fed Beef", price: 9.99, quantity: 1, total: 9.99 },
  {
    id: 4,
    product: "Whole Wheat Bread",
    price: 2.49,
    quantity: 3,
    total: 7.47
  },
  {
    id: 5,
    product: "Fresh Salmon Fillet",
    price: 12.99,
    quantity: 2,
    total: 25.98
  },
  { id: 6, product: "Organic Spinach", price: 3.99, quantity: 1, total: 3.99 },
  { id: 7, product: "Greek Yogurt", price: 1.99, quantity: 4, total: 7.96 },
  { id: 8, product: "Avocados", price: 1.79, quantity: 3, total: 5.37 },
  {
    id: 9,
    product: "Artisanal Cheese",
    price: 6.99,
    quantity: 2,
    total: 13.98
  },
  {
    id: 10,
    product: "Organic Tomatoes",
    price: 2.29,
    quantity: 5,
    total: 11.45
  },
  {
    id: 11,
    product: "Fresh Basil Leaves",
    price: 1.49,
    quantity: 1,
    total: 1.49
  },
  {
    id: 12,
    product: "Free-Range Chicken Breast",
    price: 5.99,
    quantity: 2,
    total: 11.98
  },
  {
    id: 13,
    product: "Whole Grain Pasta",
    price: 2.79,
    quantity: 3,
    total: 8.37
  },
  {
    id: 14,
    product: "Organic Blueberries",
    price: 4.99,
    quantity: 1,
    total: 4.99
  },
  {
    id: 15,
    product: "Freshly Ground Coffee",
    price: 8.49,
    quantity: 2,
    total: 16.98
  }
];


// Define the type for the delivery history data
interface DeliveryHistory {
  id: number;
  date: string;
  status: string;
  location: string;
}

// Mock data for the delivery history
export const DeliveryHistoryData: DeliveryHistory[] = [
  { id: 1, date: "2023-07-01", status: "Shipped", location: "Warehouse A" },
  {
    id: 2,
    date: "2023-07-03",
    status: "Out for Delivery",
    location: "Local Distribution Center"
  },
  {
    id: 3,
    date: "2023-07-05",
    status: "Delivered",
    location: "Customer Address"
  }
];


// Define the type for the delivery history data
interface OrderNote {
  id: number;
  timestamp: string;
  manager: string;
  note: string;
}

export const OrderNoteData: OrderNote[] = [
  {
    id: 1,
    timestamp: "2023-07-01 09:12 AM",
    manager: "John Doe",
    note: "Order processing delayed."
  },
  {
    id: 2,
    timestamp: "2023-07-02 03:45 PM",
    manager: "Jane Smith",
    note: "Customer requested a change in shipping address."
  },
  {
    id: 3,
    timestamp: "2023-07-03 10:28 AM",
    manager: "Alex Johnson",
    note: "Item out of stock. Contacting supplier for restock."
  },
  {
    id: 4,
    timestamp: "2023-07-04 08:20 AM",
    manager: "Emily Davis",
    note: "Order shipped via express delivery."
  },
  {
    id: 5,
    timestamp: "2023-07-05 01:15 PM",
    manager: "Michael Brown",
    note: "Customer requested a refund due to damaged item."
  },
  {
    id: 6,
    timestamp: "2023-07-06 11:30 AM",
    manager: "Sarah Wilson",
    note: "Order delivered and confirmed by customer."
  },
  {
    id: 7,
    timestamp: "2023-07-07 04:55 PM",
    manager: "David Thompson",
    note: "Customer inquired about order status."
  },
  {
    id: 8,
    timestamp: "2023-07-08 02:40 PM",
    manager: "Jessica Martinez",
    note: "Product substitution requested by customer."
  },
  {
    id: 9,
    timestamp: "2023-07-09 09:05 AM",
    manager: "Christopher Lee",
    note: "Order returned due to wrong item received."
  },
  {
    id: 10,
    timestamp: "2023-07-10 12:18 PM",
    manager: "Michelle Clark",
    note: "Customer provided positive feedback on product quality."
  }
];