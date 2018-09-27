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
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :page-size="100"
      layout="prev, pager, next, jumper"
      :total="1000">
    </el-pagination>
  </section>
</template>

<script>
import Table from './Table';
export default {
  data () {
    return {
      activeName: 'first',

      tableData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄',
        ip: '255.255.255.255',
        add: '广东省',
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄',
        ip: '255.255.255.255',
        add: '广东省',
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄',
        ip: '255.255.255.255',
        add: '广东省',
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄',
        ip: '255.255.255.255',
        add: '广东省',
      }],
    };
  },
  methods: {
    handleClick (tab, event) {
      console.log(tab, event);
    },
    handleSizeChange (val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange (val) {
      console.log(`当前页: ${val}`);
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
