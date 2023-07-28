import React, { useState } from "react";
import { Form, redirect} from "react-router-dom";

/* eslint-disable-next-line */
export interface AddNewReturnFormProps {
  orderId: string;
  reason: string;
  product_desc: string;
  details: string;
}

export async function action({request, params}) {
  const formData = await request.formData();
  const formEntries = Object.fromEntries(formData);
  const url = new URL(request.url);
  console.log("Printing from action:", formEntries);
  return redirect("/");
}

export function AddNewReturnForm() {
  const [formValues, setFormValues] = useState<AddNewReturnFormProps>({
    orderId: "",
    reason: "",
    product_desc: "",
    details: ""
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value
    }));
  };

  return (
    <div className="max-w-md mx-auto w-3/4">
      <h1 className="text-2xl font-bold mb-4">Add Return Request</h1>
      <Form method="post">
        <div className="mb-4">
          <label htmlFor="orderId" className="block mb-2">
            Order ID:
          </label>
          <input
            type="text"
            id="orderId"
            name="orderId"
            value={formValues.orderId}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="reason" className="block mb-2">
            Product Description:
          </label>
          <input
            type="text"
            id="product_desc"
            name="product_desc"
            value={formValues.product_desc}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="reason" className="block mb-2">
            Reason for Return:
          </label>
          <input
            type="text"
            id="reason"
            name="reason"
            value={formValues.reason}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="details" className="block mb-2">
            Additional Details:
          </label>
          <textarea
            id="details"
            name="details"
            value={formValues.details}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded"
            required
          />
        </div>
        <div>
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600" >
            Submit
          </button>
        </div>
      </Form>
    </div>
  );
}

export default AddNewReturnForm;
