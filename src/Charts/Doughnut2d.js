import React from 'react'
import FusionCharts from 'fusioncharts'
import Charts from 'fusioncharts/fusioncharts.charts'
import ReactFC from 'react-fusioncharts'
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.candy'
ReactFC.fcRoot(FusionCharts, Charts, FusionTheme)

const Doughnut2d = ({ data }) => {
  const myDataSource = {
    chart: {
      caption: 'Stars per Language',
      //subCaption: 'In MMbbl = One Million barrels',
      // xAxisName: 'Languages',
      // yAxisName: 'Users',
      decimals: 0,
      doughnutRadius: '45%',
      theme: 'candy',
    },
    data: data,
  }
  const chartConfigs = {
    type: 'doughnut2d',
    width: '100%',
    height: 400,
    dataFormat: 'json',
    dataSource: myDataSource,
  }
  return (
    <>
      <ReactFC {...chartConfigs} />
    </>
  )
}

export default Doughnut2d
