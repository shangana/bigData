<template>
  <section>
    <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
      <el-tab-pane label="今天" name="first">
        <Table :tableData="tableData"></Table>
      </el-tab-pane>
      <el-tab-pane label="昨天" name="second">
        <Table :tableData="tableData"></Table>
      </el-tab-pane>
      <el-tab-pane label="前天" name="third">
        <Table :tableData="tableData"></Table>
      </el-tab-pane>
    </el-tabs>
    <el-pagination v-if="hasShowPage"
      @current-change="handleCurrentChange"
      :page-size="10"
      layout="prev, pager, next, jumper"
      :total="count">
    </el-pagination>
  </section>
</template>

<script>
import service from '@/service';
import Table from './Table';
export default {
  data () {
    return {
      activeName: 'first',

      tableData: [],
      count: 0,
      reqData: {},
    };
  },
  computed: {
    hasShowPage () {
      return this.count > 10;
    },
  },
  created () {
    this.getTables();
  },
  methods: {
    async getTables () {
      let res = await service.fetchTable(this.reqData);
      this.tableData = res.data;
      this.count = res.total_count;
    },
    handleClick (tab, event) {
      if (tab.name === 'first') {
        this.reqData = {};
      } else {
        let startDay = 0;
        let endDay = 0;
        if (tab.name === 'second') {
          // 昨天
          startDay = 1;
          endDay = 0;
        } else {
          // 前天
          startDay = 2;
          endDay = 1;
        }
        let [startTime, endTime] = this.setReqDate(startDay, endDay);
        this.reqData = {
          start_time: startTime,
          end_time: endTime,
        };
      }
      this.getTables();
    },
    setReqDate (startDay, endDay) {
      let myDate = new Date();
      myDate.setHours(0);
      myDate.setMinutes(0);
      myDate.setSeconds(0);
      myDate.setMilliseconds(0);
      myDate.setDate(new Date().getDate() - startDay);
      let startTime = Math.round(new Date(myDate).getTime() / 1000);

      myDate.setDate(new Date().getDate() - endDay);
      let endTime = Math.round(new Date(myDate).getTime() / 1000);

      return [startTime, endTime];
    },
    handleCurrentChange (val) {
      this.reqData = Object.assign({}, this.reqData, {
        page: val - 1,
      });
      this.getTables();
    },
  },
  components: {
    Table,
  },
};
</script>

<style lang='scss' scoped>
.el-pagination {
  text-align: right;
  margin-top: 20px;
}
</style>
