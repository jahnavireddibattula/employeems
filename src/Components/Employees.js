import React from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import AImage from '../logo.svg'; 
import { GrView } from "react-icons/gr";
import { RiEditFill } from "react-icons/ri";
import { RiDeleteBin5Line } from "react-icons/ri";
import { IoIosSearch } from "react-icons/io";
import { GrAddCircle } from "react-icons/gr";
import './Employee.css';
import { GoFilter } from "react-icons/go";
import { Link } from 'react-router-dom';
import { useState } from 'react';
const Employees = () => {
  const initialEmployeeData = [
    { id: 1, name: 'Employee A', department: 'IT', designation: 'Developer', type: 'Full-time', status: 'Active', image: process.env.PUBLIC_URL + '/A.png' },
    { id: 2, name: 'Employee B', department: 'HR', designation: 'Manager', type: 'Part-time', status: 'Inactive', image: process.env.PUBLIC_URL + '/A.png' },
   
    { id: 3, name: 'Employee C', department: 'IT', designation: 'Manager', type: 'Part-time', status: 'Inactive', image: process.env.PUBLIC_URL + '/A.png' },
    { id: 4, name: 'Employee D', department: 'IT', designation: 'Developer', type: 'Full-time', status: 'Active', image: process.env.PUBLIC_URL + '/A.png' },
    { id: 5, name: 'Employee E', department: 'HR', designation: 'Manager', type: 'Part-time', status: 'Inactive', image: process.env.PUBLIC_URL + '/A.png' },
   
    { id: 6, name: 'Employee F', department: 'IT', designation: 'Manager', type: 'Part-time', status: 'Inactive', image: process.env.PUBLIC_URL + '/A.png' },
    { id: 7, name: 'Employee G', department: 'IT', designation: 'Developer', type: 'Full-time', status: 'Active', image: process.env.PUBLIC_URL + '/A.png' },
    { id: 8, name: 'Employee H', department: 'HR', designation: 'Manager', type: 'Part-time', status: 'Inactive', image: process.env.PUBLIC_URL + '/A.png' },
   
    { id: 9, name: 'Employee I', department: 'IT', designation: 'Manager', type: 'Part-time', status: 'Inactive', image: process.env.PUBLIC_URL + '/A.png' },
    { id: 10, name: 'Employee I', department: 'IT', designation: 'Manager', type: 'Part-time', status: 'Inactive', image: process.env.PUBLIC_URL + '/A.png' },
    { id: 11, name: 'Employee I', department: 'IT', designation: 'Manager', type: 'Part-time', status: 'Inactive', image: process.env.PUBLIC_URL + '/A.png' }
 
  ];
  const [employeeData, setEmployeeData] = useState(initialEmployeeData);
  const [searchTerm, setSearchTerm] = useState('');
  const pagination = true;
  const paginationPageSize = 10;
  const paginationPageSizeSelector = [10, 20, 30];
  const handleSearch = (event) => {
    const term = event.target.value.toLowerCase();
    setSearchTerm(term);

    const filteredData = initialEmployeeData.filter(
      (employee) =>
        employee.name.toLowerCase().includes(term) ||
        employee.department.toLowerCase().includes(term) ||
        employee.designation.toLowerCase().includes(term) ||
        employee.type.toLowerCase().includes(term) ||
        employee.status.toLowerCase().includes(term)
    );

    setEmployeeData(filteredData);
  };

  const columnDefs = [
    // { headerName: 'Image', field: 'image', cellRenderer: 'imageRenderer' },
    { headerName: 'Employee Name', field: 'name' },
    { headerName: 'Employee ID', field: 'id' },
    { headerName: 'Department', field: 'department' },
    { headerName: 'Designation', field: 'designation' },
    { headerName: 'Type', field: 'type' },
    { headerName: 'Status', field: 'status' },
    {
      headerName: 'Action',
      cellRenderer: 'actionRenderer',
      cellRendererParams: {
        edit: <RiEditFill />,
        view: <GrView />,
        delete: <RiDeleteBin5Line/>
      },
    },
  ];

  const frameworkComponents = {
    imageRenderer: ImageRenderer,
    actionRenderer: ActionRenderer,
  };

  return (
    <div className="ag-theme-alpine" style={{ height: '500px', width: '105%' }}>
      <h2>All Employees
     <br/> <span className='span'>All Employee Information</span>
      </h2>
     

      <div style={{ justifyContent: 'space-between', marginBottom: '16px' }}>
      <div style={{ position: 'relative', marginRight: '8px' }}>
            <IoIosSearch style={{ position: 'absolute', top: '50%', transform: 'translateY(-50%)', left: '10px',size:"30" }} />
            <input
              type="text"
              placeholder="Search..."
              value={searchTerm}
              onChange={handleSearch}
              style={{
                padding: '10px 10px 10px 30px',
                width: '60%',
                borderRadius: '5px',
                border: '1px solid #ccc',
              }}
            />
          
        
          
        

          <Link to="/add-employee">
          <button
            style={{
              backgroundColor: "#008CBA",
              border: "none",
              color: "white",
              padding: "15px 32px",
              textAlign: "center",
              textDecoration: "none",
              display: 'inline-block',
              borderRadius: "5px",
              marginLeft: "25px"
            }}
          >
            <GrAddCircle size={15} style={{ marginRight: "3px", marginTop: "0.5px" }} />
            Add Employee
          </button>
        </Link>
      <button className='filter' ><GoFilter size={18} style={{marginRight:"3px"}} />Filter</button>
      </div>
     
      </div>
     
      
      
      <AgGridReact
        columnDefs={columnDefs}
        rowData={employeeData}
        frameworkComponents={frameworkComponents}
        pagination={pagination}
    paginationPageSize={paginationPageSize}
    paginationPageSizeSelector={paginationPageSizeSelector}

     />
    </div>
  );
};

const ImageRenderer = (props) => (
  <img
    src={props.value}
    alt={props.data.name}
    className="img-fluid rounded-circle"
    style={{ width: '30px', height: '30px' }}
  />
);

const ActionRenderer = (props) => (
  <div>
    <span style={{ marginRight: '8px' }}>{props.value.edit}</span>
    <span style={{ marginRight: '8px' }}>{props.value.view}</span>
    <span>{props.value.delete}</span>
  </div>
);

export default Employees;
