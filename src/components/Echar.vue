<template>
  <div class="echars">
    <div id="Roundpiechart" style="width: 600px;height:520px; margin: 0 auto;"></div>
  </div>
</template>

<script>
export default {
  props: {
    tableData: {
      type: Array,
    },
    title: {
      type: String,
    },
  },
  data () {
    return {
    };
  },
  computed: {
    nameArr () {
      return this.tableData.length ? this.tableData.map(item => item.content) : ['无数据'];
    },
    contentArr () {
      return this.tableData.length ? this.tableData.map(item => {
        return {value: item.count, name: item.content};
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
      console.log(this.contentArr);
      // 基于准备好的dom，初始化echarts实例
      var myChart1 = this.$echarts.init(document.getElementById('Roundpiechart'));
      // 指定图表的配置项和数据
      let option1 = {
        title: {
          left: 'center',
          text: this.title,
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
            data: this.contentArr,
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

      // 使用刚指定的配置项和数据显示图表。
      myChart1.setOption(option1);
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
