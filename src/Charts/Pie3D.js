import React from 'react'
import ReactDOM from 'react-dom'
import FusionCharts from 'fusioncharts'
import Charts from 'fusioncharts/fusioncharts.charts'
import ReactFC from 'react-fusioncharts'
/*Theme of fusion */
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion'

ReactFC.fcRoot(FusionCharts, Charts, FusionTheme)

const Pie3D = ({ data }) => {
  const myDataSource = {
    chart: {
      caption: 'Users Most Preferred Programming Language [2017-18]',
      //subCaption: 'In MMbbl = One Million barrels',
      xAxisName: 'Languages',
      yAxisName: 'Users',
      numberSuffix: 'K',
      theme: 'fusion',
    },
    data: data,
  }
  const chartConfigs = {
    type: 'pie3D',
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

export default Pie3D
