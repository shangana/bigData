<template>
  <div class="container">
    <div class="session">
      <p>IP</p>
      <p>{{ip}}</p>
    </div>
    <div class="session">
      <p>站内总浏览数</p>
      <p>{{sumCount}}</p>
    </div>
    <div class="clear"></div>
  </div>
</template>

<script>
export default {
  props: {
    ip: {
      type: Number,
    },
    sumCount: {
      type: Number,
    },
  },
  data () {
    return {
    };
  },
  components: {
  },
};
</script>

<style lang="scss" scope>
.container {

  .session {
    float: left;
    width: 47%;
    border: 1px solid #e4e4e4;
    padding: 10px;
    text-align: center;
    line-height: 26px;
  }
}
</style>
