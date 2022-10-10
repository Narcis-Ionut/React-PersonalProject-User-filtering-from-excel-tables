import React, { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import "./PersonLabel.css";

const PersonLabel = ({ row }) => {
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: "Person-Label",
  });
  return (
    <div className="person-label">
      <div className="person" ref={componentRef}>
        <h3 className="label-Name">Name: {row.Name}</h3>
        <h3 className="label-Surname">Surname: {row.Surname}</h3>
        <h2 className="label-Dep">Department: {row.Department}</h2>
        <h2 className="label-Poc">POC: {row.POC}</h2>
      </div>
      <button className="btn-print" onClick={handlePrint}>
        Print
      </button>
    </div>
  );
};
export default PersonLabel;
