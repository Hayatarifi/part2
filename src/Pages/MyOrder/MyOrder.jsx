import React, { useContext, useEffect } from "react";
import { OrderContext } from "../../context/OrderContext";
import Loader from "../../components/Loader/Loader";
import "./MyOrders.css";
export default function MyOrders() {
  let { orders, isLoading, getOrders } = useContext(OrderContext);

  useEffect(() => {
    getOrders();
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="pt-5">
      {orders && orders.length > 0 ? (
        orders.map((item, index) => (
          <div key={index}>
            <h6>Order ID: {item._id} </h6>
            <table className="table table-bordered w-50">
              <thead className="thead-dark">
                <tr>
                  <th scope="col">Address</th>
                  <th scope="col">Final price</th>
                  <th scope="col">Phone number</th>
                  <th scope="col">Payment method</th>
                  <th scope="col">Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{item.address}</td>
                  <td>{item.finalPrice}</td>
                  <td>{item.phoneNumber}</td>
                  <td>{item.paymentType}</td>
                  <td>{item.status}</td>
                </tr>
              </tbody>
            </table>
          </div>
        ))
      ) : (
        <p>No orders</p>
      )}
    </div>
  );
}
