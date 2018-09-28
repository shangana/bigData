<template>
  <section>
    <div id="area" style="width:580px;height:400px;float: left;"></div>
    <div id="Roundpiechart" style="width: 480px;height:400px;float: left;"></div>
  </section>
</template>

<script>
export default {
  props: {
    tableData: {
      type: Array,
    },
    echarData: {
      type: Array,
    },
  },
  data () {
    return {
    };
  },
  computed: {
    nameArr () {
      return this.echarData.length ? this.echarData.map(item => item.address) : ['无数据'];
    },
    contentDataArr () {
      return this.echarData.length ? this.echarData.map(item => {
        return {value: item.access_count, name: item.address};
      }) : [{name: '无数据', value: 100}];
    },
    // 地图数据
    contentArr () {
      return this.tableData.length ? this.tableData.map(item => {
        return {value: item.access_count, name: item.address};
      }) : [{name: '无数据', value: 100}];
    },
  },
  mounted () {
    this.$watch('contentArr', this.init, {
      deep: true,
    });
  },
  methods: {
    init () {
      // 基于准备好的dom，初始化echarts实例
      var myChart1 = this.$echarts.init(document.getElementById('Roundpiechart'));
      var myChart2 = this.$echarts.init(document.getElementById('area'));
      // 指定图表的配置项和数据
      let option1 = {
        title: {
          left: 'center',
        },
        toolbox: {
          feature: {
            saveAsImage: {},
          },
        },
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c} ({d}%)',
        },
        legend: {
          // orient: 'vertical',
          // top: 'middle',
          bottom: 10,
          left: 'center',
          data: this.nameArr,
        },
        series: [
          {
            type: 'pie',
            radius: '65%',
            center: ['50%', '50%'],
            selectedMode: 'single',
            data: this.contentDataArr,
            itemStyle: {
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)',
              },
            },
          },
        ],
      };

      let optionMap = {
        ackgroundColor: '#FFF',
        title: {
          subtext: '',
          x: 'center',
        },
        tooltip: {
          trigger: 'item',
        },
        toolbox: {
          feature: {
            saveAsImage: {},
          },
        },
        // 左侧小导航图标
        visualMap: {
          show: true,
          x: 'left',
          y: 'center',
          color: ['#5475f5', '#9feaa5', '#85daef', '#74e2ca', '#e6ac53', '#9fb5ea'],
        },
        // 配置属性
        series: [{
          name: '数据',
          type: 'map',
          mapType: 'china',
          roam: true,
          label: {
            normal: {
              show: false, // 省份名称
            },
            emphasis: {
              show: true,
            },
          },
          data: this.contentArr, // 数据
        }],
      };
      console.log(this.contentArr);
      // 使用刚指定的配置项和数据显示图表
      myChart1.setOption(option1);
      myChart2.setOption(optionMap);
    },
    randomData () {
      return Math.round(Math.random() * 500);
    },
  },
  components: {
  },
};
</script>

<style lang='scss' scoped>
</style>
