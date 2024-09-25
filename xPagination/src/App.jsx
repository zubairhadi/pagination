import axios from "axios";
import Pagination from "./Components/Pagination";
import React, { useEffect, useState } from "react";
import EmployeeTable from "./Components/EmployeeTable";

function App() {
  const [employeeData, setEmployeeData] = useState([]);
  const [loading, setLoading] = useState(false);
  const employeePerPage = 10;
  const [currentPage, setCurrentPage] = useState(0);

  let getEmployeeData = async () => {
    setLoading(true);
    let url =
      "https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json";
    try {
      let response = await axios.get(url);
      setEmployeeData(response.data);
    } catch (error) {
      alert("failed to fetch data");
    }
    setLoading(false);
  };

  useEffect(() => {
    getEmployeeData();
  }, []);

  const totalEmployees = employeeData.length;
  let indexOfLastEmployee = Math.ceil(totalEmployees / employeePerPage);

  let dataToBeRendered = employeeData.slice(
    currentPage * employeePerPage,
    currentPage * employeePerPage + employeePerPage
  );

  var prev = () => {
    if (currentPage > 0) setCurrentPage((prevState) => prevState - 1);
  };

  var next = () => {
    if (currentPage < indexOfLastEmployee - 1)
      setCurrentPage((prevState) => prevState + 1);
  };

  return (
    <>
      <h1>Employee Data Table</h1>
      <EmployeeTable data={dataToBeRendered} loading={loading} />
      <Pagination currentPage={currentPage} prev={prev} next={next} />
    </>
  );
}

export default App;
