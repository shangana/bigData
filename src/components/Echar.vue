<template>
  <div class="echars">
    <div id="Roundpiechart" style="width: 560px;height:400px;float: left;"></div>
    <div id="Foldlinediagram" style="width: 560px;height:400px;float: left;"></div>
  </div>
</template>

<script>
export default {
  props: {
  },
  data () {
    return {
    };
  },
  mounted () {
    this.init();
  },
  methods: {
    init () {
      // 基于准备好的dom，初始化echarts实例
      var myChart1 = this.$echarts.init(document.getElementById('Roundpiechart'));
      var myChart2 = this.$echarts.init(document.getElementById('Foldlinediagram'));
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
          data: ['直接输入网址或书签', '搜索引擎', '其他外部链接', '站内来源'],
        },
        series: [
          {
            type: 'pie',
            radius: '65%',
            center: ['50%', '50%'],
            selectedMode: 'single',
            data: [
              {
                value: 200,
                name: '直接输入网址或书签',
              },
              {
                value: 535, name: '搜索引擎',
              },
              {
                value: 510, name: '其他外部链接',
              },
              {
                value: 634, name: '站内来源',
              },
            ],
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

      let option2 = {
        title: {
        },
        tooltip: {
          trigger: 'axis',
        },

        legend: {
          data: ['直接输入网址或书签', '搜索引擎', '其他外部链接', '站内来源'],
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true,
        },
        toolbox: {
          feature: {
            saveAsImage: {},
          },
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: ['00:00', '04:00', '08:00', '12:00', '16:00', '20:00', '24:00'],
        },
        yAxis: {
          type: 'value',
        },
        series: [
          {
            name: '直接输入网址或书签',
            type: 'line',
            stack: '总量',
            data: [120, 132, 101, 134, 90, 230, 210],
          },
          {
            name: '搜索引擎',
            type: 'line',
            stack: '总量',
            data: [220, 182, 191, 234, 290, 330, 310],
          },
          {
            name: '其他外部链接',
            type: 'line',
            stack: '总量',
            data: [150, 232, 201, 154, 190, 330, 410],
          },
          {
            name: '直接访问',
            type: 'line',
            stack: '总量',
            data: [320, 332, 301, 334, 390, 330, 320],
          },
          {
            name: '站内来源',
            type: 'line',
            stack: '总量',
            data: [820, 932, 901, 934, 1290, 1330, 1320],
          },
        ],
      };
      // 使用刚指定的配置项和数据显示图表。
      myChart1.setOption(option1);
      myChart2.setOption(option2);
    },
  },
  components: {
  },
};
</script>

<style lang="scss" scope>
.echars {
  margin-top: 20px;
}
</style>
