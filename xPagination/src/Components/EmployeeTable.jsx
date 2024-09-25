/* eslint-disable react/prop-types */
import React from "react";

const EmployeeTable = ({ data, loading }) => {
  console.log(data);

  if (loading) {
    return <h2>Loading...</h2>;
  }
  return (
    <div>
      <table>
        <thead>
          <tr>
            <td>ID</td>
            <td>Name</td>
            <td>Email</td>
            <td>Role</td>
          </tr>
        </thead>
        <tbody>
          {data?.map((employee) => (
            <tr key={employee.id}>
              <td>{employee.id}</td>
              <td>{employee.name}</td>
              <td>{employee.email}</td>
              <td>{employee.role}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeTable;
