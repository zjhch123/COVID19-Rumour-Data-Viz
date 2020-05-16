// 每日政府行动数量/每日谣言增长量的关系
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
        },
        textStyle: {
          fontFamily: 'gbk',
        }
      },
      grid: {
        left: '3%',
        right: '3%',
        bottom: '3%',
        containLabel: true
      },
      legend: {
        data: ['每日政府行动数', '每日谣言增长量'],
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
          name: '每日政府行动数',
          splitLine: {show: false},
          min: 0,
          max: 12,
          nameTextStyle: {
            fontFamily: 'gbk',
          }
        },
        {
          type: 'value',
          name: '每日谣言增长量',
          splitLine: {show: false},
          min: 0,
          max: 50,
          nameTextStyle: {
            fontFamily: 'gbk',
          }
        }
      ],
      series: [
        {
          name: '每日谣言增长量',
          type: 'line',
          yAxisIndex: 1,
          data: Data_RumourDailyIncreseCount,
          lineStyle: {
            color: '#f76d6d',
          }
        },
        {
          name: '每日政府行动数',
          type: 'bar',
          yAxisIndex: 0,
          data: Data_GovDailyOpreationCount,
        },
      ]
    };
    chart.setOption(option, true);
  }