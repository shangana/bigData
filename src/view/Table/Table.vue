<template>
  <el-table
    :data="tableData"
    border
    style="width: 100%">
    <el-table-column
      prop="date"
      label="浏览时间"
      width="180">
    </el-table-column>
    <el-table-column
      prop="name"
      label="页面来源"
      width="180">
    </el-table-column>
    <el-table-column
      prop="address"
      label="受访">
    </el-table-column>
    <el-table-column
      prop="ip"
      label="IP">
    </el-table-column>
    <el-table-column
      prop="add"
      label="地区">
    </el-table-column>
  </el-table>
</template>

<script>
export default {
  props: {
    tableData: {
      type: Array,
    },
  },
  data () {
    return {
    };
  },
  methods: {
  },
};
</script>

<style lang='scss' scoped>

</style>
