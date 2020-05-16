// 每日谣言增长数量vs每日新增感染人数
function renderChart2() {
  const dom = document.getElementById("chart2");
  const chart = echarts.init(dom);
  const option = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        crossStyle: {
          color: '#999'
        }
      },
      textStyle: {
        fontFamily: 'gbk',
      }
    },
    grid: {
      left: '12%',
      right: '15%',
      bottom: '14%',
    },
    legend: {
      data: ['每日谣言增长量', '每日新增感染人数'],
      textStyle: {
        fontFamily: 'gbk',
      }
    },
    xAxis: [
      {
        type: 'category',
        data: Data_Date,
      }
    ],
    yAxis: [
      {
        type: 'value',
        name: '每日谣言增长量',
        min: 0,
        max: 50,
        splitLine: {show: false},
        nameTextStyle: {
          fontFamily: 'gbk',
        }
      },
      {
        type: 'value',
        name: '每日新增感染人数',
        min: 0,
        max: 16000,
        splitLine: {show: false},
        nameTextStyle: {
          fontFamily: 'gbk',
        }
      }
    ],
    series: [
      {
        name: '每日新增感染人数',
        type: 'line',
        yAxisIndex: 1,
        data: Data_VirusDailyIncreseCount,
        lineStyle: {
          color: '#f76d6d',
        }
      },
      {
        name: '每日谣言增长量',
        type: 'bar',
        yAxisIndex: 0,
        data: Data_RumourDailyIncreseCount,
      },
    ]
  };
  chart.setOption(option, true);
}