import { Box } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { columns, rows } from "./data";

import Header from "../../components/Header";

const Invoices = () => {
  return (
        <Box sx={{ height: 600, width: '98%', mx: "auto", mt: 2 }}>

      <Header title={"INVOICES"} subtitle={"Welcome to your Invoices"} />
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