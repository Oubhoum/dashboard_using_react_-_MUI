import Pie from './Pie';

import Header from '../../components/Header';

const PieChart = () => {
  
  return (
    <>
      <Header title={"PIE CHART"} subtitle={"Welcome to your Pie Chart"} />
      <Pie isDashboard={false} />
    </>
  )
}

export default PieChart;