<template>
  <el-table
    :data="tableData"
    border
    style="width: 100%">
    <el-table-column
      prop="date"
      label="名称"
      width="180">
    </el-table-column>
    <el-table-column
      prop="name"
      label="浏览次数"
      width="180">
    </el-table-column>
    <el-table-column
      prop="address"
      label="占比">
    </el-table-column>
    <el-table-column
      prop="ip"
      label="IP">
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
