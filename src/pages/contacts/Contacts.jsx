import { Box } from '@mui/material'
import { columns, rows } from './data'
import { DataGrid, GridToolbar } from '@mui/x-data-grid';

const Contacts = () => {
  return (
        <Box sx={{ height: 600, width: '98%', mx: "auto", mt: 2 }}>
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