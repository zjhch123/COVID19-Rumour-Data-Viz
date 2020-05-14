// 政府每日行动数量/每日谣言数量的关系
function renderChart3() {
    const dom = document.getElementById("chart3");
    const chart = echarts.init(dom);
    const option = {
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          crossStyle: {
            color: '#999'
          }
        }
      },
      grid: {
        left: '3%',
        right: '3%',
        bottom: '3%',
        containLabel: true
      },
      legend: {
        data: ['政府每日行动数', '每日谣言数量']
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
          name: '政府每日行动数',
          splitLine: {show: false},
        },
        {
          type: 'value',
          name: '每日谣言数量',
          splitLine: {show: false},
        }
      ],
      series: [
        {
          name: '每日谣言数量',
          type: 'line',
          yAxisIndex: 1,
          data: Data_RumourDailyIncreseCount,
          lineStyle: {
            color: '#f76d6d',
          }
        },
        {
          name: '政府每日行动数',
          type: 'bar',
          yAxisIndex: 0,
          data: Data_GovDailyOpreationCount,
        },
      ]
    };
    chart.setOption(option, true);
  }