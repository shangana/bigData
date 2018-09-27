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
    <Message :visiCount="visiCount" :ip="ip" :sumCount="sumCount"></Message>
  </section>
</template>

<script>
import Message from '@/components/Message';
export default {
  data () {
    return {
      activeName: 'first',

      // 来访次数
      visiCount: 100,
      // IP
      ip: 123123,
      // 站内总浏览数
      sumCount: 200,
    };
  },
  components: {
    Message,
  },
};
</script>

<style>

</style>
