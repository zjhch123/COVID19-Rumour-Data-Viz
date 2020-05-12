// 谣言浏览量top5
const maxData = 1800000;

function renderChart5() {
  const dom = document.getElementById("chart5");
  const chart = echarts.init(dom);
  const option = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      },
      formatter: ([{ dataIndex }]) => {
        return `${Data_RumourTop20[dataIndex][1]}`
      },
    },
    grid: {
      containLabel: true,
      left: 20,
      top: '5%',
      bottom: '10%',
      right: 100,
    },
    xAxis: {
      splitLine: {show: false},
      axisLabel: {show: false},
      axisTick: {show: false},
      axisLine: {show: false}
    },
    yAxis: {
      data: Data_RumourTop20.slice(0, 5).map((row, index) => `Top ${index + 1}`),
      inverse: true,
      axisLine: {show: false},
      axisTick: {show: false},
      axisLabel: {
        margin: 30,
        fontSize: 14,
      },
      axisPointer: {
        label: {
          show: true,
          margin: 30
        }
      }
    },
    series: [{
      type: 'pictorialBar',
      symbol: Data_Pic,
      symbolRepeat: true,
      symbolMargin: '5%',
      symbolSize: 50,
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
    }]
  };
  chart.setOption(option, true);
}
