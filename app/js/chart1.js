// 每日谣言增长数量vs谣言总量
function renderChart1() {
  const dom = document.getElementById("chart1");
  const chart = echarts.init(dom);
  const option = {
    legend: {
      data: ['每日谣言总量', '每日谣言增长量', '数据'],
      textStyle: {
        fontFamily: 'gbk',
      }
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow',
      },
      textStyle: {
        fontFamily: 'gbk',
      }
    },
    grid: {
      left: '12%',
      right: '12%',
      bottom: '14%',
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
        splitLine: {show: false},
        nameTextStyle: {
          fontFamily: 'gbk',
        }
      },
      {
        type: 'value',
        name: '每日谣言总量',
        splitLine: {show: false},
        nameTextStyle: {
          fontFamily: 'gbk',
        }
      }
    ],
    series: [
      {
        name: '每日谣言增长量',
        type: 'line',
        data: Data_RumourDailyIncreseCount,
        lineStyle: {
          color: '#f76d6d',
        }
      },
      {
        name: '每日谣言总量',
        type: 'bar',
        yAxisIndex: 1,
        data: Data_RumourDailyCount,
      },
    ]
  };
  chart.setOption(option, true);
}
