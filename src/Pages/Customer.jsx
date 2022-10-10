import React, { useState } from "react";
import PersonLabel from "./PersonLabel";
import CarLabel from "./CarLabel";
import "./Customer.css";
import {
  GridComponent,
  Page,
  Selection,
  Inject,
  Edit,
  Toolbar,
  Sort,
  Filter,
} from "@syncfusion/ej2-react-grids";

const Customer = ({ tableData }) => {
  const [row, setRow] = useState([]);
  const selectedRow = (e) => {
    setRow(e.data);
  };
  return (
    <div className=" user-filter m-2 md:m-10 p-2 md:p-10 rounded-3xl">
      <div className="grid-pages">
        <PersonLabel row={row} />
        <CarLabel row={row} />
      </div>
      <GridComponent
        id="gridcomp"
        rowSelected={selectedRow}
        dataSource={tableData}
        allowPaging
        allowSorting
        toolbar={["Search", "Add", "Delete"]}
        editSettings={{
          allowAdding: true,
          allowDeleting: true,
          allowEditing: true,
        }}
        width="auto"
      >
        <Inject services={[Page, Toolbar, Selection, Edit, Sort, Filter]} />
      </GridComponent>
    </div>
  );
};
export default Customer;
