import { Box } from '@mui/material'
import { columns, rows } from './data'
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import Header from '../../components/Header';

const Contacts = () => {
  return (
    <Box sx={{ height: 600, width: '98%', mx: "auto", mt: 2 }}>

      <Header title={"CONTACTS"} subtitle={"Welcome to your Contacts"} />
      <DataGrid
        showToolbar
        slots={{
          toolbar: GridToolbar,
        }}
        rows={rows}
        // @ts-ignore
        columns={columns}
      />
    </Box>
  )
}

export default Contacts