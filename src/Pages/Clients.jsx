import React, { useState } from "react";
import * as XLSX from "xlsx";
import Header from "../Components/Header";
import Customer from "./Customer";
const Clients = () => {
  const [fileName, setfileName] = useState(null);
  const [tableData, setTableData] = useState([]);
  const handleFile = async (e) => {
    const file = e.target.files[0];
    setfileName(file.name);
    const data = await file.arrayBuffer();
    const workbook = XLSX.readFile(data);
    const workSheet = workbook.Sheets[workbook.SheetNames[0]];
    const jsonData = XLSX.utils.sheet_to_json(workSheet, {
      header: 2,
      defval: "",
    });
    let tableDataAux = [];
    jsonData.map((row, ind) => {
      tableDataAux.push({
        Name: row.Forename,
        Surname: row.Surname,
        Department: row.Department,
        POC: row.POC,
        Parking: row.Parking,
        ["Phone Number"]: row["Phone Number"],
        ["Start Date"]: row["Start Date"],
        ["End Date"]: row["End Date"],
      });
    });
    setTableData(tableDataAux);
  };
  return (
    <div className="m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="Page" title="Clients" />
      <input type="file" onChange={(e) => handleFile(e)}></input>
      {fileName && (
        <>
          <p className="mt-2 font-semibold">
            Filename: <span>{fileName}</span>
          </p>
          <Customer tableData={tableData} />
        </>
      )}
    </div>
  );
};
export default Clients;
