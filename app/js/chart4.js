// 地图
function renderChart4() {
  const dom = document.getElementById("chart4");
  const chart = echarts.init(dom);

  const year = Data_Date;
  const mapData = [];

  for (let i = 0; i < Data_Date.length; i += 1) {
    const data = [];
    const date = Data_Date[i]
    for (let province in geoCoordMap) {
      data.push({
        year: date,
        name: province,
        value: Data_RumourLoc_DailyCount[province] ? Data_RumourLoc_DailyCount[province][i] : 0,
      });
    }
    mapData.push(data);
  }

  for (var i = 0; i < mapData.length; i++) {
    mapData[i].sort(function sortNumber(a, b) {
      return a.value - b.value
    });
  }

  echarts.registerMap('china', chinaGEOJSON);
  const convertData = function(data) {
    const res = [];
    for (let i = 0; i < data.length; i++) {
      let geoCoord = geoCoordMap[data[i].name];
      if (geoCoord) {
        res.push({
          name: data[i].name,
          value: geoCoord.concat(data[i].value)
        });
      }
    }
    return res;
  };
  
  const optionXyMap01 = {
    timeline: {
      data: year,
      axisType: 'category',
      autoPlay: true,
      playInterval: 3000,
      left: '0',
      right: '0',
      bottom: '3%',
      label: {
        normal: {
          textStyle: {
            color: '#000',
          }
        },
        emphasis: {
          textStyle: {
            color: '#000'
          }
        }
      },
      symbolSize: 10,
      lineStyle: {
        color: '#555'
      },
      checkpointStyle: {
        borderColor: '#777',
        borderWidth: 2
      },
      controlStyle: {
        showNextBtn: true,
        showPrevBtn: true,
        normal: {
          color: '#666',
          borderColor: '#666'
        },
        emphasis: {
          color: '#aaa',
          borderColor: '#aaa'
        }
      },
    },
    baseOption: {
      animation: true,
      animationDuration: 1000,
      animationEasing: 'cubicInOut',
      animationDurationUpdate: 1000,
      animationEasingUpdate: 'cubicInOut',
      grid: {
        bottom: '10%',
      },
      tooltip: {
        trigger: 'axis', // hover触发器
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
          type: 'shadow', // 默认为直线，可选为：'line' | 'shadow'
          shadowStyle: {
            color: 'rgba(150,150,150,0.1)' //hover颜色
          }
        },
        textStyle: {
          fontFamily: 'gbk',
        },
      },
      geo: {
        show: true,
        map: 'china',
        roam: true,
        zoom: 1,
        center: [105, 33],
        scaleLimit: {
          min: 1,
          max: 3,
        },
        label: {
          normal: {
            show: false,
          },
          emphasis: {
            show: false,
          }
        },
        itemStyle: {
          emphasis: {
            areaColor: '#bfcde2',
          }
        }
      },
    },
    options: []
  };

  for (var n = 0; n < year.length; n++) {
    const date = year[n].split('/');
    const time = `${date[0]}年${date[1]}月${date[2]}日`;
    optionXyMap01.options.push({
      title:[{
        text: time,
        left: 'center',
        top: '3%',
        textStyle: {
          color: '#000',
          fontSize: 15,
          fontFamily: 'gbk',
          color: 'RGB(65, 88, 119)',
        }
      }],
      series: [
        {
          type: 'map',
          map: 'china',
          geoIndex: 0,
          aspectScale: 0.75, //长宽比
          showLegendSymbol: false, // 存在legend时显示
          label: {
            normal: {
              show: false
            },
            emphasis: {
              show: false,
              textStyle: {
                color: '#fff'
              }
            }
          },
          roam: true,
          itemStyle: {
            normal: {
              areaColor: '#031525',
              borderColor: '#FFFFFF',
            },
            emphasis: {
              areaColor: '#2B91B7'
            }
          },
          animation: false,
          data: mapData
        },
        {
          type: 'effectScatter',
          coordinateSystem: 'geo',
          data: convertData(mapData[n].sort(function(a, b) {
            return b.value - a.value;
          }).slice(0, 20)),
          symbolSize: function(val) {
            return val[2] * 10;
          },
          tooltip: {
            trigger: 'item',
            formatter: params => `${time}<br>${params.name}谣言数量：${params.value[2]}`,
            textStyle: {
              fontFamily: 'gbk',
            }
          },
          showEffectOn: 'render',
          rippleEffect: {
            brushType: 'stroke'
          },
          hoverAnimation: true,
          label: {
            normal: {
              formatter: '{b}',
              position: 'right',
              show: true,
              textStyle: {
                fontFamily: 'gbk',
              }
            }
          },
          itemStyle: {
            normal: {
              color: '#465975',
              shadowBlur: 10,
              shadowColor: '#465975'
            }
          },
          zlevel: 1
        },
      ]
    })
  }
  chart.setOption(optionXyMap01);
  window.c = chart;
}