import { Paper, Stack, Typography, useTheme } from '@mui/material'
import Pie from '../pie/Pie'
import Bar from '../../pages/barChart/Bar'
import Geo from '../../pages/geography/Geo'

const Row3 = () => {

  const theme = useTheme();

  return (

    <Stack
      gap={2}
      direction="row"
      flexWrap={"wrap"}
      // sx={{
      //   // display: "flex",
      //   // justifyContent: "space-between",
      //   // marginTop: "20px",
      //   // maxHeight: "900px",
      //   // flexGrow: 1,
      //   // mt: { 3 },
      // }}
      mt={3}
    >

      <Paper
        sx={{
          flexGrow: 1,
          minWidth: "400px",
          width: "33%",
        }}
      >

        <Typography
          color={theme.palette.secondary.main}
          sx={{ padding: "30px 30px 0 30px" }}
          variant="h6"
        >
          Campaign
        </Typography>
        <Pie isDashboard={true} />

        <Typography variant="h6" align="center" sx={{ mt: "15px" }}>
          $48,352 revenue generated
        </Typography>
        <Typography variant="body2" px={0.7} pb={3} align="center">
          Includes extra misc expenditures and costs
        </Typography>
      </Paper>


      <Paper sx={{ flexGrow: 1, minWidth: "400px", width: "28%", }}>
        <Typography
          color={theme.palette.secondary.main}
          variant="h6"
          fontWeight="600"
          sx={{ padding: "30px 30px 0 30px" }}
        >
          Sales Quantity
        </Typography>


        <Bar isDashboard={true} />


      </Paper>


      <Paper sx={{ flexGrow: 1, minWidth: "400px", width: "33%"}}>
        <Geo isDashboard={true} />
      </Paper>


    </Stack>
  )
}

export default Row3