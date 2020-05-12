// 政府每日行动数量/每日谣言数量的关系
function renderChart3() {
    const dom = document.getElementById("chart3");
    const chart = echarts.init(dom);
    const option = {
      angleAxis: {},
      radiusAxis: {
        type: 'category',
        data: Data_Date,
        z: 10
    },
      polar: {
      },
      series: [{
        type: 'bar',
        data: Data_GovDailyOpreationCount,
        coordinateSystem: 'polar',
        name: '政府每日行动数',
        stack: 'a'
      }, {
        type: 'bar',
        data: Data_RumourDailyIncreseCount,
        coordinateSystem: 'polar',
        name: '每日谣言数量',
        stack: 'a'
      }],
      legend: {
        show: true,
        data: ['政府每日行动数', '每日谣言数量']
      },

      // tooltip: {
      //   trigger: 'axis',
      //   axisPointer: {
      //     crossStyle: {
      //       color: '#999'
      //     }
      //   }
      // },
      // grid: {
      //   left: '3%',
      //   right: '4%',
      //   bottom: '3%',
      //   containLabel: true
      // },
      // legend: {
      //   data: ['政府每日行动数', '每日谣言数量']
      // },
      // xAxis: [
      //   {
      //     type: 'category',
      //     data: Data_Date,
      //   }
      // ],
      // yAxis: [
      //   {
      //     type: 'value',
      //     name: '政府每日行动数',
      //   },
      //   {
      //     type: 'value',
      //     name: '每日谣言数量',
      //   }
      // ],
      // series: [
      //   {
      //     name: '政府每日行动数',
      //     type: 'bar',
      //     data: Data_GovDailyOpreationCount,
      //   },
      //   {
      //     name: '每日谣言数量',
      //     type: 'line',
      //     yAxisIndex: 1,
      //     data: Data_RumourDailyIncreseCount,
      //   }
      // ]
    };
    chart.setOption(option, true);
  }