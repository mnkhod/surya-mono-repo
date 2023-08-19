import TutorLayout from '@/components/layouts/TutorLayout';
import { ColDef, GridOptions } from 'ag-grid-community';
import { AgGridReact } from 'ag-grid-react';
import React from 'react';
import "ag-grid-community/styles/ag-grid.css"; // Core grid CSS, always needed
import "ag-grid-community/styles/ag-theme-material.css"; // Optional theme CSS


const UserDashboard = () => {
  // Mock data for user and recent actions
  const user = {
    name: 'John Doe',
    email: 'john@example.com',
    avatar: 'https://via.placeholder.com/150', // Increased image size
    role: 'Administrator',
    lastLogin: '2x30 AM',
    credit: 5000,
  };
  const recentActions = [
    { action: 'Logged in', timestamp: '20AM' },
    { action: 'Updated profile', timestamp: '202 PM' },
    // Add more recent actions
  ];

  // Ag-Grid column definitions
  const columnDefs: ColDef[] = [
    { headerName: 'Action', field: 'action', sortable: true, filter: true },
    { headerName: 'Timestamp', field: 'timestamp', sortable: true, filter: true },
  ];

  // Ag-Grid options
  const gridOptions: GridOptions = {
    pagination: true,
    paginationPageSize: 10,
  };

  const rowData = recentActions.map((action, index) => ({ ...action, id: index }));

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to update user's information
  };

  const handleAddCredit = (e) => {
    e.preventDefault();
    // Add logic to add credit to user
  };

  return (
    <TutorLayout>
      <main className="flex-1 p-8 w-full">
        <div className="bg-white p-4 shadow rounded mb-6">
          <div className="flex flex-col md:flex-row md:space-x-4">
            <div className="flex justify-center md:justify-start mb-4 md:mb-0">
              <img src={user.avatar} alt="User Avatar" className="w-32 h-32 rounded-full" /> {/* Increased image size */}
            </div>
            <div className="md:pl-4">
              <h2 className="text-lg font-semibold">{user.name}</h2>
              <p className="text-gray-600">{user.email}</p>
              <p className="text-gray-600">{user.role}</p>
              <p className="text-gray-600">Last Login: {user.lastLogin}</p>
              <p className="text-gray-600">Credit: {user.credit}</p>
            </div>
            <div className="md:pl-4">
              <h2 className="text-lg font-semibold">{user.name}</h2>
              <p className="text-gray-600">{user.email}</p>
              <p className="text-gray-600">{user.role}</p>
              <p className="text-gray-600">Last Login: {user.lastLogin}</p>
              <p className="text-gray-600">Credit: {user.credit}</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 mb-6">
          <div className="bg-white p-4 shadow rounded w-full md:w-1/2">
            <h2 className="text-lg font-semibold mb-4">Update User Information</h2>
            <form onSubmit={handleSubmit}>
              {/* ... (form inputs and submit button) */}
            </form>
          </div>
          <div className="bg-white p-4 shadow rounded w-full md:w-1/2">
            <h2 className="text-lg font-semibold mb-4">Add Credit to User</h2>
            <form onSubmit={handleAddCredit}>
              {/* ... (form inputs and submit button) */}
            </form>
          </div>
        </div>

        {/* <div className="bg-white p-4 shadow rounded mb-6">
          <h2 className="text-lg font-semibold mb-4">User Action Log</h2>
          <div className="ag-theme-alpine" style={{ height: '300px', width: '100%' }}>
            <AgGridReact
              pagination={true}
              columnDefs={columnDefs}
              rowData={rowData}
              gridOptions={gridOptions}
              paginationPageSize={10}
              rowClass={"text-2xs"}
              animateRows={true}
              enableCellTextSelection={true}
              isRowSelectable={() => false}
              suppressRowClickSelection={true}
              suppressCellFocus={true}
              suppressMenuHide={true}
              onCellClicked={() => { }}
              domLayout="autoHeight"
              defaultColDef={{
                sortable: true,
                filter: true,
                floatingFilter: true,
              } as ColDef}
            />
            <AgGridReact
              columnDefs={columnDefs}
              rowData={rowData}
              gridOptions={gridOptions}
            />
          </div>
        </div> */}
      </main>
    </TutorLayout>
  );
};

export default UserDashboard;
