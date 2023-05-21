import React from 'react'
import FusionCharts from 'fusioncharts'
import Charts from 'fusioncharts/fusioncharts.charts'
import ReactFC from 'react-fusioncharts'
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.candy'
ReactFC.fcRoot(FusionCharts, Charts, FusionTheme)
const Bar3D = ({ data }) => {
  const myDataSource = {
    chart: {
      caption: 'Most Forked Out',
      yAxisName: 'Stars',
      xAxisName: 'Repos',
      xAxisNameFontSize: '16px',
      yAxisNameFontSize: '16px',
    },
    data: data,
  }
  const chartConfigs = {
    type: 'bar3D',
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

export default Bar3D
