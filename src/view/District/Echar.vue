<template>
  <section>
    <div id="area" style="width:580px;height:400px;float: left;"></div>
    <div id="Roundpiechart" style="width: 480px;height:400px;float: left;"></div>
  </section>
</template>

<script>
export default {
  data () {
    return {
    };
  },
  mounted () {
    console.log(111);
    this.init();
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
          data: ['广东省', '福建省', '江西省', '江苏省', '北京省', '其他省'],
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
                name: '广东省',
              },
              {
                value: 535,
                name: '福建省',
              },
              {
                value: 510,
                name: '江西省',
              },
              {
                value: 634,
                name: '江苏省',
              },
              {
                value: 634,
                name: '北京省',
              },
              {
                value: 634,
                name: '其他省',
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
      let mydata = [
        {name: '北京', value: '100'}, {name: '天津', value: this.randomData()},
        {name: '上海', value: this.randomData()}, {name: '重庆', value: this.randomData()},
        {name: '河北', value: this.randomData()}, {name: '河南', value: this.randomData()},
        {name: '云南', value: this.randomData()}, {name: '辽宁', value: this.randomData()},
        {name: '黑龙江', value: this.randomData()}, {name: '湖南', value: this.randomData()},
        {name: '安徽', value: this.randomData()}, {name: '山东', value: this.randomData()},
        {name: '新疆', value: this.randomData()}, {name: '江苏', value: this.randomData()},
        {name: '浙江', value: this.randomData()}, {name: '江西', value: this.randomData()},
        {name: '湖北', value: this.randomData()}, {name: '广西', value: this.randomData()},
        {name: '甘肃', value: this.randomData()}, {name: '山西', value: this.randomData()},
        {name: '内蒙古', value: this.randomData()}, {name: '陕西', value: this.randomData()},
        {name: '吉林', value: this.randomData()}, {name: '福建', value: this.randomData()},
        {name: '贵州', value: this.randomData()}, {name: '广东', value: this.randomData()},
        {name: '青海', value: this.randomData()}, {name: '西藏', value: this.randomData()},
        {name: '四川', value: this.randomData()}, {name: '宁夏', value: this.randomData()},
        {name: '海南', value: this.randomData()}, {name: '台湾', value: this.randomData()},
        {name: '香港', value: this.randomData()}, {name: '澳门', value: this.randomData()},
      ];
      let optionMap = {
        ackgroundColor: '#FFFFFF',
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
          data: mydata, // 数据
        }],
      };
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
