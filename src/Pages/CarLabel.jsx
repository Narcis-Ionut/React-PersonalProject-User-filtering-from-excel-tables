import React, { useRef } from "react";
import "./CarLabel.css";
import { useReactToPrint } from "react-to-print";
const CarLabel = ({ row }) => {
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: "Car-Pass",
  });
  return (
    <div className="Car-label">
      <div className="car-pass" ref={componentRef}>
        <h3 className="label-Name">Name: {row.Name}</h3>
        <h3 className="label-Surname">Surname: {row.Surname}</h3>
        <h2 className="label-Dep">Department: {row.Department}</h2>
        <h2 className="label-Poc">POC: {row.POC}</h2>
      </div>
      <button className="btn-print" onClick={handlePrint}>
        Car Pass
      </button>
    </div>
  );
};
export default CarLabel;
