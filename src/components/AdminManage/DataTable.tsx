import { useState, useEffect } from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { adminGetUserData } from "../../axiosRequest/api/admin";

//Define the column field types
const columns: GridColDef[] = [
  { field: "_id", headerName: "ID", width: 100 },
  { field: "username", headerName: "User Name", width: 150 },
  { field: "firstName", headerName: "First name", width: 130 },
  { field: "lastName", headerName: "Last name", width: 130 },
  { field: "email", headerName: "Email", width: 250 },
];

// Render a display table with fetched data
export default function DataTable() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await adminGetUserData();
        setUsers(response.data);
      } catch (error: any) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  return (
    <DataGrid
      sx={{ height: 700, width: "100%", sm: "600" }}
      getRowId={(row) => row._id}
      rows={users}
      columns={columns}
      pageSize={10}
      rowsPerPageOptions={[5]}
      checkboxSelection
    />
  );
}
