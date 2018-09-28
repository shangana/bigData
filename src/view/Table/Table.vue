<template>
  <el-table
    :data="tableData"
    border
    style="width: 100%">
    <el-table-column
      prop="access_time"
      label="浏览时间"
      width="180">
    </el-table-column>
    <el-table-column
      prop="reference_url"
      label="页面来源"
      width="180">
    </el-table-column>
    <el-table-column
      prop="access_url"
      label="受访">
    </el-table-column>
    <el-table-column
      prop="ip_address"
      label="IP">
    </el-table-column>
    <el-table-column
      prop="address"
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
