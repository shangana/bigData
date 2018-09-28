<template>
  <section>
    <el-tabs v-model="activeName" type="card">
      <el-tab-pane label="今天" name="first">
      </el-tab-pane>
      <el-tab-pane label="昨天" name="second">
      </el-tab-pane>
      <el-tab-pane label="最近7日" name="third">
      </el-tab-pane>
      <el-tab-pane label="最近30日" name="four">
      </el-tab-pane>
    </el-tabs>
    <Message :ip="ip" :sumCount="sumCount"></Message>
    <Echar></Echar>
  </section>
</template>

<script>
import Message from '@/components/Message';
import Echar from '@/components/Echar';
export default {
  data () {
    return {
      activeName: 'first',

      // IP
      ip: 123123,
      // 站内总浏览数
      sumCount: 200,
    };
  },
  components: {
    Message, Echar,
  },
};
</script>

<style>

</style>
