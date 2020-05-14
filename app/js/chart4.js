// 地图
function renderChart4() {
  const dom = document.getElementById("chart4");
  const chart = echarts.init(dom);
  const uploadedDataURL = "./js/china.geojson";

  const geoCoordMap = {
    '台湾': [121.5135,25.0308],
    '黑龙江': [127.9688, 45.368],
    '内蒙古': [110.3467, 41.4899],
    "吉林": [125.8154, 44.2584],
    '北京': [116.4551, 40.2539],
    "辽宁": [123.1238, 42.1216],
    "河北": [114.4995, 38.1006],
    "天津": [117.4219, 39.4189],
    "山西": [112.3352, 37.9413],
    "陕西": [109.1162, 34.2004],
    "甘肃": [103.5901, 36.3043],
    "宁夏": [106.3586, 38.1775],
    "青海": [101.4038, 36.8207],
    "新疆": [87.9236, 43.5883],
    "西藏": [91.11, 29.97],
    "四川": [103.9526, 30.7617],
    "重庆": [108.384366, 30.439702],
    "山东": [117.1582, 36.8701],
    "河南": [113.4668, 34.6234],
    "江苏": [118.8062, 31.9208],
    "安徽": [117.29, 32.0581],
    "湖北": [114.3896, 30.6628],
    "浙江": [119.5313, 29.8773],
    "福建": [119.4543, 25.9222],
    "江西": [116.0046, 28.6633],
    "湖南": [113.0823, 28.2568],
    "贵州": [106.6992, 26.7682],
    "云南": [102.9199, 25.4663],
    "广东": [113.12244, 23.009505],
    "广西": [108.479, 23.1152],
    "海南": [110.3893, 19.8516],
    '上海': [121.4648, 31.2891],
  };

  $(function() {
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

    $.getJSON(uploadedDataURL, function(geoJson) {
      echarts.registerMap('china', geoJson);
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
          left: '5%',
          right: '5%',
          bottom: '3%',
          label: {
            normal: {
              textStyle: {
                color: '#000'
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
            }
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
        optionXyMap01.options.push({
          title:[{
            text: `${date[0]}年${date[1]}月${date[2]}日`,
            left: 'center',
            top: '3%',
            textStyle: {
              color: '#000',
              fontSize: 15,
              fontFamily: 'gbk',
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
                formatter: function (params) {
                  if(typeof(params.value)[2] == "undefined"){
                    return params.name + ' : ' + params.value;
                  }else{
                    return params.name + ' : ' + params.value[2];
                  }
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
                  show: true
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
    });
  });
}