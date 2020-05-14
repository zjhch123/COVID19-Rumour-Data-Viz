// 谣言浏览量top5
const maxData = 1800000;

function renderChart5() {
  const dom = document.getElementById("chart5");
  const chart = echarts.init(dom);
  const option = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow',
        snap: false,
      },
      formatter: ([{ dataIndex }]) => {
        return `${Data_RumourTop20[dataIndex][1]}<br>浏览量 : ${Data_RumourTop20[dataIndex][2]}<br>评论量 : ${Data_RumourTop20[dataIndex][3]}`
      },
      textStyle: {
        fontFamily: 'gbk',
      }
    },
    legend: {
      data: ['view', 'comment'],
      show: false,
    },
    grid: {
      containLabel: true,
      left: 10,
      top: '0',
      bottom: '0',
      right: 80,
    },
    xAxis: [{
      splitLine: {show: false},
      axisLabel: {show: false},
      axisTick: {show: false},
      axisLine: {show: false},
    }, {
      splitLine: {show: false},
      axisLabel: {show: false},
      axisTick: {show: false},
      axisLine: {show: false},
      min: 0,
      max: 5000,
    }],
    yAxis: [{
      data: Data_RumourTop20.slice(0, 5).map((row, index) => ``),
      inverse: true,
      axisLine: {show: false},
      axisTick: {show: false},
      axisLabel: {
        show: false,
        margin: 30,
        fontSize: 14,
      },
      axisPointer: {
        label: {
          show: true,
          margin: 30
        }
      }
    }],
    series: [{
      name: 'view',
      type: 'pictorialBar',
      symbol: Data_Pic,
      symbolRepeat: true,
      symbolMargin: '8%',
      symbolSize: 20,
      data: Data_RumourTop20.slice(0, 5).map(data => Number(data[2])),
      label: {
        normal: {
          show: true,
          position: 'right',
          offset: [10, 0],
          textStyle: {
            fontSize: 12
          }
        }
      }
    }, {
      name: 'comment',
      type: 'pictorialBar',
      symbol: Data_Comment_Pic,
      symbolRepeat: true,
      symbolMargin: '8%',
      symbolSize: 20,
      barGap: '10%',
      data: Data_RumourTop20.slice(0, 5).map(data => Number(data[3])),
      xAxisIndex: 1,
      label: {
        normal: {
          show: true,
          position: 'right',
          offset: [10, 0],
          textStyle: {
            fontSize: 12
          }
        }
      }
    }]
  };
  chart.setOption(option, true);
}
