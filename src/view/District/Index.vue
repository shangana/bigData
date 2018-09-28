<template>
  <section class="sesopnw">
    <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
      <el-tab-pane label="今天" name="first">
        <Table class="tables" :tableData="echarData"></Table>
      </el-tab-pane>
      <el-tab-pane label="昨天" name="second">
        <Table class="tables" :tableData="echarData"></Table>
      </el-tab-pane>
      <el-tab-pane label="最近7日" name="third">
        <Table class="tables" :tableData="echarData"></Table>
      </el-tab-pane>
      <el-tab-pane label="最近30日" name="four">
        <Table class="tables" :tableData="echarData"></Table>
      </el-tab-pane>
    </el-tabs>
    <Echar :tableData="tableData" :echarData="echarData"></Echar>
  </section>
</template>

<script>
import Table from './Table';
import Echar from './Echar';
import service from '@/service';
export default {
  data () {
    return {
      activeName: 'first',

      tableData: [],
      echarData: [],
      reqData: {},
    };
  },
  created () {
    this.getDistrice();
  },
  methods: {
    async getDistrice () {
      let res = await service.fetchDistrice(this.reqData);
      this.tableData = res.all_data;
      this.echarData = res.data;
    },
    handleClick (tab, event) {
      if (tab.name === 'first') {
        this.reqDataCount = {};
        this.reqData = {};
      } else {
        let startDay = 0;
        let endDay = 0;
        if (tab.name === 'second') {
          // 昨天
          startDay = 1;
        } else if (tab.name === 'third') {
          // 最近七日
          startDay = 7;
        } else {
          // 最近 30 日
          startDay = 30;
        }
        let [startTime, endTime] = this.setReqDate(startDay, endDay);
        this.reqDataCount = {
          start_time: startTime,
          end_time: endTime,
        };
        this.reqData = Object.assign({}, this.reqData, {
          start_time: startTime,
          end_time: endTime,
        });
      }
      this.getDistrice();
    },
    setReqDate (startDay, endDay) {
      let startDate = new Date();
      startDate.setHours(0);
      startDate.setMinutes(0);
      startDate.setSeconds(0);
      startDate.setMilliseconds(0);
      startDate.setDate(new Date().getDate() - startDay);
      let startTime = Math.round(new Date(startDate).getTime() / 1000);

      let endData = new Date();
      endData.setDate(new Date().getDate() - endDay);
      let endTime = Math.round(new Date(endData).getTime() / 1000);

      return [startTime, endTime];
    },
  },
  components: {
    Table, Echar,
  },
};
</script>

<style lang='scss' scoped>
.sesopnw {
  position: relative;
}
.tables {
  position: absolute;
  top: 430px;
  left: 0;
}
</style>
<style>
.el-tabs__content {
  overflow: inherit;
}
</style>
