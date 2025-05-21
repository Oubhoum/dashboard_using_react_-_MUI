import { Box } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { columns, rows } from "./data";

const Invoices = () => {
  return (
        <Box sx={{ height: 600, width: '98%', mx: "auto", mt: 2 }}>
      <DataGrid
      checkboxSelection
      showToolbar
      slots={{
        toolbar : GridToolbar
      }}
        rows={rows}
        //@ts-ignore        
        columns={columns} />
    </Box>
    )
}

export default Invoices;