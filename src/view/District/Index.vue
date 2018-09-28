<template>
  <section class="sesopnw">
    <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
      <el-tab-pane label="今天" name="first">
        <Table class="tables" :tableData="tableData"></Table>
      </el-tab-pane>
      <el-tab-pane label="昨天" name="second">
        <Table class="tables" :tableData="tableData"></Table>
      </el-tab-pane>
      <el-tab-pane label="最近7日" name="third">
        <Table class="tables" :tableData="tableData"></Table>
      </el-tab-pane>
      <el-tab-pane label="最近30日" name="four">
        <Table class="tables" :tableData="tableData"></Table>
      </el-tab-pane>
    </el-tabs>
    <Echar></Echar>
  </section>
</template>

<script>
import Table from './Table';
import Echar from './Echar';
export default {
  data () {
    return {
      activeName: 'first',

      tableData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄',
        ip: '255.255.255.255',
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄',
        ip: '255.255.255.255',
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄',
        ip: '255.255.255.255',
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄',
        ip: '255.255.255.255',
      }],
    };
  },
  methods: {
    handleClick (tab, event) {
      console.log(tab, event);
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
